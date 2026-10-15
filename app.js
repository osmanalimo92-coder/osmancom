const CONTACT = {
  name: "Osman Adam Ali",
  business: "OSMANCOM",
  phone: "+966509967336",
  email: "osmanalimo92@gmail.com",
  whatsapp: "966509967336"
};

const PACKAGES = {
  website: { name: "Website subscription", price: "USD 5,000" },
  consultation: { name: "Project consultation & inquiries", price: "USD 4,000" },
  staff: { name: "Request staff for specific tasks", price: "USD 1,000" },
  execution: { name: "Project execution & completion", price: "USD 10,000" },
  custom: { name: "Other / discuss a custom project", price: "To be discussed" }
};

const translations = {
  en: {
    "nav-services": "Services", "nav-tourism": "Tourism", "nav-work": "Selected work", "nav-about": "About", "nav-cta": "Start a project",
    "tour-eyebrow": "A little more sunshine", "tour-title": "Your next escape,<br><span>beautifully planned.</span>",
    "tour-intro": "Explore travel support for tickets, hotel stays, local guides, and thoughtful trips for couples, friends, and families.",
    "tour-book-cta": "Plan a trip", "sound-on": "Play gentle sounds", "sound-off": "Turn sounds off",
    "sound-on-label": "Turn on gentle sea and bird sounds", "sound-off-label": "Turn off sea and bird sounds",
    "sound-note": "Sound is optional and starts only when you choose to play it.",
    "sound-error": "Audio could not start in this browser. Please check your sound settings and try again.",
    "coast-alt": "A warm tropical beach with palm trees and a gently floating boat",
    "tour-gallery-eyebrow": "Find your kind of getaway", "tour-gallery-title": "Places to <span>look forward to.</span>",
    "tour-gallery-intro": "Browse a few travel inspirations, then tell us what you would like included in your trip.",
    "tour-gallery-hint": "Browse travel inspiration", "tour-gallery-previous": "Show previous travel photos",
    "tour-gallery-next": "Show next travel photos", "tour-gallery-label": "Travel photo gallery",
    "tour-photo-beach": "A quiet tropical beach at golden hour", "tour-photo-caption-beach": "Golden-hour coastlines",
    "tour-photo-hotel": "A resort hotel surrounded by palm trees", "tour-photo-caption-hotel": "Relaxing hotel stays",
    "tour-photo-guide": "Travelers exploring a scenic destination", "tour-photo-caption-guide": "Guided local discoveries",
    "tour-photo-boat": "A sunny beach with a small sailboat and palm trees", "tour-photo-caption-boat": "Sea, boats &amp; open skies",
    "tour-package-honeymoon": "Honeymoon escapes", "tour-package-honeymoon-description": "A special trip for two, with hotel and experience options to discuss.",
    "tour-package-youth": "Youth group adventures", "tour-package-youth-description": "Group-friendly ideas for shared outings, stays, and guided activities.",
    "tour-package-family": "Family holidays", "tour-package-family-description": "Flexible travel ideas with the right tickets, stays, and local support.",
    "tour-package-choose": "Plan this trip", "tour-package-custom": "Other / custom trip",
    "tour-booking-eyebrow": "Your trip, your way", "tour-booking-title": "Start a travel<br><span>booking request.</span>",
    "tour-booking-description": "Ask about travel tickets, hotel reservations, and a local tour guide. Share your dates and preferences so we can discuss the right options.",
    "tour-step-one": "Send your trip request through WhatsApp.",
    "tour-step-two": "We discuss availability, options, and the total price.",
    "tour-step-three": "Your booking is confirmed directly after details are agreed.",
    "tour-confirmation-note": "Sending this request does not book or charge anything. Confirmation comes after availability and details are agreed.",
    "tour-form-title": "TRAVEL BOOKING REQUEST", "tour-form-step": "01 — 03", "tour-name": "Your name",
    "tour-destination": "Where would you like to go?", "tour-date": "Preferred travel date",
    "tour-travelers": "Number of travelers", "tour-package-label": "Trip type",
    "tour-package-placeholder": "Choose a trip type", "tour-options-title": "What would you like help arranging?",
    "tour-option-tickets": "Travel tickets", "tour-option-hotel": "Hotel reservation", "tour-option-guide": "Tour guide",
    "tour-notes-label": "Anything else we should know?",
    "tour-notes-placeholder": "Add your return date, room needs, preferred activities, or other trip details…",
    "tour-submit": "Prepare my trip request",
    "tour-form-disclaimer": "No payment is taken here. Your trip is not confirmed until availability and arrangements are agreed directly.",
    "tour-request-ready": "Your request is ready. Continue in WhatsApp and send your message; we will confirm availability and details with you.",
    "tour-open-whatsapp": "Open WhatsApp to send request",
    "tour-whatsapp-greeting": "Hello Osman, I’d like to ask about a travel booking.",
    "tour-whatsapp-name": "Name", "tour-whatsapp-destination": "Destination", "tour-whatsapp-date": "Preferred travel date",
    "tour-whatsapp-travelers": "Travelers", "tour-whatsapp-type": "Trip type", "tour-whatsapp-services": "Services requested",
    "tour-whatsapp-notes": "Trip details", "tour-whatsapp-not-selected": "Not selected",
    "tour-whatsapp-ticket": "Travel tickets", "tour-whatsapp-hotel": "Hotel reservation", "tour-whatsapp-guide": "Tour guide",
    "service-tourism-title": "Travel &amp; tourism",
    "service-tourism-description": "Ask about travel tickets, hotel reservations, guided tours, and trip packages for couples, youth groups, and families. Student flight and accommodation options are also available.",
    "service-tourism-link": "Plan a trip ↗",
    "service-scholarship-title": "University scholarship applications",
    "service-scholarship-description": "Get help finding and submitting university scholarship applications worldwide, plus support arranging student flight bookings and accommodation.",
    "service-scholarship-link": "Ask about scholarships",
    "service-jobs-title": "Global job applications",
    "service-jobs-description": "Get support finding suitable roles and preparing and submitting tailored CVs, cover letters, and job applications worldwide.",
    "service-jobs-link": "Discuss job applications",
    "welcome-eyebrow": "A warm welcome", "welcome-title": "Business support that starts with listening",
    "welcome-lead": "Tell me where you want to go. I’ll help you find a clear, practical way forward.",
    "welcome-paragraph-one": "From promoting your business and translating documents to arranging trips, stays, and guided tours, you can get dependable support in one place.",
    "welcome-closing": "Have a question? Send a no-obligation enquiry and we’ll talk through what you need.",
    "hero-eyebrow": "Independent business services partner <span class=\"eyebrow-divider\"></span> Saudi Arabia &amp; worldwide",
    "hero-title": "Practical support<br>for your <span>next move.</span>",
    "hero-description": "Friendly support for your business and travel plans — from advertising and translation to tickets, hotel stays, and guided tours.",
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
    "pricing-badge": "FULL PROJECT SUPPORT", "pricing-select": "Choose this service", "currency": "USD",
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
    "about-description-two": "From the first idea to the final details, I bring website and brand design, advertising and marketing, translation, employment contract and project sourcing, travel planning, and practical consulting together around your needs.",
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
    "package-option-website": "Website subscription — USD 5,000",
    "package-option-consultation": "Project consultation &amp; inquiries — USD 4,000",
    "package-option-staff": "Request staff for specific tasks — USD 1,000",
    "package-option-execution": "Project execution &amp; completion — USD 10,000",
    "package-option-custom": "Other / discuss a custom project",
    "contact-direct": "Direct line", "contact-whatsapp": "Message me on WhatsApp", "contact-location": "Saudi Arabia · Available worldwide",
    "qr-caption": "SCAN TO SAVE<br>OSMANCOM", "footer-tagline": "Creative work with purpose. Built together.",
    "footer-top": "Back to top ↑", "footer-copyright": "© 2026 OSMANCOM · Osman Adam Ali",
    "footer-tagline": "Practical support for your next step.",
    "footer-services": "Website design · Brand design · Advertising & marketing · Translation · Sourcing · Travel planning",
    "custom-selection": "Your selected package: custom project — let’s discuss the scope and price.",
    "selection-prefix": "Your selected package: ", "selection-suffix": ".",
    "whatsapp-greeting": "Hello Osman, I’d like to discuss a project.",
    "whatsapp-name": "Name", "whatsapp-business": "Business", "whatsapp-not-provided": "Not provided",
    "whatsapp-service": "Creative service", "whatsapp-package": "Service package", "whatsapp-price": "Listed price",
    "whatsapp-details": "Project details", "qr-note": "Website and brand design, advertising and marketing, translation, employment contract and project sourcing, travel planning, and consulting.",
    "qr-label": "Scan to save Osman Adam Ali’s contact details", "qr-fallback": "Call Osman: +966 50 996 7336"
  },
  ar: {
    "nav-services": "الخدمات", "nav-tourism": "السياحة", "nav-work": "أعمال مختارة", "nav-about": "نبذة عني", "nav-cta": "ابدأ مشروعك",
    "tour-eyebrow": "رحلة مليئة بأشعة الشمس", "tour-title": "رحلتك القادمة،<br><span>نخطط لها بكل عناية.</span>",
    "tour-intro": "اكتشف خدمات التذاكر والإقامة الفندقية والمرشدين السياحيين والرحلات المصممة للأزواج والأصدقاء والعائلات.",
    "tour-book-cta": "خطط لرحلتك", "sound-on": "شغّل أصوات البحر الهادئة", "sound-off": "أوقف الأصوات",
    "sound-on-label": "تشغيل أصوات البحر والطيور الهادئة", "sound-off-label": "إيقاف أصوات البحر والطيور",
    "sound-note": "الصوت اختياري ولا يبدأ إلا عند اختيارك تشغيله.",
    "sound-error": "تعذّر تشغيل الصوت في هذا المتصفح. تحقق من إعدادات الصوت ثم حاول مرة أخرى.",
    "coast-alt": "شاطئ استوائي دافئ تحيط به أشجار النخيل وقارب يطفو بهدوء",
    "tour-gallery-eyebrow": "اكتشف الرحلة المناسبة لك", "tour-gallery-title": "أماكن <span>تستحق التطلع إليها.</span>",
    "tour-gallery-intro": "تصفّح بعض أفكار السفر، ثم أخبرنا بما ترغب في إضافته إلى رحلتك.",
    "tour-gallery-hint": "تصفّح صور وجهات السفر", "tour-gallery-previous": "عرض صور السفر السابقة",
    "tour-gallery-next": "عرض صور السفر التالية", "tour-gallery-label": "معرض صور السفر",
    "tour-photo-beach": "شاطئ استوائي هادئ عند الغروب", "tour-photo-caption-beach": "شواطئ وقت الغروب",
    "tour-photo-hotel": "منتجع تحيط به أشجار النخيل", "tour-photo-caption-hotel": "إقامة فندقية مريحة",
    "tour-photo-guide": "مسافرون يستكشفون وجهة طبيعية", "tour-photo-caption-guide": "اكتشافات محلية مع مرشد",
    "tour-photo-boat": "شاطئ مشمس مع قارب شراعي صغير وأشجار نخيل", "tour-photo-caption-boat": "بحر وقوارب وسماء مفتوحة",
    "tour-package-honeymoon": "رحلات شهر العسل", "tour-package-honeymoon-description": "رحلة مميزة لشخصين مع خيارات للإقامة والتجارب السياحية.",
    "tour-package-youth": "مغامرات المجموعات الشبابية", "tour-package-youth-description": "أفكار مناسبة للمجموعات تشمل الأنشطة والإقامة والجولات مع مرشد.",
    "tour-package-family": "إجازات عائلية", "tour-package-family-description": "أفكار مرنة للسفر مع التذاكر والإقامة والدعم المحلي المناسب.",
    "tour-package-choose": "خطط لهذه الرحلة", "tour-package-custom": "رحلة أخرى / مخصصة",
    "tour-booking-eyebrow": "رحلتك على طريقتك", "tour-booking-title": "ابدأ طلب<br><span>حجز رحلتك.</span>",
    "tour-booking-description": "استفسر عن تذاكر السفر وحجوزات الفنادق والمرشد السياحي. شاركنا التواريخ والتفضيلات لنناقش الخيارات المناسبة.",
    "tour-step-one": "أرسل طلب رحلتك عبر واتساب.",
    "tour-step-two": "نناقش التوافر والخيارات والتكلفة الإجمالية.",
    "tour-step-three": "يُؤكَّد الحجز مباشرة بعد الاتفاق على التفاصيل.",
    "tour-confirmation-note": "إرسال الطلب لا يحجز الرحلة ولا يترتب عليه دفع. يأتي التأكيد بعد الاتفاق على التوافر والتفاصيل.",
    "tour-form-title": "طلب حجز رحلة", "tour-form-step": "٠١ — ٠٣", "tour-name": "اسمك",
    "tour-destination": "إلى أين ترغب في السفر؟", "tour-date": "موعد السفر المفضل",
    "tour-travelers": "عدد المسافرين", "tour-package-label": "نوع الرحلة",
    "tour-package-placeholder": "اختر نوع الرحلة", "tour-options-title": "ما الخدمات التي ترغب في ترتيبها؟",
    "tour-option-tickets": "تذاكر السفر", "tour-option-hotel": "حجز فندق", "tour-option-guide": "مرشد سياحي",
    "tour-notes-label": "هل هناك تفاصيل أخرى؟",
    "tour-notes-placeholder": "أضف موعد العودة أو احتياجات الغرفة أو الأنشطة المفضلة أو أي تفاصيل أخرى…",
    "tour-submit": "جهّز طلب الرحلة",
    "tour-form-disclaimer": "لا يتم تحصيل أي مبلغ هنا. لا يتأكد الحجز حتى يتم الاتفاق مباشرة على التوافر والترتيبات.",
    "tour-request-ready": "طلبك جاهز. تابع إلى واتساب وأرسل رسالتك، وسنؤكد معك التوافر والتفاصيل.",
    "tour-open-whatsapp": "افتح واتساب لإرسال الطلب",
    "tour-whatsapp-greeting": "مرحباً عثمان، أود الاستفسار عن حجز رحلة.",
    "tour-whatsapp-name": "الاسم", "tour-whatsapp-destination": "الوجهة", "tour-whatsapp-date": "موعد السفر المفضل",
    "tour-whatsapp-travelers": "عدد المسافرين", "tour-whatsapp-type": "نوع الرحلة", "tour-whatsapp-services": "الخدمات المطلوبة",
    "tour-whatsapp-notes": "تفاصيل الرحلة", "tour-whatsapp-not-selected": "لم يتم الاختيار",
    "tour-whatsapp-ticket": "تذاكر السفر", "tour-whatsapp-hotel": "حجز فندق", "tour-whatsapp-guide": "مرشد سياحي",
    "service-tourism-title": "السفر والسياحة",
    "service-tourism-description": "استفسر عن تذاكر السفر وحجوزات الفنادق والجولات السياحية وباقات للأزواج والمجموعات الشبابية والعائلات. تتوفر أيضاً خيارات رحلات الطلاب والإقامة.",
    "service-tourism-link": "خطط لرحلتك ↗",
    "service-scholarship-title": "التقديم على المنح الجامعية",
    "service-scholarship-description": "احصل على مساعدة في العثور على المنح الجامعية والتقديم إليها حول العالم، إلى جانب المساعدة في حجز رحلات الطلاب وترتيب السكن.",
    "service-scholarship-link": "استفسر عن المنح",
    "service-jobs-title": "التقديم على الوظائف حول العالم",
    "service-jobs-description": "احصل على دعم في العثور على وظائف مناسبة وإعداد السير الذاتية والخطابات التعريفية وتقديم طلبات التوظيف حول العالم.",
    "service-jobs-link": "ناقش طلبات التوظيف",
    "welcome-eyebrow": "أهلاً وسهلاً", "welcome-title": "دعم أعمالك يبدأ بالاستماع إليك",
    "welcome-lead": "أخبرني بطموحك، وسأساعدك في إيجاد خطوات عملية وواضحة لتحقيقه.",
    "welcome-paragraph-one": "من الترويج لأعمالك وترجمة المستندات إلى ترتيب الرحلات والإقامة والجولات مع مرشد، نوفر لك دعماً موثوقاً في مكان واحد.",
    "welcome-closing": "لديك استفسار؟ أرسل طلبك دون أي التزام، وسنناقش احتياجاتك معاً.",
    "hero-eyebrow": "شريك مستقل لخدمات الأعمال <span class=\"eyebrow-divider\"></span> المملكة العربية السعودية والعالم",
    "hero-title": "دعم عملي<br><span>لخطوتك القادمة.</span>",
    "hero-description": "دعم موثوق لأعمالك وخطط سفرك؛ من الإعلان والترجمة إلى التذاكر والإقامة والجولات السياحية.",
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
    "pricing-badge": "دعم متكامل للمشروع", "pricing-select": "اختر هذه الخدمة", "currency": "دولار أمريكي",
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
    "about-description-two": "من الفكرة الأولى إلى أدق التفاصيل، أجمع بين تصميم المواقع والهويات والإعلان والتسويق والترجمة واستقطاب عقود العمل والمشاريع وتخطيط السفر والاستشارات العملية بما يخدم احتياجاتك.",
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
    "package-option-website": "اشتراك موقع إلكتروني — ٥٬٠٠٠ دولار أمريكي",
    "package-option-consultation": "استشارات واستفسارات المشاريع — ٤٬٠٠٠ دولار أمريكي",
    "package-option-staff": "طلب موظفين لمهام محددة — ١٬٠٠٠ دولار أمريكي",
    "package-option-execution": "تنفيذ المشروع وإتمامه — ١٠٬٠٠٠ دولار أمريكي",
    "package-option-custom": "خدمة أخرى / ناقش مشروعاً خاصاً",
    "contact-direct": "للتواصل مباشرة", "contact-whatsapp": "راسلني عبر واتساب", "contact-location": "السعودية · متاح للعمل حول العالم",
    "qr-caption": "امسح الرمز<br>لحفظ بيانات عثمان كوم", "footer-tagline": "عمل إبداعي هادف. ننجزه معاً.",
    "footer-top": "العودة إلى الأعلى ↑", "footer-copyright": "© ٢٠٢٦ عثمان كوم · عثمان آدم علي",
    "footer-tagline": "دعم عملي لخطوتك القادمة.",
    "footer-services": "تصميم المواقع · الهوية · الإعلان والتسويق · الترجمة · استقطاب العقود والمشاريع · تخطيط السفر",
    "custom-selection": "الباقة المختارة: مشروع خاص — لنتناقش في نطاق العمل والسعر.",
    "selection-prefix": "الباقة المختارة: ", "selection-suffix": ".",
    "whatsapp-greeting": "مرحباً عثمان، أرغب في مناقشة مشروع.",
    "whatsapp-name": "الاسم", "whatsapp-business": "الشركة", "whatsapp-not-provided": "لم يذكر",
    "whatsapp-service": "الخدمة الإبداعية", "whatsapp-package": "الباقة", "whatsapp-price": "السعر المعلن",
    "whatsapp-details": "تفاصيل المشروع", "qr-note": "تصميم المواقع والهويات والإعلان والتسويق والترجمة واستقطاب عقود العمل والمشاريع وتخطيط السفر والاستشارات.",
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
  "Travel & tourism": "service-tourism-title",
  "Scholarship applications": "service-scholarship-title",
  "Global job applications": "service-jobs-title",
  "A mix of services": "service-mix"
};

let currentLanguage = localStorage.getItem("osmancom-language") === "en" ? "en" : "ar";
let ambientAudio = null;

function applyLanguage(language) {
  currentLanguage = language;
  const messages = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar"
    ? "عثمان كوم — دعم عملي لأعمالك"
    : "OSMANCOM — Practical support for your business";
  document.querySelector("#page-description").content = language === "ar"
    ? "عثمان كوم — خدمات الأعمال والسفر، بما فيها التذاكر وحجوزات الفنادق والجولات السياحية."
    : "OSMANCOM — business and travel support, including tickets, hotel reservations, and guided tours.";
  document.querySelector("#page-og-title").content = language === "ar"
    ? "عثمان كوم — دعم عملي لأعمالك"
    : "OSMANCOM — Practical support for your business";
  document.querySelector("#page-og-description").content = language === "ar"
    ? "خدمات أعمال وسفر من عثمان كوم، تشمل التذاكر والإقامة الفندقية والجولات مع مرشد."
    : "Business and travel planning from OSMANCOM, including tickets, hotel stays, and guided tours.";
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
  updateSoundButton(Boolean(ambientAudio));
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
  const digits = price.replace("USD ", "").replace("5,000", "٥٬٠٠٠").replace("4,000", "٤٬٠٠٠").replace("1,000", "١٬٠٠٠").replace("10,000", "١٠٬٠٠٠");
  return `${digits} دولار أمريكي`;
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

function updateSoundButton(isPlaying) {
  const button = document.querySelector("#sound-toggle");
  const messages = translations[currentLanguage];
  button.setAttribute("aria-pressed", String(isPlaying));
  button.setAttribute("aria-label", messages[isPlaying ? "sound-off-label" : "sound-on-label"]);
  button.querySelector("[data-i18n='sound-on']").textContent = messages[isPlaying ? "sound-off" : "sound-on"];
}

async function startAmbientAudio() {
  if (!window.AudioContext) throw new Error("Web Audio is not supported by this browser.");

  const context = new AudioContext();
  try {
    await context.resume();
  } catch (error) {
    await context.close();
    throw error;
  }

  const master = context.createGain();
  master.gain.value = 0.42;
  master.connect(context.destination);

  const noiseBuffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let index = 0; index < noiseData.length; index += 1) {
    noiseData[index] = Math.random() * 2 - 1;
  }
  const waves = context.createBufferSource();
  waves.buffer = noiseBuffer;
  waves.loop = true;
  const waveFilter = context.createBiquadFilter();
  waveFilter.type = "lowpass";
  waveFilter.frequency.value = 650;
  const waveVolume = context.createGain();
  waveVolume.gain.value = 0.13;
  waves.connect(waveFilter);
  waveFilter.connect(waveVolume);
  waveVolume.connect(master);
  waves.start();

  const swell = context.createOscillator();
  const swellDepth = context.createGain();
  swell.frequency.value = 0.09;
  swellDepth.gain.value = 0.07;
  swell.connect(swellDepth);
  swellDepth.connect(waveVolume.gain);
  swell.start();

  [220, 261.63, 329.63].forEach((frequency) => {
    const note = context.createOscillator();
    const volume = context.createGain();
    note.type = "sine";
    note.frequency.value = frequency;
    volume.gain.value = 0.012;
    note.connect(volume);
    volume.connect(master);
    note.start();
  });

  const chirp = () => {
    if (context.state !== "running") return;
    const bird = context.createOscillator();
    const volume = context.createGain();
    const now = context.currentTime;
    const startFrequency = 1750 + Math.random() * 500;
    bird.type = "sine";
    bird.frequency.setValueAtTime(startFrequency, now);
    bird.frequency.exponentialRampToValueAtTime(startFrequency * 1.42, now + 0.12);
    bird.frequency.exponentialRampToValueAtTime(startFrequency * 0.82, now + 0.27);
    volume.gain.setValueAtTime(0.0001, now);
    volume.gain.exponentialRampToValueAtTime(0.025, now + 0.04);
    volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    bird.connect(volume);
    volume.connect(master);
    bird.start(now);
    bird.stop(now + 0.31);
  };
  const birdTimeouts = new Set();
  const queueChirp = (delay) => {
    const timer = window.setTimeout(() => {
      birdTimeouts.delete(timer);
      if (ambientAudio?.context !== context) return;
      chirp();
      if (Math.random() > 0.5) queueChirp(320);
    }, delay);
    birdTimeouts.add(timer);
  };
  const birdTimer = window.setInterval(() => queueChirp(0), 6200);
  ambientAudio = { context, birdTimer, birdTimeouts };
  queueChirp(900);
}

async function stopAmbientAudio() {
  if (!ambientAudio) return;
  const audio = ambientAudio;
  ambientAudio = null;
  window.clearInterval(audio.birdTimer);
  audio.birdTimeouts.forEach((timer) => window.clearTimeout(timer));
  await audio.context.close();
}

document.querySelector("#sound-toggle").addEventListener("click", async () => {
  const soundNote = document.querySelector(".sound-note");
  try {
    if (ambientAudio) {
      await stopAmbientAudio();
    } else {
      await startAmbientAudio();
    }
    soundNote.textContent = translations[currentLanguage]["sound-note"];
    updateSoundButton(Boolean(ambientAudio));
  } catch (error) {
    console.error("Could not change the beach ambience.", error);
    soundNote.textContent = translations[currentLanguage]["sound-error"];
  }
});

const gallery = document.querySelector("#tour-gallery");
document.querySelectorAll("[data-gallery-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gallery.scrollBy({
      left: Number(button.dataset.galleryDirection) * gallery.clientWidth * 0.8,
      behavior: reducedMotion ? "instant" : "smooth"
    });
  });
});

