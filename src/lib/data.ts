export const personal = {
  name: "Adegbesan Joshua Temitope",
  shortName: "Joshua Temitope",
  location: "Lagos, Nigeria",
  title: "AI Product Designer • Builder • Product Strategist",
  email: "joshuaadegbesan00@gmail.com",
  linkedin: "https://linkedin.com/in/adegbesan-joshua-95384b220",
  behance: "https://www.behance.net/adegbesanjoshua",
  portfolio: "https://joshuaadegbesan-portfolio.lovable.app",
}

export interface Project {
  slug: string
  title: string
  tag: string
  tags: string[]
  description: string
  image: string
  role: string
  year: string
  tools: string
  overview: string
  problem: string
  research: string
  strategy: string
  solution: string
  results: string
  lessons: string
  featured: boolean
  sections?: { num: string; title: string; content: string }[]
}

export const projects: Project[] = [
  {
    slug: "lagago",
    title: "Lagago Logistics",
    tag: "Product Design",
    tags: ["Product Design", "UX Research", "Mobile App"],
    image: "/Lagago%20Logistics%20Case%20Study.webp",
    description: "Making package delivery and shipment tracking simpler for businesses and customers across Nigeria.",
    role: "Lead Product Designer",
    year: "2025",
    tools: "Figma, FigJam, Maze",
    overview: "Lagago is a Lagos based logistics platform designed to make courier services faster, more transparent and user friendly. Unlike traditional delivery apps that often feel confusing or unreliable, Lagago focuses on clear pricing, intuitive design and efficient rider communication.",
    problem: "Most courier apps in Lagos suffer from a lack of transparency, leaving users unsure about their deliveries.\n\nKey issues include:\n• Complex onboarding flows that confuse new users\n• Outdated and unintuitive UI UX systems\n• Unclear pricing models that reduce trust\n• Poor rider communication (slow responses and lack of real time updates)\n\nImpact: These issues lead to frustrated users, reduced loyalty and high app abandonment rates.",
    research: "Research insights revealed major trust and communication gaps in existing logistics platforms, especially among frequent online shoppers and small business owners in Lagos.\n\nKey findings:\n• 73% of users have experienced a \"lost\" package that was later found misplaced rather than actually lost\n• Users value real time visibility and direct communication with riders\n• Transparency is a major factor in platform trust and retention",
    strategy: "The product was reframed around three core principles:\n\n• Know where it is\n• Know when it arrives\n• Know what to do if something goes wrong\n\nThis helped simplify the experience and align all features around user certainty.",
    solution: "Lagago introduces a tracking first logistics experience designed to remove uncertainty from deliveries.\n\nCore features include:\n• Clear upfront pricing based on package size\n• Step by step onboarding flow\n• Real time tracking with live map updates\n• Direct rider communication (chat and call features)\n• Flexible delivery options (pickup or drop off at hub)\n• Wallet based system for fast and secure payments",
    results: "Prototype testing showed improved task completion rates and higher user confidence in tracking and delivery updates compared to traditional logistics apps.",
    lessons: "In markets with low trust in logistics systems, design must make invisible processes visible through clarity, transparency and real time feedback.",
    featured: true,
    sections: [
      { num: "01", title: "Overview", content: "Lagago is a Lagos based logistics platform designed to make courier services faster, more transparent and user friendly. Unlike traditional delivery apps that often feel confusing or unreliable, Lagago focuses on clear pricing, intuitive design and efficient rider communication." },
      { num: "02", title: "Problem Statement", content: "Most courier apps in Lagos suffer from a lack of transparency, leaving users unsure about their deliveries.\n\nKey issues include:\n• Complex onboarding flows that confuse new users\n• Outdated and unintuitive UI UX systems\n• Unclear pricing models that reduce trust\n• Poor rider communication (slow responses and lack of real time updates)\n\nImpact: These issues lead to frustrated users, reduced loyalty and high app abandonment rates." },
      { num: "03", title: "User Research", content: "Research insights revealed major trust and communication gaps in existing logistics platforms, especially among frequent online shoppers and small business owners in Lagos.\n\nKey findings:\n• 73% of users have experienced a \"lost\" package that was later found misplaced rather than actually lost\n• Users value real time visibility and direct communication with riders\n• Transparency is a major factor in platform trust and retention" },
      { num: "04", title: "Strategy", content: "The product was reframed around three core principles:\n\n• Know where it is\n• Know when it arrives\n• Know what to do if something goes wrong\n\nThis helped simplify the experience and align all features around user certainty." },
      { num: "05", title: "Solution", content: "Lagago introduces a tracking first logistics experience designed to remove uncertainty from deliveries.\n\nCore features include:\n• Clear upfront pricing based on package size\n• Step by step onboarding flow\n• Real time tracking with live map updates\n• Direct rider communication (chat and call features)\n• Flexible delivery options (pickup or drop off at hub)\n• Wallet based system for fast and secure payments" },
      { num: "06", title: "Design Focus", content: "The interface prioritizes clarity, speed and transparency, ensuring users can always understand the status of their delivery without confusion." },
      { num: "07", title: "Outcome", content: "Prototype testing showed improved task completion rates and higher user confidence in tracking and delivery updates compared to traditional logistics apps." },
      { num: "08", title: "Key Lesson", content: "In markets with low trust in logistics systems, design must make invisible processes visible through clarity, transparency and real time feedback." },
    ],
  },
  {
    slug: "skana",
    title: "Skana Payment Platform",
    tag: "Product Design",
    tags: ["Product Design", "Fintech", "Mobile App"],
    image: "/Skana%20App%20%20Case%20Study.webp",
    description: "A modern financial platform that enables users to scan and pay, send money instantly, and transfer funds using usernames instead of account numbers.",
    role: "UI/UX Designer",
    year: "2025",
    tools: "Figma",
    overview: "Skana is a modern payment platform designed to simplify everyday transactions in Nigeria and across Africa. It enables users and merchants to send or receive money instantly using QR codes, store names, or @usernames — without relying on traditional bank account details.",
    problem: "Digital payments in Nigeria and across Africa often feel slow, complex, and unreliable. Users frequently experience:\n\nLong account number entry\nFailed or delayed transactions\nConfusing interfaces\nSlow or missing payment confirmations\nMultiple steps before completing a simple payment\n\nThis creates friction and reduces trust in digital payment systems.",
    research: "To understand how people in Nigeria currently make digital payments, I conducted an online questionnaire with 16 respondents. The goal was to identify habits, pain points, trust levels, and expectations around digital payments.\n\nKey Insights:\n\nSpeed, simplicity, and security are the most important factors when choosing a payment app\nThere is strong interest in QR code payments, making it a core feature users expect\nUsers want clear confirmation after every transaction to build trust\nMany users prefer fewer steps and more intuitive payment flows",
    strategy: "The goal of Skana is to create a fast, trustworthy, and human-centered payment experience that works seamlessly across physical and digital environments.\n\nKey objectives:\n\nReduce the stress of long account numbers and failed transfers\nDeliver real-time payment confirmation for users and merchants\nEnable seamless payments across shops, restaurants, schools, small businesses, and online platforms\nEnsure clarity through simple receipts, verified merchant badges, and minimal steps",
    solution: "Skana simplifies payments by removing traditional banking friction and introducing identity-based transactions.\n\nUsers can pay using:\n\nQR Codes\nStore Names\n@Usernames\n\nNo long account numbers.\nNo complex forms.\nJust instant, frictionless transactions.",
    results: "UI/UX Designer responsible for:\n\nUser research\nProduct strategy\nInteraction design\nWireframes and prototyping in Figma\nHigh-fidelity UI design",
    lessons: "",
    featured: true,
    sections: [
      { num: "01", title: "Overview", content: "Skana is a modern payment platform designed to simplify everyday transactions in Nigeria and across Africa. It enables users and merchants to send or receive money instantly using QR codes, store names, or @usernames — without relying on traditional bank account details." },
      { num: "02", title: "Project Goal", content: "The goal of Skana is to create a fast, trustworthy, and human-centered payment experience that works seamlessly across physical and digital environments.\n\nKey objectives:\n\nReduce the stress of long account numbers and failed transfers\nDeliver real-time payment confirmation for users and merchants\nEnable seamless payments across shops, restaurants, schools, small businesses, and online platforms\nEnsure clarity through simple receipts, verified merchant badges, and minimal steps" },
      { num: "03", title: "Problem Statement", content: "Digital payments in Nigeria and across Africa often feel slow, complex, and unreliable. Users frequently experience:\n\nLong account number entry\nFailed or delayed transactions\nConfusing interfaces\nSlow or missing payment confirmations\nMultiple steps before completing a simple payment\n\nThis creates friction and reduces trust in digital payment systems." },
      { num: "04", title: "Solution", content: "Skana simplifies payments by removing traditional banking friction and introducing identity-based transactions.\n\nUsers can pay using:\n\nQR Codes\nStore Names\n@Usernames\n\nNo long account numbers.\nNo complex forms.\nJust instant, frictionless transactions." },
      { num: "05", title: "User Research", content: "To understand how people in Nigeria currently make digital payments, I conducted an online questionnaire with 16 respondents. The goal was to identify habits, pain points, trust levels, and expectations around digital payments.\n\nKey Insights:\n\nSpeed, simplicity, and security are the most important factors when choosing a payment app\nThere is strong interest in QR code payments, making it a core feature users expect\nUsers want clear confirmation after every transaction to build trust\nMany users prefer fewer steps and more intuitive payment flows" },
      { num: "06", title: "My Role", content: "UI/UX Designer responsible for:\n\nUser research\nProduct strategy\nInteraction design\nWireframes and prototyping in Figma\nHigh-fidelity UI design" },
    ],
  },
  {
    slug: "cirql",
    title: "Cirql",
    tag: "Product Design",
    tags: ["Product Design", "Event Tech", "Mobile App"],
    image: "/Cirql%20Event%20Networking%20Case%20Study.png",
    description: "Creating meaningful networking experiences through AI-powered attendee matching and event engagement.",
    role: "Product Designer",
    year: "2025",
    tools: "Figma",
    overview: "Cirql is an AI powered networking platform designed to help conference and tech event attendees discover relevant people, initiate meaningful conversations, and build professional relationships before, during, and after events.",
    problem: "Conference networking is often inefficient and awkward. Attendees struggle to identify the right people to meet and frequently rely on chance encounters, business cards, or interrupted conversations that rarely lead to lasting connections.",
    research: "Conducted questionnaire based research with conference and tech event attendees to understand how people currently network and identify the key barriers preventing meaningful connections.\n\nKey findings showed that attendees:\n• Struggle to find relevant people to talk to\n• Rely heavily on chance encounters\n• Often feel hesitant to initiate conversations\n• Lack context for why they should connect with someone",
    strategy: "Position AI as a social bridge rather than a complex feature. Cirql uses contextual signals to surface shared interests and provide users with natural, low friction \"reasons to connect\" before starting conversations.",
    solution: "• Smart attendee matching based on interests and context\n• Shared interest discovery to enable natural conversation starters",
    results: "Delivered a refined end to end networking experience that improves how attendees discover and engage with relevant people at events, with a strong focus on clarity, intent, and real world usability.",
    lessons: "Designing for social environments requires more than usability it requires accounting for identity, hesitation, and self presentation anxiety in real world interactions.",
    featured: true,
    sections: [
      { num: "01", title: "Overview", content: "Cirql is an AI powered networking platform designed to help conference and tech event attendees discover relevant people, initiate meaningful conversations, and build professional relationships before, during, and after events." },
      { num: "02", title: "Problem", content: "Conference networking is often inefficient and awkward. Attendees struggle to identify the right people to meet and frequently rely on chance encounters, business cards, or interrupted conversations that rarely lead to lasting connections." },
      { num: "03", title: "Research and Discovery", content: "Conducted questionnaire based research with conference and tech event attendees to understand how people currently network and identify the key barriers preventing meaningful connections.\n\nKey findings showed that attendees:\n• Struggle to find relevant people to talk to\n• Rely heavily on chance encounters\n• Often feel hesitant to initiate conversations\n• Lack context for why they should connect with someone" },
      { num: "04", title: "Strategy", content: "Position AI as a social bridge rather than a complex feature. Cirql uses contextual signals to surface shared interests and provide users with natural, low friction \"reasons to connect\" before starting conversations." },
      { num: "05", title: "Solution", content: "• Smart attendee matching based on interests and context\n• Shared interest discovery to enable natural conversation starters" },
      { num: "06", title: "Results", content: "Delivered a refined end to end networking experience that improves how attendees discover and engage with relevant people at events, with a strong focus on clarity, intent, and real world usability." },
      { num: "07", title: "Lessons", content: "Designing for social environments requires more than usability it requires accounting for identity, hesitation, and self presentation anxiety in real world interactions." },
    ],
  },
  {
    slug: "trusthire",
    title: "TrustHire AI",
    tag: "Product Design",
    tags: ["Product Design", "AI Systems", "HRTech"],
    image: "/TrustHireAI%20Case%20Study.webp",
    description: "Helping job seekers identify and validate legitimate job opportunities while protecting them from fraudulent job listings and recruitment scams.",
    role: "Product Designer",
    year: "2025",
    tools: "Figma",
    overview: "TrustHire AI is an AI powered recruitment safety platform that helps job seekers verify job opportunities, detect potential scams, and manage applications securely in one place.",
    problem: "Job seekers struggle to quickly and confidently identify fraudulent job offers, leaving them vulnerable to increasingly sophisticated scams that often appear legitimate, spread across informal channels like WhatsApp and email, and exploit urgency and trust resulting in financial loss, wasted time, and reduced confidence in online job opportunities.",
    research: "Analyzed hiring patterns and job seeking behaviors across 5 Lagos based tech companies and observed common trust and verification gaps in the recruitment process.",
    strategy: "Focus on trust and clarity by introducing AI driven verification that helps users validate job opportunities before engaging, reducing exposure to scams and unreliable listings.",
    solution: "TrustHire AI helps job seekers quickly verify opportunities, detect potential scams, and manage applications in one secure platform bringing clarity and confidence to the job search process.\n\nKey features:\n• Paste job link to instantly scan and verify authenticity\n• Upload job descriptions or screenshots for AI analysis\n• Share job details for quick verification feedback\n\nAI outputs:\n• Safe\n• Suspicious\n• Scam",
    results: "",
    lessons: "When a product's core value is trust and safety, every UI and interaction must reinforce clarity, transparency, and user confidence.",
    featured: true,
    sections: [
      { num: "01", title: "Overview", content: "TrustHire AI is an AI powered recruitment safety platform that helps job seekers verify job opportunities, detect potential scams, and manage applications securely in one place." },
      { num: "02", title: "Problem", content: "Job seekers struggle to quickly and confidently identify fraudulent job offers, leaving them vulnerable to increasingly sophisticated scams that often appear legitimate, spread across informal channels like WhatsApp and email, and exploit urgency and trust resulting in financial loss, wasted time, and reduced confidence in online job opportunities." },
      { num: "03", title: "Research", content: "Analyzed hiring patterns and job seeking behaviors across 5 Lagos based tech companies and observed common trust and verification gaps in the recruitment process." },
      { num: "04", title: "Strategy", content: "Focus on trust and clarity by introducing AI driven verification that helps users validate job opportunities before engaging, reducing exposure to scams and unreliable listings." },
      { num: "05", title: "Solution", content: "TrustHire AI helps job seekers quickly verify opportunities, detect potential scams, and manage applications in one secure platform bringing clarity and confidence to the job search process.\n\nKey features:\n• Paste job link to instantly scan and verify authenticity\n• Upload job descriptions or screenshots for AI analysis\n• Share job details for quick verification feedback\n\nAI outputs:\n• Safe\n• Suspicious\n• Scam" },
      { num: "06", title: "Lessons", content: "When a product's core value is trust and safety, every UI and interaction must reinforce clarity, transparency, and user confidence." },
    ],
  },
  {
    slug: "bankbuddy",
    title: "Bank Buddy",
    tag: "Conversational AI",
    tags: ["Conversational AI", "Accessibility", "Fintech"],
    image: "/Bank%20Buddy%20Case%20study.png",
    description: "A conversational finance assistant designed for accessibility and financial inclusion.",
    role: "Product Designer",
    year: "2024",
    tools: "Figma, FigJam, Maze",
    overview: "Bank Buddy is a conversational banking assistant designed to make personal finance accessible.",
    problem: "Traditional banking apps are designed for financially literate users.",
    research: "Guerrilla research interviews with market traders and gig workers in Lagos.",
    strategy: "Design a banking interface that speaks like a trusted friend who happens to understand finance.",
    solution: "A chat-first banking interface where users can transfer money, check balances through natural language.",
    results: "Usability testing: 94% task success rate on 'send money' vs 67% on traditional banking app.",
    lessons: "Accessibility is not a checklist item — it's a design philosophy.",
    featured: false,
  },
]

