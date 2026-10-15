const CONTACT = {
  name: "Osman Adam Ali",
  business: "OSMANCOM",
  phone: "+966509967336",
  email: "osmanalimo92@gmail.com",
  whatsapp: "966509967336"
};

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  mainNav.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

window.matchMedia("(min-width: 641px)").addEventListener("change", () => setMenuOpen(false));

const coastalGallery = document.querySelector("#coastal-gallery");

document.querySelectorAll("[data-coastal-gallery-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    coastalGallery.scrollBy({
      left: Number(button.dataset.coastalGalleryDirection) * coastalGallery.clientWidth * 0.8,
      behavior: reduceMotion ? "instant" : "smooth"
    });
  });
});

const soundToggle = document.querySelector("#coastal-sound-toggle");
const soundNote = document.querySelector("#coastal-sound-note");
let coastalAudio = null;

function updateSoundControl(isPlaying) {
  soundToggle.setAttribute("aria-pressed", String(isPlaying));
  soundToggle.setAttribute(
    "aria-label",
    isPlaying ? "Turn off ocean waves, birds and ambient music" : "Play gentle ocean waves, birds and soft ambient music"
  );
  soundToggle.querySelector("[data-sound-label]").textContent = isPlaying
    ? "Turn sounds off"
    : "Play ocean sounds";
}

async function startCoastalAudio() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    throw new Error("Web Audio is not supported by this browser.");
  }

  const context = new AudioContextConstructor();
  try {
    await context.resume();
    const master = context.createGain();
    master.gain.value = 0.35;
    master.connect(context.destination);

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
    const noise = noiseBuffer.getChannelData(0);
    for (let index = 0; index < noise.length; index += 1) {
      noise[index] = Math.random() * 2 - 1;
    }

    const waves = context.createBufferSource();
    waves.buffer = noiseBuffer;
    waves.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 620;
    const waveGain = context.createGain();
    waveGain.gain.value = 0.12;
    waves.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(master);
    waves.start();

    const swell = context.createOscillator();
    const swellDepth = context.createGain();
    swell.frequency.value = 0.08;
    swellDepth.gain.value = 0.065;
    swell.connect(swellDepth);
    swellDepth.connect(waveGain.gain);
    swell.start();

    [196, 246.94, 293.66].forEach((frequency) => {
      const note = context.createOscillator();
      const noteGain = context.createGain();
      note.type = "sine";
      note.frequency.value = frequency;
      noteGain.gain.value = 0.008;
      note.connect(noteGain);
      noteGain.connect(master);
      note.start();
    });

    const melody = [392, 329.63, 293.66, 246.94, 293.66, 329.63];
    let melodyIndex = 0;
    const playAmbientNote = () => {
      if (context.state !== "running") return;
      const note = context.createOscillator();
      const noteGain = context.createGain();
      const now = context.currentTime;
      note.type = "sine";
      note.frequency.value = melody[melodyIndex];
      melodyIndex = (melodyIndex + 1) % melody.length;
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
      note.connect(noteGain);
      noteGain.connect(master);
      note.start(now);
      note.stop(now + 1.9);
    };
    playAmbientNote();
    const melodyInterval = window.setInterval(playAmbientNote, 2200);

    const birdTimeouts = new Set();
    const chirp = () => {
      if (context.state !== "running") return;
      const bird = context.createOscillator();
      const birdGain = context.createGain();
      const now = context.currentTime;
      const pitch = 1700 + Math.random() * 600;
      bird.type = "sine";
      bird.frequency.setValueAtTime(pitch, now);
      bird.frequency.exponentialRampToValueAtTime(pitch * 1.4, now + 0.12);
      bird.frequency.exponentialRampToValueAtTime(pitch * 0.8, now + 0.28);
      birdGain.gain.setValueAtTime(0.0001, now);
      birdGain.gain.exponentialRampToValueAtTime(0.018, now + 0.04);
      birdGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      bird.connect(birdGain);
      birdGain.connect(master);
      bird.start(now);
      bird.stop(now + 0.31);
    };
    const queueChirp = (delay) => {
      const timeout = window.setTimeout(() => {
        birdTimeouts.delete(timeout);
        if (coastalAudio?.context !== context) return;
        chirp();
        if (Math.random() > 0.55) queueChirp(380);
      }, delay);
      birdTimeouts.add(timeout);
    };
    const birdInterval = window.setInterval(() => queueChirp(0), 7000);

    coastalAudio = { context, birdInterval, birdTimeouts, melodyInterval };
    queueChirp(900);
  } catch (error) {
    await context.close();
    throw error;
  }
}

