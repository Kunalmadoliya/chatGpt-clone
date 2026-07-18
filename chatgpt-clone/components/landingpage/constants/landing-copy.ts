export const NAVIGATION_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const BENTO_FEATURES = [
  {
    title: "Context-Aware Memory",
    description: "Recalls every detail of past conversations. Never repeat yourself again. Seamlessly resume work across sessions.",
    span: "md:col-span-2",
    visualType: "code-stream",
  },
  {
    title: "Instant Latency",
    description: "Stream responses in milliseconds. Powered by edge-optimized inference pipelines for zero-wait execution.",
    span: "md:col-span-2",
    visualType: "latency-graph",
  },
  {
    title: "Multi-Modal Logic",
    description: "Process text, code, and structured data simultaneously. Designed for complex reasoning and workflow automation.",
    span: "md:col-span-4",
    visualType: "grid",
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring the capabilities of Nexus AI.",
    features: ["Standard Response Speed", "Basic Context Window", "Community Support", "Web Search Access"],
    buttonLabel: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$20",
    interval: "/mo",
    description: "Unleash maximum productivity with advanced models.",
    features: ["Priority Processing", "Maximum Context Limits", "Early Access to Features", "Custom Workflows"],
    buttonLabel: "Upgrade to Pro",
    highlight: true,
  }
];

export const FAQS = [
  {
    question: "How does the context memory work?",
    answer: "Nexus AI intelligently summarizes and stores key details from your conversations in an encrypted vault, allowing it to seamlessly recall your preferences, project details, and past context without requiring you to restate them.",
  },
  {
    question: "Is my data used for training?",
    answer: "No. Your data belongs entirely to you. We maintain a strict zero-retention policy on enterprise and pro tiers. Conversation data is never used to train our base models.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely. You can modify your subscription at any time. Changes will be pro-rated and reflected immediately on your billing cycle.",
  },
  {
    question: "What makes Nexus AI faster?",
    answer: "We utilize custom silicon and aggressively optimized edge-inference routing, allowing responses to stream with sub-100ms latency globally.",
  }
];