export const products = [
  {
    slug: "crampai",
    name: "CrampAI",
    emoji: "🧠",
    url: "https://crampai-10.vercel.app/",
    iconBg: "rgba(124, 111, 255, 0.1)",
    iconColor: "#7C6FFF",
    overview: "Built and launched CRAMPAI, an AI-powered menstrual pain and cycle health assistant that helps women understand their cycles, predict symptoms, and make informed health decisions through personalized AI insights.",
    tags: ["AI", "HealthTech", "React"],
  },
  {
    slug: "grade",
    name: "Grade Calculator",
    emoji: "📊",
    url: "https://grade-calculator-gray.vercel.app/",
    iconBg: "rgba(34, 197, 94, 0.1)",
    iconColor: "#22C55E",
    overview: "An academic planning tool that helps students track, predict, and improve their performance.",
    tags: ["EdTech", "React", "Data Visualization"],
  },
  {
    slug: "calorie",
    name: "Calorie Tracker",
    emoji: "🥗",
    url: "https://calorie-tracker-nqey7iypp-temitech-s-projects.vercel.app/",
    iconBg: "rgba(249, 115, 22, 0.1)",
    iconColor: "#F97316",
    overview: "A lightweight nutrition-tracking experience designed for simplicity and everyday use.",
    tags: ["Health", "React", "UX"],
  },
  {
    slug: "bird",
    name: "Bird Game",
    emoji: "🐦",
    url: "https://game-kappa-six-97.vercel.app/",
    iconBg: "rgba(6, 182, 212, 0.1)",
    iconColor: "#06B6D4",
    overview: "An interactive browser game exploring animations, game mechanics, and engaging user experiences.",
    tags: ["Game Development", "Canvas", "JavaScript"],
  },
]

