const CONTACT = {
  name: "Osman Adam Ali",
  business: "OSMANCOM",
  phone: "+966509967336",
  email: "osmanalimo92@gmail.com",
  whatsapp: "966509967336"
};

const PACKAGES = {
  website: { name: "Website subscription", price: "SAR 5,000" },
  consultation: { name: "Project consultation & inquiries", price: "SAR 4,000" },
  staff: { name: "Request staff for specific tasks", price: "SAR 1,000" },
  execution: { name: "Project execution & completion", price: "SAR 10,000" },
  custom: { name: "Other / discuss a custom project", price: "To be discussed" }
};

const translations = {
  en: {
    "nav-services": "Services", "nav-work": "Selected work", "nav-about": "About", "nav-cta": "Start a project",
    "welcome-eyebrow": "A warm welcome", "welcome-title": "Business support that starts with listening",
    "welcome-lead": "Tell me where you want to go. I’ll help you find a clear, practical way forward.",
    "welcome-paragraph-one": "From promoting your business and translating documents to sourcing employment contracts and projects, you can get dependable support in one place.",
    "welcome-closing": "Have a question? Send a no-obligation enquiry and we’ll talk through what you need.",
    "hero-eyebrow": "Independent business services partner <span class=\"eyebrow-divider\"></span> Saudi Arabia &amp; worldwide",
    "hero-title": "Practical support<br>for your <span>next move.</span>",
    "hero-description": "Friendly, reliable support for your business — from advertising and translation to finding the right contracts and projects.",
    "hero-primary": "Tell me what you need", "hero-secondary": "View services", "hero-availability": "Taking enquiries for new projects",
    "portrait-alt": "Osman Adam Ali, business services consultant", "portrait-name": "Osman Adam Ali",
    "visual-strategy": "Clear advice<br><strong>Practical steps</strong>", "visual-partner": "One partner.<br><strong>Here to help.</strong>",
    "hero-foot-left": "HELP FOR YOUR BUSINESS", "hero-foot-right": "CLEAR. RELIABLE. PERSONAL.", "scroll-services": "Scroll to services",
    "services-eyebrow": "How I can help", "services-title": "One trusted partner.<br><span>Practical business support.</span>",
    "services-intro": "Practical services to help your business communicate clearly, reach customers, and move projects forward.",
    "service-web-title": "Website design", "service-web-description": "Clear, confident digital experiences that turn your first impression into a reason to get in touch.", "service-web-link": "Discuss your website",
    "service-brand-title": "Graphic &amp; brand design", "service-brand-description": "Distinctive visual identities and campaign assets that make your business feel unmistakably yours.", "service-brand-link": "Shape your brand",
    "service-marketing-title": "Advertising &amp; marketing for your business", "service-marketing-description": "Reach the right customers with clear advertising and practical marketing tailored to your business.", "service-marketing-link": "Promote your business",
    "service-translation-title": "Translation services", "service-translation-description": "Clear, careful translation to help your business communicate confidently across languages.", "service-translation-link": "Discuss translation",
    "service-sourcing-title": "Employment &amp; project sourcing", "service-sourcing-description": "Get support sourcing employment contracts and suitable projects for your business needs.", "service-sourcing-link": "Discuss what you need",
    "service-consulting-title": "Consulting", "service-consulting-description": "A fresh perspective and practical next steps for your website, brand, or business challenge.", "service-consulting-link": "Book a conversation",
    "service-general-title": "General services", "service-general-description": "Have a different requirement? Tell me what you need and we can discuss the right support.", "service-general-link": "Ask about your needs",
    "service-mix": "A mix of services", "services-note": "Choose a service package below, or get in touch about a custom project.",
    "pricing-eyebrow": "Straightforward starting prices", "pricing-title": "Choose your <span>next step.</span>",
    "pricing-intro": "Pick the level of support that suits your project. Every enquiry is confirmed with you before any work begins.",
    "pricing-type-web": "01 / DIGITAL", "package-website": "Website subscription", "pricing-description-web": "A subscription for a professional online presence for your business.",
    "pricing-type-consult": "02 / GUIDANCE", "package-consultation": "Project consultation &amp; inquiries", "pricing-description-consult": "Discuss your project, ask questions, and explore a practical way forward.",
    "pricing-type-staff": "03 / TASK SUPPORT", "package-staff": "Request staff for specific tasks", "pricing-description-staff": "Request staff support to complete specific tasks for your project.",
    "pricing-type-execution": "04 / END TO END", "package-execution": "Project execution &amp; completion", "pricing-description-execution": "Request a team to execute your project and complete its tasks.",
    "pricing-badge": "FULL PROJECT SUPPORT", "pricing-select": "Choose this service", "currency": "SAR",
    "pricing-note": "Prices are shown as provided. Confirm the website subscription term, deliverables, staffing, and project scope when enquiring. No payment is collected on this website.",
    "work-eyebrow": "Ideas in action", "work-title": "A little inspiration for <span>your next move.</span>",
    "work-intro": "Explore a few sample directions for clear communication, confident branding, and effective advertising.",
    "work-note": "Concept studies to show creative direction; not presented as commissioned client work.",
    "work-tag-web": "WEB DESIGN · CONCEPT", "work-category-web": "Digital presence", "work-title-web": "Clear ideas. Confident experience.",
    "work-label-web": "Discuss a website design concept",
    "work-tag-brand": "BRAND DESIGN · CONCEPT", "work-category-brand": "Brand identity", "work-title-brand": "A look all your own.",
    "work-label-brand": "Discuss a graphic and brand design concept",
    "work-tag-translation": "TRANSLATION · CONCEPT", "work-category-translation": "Translation services", "work-title-translation": "Words that travel clearly.",
    "work-label-translation": "Discuss translation services", "work-image-alt-translation": "Writing and documents prepared for translation",
    "work-tag-marketing": "MARKETING · CONCEPT", "work-category-marketing": "Campaign direction", "work-title-marketing": "One good idea. Everywhere it needs to be.",
    "work-label-marketing": "Discuss a marketing campaign concept",
    "work-cta": "Have a brief in mind? Let’s make it happen.", "work-cta-link": "Let’s talk about your project",
    "about-caption": "THE PERSON BEHIND OSMANCOM", "about-eyebrow": "A little about me",
    "about-title": "Good work starts<br>with a <span>good conversation.</span>",
    "about-description-one": "I’m Osman Adam Ali — an independent business services partner helping businesses move forward with clarity and confidence.",
    "about-description-two": "From the first idea to the final details, I bring website and brand design, advertising and marketing, translation, employment contract and project sourcing, and practical consulting together around your needs.",
    "about-cta": "Tell me what you’re building", "about-value-one": "Listen first", "about-value-two": "Think it through", "about-value-three": "Make it memorable",
    "contact-eyebrow": "Your next move starts here", "contact-title": "Let’s make something<br><span>worth talking about.</span>",
    "contact-intro": "Choose a service and package, share what you need, and send your enquiry directly on WhatsApp. No payment is collected here.",
    "quick-whatsapp": "Quick WhatsApp", "quick-whatsapp-label": "Start a WhatsApp conversation",
    "form-title": "PROJECT ENQUIRY", "form-step": "01 — 04", "form-name": "Your name", "form-business": "Business or organization",
    "form-service": "Service you need", "form-service-option": "Choose a service", "form-package": "Service package",
    "form-package-option": "Choose a service package", "form-brief": "What would you like to make happen?",
    "form-submit": "Send project enquiry on WhatsApp",
    "form-disclaimer": "This opens WhatsApp with your enquiry ready to send. No payment is collected through this form.",
    "placeholder-name": "How should I address you?", "placeholder-business": "If you have one",
    "placeholder-brief": "A little about your goals, timing, or the challenge you want to solve…",
    "package-option-website": "Website subscription — SAR 5,000",
    "package-option-consultation": "Project consultation &amp; inquiries — SAR 4,000",
    "package-option-staff": "Request staff for specific tasks — SAR 1,000",
    "package-option-execution": "Project execution &amp; completion — SAR 10,000",
    "package-option-custom": "Other / discuss a custom project",
    "contact-direct": "Direct line", "contact-whatsapp": "Message me on WhatsApp", "contact-location": "Saudi Arabia · Available worldwide",
    "qr-caption": "SCAN TO SAVE<br>OSMANCOM", "footer-tagline": "Creative work with purpose. Built together.",
    "footer-top": "Back to top ↑", "footer-copyright": "© 2026 OSMANCOM · Osman Adam Ali",
    "footer-tagline": "Practical support for your next step.",
    "footer-services": "Website design · Brand design · Advertising & marketing · Translation · Sourcing",
    "custom-selection": "Your selected package: custom project — let’s discuss the scope and price.",
    "selection-prefix": "Your selected package: ", "selection-suffix": ".",
    "whatsapp-greeting": "Hello Osman, I’d like to discuss a project.",
    "whatsapp-name": "Name", "whatsapp-business": "Business", "whatsapp-not-provided": "Not provided",
    "whatsapp-service": "Creative service", "whatsapp-package": "Service package", "whatsapp-price": "Listed price",
    "whatsapp-details": "Project details", "qr-note": "Website and brand design, advertising and marketing, translation, employment contract and project sourcing, and consulting.",
    "qr-label": "Scan to save Osman Adam Ali’s contact details", "qr-fallback": "Call Osman: +966 50 996 7336"
  },
  ar: {
    "nav-services": "الخدمات", "nav-work": "أعمال مختارة", "nav-about": "نبذة عني", "nav-cta": "ابدأ مشروعك",
    "welcome-eyebrow": "أهلاً وسهلاً", "welcome-title": "دعم أعمالك يبدأ بالاستماع إليك",
    "welcome-lead": "أخبرني بطموحك، وسأساعدك في إيجاد خطوات عملية وواضحة لتحقيقه.",
    "welcome-paragraph-one": "من الترويج لأعمالك وترجمة المستندات إلى البحث عن عقود العمل والمشاريع، نوفر لك دعماً موثوقاً في مكان واحد.",
    "welcome-closing": "لديك استفسار؟ أرسل طلبك دون أي التزام، وسنناقش احتياجاتك معاً.",
    "hero-eyebrow": "شريك مستقل لخدمات الأعمال <span class=\"eyebrow-divider\"></span> المملكة العربية السعودية والعالم",
    "hero-title": "دعم عملي<br><span>لخطوتك القادمة.</span>",
    "hero-description": "دعم موثوق لأعمالك؛ من الإعلان والترجمة إلى البحث عن عقود العمل والمشاريع المناسبة.",
    "hero-primary": "أخبرني بما تحتاج", "hero-secondary": "اكتشف الخدمات", "hero-availability": "أستقبل طلبات المشاريع الجديدة",
    "portrait-alt": "عثمان آدم علي، مستشار خدمات الأعمال", "portrait-name": "عثمان آدم علي",
    "visual-strategy": "نصيحة واضحة<br><strong>خطوات عملية</strong>", "visual-partner": "شريك واحد.<br><strong>دائماً لمساعدتك.</strong>",
    "hero-foot-left": "دعم لأعمالك", "hero-foot-right": "وضوح. ثقة. اهتمام.", "scroll-services": "انتقل إلى الخدمات",
    "services-eyebrow": "كيف أستطيع مساعدتك", "services-title": "شريك واحد تثق به.<br><span>دعم عملي لأعمالك.</span>",
    "services-intro": "خدمات عملية تساعد أعمالك على التواصل بوضوح والوصول إلى العملاء ودفع المشاريع إلى الأمام.",
    "service-web-title": "تصميم المواقع", "service-web-description": "تجارب رقمية واضحة واحترافية تحوّل الانطباع الأول إلى فرصة للتواصل.", "service-web-link": "تحدث عن موقعك",
    "service-brand-title": "التصميم الجرافيكي والهوية", "service-brand-description": "هويات بصرية ومواد تسويقية مميزة تعبّر عن أعمالك بأسلوب خاص.", "service-brand-link": "طوّر هويتك",
    "service-marketing-title": "الإعلان والتسويق لأعمالك", "service-marketing-description": "استهدف عملاءك المناسبين بإعلانات واضحة وتسويق عملي مصمم ليناسب أعمالك.", "service-marketing-link": "روّج لأعمالك",
    "service-translation-title": "خدمات الترجمة", "service-translation-description": "ترجمة واضحة ومتقنة تساعد أعمالك على التواصل بثقة بلغات مختلفة.", "service-translation-link": "ناقش احتياجات الترجمة",
    "service-sourcing-title": "استقطاب عقود العمل والمشاريع", "service-sourcing-description": "دعم في البحث عن عقود العمل والمشاريع المناسبة لاحتياجات أعمالك.", "service-sourcing-link": "ناقش ما تحتاج إليه",
    "service-consulting-title": "الاستشارات", "service-consulting-description": "رؤية جديدة وخطوات عملية لموقعك أو هويتك أو تحديات أعمالك.", "service-consulting-link": "احجز استشارة",
    "service-general-title": "خدمات عامة", "service-general-description": "هل تحتاج إلى خدمة أخرى؟ أخبرني بما تحتاج إليه لنتناقش حول الدعم المناسب.", "service-general-link": "أخبرني باحتياجاتك",
    "service-mix": "مجموعة من الخدمات", "services-note": "اختر إحدى الباقات أدناه أو تواصل معي لمناقشة مشروع خاص.",
    "pricing-eyebrow": "أسعار بداية واضحة", "pricing-title": "اختر <span>خطوتك القادمة.</span>",
    "pricing-intro": "اختر مستوى الدعم المناسب لمشروعك. سأؤكد معك تفاصيل كل طلب قبل بدء العمل.",
    "pricing-type-web": "٠١ / رقمي", "package-website": "اشتراك موقع إلكتروني", "pricing-description-web": "اشتراك لحضور رقمي احترافي لأعمالك.",
    "pricing-type-consult": "٠٢ / استشارات", "package-consultation": "استشارات واستفسارات المشاريع", "pricing-description-consult": "ناقش مشروعك، واطرح أسئلتك، واستكشف الخطوات العملية المناسبة.",
    "pricing-type-staff": "٠٣ / دعم المهام", "package-staff": "طلب موظفين لمهام محددة", "pricing-description-staff": "اطلب دعم الموظفين لإنجاز مهام محددة في مشروعك.",
    "pricing-type-execution": "٠٤ / تنفيذ متكامل", "package-execution": "تنفيذ المشروع وإتمامه", "pricing-description-execution": "اطلب فريقاً لتنفيذ مشروعك وإنجاز جميع مهامه.",
    "pricing-badge": "دعم متكامل للمشروع", "pricing-select": "اختر هذه الخدمة", "currency": "ريال سعودي",
    "pricing-note": "الأسعار كما زودتني بها. يرجى تأكيد مدة اشتراك الموقع والمخرجات والموظفين ونطاق المشروع عند الاستفسار. لا تُحصّل أي مدفوعات عبر هذا الموقع.",
    "work-eyebrow": "أفكار تتحول إلى أثر", "work-title": "إلهام <span>لخطوتك القادمة.</span>",
    "work-intro": "اطّلع على نماذج توضح أساليب التواصل الواضح والهوية الواثقة والإعلان الفعال.",
    "work-note": "هذه نماذج تصورية لعرض التوجه الإبداعي وليست أعمالاً منفذة لعملاء.",
    "work-tag-web": "تصميم مواقع · نموذج تصوري", "work-category-web": "حضور رقمي", "work-title-web": "أفكار واضحة. وتجربة واثقة.",
    "work-label-web": "ناقش نموذج تصميم موقع إلكتروني",
    "work-tag-brand": "تصميم هوية · نموذج تصوري", "work-category-brand": "هوية العلامة التجارية", "work-title-brand": "أسلوب يعبر عنك.",
    "work-label-brand": "ناقش نموذج تصميم الهوية والعلامة التجارية",
    "work-tag-translation": "ترجمة · نموذج تصوري", "work-category-translation": "خدمات الترجمة", "work-title-translation": "كلمات واضحة تصل إلى الجميع.",
    "work-label-translation": "ناقش خدمات الترجمة", "work-image-alt-translation": "كتابة ومستندات جاهزة للترجمة",
    "work-tag-marketing": "تسويق · نموذج تصوري", "work-category-marketing": "توجه الحملة", "work-title-marketing": "فكرة مميزة تصل إلى كل مكان.",
    "work-label-marketing": "ناقش نموذج حملة تسويقية",
    "work-cta": "هل لديك فكرة للمشروع؟ لنجعلها واقعاً.", "work-cta-link": "لنتحدث عن مشروعك",
    "about-caption": "الشخص وراء عثمان كوم", "about-eyebrow": "نبذة عني",
    "about-title": "العمل المميز يبدأ<br><span>بحوار مميز.</span>",
    "about-description-one": "أنا عثمان آدم علي، شريك مستقل لخدمات الأعمال أساعد الشركات على التقدم بوضوح وثقة.",
    "about-description-two": "من الفكرة الأولى إلى أدق التفاصيل، أجمع بين تصميم المواقع والهويات والإعلان والتسويق والترجمة واستقطاب عقود العمل والمشاريع والاستشارات العملية بما يخدم احتياجاتك.",
    "about-cta": "أخبرني عن مشروعك", "about-value-one": "أستمع أولاً", "about-value-two": "أخطط بعناية", "about-value-three": "أصنع ما لا يُنسى",
    "contact-eyebrow": "خطوتك القادمة تبدأ هنا", "contact-title": "لنصنع معاً ما<br><span>يستحق الحديث عنه.</span>",
    "contact-intro": "اختر الخدمة والباقة، وأخبرني بما تحتاج إليه، ثم أرسل استفسارك مباشرة عبر واتساب. لا تُحصّل أي مدفوعات هنا.",
    "quick-whatsapp": "تواصل سريع عبر واتساب", "quick-whatsapp-label": "ابدأ محادثة عبر واتساب",
    "form-title": "استفسار عن مشروع", "form-step": "٠١ — ٠٤", "form-name": "اسمك", "form-business": "اسم الشركة أو المؤسسة",
    "form-service": "الخدمة التي تحتاج إليها", "form-service-option": "اختر الخدمة", "form-package": "الباقة",
    "form-package-option": "اختر الباقة", "form-brief": "ما الذي ترغب في إنجازه؟",
    "form-submit": "أرسل استفسارك عبر واتساب",
    "form-disclaimer": "سيُفتح واتساب مع رسالة جاهزة للإرسال. لا يتم تحصيل أي مدفوعات عبر هذا النموذج.",
    "placeholder-name": "كيف تحب أن أخاطبك؟", "placeholder-business": "إن وُجد",
    "placeholder-brief": "أخبرني عن أهدافك أو الوقت المناسب أو التحدي الذي ترغب في حله…",
    "package-option-website": "اشتراك موقع إلكتروني — ٥٬٠٠٠ ريال",
    "package-option-consultation": "استشارات واستفسارات المشاريع — ٤٬٠٠٠ ريال",
    "package-option-staff": "طلب موظفين لمهام محددة — ١٬٠٠٠ ريال",
    "package-option-execution": "تنفيذ المشروع وإتمامه — ١٠٬٠٠٠ ريال",
    "package-option-custom": "خدمة أخرى / ناقش مشروعاً خاصاً",
    "contact-direct": "للتواصل مباشرة", "contact-whatsapp": "راسلني عبر واتساب", "contact-location": "السعودية · متاح للعمل حول العالم",
    "qr-caption": "امسح الرمز<br>لحفظ بيانات عثمان كوم", "footer-tagline": "عمل إبداعي هادف. ننجزه معاً.",
    "footer-top": "العودة إلى الأعلى ↑", "footer-copyright": "© ٢٠٢٦ عثمان كوم · عثمان آدم علي",
    "footer-tagline": "دعم عملي لخطوتك القادمة.",
    "footer-services": "تصميم المواقع · الهوية · الإعلان والتسويق · الترجمة · استقطاب العقود والمشاريع",
    "custom-selection": "الباقة المختارة: مشروع خاص — لنتناقش في نطاق العمل والسعر.",
    "selection-prefix": "الباقة المختارة: ", "selection-suffix": ".",
    "whatsapp-greeting": "مرحباً عثمان، أرغب في مناقشة مشروع.",
    "whatsapp-name": "الاسم", "whatsapp-business": "الشركة", "whatsapp-not-provided": "لم يذكر",
    "whatsapp-service": "الخدمة الإبداعية", "whatsapp-package": "الباقة", "whatsapp-price": "السعر المعلن",
    "whatsapp-details": "تفاصيل المشروع", "qr-note": "تصميم المواقع والهويات والإعلان والتسويق والترجمة واستقطاب عقود العمل والمشاريع والاستشارات.",
    "qr-label": "امسح الرمز لحفظ بيانات عثمان آدم علي", "qr-fallback": "اتصل بعثمان: ‎+٩٦٦ ٥٠ ٩٩٦ ٧٣٣٦"
  }
};

