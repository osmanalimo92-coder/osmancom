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
const soundVolume = document.querySelector("#coastal-sound-volume");
const soundVolumeValue = document.querySelector("#coastal-sound-volume-value");
const coastalAudioTracks = [
  document.querySelector("#coastal-waves-audio"),
  document.querySelector("#coastal-birds-audio")
];
let coastalAudioPlaying = false;

function updateSoundControl(isPlaying) {
  soundToggle.setAttribute("aria-pressed", String(isPlaying));
  soundToggle.setAttribute(
    "aria-label",
    isPlaying ? "Stop recorded surf and seagull sounds" : "Play recorded surf and seagull sounds"
  );
  soundToggle.querySelector("[data-sound-label]").textContent = isPlaying
    ? "Stop coastal sounds"
    : "Play sea & bird sounds";
}

function updateCoastalVolume() {
  const volume = Number(soundVolume.value) / 100;
  coastalAudioTracks[0].volume = volume * 0.75;
  coastalAudioTracks[1].volume = volume * 0.55;
  soundVolumeValue.value = `${soundVolume.value}%`;
  soundVolumeValue.textContent = `${soundVolume.value}%`;
}

async function startCoastalAudio() {
  const playback = coastalAudioTracks.map((track) => track.play());
  try {
    await Promise.all(playback);
  } catch (error) {
    coastalAudioTracks.forEach((track) => track.pause());
    throw error;
  }
  coastalAudioPlaying = true;
}

function stopCoastalAudio() {
  coastalAudioTracks.forEach((track) => {
    track.pause();
    track.currentTime = 0;
  });
  coastalAudioPlaying = false;
}

soundVolume.addEventListener("input", updateCoastalVolume);
updateCoastalVolume();

soundToggle.addEventListener("click", async () => {
  soundToggle.disabled = true;
  try {
    if (coastalAudioPlaying) {
      stopCoastalAudio();
      soundNote.textContent = "Coastal recordings are off.";
    } else {
      await startCoastalAudio();
      soundNote.textContent = "Playing real surf and seaside gull recordings.";
    }
    updateSoundControl(coastalAudioPlaying);
  } catch (error) {
    console.error("Could not play the coastal recordings.", error);
    soundNote.textContent = "The coastal recordings could not be loaded. Check your connection and try again.";
    updateSoundControl(false);
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