async function stopCoastalAudio() {
  if (!coastalAudio) return;
  const audio = coastalAudio;
  coastalAudio = null;
  window.clearInterval(audio.birdInterval);
  window.clearInterval(audio.melodyInterval);
  audio.birdTimeouts.forEach((timeout) => window.clearTimeout(timeout));
  await audio.context.close();
}

soundToggle.addEventListener("click", async () => {
  soundToggle.disabled = true;
  try {
    if (coastalAudio) {
      await stopCoastalAudio();
      soundNote.textContent = "Ocean sounds are off.";
    } else {
      await startCoastalAudio();
      soundNote.textContent = "Playing gentle ocean waves, birds and soft ambient music.";
    }
    updateSoundControl(Boolean(coastalAudio));
  } catch (error) {
    console.error("Could not change the coastal ambience.", error);
    soundNote.textContent = "Sound could not start in this browser. Please check your audio settings and try again.";
  } finally {
    soundToggle.disabled = false;
  }
});

const serviceSelect = document.querySelector("#project-form [name='service']");
document.querySelectorAll("[data-service-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const service = link.dataset.serviceLink;
    const matchingOption = Array.from(serviceSelect.options).find(
      (option) => option.value === service || option.textContent.trim() === service
    );
    if (matchingOption) serviceSelect.value = matchingOption.value;
  });
});

const packageSelect = document.querySelector("#package-select");
const packageSelection = document.querySelector("#package-selection");

function updatePackageSelection() {
  const option = packageSelect.selectedOptions[0];
  packageSelection.hidden = !packageSelect.value;
  packageSelection.textContent = packageSelect.value === "custom"
    ? "Custom project — price to be discussed."
    : option?.textContent.trim() ?? "";
}

document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    packageSelect.value = link.dataset.package;
    updatePackageSelection();
  });
});

packageSelect.addEventListener("change", updatePackageSelection);

function escapeVcard(value) {
  return value.replace(/([,;\\])/g, "\\$1").replace(/\r?\n/g, "\\n");
}

function renderContactQr() {
  const target = document.querySelector("#contact-qr");

  try {
    if (typeof window.qrcode !== "function") {
      throw new Error("The locally hosted QR code generator did not load.");
    }

    const contactCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Ali;Osman Adam;;;",
      `FN:${escapeVcard(CONTACT.name)}`,
      `ORG:${escapeVcard(CONTACT.business)}`,
      `TEL;TYPE=CELL:${CONTACT.phone}`,
      `EMAIL;TYPE=INTERNET:${CONTACT.email}`,
      "END:VCARD"
    ].join("\r\n");

    const code = window.qrcode(0, "H");
    code.addData(contactCard, "Byte");
    code.make();
    target.innerHTML = code.createSvgTag(6, 4, "OSMANCOM contact card", "Scan to save OSMANCOM contact details");
    const svg = target.querySelector("svg");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("aria-hidden", "true");
  } catch (error) {
    console.error("Could not generate the contact QR code.", error);
    target.classList.add("qr-error");
    target.removeAttribute("role");
    target.setAttribute("aria-label", "QR code unavailable; contact OSMANCOM through WhatsApp.");
    const fallback = document.createElement("a");
    fallback.href = `https://wa.me/${CONTACT.whatsapp}`;
    fallback.textContent = "Contact OSMANCOM on WhatsApp";
    target.replaceChildren(fallback);
  }
}

renderContactQr();

document.querySelector("#project-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    "Hello Osman, I’d like to discuss a creative project.",
    "",
    `Name: ${data.get("name")}`,
    `Business or organization: ${data.get("business") || "Not provided"}`,
    `Service: ${data.get("service")}`,
    `Package: ${packageSelect.selectedOptions[0].textContent.trim()}`,
    "",
    "Project details:",
    data.get("brief")
  ].join("\n");
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const status = document.querySelector("#project-form-status");
  const whatsappLink = document.querySelector("#project-whatsapp-link");

  whatsappLink.href = url;
  status.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});
