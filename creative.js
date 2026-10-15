const CONTACT = {
  name: "Osman Adam Ali",
  business: "OSMANCOM",
  phone: "+966509967336",
  email: "osmanalimo92@gmail.com",
  whatsapp: "966509967336"
};

const arabicContent = {
  ".skip-link": ["انتقل إلى المحتوى"],
  "#main-nav a": ["الخدمات", "الأسعار", "اتصل بنا"],
  ".language-toggle": ["English"],
  ".menu-toggle-label": ["القائمة"],
  ".hero-copy .eyebrow": ["<span class=\"eyebrow-star\" aria-hidden=\"true\">✳</span> شريكك الإبداعي المستقل <span class=\"eyebrow-divider\"></span> السعودية والعالم"],
  ".hero-copy h1": ["اجعل خطوتك<br>القادمة <span>لافتة ومميزة.</span>"],
  ".hero-description": ["حلول إبداعية ذكية للشركات الطموحة، من تصميم المواقع والهويات البصرية إلى التسويق الذي يجذب الأنظار."],
  ".hero-actions .button-gold": ["اطلب عرضاً لمشروعك <span aria-hidden=\"true\">↗</span>"],
  ".hero-actions .button-outline": ["اكتشف الخدمات"],
  ".hero-availability": ["<span class=\"availability-dot\"></span> نستقبل طلبات المشاريع الجديدة"],
  ".hero-bottom > span:not(.hero-bottom-line)": ["تصميم يجذب الانتباه", "اهتمام يصنع الثقة"],
  ".hero-bottom > a": ["انتقل إلى الخدمات"],
  ".tourism-cover-content > .eyebrow": ["قليل من أشعة الشمس"],
  ".tourism-cover h2": ["اكتشف وجهتك<br><span>الجميلة القادمة.</span>"],
  ".tourism-cover-content > p:not(.eyebrow, .sound-note, .sound-credit)": ["من التذاكر والإقامة المريحة إلى المرشدين المحليين والمغامرات العائلية، لنجعل الرحلة مميزة بقدر جمال وجهتها."],
  ".tourism-cover-actions .button-tour": ["خطط لرحلتك <span aria-hidden=\"true\">↗</span>"],
  ".sound-volume > span": ["مستوى الصوت"],
  "#coastal-sound-note": ["تسجيلات حقيقية للأمواج وطيور النورس. يبدأ الصوت فقط عند اختيارك."],
  ".sound-credit": ["الصوت: earthcalling عبر ويكيميديا كومنز، ضمن الملكية العامة — <a href=\"https://commons.wikimedia.org/wiki/File:On_a_pebble_beach.ogg\" target=\"_blank\" rel=\"noopener noreferrer\">الأمواج</a> و<a href=\"https://commons.wikimedia.org/wiki/File:Gulls_above_the_street_at_dawn.ogg\" target=\"_blank\" rel=\"noopener noreferrer\">طيور النورس</a>."],
  ".tourism-heading .eyebrow": ["إلهام للسفر"],
  ".tourism-heading h2": ["افسح المجال <span>لمكان جديد.</span>"],
  ".tourism-heading .section-intro": ["أفكار لوجهتك القادمة. أخبرنا بما ترغب به وسنساعدك في التخطيط للتفاصيل."],
  ".tour-gallery-hint": ["لمحة عمّا ينتظرك"],
  ".tour-photo-card img": [
    "ساحل هادئ بمياه فيروزية عند الغروب",
    "فندق منتجع تحيط به أشجار النخيل",
    "مسافرون يكتشفون وجهة محلية خلابة",
    "شاطئ مشمس ونخيل وقارب شراعي صغير",
    "طائر نورس حقيقي يحلّق فوق المحيط في غاروبابا"
  ],
  ".tour-photo-card figcaption": [
    "سواحل مضيئة",
    "إقامات مريحة",
    "اكتشافات بصحبة مرشد",
    "المياه المفتوحة وذكريات جديدة",
    "طيور البحر فوق المياه · <a href=\"https://commons.wikimedia.org/wiki/File:Seagull_flying_over_the_sea.jpg\" target=\"_blank\" rel=\"noopener noreferrer\">الصورة: Heylenny، بترخيص CC BY-SA 4.0</a>"
  ],
  ".tourism-services-heading .eyebrow": ["السفر أصبح أسهل"],
  ".tourism-services-heading h3": ["خدمات سياحية لرحلة أكثر سهولة."],
  ".tourism-services-heading > p:last-child": ["أخبرنا بوجهتك ومواعيدك ونوع الرحلة التي تفضلها. نساعدك في استكشاف الخيارات وتنسيق التفاصيل."],
  ".tourism-service-card h4": ["تخطيط الرحلات", "الرحلات والتنقل", "الإقامة والتجارب", "دعم مخصص"],
  ".tourism-service-card p": [
    "خطط لرحلتك بما يناسب جدولك واهتماماتك وميزانيتك، مع أفكار عملية للأنشطة والأماكن.",
    "استكشف خيارات السفر المناسبة ووسائل النقل المحلية للتنقل بين الوجهات.",
    "قارن خيارات الإقامة والجولات والأنشطة للمسافرين بمفردهم أو للأزواج والعائلات.",
    "احصل على المساعدة في تنظيم التفاصيل والخطوات لرحلة تناسب أسلوبك."
  ],
  ".tourism-services-cta": ["استفسر عن خدمات السفر <span aria-hidden=\"true\">↗</span>"],
  ".tourism-services-note": ["يتم تأكيد خيارات السفر والتوافر والتكاليف معك قبل إجراء أي ترتيبات."],
  ".tourism-contact-link": ["لِنخطط لرحلتك <span aria-hidden=\"true\">↗</span>"],
  ".services-section .section-heading .eyebrow": ["كيف أستطيع مساعدتك"],
  ".services-section h2": ["أفكار مدروسة.<br><span>تنفيذ جميل.</span>"],
  ".services-section .section-intro": ["حلول إبداعية مرنة تساعدك على التميز وكسب الثقة ودفع أعمالك إلى الأمام."],
  ".service-card h3": ["تصميم المواقع", "التصميم الجرافيكي والهوية", "التسويق", "التصوير", "الاستشارات"],
  ".service-card > p": [
    "تجارب رقمية واضحة وواثقة تحوّل انطباعك الأول إلى سبب للتواصل.",
    "هويات بصرية ومواد للحملات تجعل أعمالك مميزة بأسلوبها الخاص.",
    "حملات إبداعية عملية برسالة واضحة وجمهور محدد وهدف يشجع على التفاعل.",
    "صور مدروسة تُظهر منتجاتك وأفكارك وفريقك بأفضل صورة.",
    "رؤية جديدة وخطوات عملية لموقعك أو هويتك أو تحدياتك التسويقية."
  ],
  ".service-link": ["ناقش تصميم موقعك <span>↗</span>", "طوّر هويتك <span>↗</span>", "خطط لحملة <span>↗</span>", "خطط لجلسة تصوير <span>↗</span>", "احجز استشارة <span>↗</span>"],
  ".services-note": ["<span>✳</span> اختر إحدى الباقات أدناه أو تواصل معنا لمناقشة مشروع خاص."],
  ".pricing-heading .eyebrow": ["أسعار بداية واضحة"],
  ".pricing-heading h2": ["اختر <span>خطوتك القادمة.</span>"],
  ".pricing-heading .section-intro": ["اختر مستوى الدعم المناسب لمشروعك. نؤكد معك تفاصيل كل طلب قبل بدء العمل."],
  ".pricing-number": ["٠١ / رقمي", "٠٢ / إرشاد", "٠٣ / دعم المهام", "٠٤ / تنفيذ متكامل"],
  ".pricing-card h3": ["اشتراك موقع إلكتروني", "استشارات واستفسارات المشاريع", "طلب موظفين لمهام محددة", "تنفيذ المشروع وإتمامه"],
  ".pricing-card > p": [
    "اشتراك لتوفير حضور احترافي لأعمالك عبر الإنترنت.",
    "ناقش مشروعك واطرح أسئلتك واستكشف خطوات عملية للمضي قدماً.",
    "اطلب دعم فريق لإنجاز مهام محددة في مشروعك.",
    "اطلب فريقاً لتنفيذ مشروعك وإنجاز مهامه."
  ],
  ".pricing-amount > span": ["دولار أمريكي", "دولار أمريكي", "دولار أمريكي", "دولار أمريكي"],
  ".pricing-badge": ["دعم كامل للمشروع"],
  ".pricing-link": ["اختر هذه الخدمة <span aria-hidden=\"true\">↗</span>", "اختر هذه الخدمة <span aria-hidden=\"true\">↗</span>", "اختر هذه الخدمة <span aria-hidden=\"true\">↗</span>", "اختر هذه الخدمة <span aria-hidden=\"true\">↗</span>"],
  ".pricing-note": ["<span aria-hidden=\"true\">✳</span> الأسعار بالدولار الأمريكي كما هي معروضة. يرجى تأكيد مدة الاشتراك والتسليمات ونطاق المشروع عند الاستفسار. لا تُحصّل أي مدفوعات عبر هذا الموقع."],
  ".work-heading .eyebrow": ["لمحة عمّا يمكن تحقيقه"],
  ".work-heading h2": ["أفكار <span>قابلة للنمو.</span>"],
  ".work-heading .section-intro": ["نماذج إبداعية توضح كيف تحكي الصور والأفكار قصة أعمالك."],
  ".concept-note": ["<span aria-hidden=\"true\">✳</span> نماذج تصورية للتوجه الإبداعي، وليست أعمالاً منفذة لعملاء."],
  ".work-image-web": ["مناقشة نموذج تصميم موقع إلكتروني"],
  ".work-image-brand": ["مناقشة نموذج تصميم الهوية والعلامة التجارية"],
  ".work-image-photo": ["مناقشة نموذج للتصوير"],
  ".work-image-marketing": ["مناقشة نموذج حملة تسويقية"],
  ".work-tag": ["تصميم مواقع · نموذج تصوري", "تصميم هوية · نموذج تصوري", "تصوير · نموذج تصوري", "تسويق · نموذج تصوري"],
  ".work-caption p": ["حضور رقمي", "الهوية البصرية", "سرد بصري للمنتجات", "توجه الحملة"],
  ".work-caption h3": ["أفكار واضحة. وتجربة واثقة.", "هوية تعبّر عنك.", "كل تفصيل في أفضل صورة.", "فكرة مميزة تصل إلى كل مكان."],
  ".work-cta > p": ["هل لديك فكرة لمشروع؟ لنجعلها واقعاً."],
  ".work-cta .text-link": ["لنتحدث عن مشروعك <span aria-hidden=\"true\">↗</span>"],
  ".about-photo-wrap img": ["عثمان آدم علي"],
  ".about-photo-caption": ["الشخص وراء OSMANCOM"],
  ".portrait-frame img": ["عثمان آدم علي، استشاري خدمات إبداعية"],
  ".work-image-web img": ["تحليلات موقع إلكتروني وواجهة مشروع رقمي"],
  ".work-image-brand img": ["عمل فني إبداعي تجريدي وملون"],
  ".work-image-photo img": ["تصوير أزياء ومنتجات بتنسيق أنيق"],
  ".work-image-marketing img": ["فكرة لحملة تسويقية إبداعية"],
  ".visual-label.label-top > span:last-child": ["استراتيجية مدروسة<br><strong>تنفيذ إبداعي</strong>"],
  ".visual-label.label-bottom > span:last-child": ["شريك واحد.<br><strong>من الفكرة إلى الأثر.</strong>"],
  ".contact-phone": ["+٩٦٦ ٥٠ ٩٩٦ ٧٣٣٦ <span aria-hidden=\"true\">↗</span>"],
  ".contact-email": ["<span aria-hidden=\"true\">✉</span> osmanalimo92@gmail.com"],
  ".qr-photo": [""],
  ".about-photo-caption": ["الشخص وراء OSMANCOM"],
  ".about-copy .eyebrow": ["نبذة عني"],
  ".about-copy h2": ["العمل المميز يبدأ<br><span>بحوار مميز.</span>"],
  ".about-copy > p:not(.eyebrow)": [
    "أنا عثمان آدم علي، شريك إبداعي مستقل للشركات التي تسعى إلى الظهور بوضوح وثقة.",
    "من الفكرة الأولى إلى أدق التفاصيل، أجمع بين تصميم المواقع والهويات والتسويق والتصوير والاستشارات العملية بما يناسب احتياجات مشروعك."
  ],
  ".about-copy > .button": ["أخبرني عن مشروعك <span aria-hidden=\"true\">↗</span>"],
  ".about-values b": ["أستمع أولاً", "أفكر بعناية", "أصنع ما لا يُنسى"],
  ".contact-heading .eyebrow": ["خطوتك القادمة تبدأ هنا"],
  ".contact-heading h2": ["لنصنع معاً ما<br><span>يستحق الحديث عنه.</span>"],
  ".contact-heading .section-intro": ["اختر الخدمة والباقة، وأخبرنا بما تحتاجه. سيُضاف السعر إلى استفسارك عبر واتساب."],
  ".form-topline span": ["استفسار عن مشروع", "٠١ — ٠٤"],
  ".package-selection": ["الباقة المختارة — السعر حسب الاتفاق."],
  ".form-submit": ["أرسل استفسارك عبر واتساب <span aria-hidden=\"true\">↗</span>"],
  ".form-disclaimer": ["سيُفتح واتساب مع استفسارك جاهزاً للمراجعة والإرسال. لا يتم تحصيل أي مدفوعات عبر هذا النموذج."],
  "#project-form-status p": ["استفسارك جاهز. تابع إلى واتساب لمراجعته وإرساله."],
  "#project-whatsapp-link": ["افتح واتساب لإرسال استفسارك"],
  ".contact-details .eyebrow": ["للتواصل مباشرة"],
  ".contact-details h3": ["عثمان آدم علي"],
  ".contact-whatsapp": ["<span class=\"whatsapp-dot\" aria-hidden=\"true\">↗</span> راسلني عبر واتساب"],
  ".contact-location": ["<span aria-hidden=\"true\">✳</span> السعودية · متاح للعمل حول العالم"],
  ".qr-caption": ["امسح الرمز<br>لحفظ بيانات OSMANCOM"],
  ".footer-main > p": ["عمل إبداعي هادف. ننجزه معاً."],
  ".footer-top": ["العودة إلى الأعلى ↑"],
  ".footer-bottom > span": ["© ٢٠٢٦ OSMANCOM · عثمان آدم علي", "تصميم المواقع · الهوية · التسويق · التصوير"]
};

