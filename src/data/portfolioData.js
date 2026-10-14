export const portfolioCategories = [
  "All",
  "Websites",
  "Mobile Apps",
  "UI/UX Design",
  "Branding",
  "AI & Automation",
  "Digital Marketing"
];

export const portfolioProjects = [
  {
    id: "nexus-flow-saas",
    title: "NexusFlow Analytics Dashboard",
    category: "Websites",
    type: "Concept Demonstration",
    badge: "Web Platform",
    tagline: "Real-time telemetry and predictive operational intelligence for modern infrastructure.",
    shortDescription: "A high-performance analytics web application with sub-second data streaming, interactive canvas charts, and modular widgets.",
    fullDescription: "Built as an architectural demonstration of a scalable enterprise telemetry platform. NexusFlow visualizes distributed server health, API traffic bottlenecks, and latency histograms with zero UI lag.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    mockupType: "dashboard",
    highlights: [
      "Sub-100ms dashboard widget re-rendering",
      "Interactive time-series query builder",
      "Custom dark-mode glassmorphic interface",
      "Responsive layout optimized for dual-screen NOC setups"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/nexusflow",
    challenge: "Enterprise operations teams require real-time system visibility without UI latency or cognitive clutter.",
    solution: "Engineered a lightweight React component framework connected to buffered websocket streams with optimized SVG rendering."
  },
  {
    id: "aura-pay-mobile",
    title: "AuraPay Mobile Wallet",
    category: "Mobile Apps",
    type: "Concept Demonstration",
    badge: "iOS & Android",
    tagline: "Minimalist contactless financial management and digital asset storage.",
    shortDescription: "A fluid cross-platform fintech application featuring biometric authorization, instant peer transfers, and categorized spending analytics.",
    fullDescription: "Demonstrating modern mobile UX for next-generation finance. Designed with native fluid gestures, biometric security, and offline transaction buffering.",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Biometrics API"],
    mockupType: "mobile",
    highlights: [
      "FaceID / TouchID instant authentication flows",
      "Fluid 60fps micro-animations on transaction cards",
      "Offline vault synchronization with encrypted SQLite storage",
      "Instant currency conversion matrix"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/aurapay",
    challenge: "Traditional mobile banking apps suffer from slow cold starts and fragmented navigational flows.",
    solution: "Implemented an offline-first architecture with localized state caching and a unified 3-tap transaction checkout flow."
  },
  {
    id: "lumina-design-system",
    title: "Lumina Design System & UI Kit",
    category: "UI/UX Design",
    type: "Concept Demonstration",
    badge: "Design System",
    tagline: "Comprehensive Figma design tokens and component ecosystem for enterprise software.",
    shortDescription: "A multi-brand design system featuring 140+ accessible UI components, WCAG 2.1 compliance, and dark/light mode token structures.",
    fullDescription: "Created to showcase our rigorous UI/UX methodology. Includes complete atomic design documentation, interactive prototyping tokens, and developer code parity specs.",
    technologies: ["Figma", "Design Tokens", "Atomic Design", "WCAG 2.1 AA", "Storybook Specs"],
    mockupType: "design",
    highlights: [
      "140+ accessible interactive UI components",
      "Semantic token architecture mapped to Tailwind CSS",
      "Cross-platform responsive layout breakpoints",
      "Automated Figma variable modes for dark and high-contrast"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/lumina-system",
    challenge: "Design and engineering teams frequently lose velocity due to inconsistent components and broken token parity.",
    solution: "Structured a strict atomic design library with semantic CSS variable mapping directly aligned with production code."
  },
  {
    id: "vanguard-brand-identity",
    title: "Vanguard Robotics Brand Identity",
    category: "Branding",
    type: "Concept Demonstration",
    badge: "Brand & Visual Identity",
    tagline: "Modern brand language for an autonomous logistics and robotics venture.",
    shortDescription: "Complete visual identity encompassing vector logo marks, futuristic typography guides, social media templates, and 3D asset guidelines.",
    fullDescription: "A comprehensive brand identity exploration showcasing how technical authority and futuristic aesthetics can merge into a trustworthy market presence.",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Guidelines", "Typography"],
    mockupType: "branding",
    highlights: [
      "Geometric responsive logo lockup adaptable from 16px favicon to billboards",
      "Bespoke brand book specifying color contrasts and safe zones",
      "30+ vector social media graphics & pitch deck templates",
      "Dynamic stationery and digital media asset kits"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/vanguard-brand",
    challenge: "Deep tech ventures often struggle to convey both technical precision and human-friendly accessibility.",
    solution: "Developed a crisp geometric identity utilizing deep oceanic blues, electric cyan accents, and clear structured typography."
  },
  {
    id: "synthex-ai-orchestration",
    title: "Synthex Intelligent Support Agent",
    category: "AI & Automation",
    type: "Concept Demonstration",
    badge: "AI Agent & RAG",
    tagline: "Autonomous knowledge base retrieval and multi-channel customer triage pipeline.",
    shortDescription: "An AI-powered support pipeline that classifies inbound inquiries, queries vector embeddings, and drafts contextual resolution summaries.",
    fullDescription: "Demonstrating automated business workflows. Connects conversational LLM APIs to an enterprise document vector database with human-in-the-loop fallback safeguards.",
    technologies: ["Python", "FastAPI", "OpenAI API", "Vector Embeddings", "n8n", "Docker"],
    mockupType: "ai",
    highlights: [
      "Retrieval-Augmented Generation (RAG) with context attribution",
      "Automated ticket priority tagging and sentiment analysis",
      "Webhook connections to Slack, Zendesk, and Discord",
      "Privacy-first data sanitization before LLM processing"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/synthex-ai",
    challenge: "Customer support teams waste up to 40% of their workday answering redundant Tier-1 technical documentation queries.",
    solution: "Deployed a hybrid vector search pipeline that provides instant, source-cited responses while routing complex tickets to human experts."
  },
  {
    id: "apex-growth-seo",
    title: "Apex Cloud SEO & Growth Engine",
    category: "Digital Marketing",
    type: "Concept Demonstration",
    badge: "Organic Search & CRO",
    tagline: "Topical authority architecture and conversion funnel optimization framework.",
    shortDescription: "A comprehensive search optimization strategy blueprint featuring programmatic schema, competitive gap analysis, and high-converting landing pages.",
    fullDescription: "A strategic marketing blueprint displaying our technical SEO and content cluster framework designed to systematically capture high-intent B2B search terms.",
    technologies: ["Technical SEO", "Schema Markup", "Google Analytics 4", "Search Console", "CRO Frameworks"],
    mockupType: "growth",
    highlights: [
      "Structured data JSON-LD implementation for rich search snippets",
      "Topical cluster architecture targeting high-intent commercial keywords",
      "A/B tested high-conversion landing page templates",
      "Data-driven content refresh schedules"
    ],
    livePreviewUrl: "https://demo.nextgen-digitel.com/apex-growth",
    challenge: "B2B tech companies often generate untargeted traffic that fails to convert into qualified pipeline opportunities.",
    solution: "Re-engineered website information architecture around buyer intent clusters with frictionless booking micro-actions."
  }
];
