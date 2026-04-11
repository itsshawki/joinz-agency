export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  span?: string;
  badge?: string;
  badgeSub?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  ctaText: string;
  secondaryCta?: string;
  secondaryCtaAnchor?: string;

  sectionTitle: string;
  sectionSubtitle: string;

  mainFeature: {
    icon: string;
    title: string;
    description: string;
    bgIcon: string;
    footerNote?: string;
  };
  sideFeature: {
    icon: string;
    title: string;
    description: string;
    statLabel: string;
    statIcon: string;
  };
  smallFeatures: ServiceFeature[];

  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];

  imageUrl: string;
  statValue: string;
  statLabel: string;

  closingTitle: string;
  closingHighlight: string;
  closingDescription: string;
  closingCta: string;

  // Optional: media logos for PR page
  mediaLogos?: string[];
}

export const services: ServiceData[] = [
  {
    slug: "verification",
    title: "Social Media Verification",
    tagline: "Authority Protocol",
    heroTitle: "Social Media",
    heroHighlight: "Verification",
    heroDescription:
      "Get verified on major platforms and build real trust with your audience. Stand out, protect your identity, and make your presence official.",
    ctaText: "Start Verification",
    secondaryCta: "View Requirements",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Multi-Platform Verification",
    sectionSubtitle: "Verification Arsenal",
    mainFeature: {
      icon: "verified",
      title: "Platform-Native Verification",
      description:
        "We help you get verified on major platforms through official and trusted channels. Simple, secure, and fully compliant.",
      bgIcon: "shield",
    },
    sideFeature: {
      icon: "newspaper",
      title: "Media Placement",
      description:
        "We secure strong media coverage to support your verification and increase your credibility.",
      statLabel: "Success Rate",
      statIcon: "trending_up",
    },
    smallFeatures: [
      { icon: "badge", title: "Instagram Verified", description: "Get the blue badge on Instagram through official Meta processes." },
      { icon: "verified_user", title: "Twitter/X Verified", description: "Get verified on X for individuals and brands." },
      { icon: "play_circle", title: "YouTube & TikTok", description: "Verification support for creators and official channels." },
    ],
    processTitle: "The Verification Framework",
    processSubtitle: "Acquisition Process",
    processSteps: [
      { number: "01", title: "Eligibility Check", description: "We review your profile and see what’s needed to get verified." },
      { number: "02", title: "Media Support", description: "We build the right presence to increase your chances." },
      { number: "03", title: "Submission", description: "We handle the full process until your verification is approved." },
    ],
    imageUrl: "/images/verification.jpg",
    statValue: "98%",
    statLabel: "Success Rate",
    closingTitle: "Get Your",
    closingHighlight: "Blue Check",
    closingDescription: "Verification builds trust. We handle everything for you.",
    closingCta: "Start Verification",
  },
  {
    slug: "reputation",
    title: "Reputation Management",
    tagline: "Narrative Control",
    heroTitle: "Reputation",
    heroHighlight: "Management",
    heroDescription:
      "We help you take control of what people see when they search your name — removing the negative and pushing forward what actually represents you.",
    ctaText: "Control Your Narrative",
    secondaryCta: "View Methods",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Digital Shield Systems",
    sectionSubtitle: "Reputation Arsenal",
    mainFeature: {
      icon: "security",
      title: "Reputation Monitoring",
      description:
        "We continuously track what’s being said about you online across search, social media, and news — so nothing catches you off guard.",
      bgIcon: "radar",
    },
    sideFeature: {
      icon: "auto_fix_high",
      title: "Content Removal",
      description:
        "We help remove harmful or misleading content and make sure your online image reflects who you truly are.",
      statLabel: "Active 24/7",
      statIcon: "visibility",
    },
    smallFeatures: [
      { icon: "search", title: "Search Protection", description: "We improve what shows up when people search your name." },
      { icon: "rate_review", title: "Review Management", description: "We manage and improve your online reviews to build trust." },
      { icon: "gavel", title: "Legal Removal", description: "We handle legal processes to remove damaging content when necessary." },
    ],
    processTitle: "Narrative Control Framework",
    processSubtitle: "Process Workflow",
    processSteps: [
      { number: "01", title: "Profile Review", description: "We analyze your online presence to understand what needs improvement." },
      { number: "02", title: "Strategy Execution", description: "We take action to improve your image through content, search, and platform optimization." },
      { number: "03", title: "Ongoing Protection", description: "We continuously monitor and protect your reputation from new risks." },
    ],
    imageUrl: "/images/reputation.jpg",
    statValue: "24/7",
    statLabel: "Monitoring",
    closingTitle: "Protect Your",
    closingHighlight: "Reputation",
    closingDescription: "Your reputation is your most valuable asset. Let us guard it with military precision.",
    closingCta: "Start Protection",
  },
  {
    slug: "recovery",
    title: "Account Recovery",
    tagline: "Asset Retrieval",
    heroTitle: "Account",
    heroHighlight: "Recovery",
    heroDescription:
      "Lost access to your account? We recover hacked or disabled profiles quickly and securely through trusted channels.",
    ctaText: "Recover Account",
    secondaryCta: "View Process",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Recovery Capabilities",
    sectionSubtitle: "Recovery Arsenal",
    mainFeature: {
      icon: "restore",
      title: "Advanced Recovery",
      description: "We use multiple recovery paths at once to restore access as quickly as possible.",
      bgIcon: "key",
    },
    sideFeature: {
      icon: "speed",
      title: "Fast Response",
      description: "Priority handling for urgent cases requiring immediate action.",
      statLabel: "Avg. 72h Recovery",
      statIcon: "timer",
    },
    smallFeatures: [
      { icon: "lock_open", title: "Hacked Accounts", description: "We restore access and secure your account after unauthorized activity." },
      { icon: "block", title: "Disabled Accounts", description: "We handle appeals and work to reinstate suspended accounts." },
      { icon: "enhanced_encryption", title: "Security Protection", description: "We strengthen your account to prevent future issues." },
    ],
    processTitle: "Recovery Protocol",
    processSubtitle: "Process Workflow",
    processSteps: [
      { number: "01", title: "Account Review", description: "We assess your account status and identify the fastest recovery path." },
      { number: "02", title: "Recovery Process", description: "We take action through verified channels to restore your access." },
      { number: "03", title: "Account Protection", description: "We secure your account and monitor it to prevent future risks." },
    ],
    imageUrl: "/images/recovery.jpg",
    statValue: "72hr",
    statLabel: "Avg Recovery",
    closingTitle: "Get Your Account Back",
    closingHighlight: "Starting Today",
    closingDescription: "We handle everything for you. No stress, no confusion — just results.",
    closingCta: "Start Recovery",
  },
  {
    slug: "username",
    title: "Username Claim",
    tagline: "Digital Real Estate",
    heroTitle: "Premium",
    heroHighlight: "Username Claim",
    heroDescription:
      "Get the username you actually want — even if it's already taken. We help you secure inactive, claimed, or trademarked handles across all major platforms.",
    ctaText: "Claim Your Handle",
    secondaryCta: "View Process",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Digital Identity",
    sectionSubtitle: "Username Claim",
    mainFeature: {
      icon: "person_off", // Lucide-like: user-minus/person-off
      title: "Inactive Handles",
      description: "Is your username taken but not being used? We help you claim inactive handles through proven outreach and platform processes — and transfer them to you.",
      bgIcon: "alternate_email",
      footerNote: "Supporting all major platforms",
    },
    sideFeature: {
      icon: "verified_user", // Lucide-like: shield-check/verified-user
      title: "Trademark Claims",
      description: "Own the legal rights to a name? We handle trademark-based claims to recover usernames that belong to your brand.",
      statLabel: "Guaranteed Success",
      statIcon: "verified",
    },
    smallFeatures: [
      {
        icon: "person_search", // Lucide-like: search/person-search
        title: "Impersonation Removal",
        description: "Someone using your name or pretending to be you? We remove impersonators and secure your real identity across platforms.",
        span: "md:col-span-4"
      },
      {
        icon: "support_agent", // Lucide-like: head-set/support-agent
        title: "White-Glove Support",
        description: "You don’t deal with the process — we do. From start to finish, we handle everything with full privacy and direct support.",
        span: "md:col-span-8",
        badge: "Available 24/7",
        badgeSub: "Direct Support"
      },
    ],
    processTitle: "How It Works",
    processSubtitle: "Claim Process",
    processSteps: [
      {
        number: "01",
        title: "Check Availability",
        description: "We check if the handle can be claimed.\nFast and accurate."
      },
      {
        number: "02",
        title: "Prepare The Claim",
        description: "We handle everything needed to secure it.\nNo action required from you."
      },
      {
        number: "03",
        title: "Secure The Handle",
        description: "We complete the process and transfer it to you.\nFully managed."
      }
    ],
    imageUrl: "/images/username.jpg",
    statValue: "@yours",
    statLabel: "Every Platform",
    closingTitle: "Get Your",
    closingHighlight: "@Handle",
    closingDescription: "We secure the name before someone else does.",
    closingCta: "Start Claim",
  },
  {
    slug: "branding",
    title: "Branding & Design",
    tagline: "Identity Architecture",
    heroTitle: "Branding",
    heroHighlight: "& Design",
    heroDescription:
      "We build brands that look right everywhere. A cohesive visual system designed for authority and influence.",
    ctaText: "Start Your Brand",
    secondaryCta: "",
    secondaryCtaAnchor: "",
    sectionTitle: "Brand Identity",
    sectionSubtitle: "Logo & Identity",
    mainFeature: {
      icon: "palette",
      title: "Visual Identity",
      description: "A total visual system built for your digital presence. We ensure you look premium on every screen and platform.",
      bgIcon: "brush",
      footerNote: "Custom Design Systems",
    },
    sideFeature: {
      icon: "architecture",
      title: "Brand Strategy",
      description: "We define how you appear and speak. A clear strategy built for those who lead their industry.",
      statLabel: "Perfect Alignment",
      statIcon: "verified",
    },
    smallFeatures: [
      {
        icon: "fingerprint",
        title: "Logo & Marks",
        description: "Precision design for high-end recognition.",
        span: "md:col-span-4"
      },
      {
        icon: "rule",
        title: "Design Systems",
        description: "The rules that keep your brand sharp everywhere.",
        span: "md:col-span-8",
        badge: "Global Standard",
        badgeSub: "Ready to Scale"
      },
    ],
    processTitle: "The Process",
    processSubtitle: "Creative Flow",
    processSteps: [
      {
        number: "01",
        title: "The Strategy",
        description: "We find your unique edge.\nDefining how the world should see you."
      },
      {
        number: "02",
        title: "Creative Design",
        description: "We build the identity.\nFocusing on clean, high-impact visuals."
      },
      {
        number: "03",
        title: "Full Release",
        description: "We deliver the system.\nComplete assets ready for immediate use."
      },
    ],
    imageUrl: "/images/branding.jpg",
    statValue: "Top 1%",
    statLabel: "Visual Authority",
    closingTitle: "Own Your",
    closingHighlight: "Identity",
    closingDescription: "Build a brand that looks right everywhere.",
    closingCta: "Start Now",
  },
  {
    slug: "webdev",
    title: "Website Development",
    tagline: "Digital Engineering",
    heroTitle: "Websites That",
    heroHighlight: "Actually Work.",
    heroDescription:
      "We don't build websites — we engineer digital vaults. Every project is a bespoke creation with performance, security, and conversion as non-negotiable foundations.",
    ctaText: "Start Your Build",
    sectionTitle: "Built for Performance & Scale",
    sectionSubtitle: "Engineering Stack",
    mainFeature: {
      icon: "code",
      title: "Custom Architecture",
      description:
        "No templates. Every website is hand-coded from scratch using the latest frameworks — React, Next.js, and headless CMS architectures — optimized for sub-second load times and 100 Lighthouse scores.",
      bgIcon: "terminal",
    },
    sideFeature: {
      icon: "speed",
      title: "Performance",
      description:
        "Sub-second load times with 100/100 Core Web Vitals and Lighthouse scores.",
      statLabel: "100/100 score",
      statIcon: "bolt",
    },
    smallFeatures: [
      { icon: "devices", title: "Responsive Design", description: "Pixel-perfect across all devices from mobile to 4K displays." },
      { icon: "lock", title: "Security First", description: "Enterprise-grade security with DDoS protection and SSL hardening." },
      { icon: "analytics", title: "Conversion Optimized", description: "Data-driven layouts engineered for maximum conversion rates." },
    ],
    processTitle: "From Blueprint to Digital Vault",
    processSubtitle: "Development Process",
    processSteps: [
      { number: "01", title: "Discovery & Architecture", description: "Comprehensive requirements analysis, wireframing, and technical architecture planning." },
      { number: "02", title: "Design & Development", description: "Iterative design sprints with parallel development, rigorous code reviews, and performance benchmarking." },
      { number: "03", title: "Launch & Optimization", description: "Zero-downtime deployment, A/B testing integration, and ongoing performance monitoring." },
    ],
    imageUrl: "/images/webdev.jpg",
    statValue: "<1s",
    statLabel: "Load Time",
    closingTitle: "Build Your",
    closingHighlight: "Digital Vault",
    closingDescription: "Your website is the headquarters of your digital empire. Let's engineer it to perform.",
    closingCta: "Start Engineering",
  },
  {
    slug: "pr-media",
    title: "PR & Media",
    tagline: "Media Operations",
    heroTitle: "Strategic",
    heroHighlight: "PR & Media Dominance",
    heroDescription:
      "Get featured in the world's most prestigious publications. Our media network spans Forbes, Bloomberg, The New York Times, and 200+ tier-one outlets worldwide.",
    ctaText: "Get Featured",
    secondaryCta: "Media Network",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Top-Tier Coverage",
    sectionSubtitle: "Top platforms. Real visibility.",
    mainFeature: {
      icon: "newspaper",
      title: "Global Network",
      description: "We place your story where it matters.\nDirect access to major media platforms.",
      bgIcon: "public",
    },
    sideFeature: {
      icon: "hub",
      title: "Global Reach",
      description: "Worldwide visibility through top-tier editorial networks.",
      statLabel: "Global Network",
      statIcon: "public",
    },
    smallFeatures: [
      { icon: "edit_note", title: "Press Releases", description: "Clear press coverage across major platforms." },
      { icon: "podcasts", title: "Podcast & TV", description: "Appear on podcasts and media shows." },
      { icon: "crisis_alert", title: "Crisis Management", description: "Fast action to protect your reputation." },
    ],
    mediaLogos: ["Forbes", "Bloomberg", "NYT", "Vogue", "TechCrunch", "Reuters"],
    processTitle: "How It Works",
    processSubtitle: "The Process",
    processSteps: [
      { number: "01", title: "Shape Your Story", description: "Craft a story worth publishing." },
      { number: "02", title: "Reach The Right Editors", description: "We connect you with the right people." },
      { number: "03", title: "Get Published", description: "Your story goes live and gets seen." },
    ],
    imageUrl: "/images/pr-media.jpg",
    statValue: "200+",
    statLabel: "Media Outlets",
    closingTitle: "Get",
    closingHighlight: "Featured",
    closingDescription: "We place your story where it gets attention.",
    closingCta: "Get Featured",
  },
  {
    slug: "growth",
    title: "Growth & Engagement",
    tagline: "Amplification Engine",
    heroTitle: "Growth",
    heroHighlight: "Engagement",
    heroDescription:
      "We help you reach the right people and build a real following. No bots, no fake numbers — just real growth for your account.",
    ctaText: "Start Growing",
    secondaryCta: "",
    secondaryCtaAnchor: "",
    sectionTitle: "How We Grow Your Account",
    sectionSubtitle: "Engagement Strategy",
    mainFeature: {
      icon: "trending_up",
      title: "Get More People To Your Account",
      description:
        "We help you reach the right audience — not just random views.",
      bgIcon: "rocket_launch",
    },
    sideFeature: {
      icon: "analytics",
      title: "Build Real Trust",
      description:
        "We make your account look real, credible, and worth following.",
      statLabel: "",
      statIcon: "",
    },
    smallFeatures: [
      { 
        icon: "group", 
        title: "Build A Real Audience", 
        description: "Grow a community that actually cares about your content." 
      },
      { 
        icon: "campaign", 
        title: "Reach The Right People", 
        description: "We put you in front of people who are actually interested in what you do." 
      },
      { 
        icon: "auto_graph", 
        title: "Keep Them Interested", 
        description: "We help you create a feed that keeps people coming back for more." 
      },
    ],
    processTitle: "How It Works",
    processSubtitle: "Growth Process",
    processSteps: [
      {
        number: "01",
        title: "Account Audit",
        description: "We look at your current numbers and see what's working.\nFinding your growth potential."
      },
      {
        number: "02",
        title: "Start Growing",
        description: "We reach the right people and start growing your reach.\nNo technical effort from you."
      },
      {
        number: "03",
        title: "Keep Scaling",
        description: "We monitor the results and double down on what works.\nConsistent, long-term growth."
      }
    ],
    imageUrl: "/images/growth.jpg",
    statValue: "Real",
    statLabel: "Targeted Growth",
    closingTitle: "Ready to",
    closingHighlight: "Grow?",
    closingDescription: "Your audience is out there. Let's find them today.",
    closingCta: "Start Growing Now",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCards = [
  {
    slug: "verification",
    icon: "verified",
    title: "Social Media Verification",
    description:
      "Get verified on major platforms and build real trust with your audience. We handle the full process until your badge is approved.",
  },
  {
    slug: "reputation",
    icon: "shield",
    title: "Reputation Management",
    description:
      "Take control of what people see when they search your name. We remove harmful content and protect your digital image 24/7.",
  },
  {
    slug: "recovery",
    icon: "history",
    title: "Account Recovery",
    description:
      "Lost access to your account? We recover hacked or disabled profiles quickly and securely through trusted channels.",
  },
  {
    slug: "username",
    icon: "alternate_email",
    title: "Username Claim",
    description:
      "Secure the exact username you need. We use official trademark and platform channels to claim inactive or squatted handles.",
  },
  {
    slug: "branding",
    icon: "auto_awesome",
    title: "Branding",
    description:
      "Build a brand that commands respect. We design high-end visual identities that position you as an authority in your space.",
  },
  {
    slug: "webdev",
    icon: "code",
    title: "Website Development",
    description:
      "High-performance digital presence. We engineer fast, secure, and beautiful websites tailored for elite conversion.",
  },
  {
    slug: "pr-media",
    icon: "article",
    title: "PR & Media",
    description:
      "Get featured in prestigious publications. We secure editorial coverage to build credibility and establish your global presence.",
  },
  {
    slug: "growth",
    icon: "trending_up",
    title: "Growth & Engagement",
    description:
      "Scale your audience sustainably. Data-driven strategies designed to grow your influence and build loyal communities.",
  },
];
