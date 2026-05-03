const LANG = {
    en: {
        // Selection Screen
        lang_title: "Choose Your Language",
        lang_subtitle: "अपनी भाषा चुनें",
        
        // Entry Screen
        entry_badge: "Kiosk #041 • Bengaluru",
        entry_title: "Welcome to Aashirvaad",
        entry_subtitle: "Personalized Nutrition for your Ghar",
        entry_phone_label: "Mobile Number",
        entry_phone_placeholder: "Enter 10 digit number",
        entry_btn: "Send OTP",
        entry_footer: "Secure login for your profile",

        // OTP Screen
        otp_badge: "Verify Number",
        otp_title: "Verify your Mobile",
        otp_subtitle: "OTP sent to",
        otp_label: "4-Digit OTP",
        otp_placeholder: "····",
        otp_btn: "Verify & Continue",
        otp_resend: "Didn't receive it?",
        otp_back: "Go Back",

        // Details Screen
        details_badge: "Tell us about yourself",
        details_title: "Who is this for?",
        details_desc: "This helps us tailor the recommendations for your family.",
        details_name_label: "Name",
        details_name_placeholder: "Enter your name",
        details_email_label: "Email (Optional)",
        details_email_placeholder: "Enter your email",
        details_btn: "Begin Ghar Profiling →",

        // Quiz General
        quiz_back: "← Back",
        quiz_next: "Next →",
        quiz_step: "Step",
        quiz_of: "of 5",
        quiz_single_select: "Single Select",
        quiz_multi_select: "Multi Select",
        quiz_gen_plan: "See My Plan ✦",

        // Q1: Shopping for
        q1_title: "Who are you shopping for?",
        q1_desc: "Select all that apply",
        q1_adults: "Adults Only",
        q1_adults_sub: "18–50 yrs",
        q1_kids: "With Young Children",
        q1_kids_sub: "Below 15 yrs",
        q1_elderly: "With Elderly",
        q1_elderly_sub: "60+ yrs",

        // Q2: Family Size
        q2_title: "How big is your family?",
        q2_desc: "Helps us get your quantities right",
        q2_small: "1-2 Members",
        q2_small_sub: "Small family",
        q2_medium: "3-4 Members",
        q2_medium_sub: "Medium family",
        q2_large: "5+ Members",
        q2_large_sub: "Large family",

        // Q3: Eat most
        q3_title: "What does your family eat most?",
        q3_desc: "Choose your primary staples",
        q3_rotis: "Rotis",
        q3_rotis_sub: "Whole wheat/Multigrain",
        q3_parathas: "Parathas",
        q3_parathas_sub: "Stuffed/Plain",
        q3_rice: "Rice",
        q3_rice_sub: "Daily staple",
        q3_pulses: "Pulses & Grains",
        q3_pulses_sub: "Dal, Chana, etc.",
        q3_oils: "Oils & Fats",
        q3_oils_sub: "Ghee, Mustard, etc.",
        q3_ready: "Ready-to-cook",
        q3_ready_sub: "Instant mixes",

        // Q4: Health Goal
        q4_title: "Primary Health Goal?",
        q4_desc: "What matters most to your family?",
        q4_weight: "Weight Management",
        q4_weight_sub: "Maintain ideal weight",
        q4_diabetes: "Diabetic Friendly",
        q4_diabetes_sub: "Low GI focus",
        q4_protein: "High Protein",
        q4_protein_sub: "Muscle & strength",
        q4_digestion: "Better Digestion",
        q4_digestion_sub: "Fiber rich",
        q4_heart: "Heart Health",
        q4_heart_sub: "Low cholesterol",
        q4_general: "General Wellness",
        q4_general_sub: "Overall nutrition",

        // Q5: Roti Texture
        q5_title: "Roti Texture Preference",
        q5_desc: "How does your family like its rotis?",
        q5_soft: "Very Soft",
        q5_soft_sub: "Phulka style",
        q5_balanced: "Balanced",
        q5_balanced_sub: "Soft + slight bite",
        q5_crispy: "Crispy",
        q5_crispy_sub: "Paratha style",

        // Q6: Cooking Style
        q6_title: "Your Cooking Style",
        q6_desc: "What best describes cooking at home?",
        q6_quick: "Quick & Convenient",
        q6_quick_sub: "Under 20 mins",
        q6_regular: "Regular Home Cooking",
        q6_regular_sub: "Balanced routine",
        q6_elaborate: "Elaborate Cooking",
        q6_elaborate_sub: "Weekend indulgence",
        q6_health: "Health-Focused",
        q6_health_sub: "Clean eating",

        // Processing
        proc_title: "Creating your nutrition plan...",
        proc_sub: "Analysing your family profile",

        // Recommendation Screen
        rec_hero_pre: "Your Family Nutrition Pack",
        rec_pack_title: "✦ Your Recommended Pack",
        rec_pack_atta: "Atta",
        rec_pack_oil: "Oil",
        rec_pack_butter: "Nut Butter",
        rec_pack_fine: "Fine grind",
        rec_pack_cold: "Cold-pressed",
        rec_pack_protein: "High protein",
        rec_why_title: "✦ Why this works for you",
        rec_qty_title: "📦 Suggested Quantities &mdash; Adjust as Needed",
        rec_cust_title: "⚙️ Customise Your Pack",
        rec_cust_grind: "Grind Type",
        rec_cust_fine: "Fine",
        rec_cust_medium: "Medium",
        rec_cust_coarse: "Coarse",
        rec_cust_cycle: "Planning Cycle",
        rec_cust_weekly: "Weekly",
        rec_cust_biweekly: "Bi-weekly",
        rec_cust_monthly: "Monthly",
        rec_cust_quarterly: "Quarterly",
        rec_add_title: "🌿 Add to Your Pack",
        rec_also_title: "🛒 Also Add",
        rec_explore_title: "🔎 Explore More",
        rec_retake: "← Retake",
        rec_review: "Review Order →",

        // Recommendation Labels/Reasoning
        rec_health_diabetes: "Diabetes Care",
        rec_health_heart: "Heart Health",
        rec_health_weight: "Weight Management",
        rec_health_general: "General Wellness",
        rec_health_kids_nut: "Kids Nutrition",
        rec_health_digestion: "Ancient Grains",
        rec_ft_kids: "With Young Children",
        rec_ft_adults: "Adult household",
        rec_ft_elderly: "With Elderly Members",
        rec_size_small: "1-2 Members",
        rec_size_medium: "3-4 Members",
        rec_size_large: "5+ Members",
        rec_why_health: "Optimised for",
        rec_why_family: "Customised for",
        rec_why_style: "Supports your cooking style",

        // Order Summary
        order_logo_sub: "Your Order",
        order_summary_title: "Order Summary ✦",
        order_pack_title: "Your Family Nutrition Pack",
        order_added_title: "Added Products",
        order_custom_title: "Customisation",
        order_grind: "Grind Type",
        order_cycle: "Planning Cycle",
        order_footer_note: "✦ Freshly Milled &middot; Customised For You &middot; 100% Natural",
        order_edit: "Edit Order",
        order_edit_sub: "Modify selections",
        order_proceed: "Proceed to Billing",
        order_proceed_sub: "Counter payment",
        order_online: "Pay Now Online",
        order_online_sub: "UPI / Card",

        // Success Screen
        suc_title: "आशीर्वाद से!",
        suc_sub: "Your nutrition plan is ready. Please proceed to the billing counter.",
        suc_ref_lbl: "Order Reference",
        suc_ref_note: "Share this code at the counter",
        suc_reset: "Start New Session",

        // Toasts & Messages
        toast_cook_req: "Please pick your cooking style",
        toast_added: "added",
        toast_removed: "removed",
        toast_phone_req: "Please enter a valid phone number",
        toast_otp_req: "Please enter 4-digit OTP",
        toast_name_req: "Please enter your name",
        toast_select_req: "Please make a selection"
    },
    hi: {
        // Selection Screen
        lang_title: "अपनी भाषा चुनें",
        lang_subtitle: "Choose Your Language",

        // Entry Screen
        entry_badge: "कियोस्क #041 • बेंगलुरु",
        entry_title: "आशीर्वाद में आपका स्वागत है",
        entry_subtitle: "आपके घर के लिए व्यक्तिगत पोषण",
        entry_phone_label: "मोबाइल नंबर",
        entry_phone_placeholder: "10 अंकों का नंबर दर्ज करें",
        entry_btn: "ओटीपी भेजें",
        entry_footer: "आपके प्रोफाइल के लिए सुरक्षित लॉगिन",

        // OTP Screen
        otp_badge: "नंबर सत्यापित करें",
        otp_title: "अपना मोबाइल सत्यापित करें",
        otp_subtitle: "ओटीपी भेजा गया",
        otp_label: "4-अंकों का ओटीपी",
        otp_placeholder: "····",
        otp_btn: "सत्यापित करें और जारी रखें",
        otp_resend: "कोड नहीं मिला?",
        otp_back: "पीछे जाएं",

        // Details Screen
        details_badge: "हमें अपने बारे में बताएं",
        details_title: "यह किसके लिए है?",
        details_desc: "यह हमें आपके परिवार के लिए सिफारिशें तैयार करने में मदद करता है।",
        details_name_label: "नाम",
        details_name_placeholder: "अपना नाम दर्ज करें",
        details_email_label: "ईमेल (वैकल्पिक)",
        details_email_placeholder: "अपना ईमेल दर्ज करें",
        details_btn: "घर की प्रोफाइलिंग शुरू करें →",

        // Quiz General
        quiz_back: "← पीछे",
        quiz_next: "अगला →",
        quiz_step: "चरण",
        quiz_of: "5 में से",
        quiz_single_select: "एकल चयन",
        quiz_multi_select: "बहु चयन",
        quiz_gen_plan: "मेरी योजना देखें ✦",

        // Q1: Shopping for
        q1_title: "आप किसके लिए खरीदारी कर रहे हैं?",
        q1_desc: "जो लागू हो उसे चुनें",
        q1_adults: "केवल वयस्क",
        q1_adults_sub: "18–50 वर्ष",
        q1_kids: "छोटे बच्चों के साथ",
        q1_kids_sub: "15 वर्ष से कम",
        q1_elderly: "बुजुर्गों के साथ",
        q1_elderly_sub: "60+ वर्ष",

        // Q2: Family Size
        q2_title: "आपका परिवार कितना बड़ा है?",
        q2_desc: "मात्रा सही रखने में हमारी मदद करता है",
        q2_small: "1-2 सदस्य",
        q2_small_sub: "छोटा परिवार",
        q2_medium: "3-4 सदस्य",
        q2_medium_sub: "मध्यम परिवार",
        q2_large: "5+ सदस्य",
        q2_large_sub: "बड़ा परिवार",

        // Q3: Eat most
        q3_title: "आपका परिवार सबसे ज्यादा क्या खाता है?",
        q3_desc: "अपने प्राथमिक मुख्य खाद्य पदार्थ चुनें",
        q3_rotis: "रोटी",
        q3_rotis_sub: "होल व्हीट/मल्टीग्रेन",
        q3_parathas: "पराठे",
        q3_parathas_sub: "भरवां/सादा",
        q3_rice: "चावल",
        q3_rice_sub: "दैनिक मुख्य आहार",
        q3_pulses: "दालें और अनाज",
        q3_pulses_sub: "दाल, चना, आदि",
        q3_oils: "तेल और वसा",
        q3_oils_sub: "घी, सरसों, आदि",
        q3_ready: "रेडी-टू-कुक",
        q3_ready_sub: "इंस्टेंट मिक्स",

        // Q4: Health Goal
        q4_title: "प्राथमिक स्वास्थ्य लक्ष्य?",
        q4_desc: "आपके परिवार के लिए सबसे महत्वपूर्ण क्या है?",
        q4_weight: "वजन प्रबंधन",
        q4_weight_sub: "आदर्श वजन बनाए रखें",
        q4_diabetes: "मधुमेह अनुकूल",
        q4_diabetes_sub: "लो जीआई फोकस",
        q4_protein: "उच्च प्रोटीन",
        q4_protein_sub: "मांसपेशियों और ताकत",
        q4_digestion: "बेहतर पाचन",
        q4_digestion_sub: "फाइबर युक्त",
        q4_heart: "हृदय स्वास्थ्य",
        q4_heart_sub: "कम कोलेस्ट्रॉल",
        q4_general: "सामान्य कल्याण",
        q4_general_sub: "समग्र पोषण",

        // Q5: Roti Texture
        q5_title: "रोटी बनावट पसंद",
        q5_desc: "आपका परिवार अपनी रोटियां कैसे पसंद करता है?",
        q5_soft: "बहुत नरम",
        q5_soft_sub: "फुल्का स्टाइल",
        q5_balanced: "संतुलित",
        q5_balanced_sub: "नरम + हल्का बाइट",
        q5_crispy: "खस्ता",
        q5_crispy_sub: "पराठा स्टाइल",

        // Q6: Cooking Style
        q6_title: "आपकी खाना पकाने की शैली",
        q6_desc: "घर पर खाना पकाने का सबसे अच्छा वर्णन क्या है?",
        q6_quick: "त्वरित और सुविधाजनक",
        q6_quick_sub: "20 मिनट से कम",
        q6_regular: "नियमित घर का खाना",
        q6_regular_sub: "संतुलित दिनचर्या",
        q6_elaborate: "विस्तृत खाना पकाना",
        q6_elaborate_sub: "सप्ताहांत भोग",
        q6_health: "स्वास्थ्य-केंद्रित",
        q6_health_sub: "क्लीन ईटिंग",

        // Processing
        proc_title: "आपकी पोषण योजना बनाई जा रही है...",
        proc_sub: "आपके परिवार के प्रोफाइल का विश्लेषण",

        // Recommendation Screen
        rec_hero_pre: "आपका पारिवारिक पोषण पैक",
        rec_pack_title: "✦ आपका अनुशंसित पैक",
        rec_pack_atta: "आटा",
        rec_pack_oil: "तेल",
        rec_pack_butter: "नट बटर",
        rec_pack_fine: "बारीक पिसाई",
        rec_pack_cold: "कोल्ड-प्रेस्ड",
        rec_pack_protein: "उच्च प्रोटीन",
        rec_why_title: "✦ यह आपके लिए क्यों काम करता है",
        rec_qty_title: "📦 सुझाई गई मात्रा - आवश्यकतानुसार समायोजित करें",
        rec_cust_title: "⚙️ अपने पैक को कस्टमाइज़ करें",
        rec_cust_grind: "पिसाई का प्रकार",
        rec_cust_fine: "बारीक",
        rec_cust_medium: "मध्यम",
        rec_cust_coarse: "दरदरा",
        rec_cust_cycle: "नियोजन चक्र",
        rec_cust_weekly: "साप्ताहिक",
        rec_cust_biweekly: "पाक्षिक",
        rec_cust_monthly: "मासिक",
        rec_cust_quarterly: "त्रैमासिक",
        rec_add_title: "🌿 अपने पैक में जोड़ें",
        rec_also_title: "🛒 यह भी जोड़ें",
        rec_explore_title: "🔎 और अन्वेषण करें",
        rec_retake: "← पुनः लें",
        rec_review: "ऑर्डर की समीक्षा करें →",

        // Recommendation Labels/Reasoning
        rec_health_diabetes: "मधुमेह देखभाल",
        rec_health_heart: "हृदय स्वास्थ्य",
        rec_health_weight: "वजन प्रबंधन",
        rec_health_general: "सामान्य कल्याण",
        rec_health_kids_nut: "बच्चों का पोषण",
        rec_health_digestion: "प्राचीन अनाज",
        rec_ft_kids: "छोटे बच्चों के साथ",
        rec_ft_adults: "वयस्क परिवार",
        rec_ft_elderly: "बुजुर्ग सदस्यों के साथ",
        rec_size_small: "1-2 सदस्य",
        rec_size_medium: "3-4 सदस्य",
        rec_size_large: "5+ सदस्य",
        rec_why_health: "आपके स्वास्थ्य के लिए अनुकूलित",
        rec_why_family: "आपके परिवार के लिए कस्टमाइज़ किया गया",
        rec_why_style: "आपकी खाना पकाने की शैली का समर्थन करता है",

        // Order Summary
        order_logo_sub: "आपका ऑर्डर",
        order_summary_title: "ऑर्डर सारांश ✦",
        order_pack_title: "आपका पारिवारिक पोषण पैक",
        order_added_title: "जोड़े गए उत्पाद",
        order_custom_title: "कस्टमाइज़ेशन",
        order_grind: "पिसाई का प्रकार",
        order_cycle: "नियोजन चक्र",
        order_footer_note: "✦ ताजा पिसा हुआ · आपके लिए कस्टमाइज़ किया गया · 100% प्राकृतिक",
        order_edit: "ऑर्डर संपादित करें",
        order_edit_sub: "चयन संशोधित करें",
        order_proceed: "बिलिंग के लिए आगे बढ़ें",
        order_proceed_sub: "काउंटर भुगतान",
        order_online: "अभी ऑनलाइन भुगतान करें",
        order_online_sub: "यूपीआई / कार्ड",

        // Success Screen
        suc_title: "आशीर्वाद से!",
        suc_sub: "आपकी पोषण योजना तैयार है। कृपया बिलिंग काउंटर पर जाएँ।",
        suc_ref_lbl: "ऑर्डर संदर्भ",
        suc_ref_note: "काउंटर पर यह कोड साझा करें",
        suc_reset: "नया सत्र शुरू करें",

        // Toasts & Messages
        toast_cook_req: "कृपया अपनी खाना पकाने की शैली चुनें",
        toast_added: "जोड़ा गया",
        toast_removed: "हटाया गया",
        toast_phone_req: "कृपया एक वैध फोन नंबर दर्ज करें",
        toast_otp_req: "कृपया 4-अंकों का ओटीपी दर्ज करें",
        toast_name_req: "कृपया अपना नाम दर्ज करें",
        toast_select_req: "कृपया एक चयन करें"
    }
};

/**
 * Returns the translated string for a given key based on current language
 */
function T(key) {
    const lang = S.lang || 'en';
    return LANG[lang][key] || LANG['en'][key] || key;
}

/**
 * Persists the language choice and updates the UI
 */
function chooseLang(l) {
    S.lang = l;
    applyTranslations();
    show('s-entry');
}

/**
 * Traverses DOM and updates all elements with data-i18n attribute
 */
function applyTranslations() {
    // Standard elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = T(key);
        
        if (el.tagName === 'INPUT') {
            el.placeholder = translation;
        } else {
            el.innerHTML = translation;
        }
    });

    // Update Step indicators (.prog-label)
    document.querySelectorAll('.prog-label').forEach((el) => {
        const text = el.innerText; // e.g. "Step 1 of 6"
        const match = text.match(/\d+/g);
        if (match && match.length >= 2) {
            const current = match[0];
            const total = match[1];
            el.innerText = `${T('quiz_step')} ${current} ${T('quiz_of')}`;
        }
    });
}