const arabicAttributes = {
  ".menu-toggle": { "aria-label": "افتح قائمة التنقل" },
  "#main-nav": { "aria-label": "التنقل الرئيسي" },
  ".site-header > .brand": { "aria-label": "الصفحة الرئيسية لـ OSMANCOM" },
  "#coastal-gallery": { "aria-label": "معرض صور لإلهام السفر" },
  "[data-coastal-gallery-direction='-1']": { "aria-label": "عرض صور السفر السابقة" },
  "[data-coastal-gallery-direction='1']": { "aria-label": "عرض صور السفر التالية" },
  ".work-image-web": { "aria-label": "مناقشة نموذج تصميم موقع إلكتروني" },
  ".work-image-brand": { "aria-label": "مناقشة نموذج تصميم الهوية والعلامة التجارية" },
  ".work-image-photo": { "aria-label": "مناقشة نموذج للتصوير" },
  ".work-image-marketing": { "aria-label": "مناقشة نموذج حملة تسويقية" },
  "#contact-qr": { "aria-label": "امسح الرمز لحفظ بيانات التواصل مع OSMANCOM" },
  ".about-photo-wrap img": { alt: "عثمان آدم علي" }
};

const arabicFormLabels = [
  "اسمك",
  "اسم الشركة أو المؤسسة",
  "الخدمة التي تحتاج إليها",
  "الباقة",
  "ما الذي ترغب في إنجازه؟"
];