const serviceTranslations = {
  "Website design": "service-web-title",
  "Graphic & brand design": "service-brand-title",
  "Advertising & marketing": "service-marketing-title",
  "Translation services": "service-translation-title",
  "Employment & project sourcing": "service-sourcing-title",
  Consulting: "service-consulting-title",
  "General services": "service-general-title",
  "A mix of services": "service-mix"
};

let currentLanguage = localStorage.getItem("osmancom-language") === "en" ? "en" : "ar";

function applyLanguage(language) {
  currentLanguage = language;
  const messages = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar"
    ? "عثمان كوم — دعم عملي لأعمالك"
    : "OSMANCOM — Practical support for your business";
  document.querySelector("#page-description").content = language === "ar"
    ? "عثمان كوم — تصميم المواقع والهويات والإعلان والتسويق والترجمة واستقطاب عقود العمل والمشاريع والاستشارات."
    : "OSMANCOM — website and brand design, advertising and marketing, translation, employment contract and project sourcing, and consulting.";
  document.querySelector("#page-og-title").content = language === "ar"
    ? "عثمان كوم — دعم عملي لأعمالك"
    : "OSMANCOM — Practical support for your business";
  document.querySelector("#page-og-description").content = language === "ar"
    ? "دعم موثوق لأعمالك؛ من الإعلان والترجمة إلى البحث عن عقود العمل والمشاريع المناسبة."
    : "Friendly, reliable support for your business — from advertising and translation to finding the right contracts and projects.";
  document.querySelector("#page-twitter-title").content = document.querySelector("#page-og-title").content;
  document.querySelector("#page-twitter-description").content = document.querySelector("#page-og-description").content;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = messages[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((entry) => {
      const [attribute, key] = entry.split(":");
      element.setAttribute(attribute, messages[key]);
    });
  });

  const languageButton = document.querySelector("#language-toggle");
  languageButton.textContent = language === "ar" ? "English" : "العربية";
  languageButton.lang = language === "ar" ? "en" : "ar";
  languageButton.setAttribute("aria-label", language === "ar" ? "View the website in English" : "عرض الموقع باللغة العربية");
  const quickMessage = language === "ar"
    ? "مرحباً عثمان، أود الاستفسار عن خدمات الأعمال."
    : "Hi Osman, I’d like to ask about your business services.";
  document.querySelector("#floating-whatsapp").href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(quickMessage)}`;
  renderContactQr();
  updatePackageSelection();
}

function renderContactQr() {
  const target = document.querySelector("#contact-qr");
  const messages = translations[currentLanguage];

  try {
    if (typeof window.qrcode !== "function") {
      throw new Error("The locally hosted QR code generator did not load.");
    }

    const contactCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Ali;Osman Adam;;;",
      `FN:${CONTACT.name}`,
      `ORG:${CONTACT.business}`,
      `TEL;TYPE=CELL:${CONTACT.phone}`,
      `EMAIL;TYPE=INTERNET:${CONTACT.email}`,
      `NOTE:${messages["qr-note"]}`,
      "END:VCARD"
    ].join("\r\n");

    const code = window.qrcode(0, "H");
    code.addData(contactCard, "Byte");
    code.make();
    target.innerHTML = code.createSvgTag(6, 4, "OSMANCOM contact card", messages["qr-label"]);
    const image = target.querySelector("svg");
    image.setAttribute("focusable", "false");
    image.setAttribute("aria-hidden", "true");
  } catch (error) {
    console.error("Could not generate the contact QR code.", error);
    target.classList.add("qr-error");
    target.innerHTML = `<a href="tel:+966509967336">${messages["qr-fallback"]}</a>`;
  }
}

function formatPrice(price) {
  if (currentLanguage !== "ar") return price;
  const digits = price.replace("SAR ", "").replace("5,000", "٥٬٠٠٠").replace("4,000", "٤٬٠٠٠").replace("1,000", "١٬٠٠٠").replace("10,000", "١٠٬٠٠٠");
  return `${digits} ريال سعودي`;
}

document.querySelector("#language-toggle").addEventListener("click", () => {
  const language = currentLanguage === "en" ? "ar" : "en";
  localStorage.setItem("osmancom-language", language);
  applyLanguage(language);
});

document.querySelectorAll("[data-service-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const service = link.dataset.serviceLink;
    const select = document.querySelector('[name="service"]');
    const option = Array.from(select.options).find((item) => item.value === service);
    if (option) select.value = option.value;
  });
});

const packageSelect = document.querySelector("#package-select");
const packageSelection = document.querySelector("#package-selection");

function updatePackageSelection() {
  const selection = PACKAGES[packageSelect.value];
  const messages = translations[currentLanguage];
  packageSelection.hidden = !selection;
  if (!selection) {
    packageSelection.textContent = "";
    return;
  }
  packageSelection.textContent = selection.price === "To be discussed"
    ? messages["custom-selection"]
    : `${messages["selection-prefix"]}${messages[`package-${packageSelect.value}`].replaceAll("&amp;", "&")} — ${formatPrice(selection.price)}${messages["selection-suffix"]}`;
}

document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    packageSelect.value = link.dataset.package;
    updatePackageSelection();
  });
});

packageSelect.addEventListener("change", updatePackageSelection);

document.querySelector("#project-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const selectedPackage = PACKAGES[data.get("package")];
  const messages = translations[currentLanguage];
  const serviceKey = serviceTranslations[data.get("service")];
  const serviceName = serviceKey
    ? messages[serviceKey].replaceAll("&amp;", "&")
    : data.get("service");
  const packageName = messages[`package-${data.get("package")}`]
    ? messages[`package-${data.get("package")}`].replaceAll("&amp;", "&")
    : messages["package-option-custom"];
  const price = formatPrice(selectedPackage.price);
  const message = [
    messages["whatsapp-greeting"],
    "",
    `${messages["whatsapp-name"]}: ${data.get("name")}`,
    `${messages["whatsapp-business"]}: ${data.get("business") || messages["whatsapp-not-provided"]}`,
    `${messages["whatsapp-service"]}: ${serviceName}`,
    `${messages["whatsapp-package"]}: ${packageName}`,
    `${messages["whatsapp-price"]}: ${price}`,
    "",
    `${messages["whatsapp-details"]}:`,
    data.get("brief")
  ].join("\n");

  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

applyLanguage(currentLanguage);