export const capabilities = [
  { category: "Design", name: "Product Design" },
  { category: "Design", name: "UX Research" },
  { category: "Design", name: "Design Systems" },
  { category: "Design", name: "Prototyping" },
  { category: "Strategy", name: "AI Product Thinking" },
  { category: "Strategy", name: "Product Strategy" },
  { category: "Build", name: "React" },
  { category: "Build", name: "Next.js" },
  { category: "Build", name: "Tailwind CSS" },
  { category: "Build", name: "JavaScript" },
  { category: "AI", name: "Prompt Engineering" },
  { category: "AI", name: "AI Workflows" },
]

export const experience = [
  {
    date: "Oct 2025 — Feb 2026",
    company: "HealthAI",
    role: "UI/UX Designer",
    points: [
      "Designed AI-powered healthcare experiences, including onboarding flows and patient-centered workflows",
      "Created multi-step authentication and onboarding systems from concept to high-fidelity design",
      "Collaborated with engineers to refine and ship product features",
    ],
  },
  {
    date: "2025",
    company: "HNG Internship",
    role: "UI/UX Design Intern",
    points: [
      "Delivered end-to-end product design solutions in a fast-paced, collaborative environment",
      "Built wireframes and high-fidelity prototypes under strict deadlines",
      "Solved real-world UX problems within a structured product team setting",
    ],
  },
]