const arabicServiceOptions = [
  "اختر الخدمة",
  "تصميم المواقع",
  "التصميم الجرافيكي والهوية",
  "التسويق",
  "التصوير",
  "الاستشارات",
  "مجموعة من الخدمات",
  "السفر والسياحة"
];

const arabicPackageOptions = [
  "اختر باقة الخدمة",
  "اشتراك موقع إلكتروني — ٥٬٠٠٠ دولار أمريكي",
  "استشارات واستفسارات المشاريع — ٤٬٠٠٠ دولار أمريكي",
  "طلب موظفين لمهام محددة — ١٬٠٠٠ دولار أمريكي",
  "تنفيذ المشروع وإتمامه — ١٠٬٠٠٠ دولار أمريكي",
  "خدمة أخرى / ناقش مشروعاً خاصاً"
];

const arabicPlaceholders = [
  ["#project-form [name='name']", "كيف تحب أن أخاطبك؟"],
  ["#project-form [name='business']", "إن وُجد"],
  ["#project-form [name='brief']", "أخبرنا عن أهدافك أو موعدك أو التحدي الذي ترغب في حله…"]
];

let currentLanguage = "en";

function applyArabicLanguage(isArabic) {
  currentLanguage = isArabic ? "ar" : "en";
  const toggle = document.querySelector("#language-toggle");
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = isArabic ? "عثمان كوم — خدمات إبداعية للشركات الطموحة" : "OSMANCOM — Creative services for ambitious businesses";
  document.querySelector('meta[name="description"]').content = isArabic
    ? "تقدم OSMANCOM خدمات إبداعية وسياحية، من تصميم المواقع والهويات إلى التخطيط للرحلات."
    : "OSMANCOM brings creative business support and memorable travel planning together, from website and brand design to tickets, stays, and guided trips.";
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  document.querySelector('meta[name="twitter:title"]').content = document.title;
  document.querySelector('meta[name="twitter:description"]').content = document.querySelector('meta[name="description"]').content;
  toggle.textContent = isArabic ? "English" : "العربية";
  toggle.lang = isArabic ? "en" : "ar";
  toggle.setAttribute("aria-label", isArabic ? "Switch the website to English" : "عرض الموقع باللغة العربية");

  if (isArabic) {
    Object.entries(arabicContent).forEach(([selector, translations]) => {
      const elements = document.querySelectorAll(selector);
      if (elements.length !== translations.length) {
        console.error(`Arabic translation count mismatch for "${selector}".`);
        return;
      }
      elements.forEach((element, index) => {
        if (element instanceof HTMLImageElement) {
          element.alt = translations[index];
        } else if (element instanceof HTMLAnchorElement && element.hasAttribute("aria-label")) {
          element.setAttribute("aria-label", translations[index]);
        } else {
          element.innerHTML = translations[index];
        }
      });
    });

    Object.entries(arabicAttributes).forEach(([selector, attributes]) => {
      document.querySelectorAll(selector).forEach((element) => {
        Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
      });
    });

    document.querySelectorAll("#project-form .field-label").forEach((label, index) => {
      const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (textNode) textNode.textContent = ` ${arabicFormLabels[index]} `;
    });
    document.querySelectorAll("#project-form [name='service'] option").forEach((option, index) => {
      option.textContent = arabicServiceOptions[index];
    });
    document.querySelectorAll("#package-select option").forEach((option, index) => {
      option.textContent = arabicPackageOptions[index];
    });
    arabicPlaceholders.forEach(([selector, placeholder]) => {
      document.querySelector(selector).placeholder = placeholder;
    });
  } else {
    window.location.reload();
    return;
  }

  soundToggle.setAttribute("aria-label", isArabic ? "تشغيل تسجيلات الأمواج وطيور النورس" : "Play recorded surf and seagull sounds");
  if (!coastalAudioPlaying) {
    soundToggle.querySelector("[data-sound-label]").textContent = isArabic ? "تشغيل أصوات البحر والطيور" : "Play ocean sounds";
    soundNote.textContent = isArabic
      ? "تسجيلات حقيقية للأمواج وطيور النورس. يبدأ الصوت فقط عند اختيارك."
      : "Real recordings of surf and seaside gulls. Sound starts only when you choose to play it.";
  } else {
    soundToggle.querySelector("[data-sound-label]").textContent = isArabic ? "إيقاف أصوات البحر" : "Stop coastal sounds";
    soundNote.textContent = isArabic ? "يتم تشغيل تسجيلات حقيقية للأمواج وطيور النورس." : "Playing real surf and seaside gull recordings.";
  }
  const packageOption = packageSelect.selectedOptions[0];
  if (packageSelect.value) {
    packageSelection.textContent = packageOption.textContent.trim();
  }
}