const tourTripType = document.querySelector("#tour-trip-type");
document.querySelectorAll("[data-tour-package]").forEach((button) => {
  button.addEventListener("click", () => {
    tourTripType.value = button.dataset.tourPackage;
    document.querySelector("#tour-booking-form").scrollIntoView({ behavior: "smooth", block: "center" });
    tourTripType.focus({ preventScroll: true });
  });
});

const travelDate = document.querySelector("#tour-booking-form [name='date']");
const today = new Date();
travelDate.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

document.querySelector("#tour-booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const messages = translations[currentLanguage];
  const extraLabels = {
    tickets: messages["tour-whatsapp-ticket"],
    hotel: messages["tour-whatsapp-hotel"],
    guide: messages["tour-whatsapp-guide"]
  };
  const selectedExtras = data.getAll("extras").map((extra) => extraLabels[extra]);
  const tripType = messages[`tour-package-${data.get("tripType")}`];
  const message = [
    messages["tour-whatsapp-greeting"],
    "",
    `${messages["tour-whatsapp-name"]}: ${data.get("name")}`,
    `${messages["tour-whatsapp-destination"]}: ${data.get("destination")}`,
    `${messages["tour-whatsapp-date"]}: ${data.get("date")}`,
    `${messages["tour-whatsapp-travelers"]}: ${data.get("travelers")}`,
    `${messages["tour-whatsapp-type"]}: ${tripType}`,
    `${messages["tour-whatsapp-services"]}: ${selectedExtras.length ? selectedExtras.join(", ") : messages["tour-whatsapp-not-selected"]}`,
    `${messages["tour-whatsapp-notes"]}: ${data.get("notes") || messages["tour-whatsapp-not-selected"]}`
  ].join("\n");
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const status = document.querySelector("#tour-booking-status");
  const whatsappLink = document.querySelector("#tour-whatsapp-link");
  status.hidden = false;
  status.querySelector("p").textContent = messages["tour-request-ready"];
  whatsappLink.href = url;
  whatsappLink.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});

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