try {
  currentLanguage = localStorage.getItem("osmancom-creative-language") === "ar" ? "ar" : "en";
} catch (error) {
  console.error("Could not read the saved language preference.", error);
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

document.querySelector("#language-toggle").addEventListener("click", () => {
  const isArabic = currentLanguage !== "ar";
  try {
    localStorage.setItem("osmancom-creative-language", isArabic ? "ar" : "en");
  } catch (error) {
    console.error("Could not save the language preference.", error);
  }
  if (isArabic) {
    applyArabicLanguage(true);
  } else {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    window.location.reload();
  }
});

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", currentLanguage === "ar"
    ? isOpen ? "إغلاق قائمة التنقل" : "افتح قائمة التنقل"
    : isOpen ? "Close navigation menu" : "Open navigation menu");
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
    currentLanguage === "ar"
      ? isPlaying ? "إيقاف تسجيلات الأمواج وطيور النورس" : "تشغيل تسجيلات الأمواج وطيور النورس"
      : isPlaying ? "Stop recorded surf and seagull sounds" : "Play recorded surf and seagull sounds"
  );
  soundToggle.querySelector("[data-sound-label]").textContent = currentLanguage === "ar"
    ? isPlaying ? "إيقاف أصوات البحر" : "تشغيل أصوات البحر والطيور"
    : isPlaying ? "Stop coastal sounds" : "Play sea & bird sounds";
}

function updateCoastalVolume() {
  const volume = Number(soundVolume.value) / 100;
  coastalAudioTracks[0].volume = volume * 0.75;
  coastalAudioTracks[1].volume = volume * 0.55;
  const volumeLabel = currentLanguage === "ar"
    ? `${Number(soundVolume.value).toLocaleString("ar")}٪`
    : `${soundVolume.value}%`;
  soundVolumeValue.value = volumeLabel;
  soundVolumeValue.textContent = volumeLabel;
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
      soundNote.textContent = currentLanguage === "ar" ? "تم إيقاف تسجيلات البحر." : "Coastal recordings are off.";
    } else {
      await startCoastalAudio();
      soundNote.textContent = currentLanguage === "ar"
        ? "يتم تشغيل تسجيلات حقيقية للأمواج وطيور النورس."
        : "Playing real surf and seaside gull recordings.";
    }
    updateSoundControl(coastalAudioPlaying);
  } catch (error) {
    console.error("Could not play the coastal recordings.", error);
    soundNote.textContent = currentLanguage === "ar"
      ? "تعذر تحميل تسجيلات البحر. تحقق من اتصالك بالإنترنت ثم حاول مجدداً."
      : "The coastal recordings could not be loaded. Check your connection and try again.";
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
    ? currentLanguage === "ar" ? "مشروع مخصص — يتم الاتفاق على السعر." : "Custom project — price to be discussed."
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

if (currentLanguage === "ar") {
  applyArabicLanguage(true);
}

document.querySelector("#project-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const isArabic = currentLanguage === "ar";
  const services = isArabic ? {
    "Website design": "تصميم المواقع",
    "Graphic & brand design": "التصميم الجرافيكي والهوية",
    Marketing: "التسويق",
    Photography: "التصوير",
    Consulting: "الاستشارات",
    "A mix of services": "مجموعة من الخدمات",
    "Travel & tourism": "السفر والسياحة"
  } : {};
  const message = [
    isArabic ? "مرحباً عثمان، أرغب في مناقشة مشروع إبداعي." : "Hello Osman, I’d like to discuss a creative project.",
    "",
    `${isArabic ? "الاسم" : "Name"}: ${data.get("name")}`,
    `${isArabic ? "الشركة أو المؤسسة" : "Business or organization"}: ${data.get("business") || (isArabic ? "غير محدد" : "Not provided")}`,
    `${isArabic ? "الخدمة" : "Service"}: ${services[data.get("service")] || data.get("service")}`,
    `${isArabic ? "الباقة" : "Package"}: ${packageSelect.selectedOptions[0].textContent.trim()}`,
    "",
    isArabic ? "تفاصيل المشروع:" : "Project details:",
    data.get("brief")
  ].join("\n");
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const status = document.querySelector("#project-form-status");
  const whatsappLink = document.querySelector("#project-whatsapp-link");

  whatsappLink.href = url;
  status.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});
