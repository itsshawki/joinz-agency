export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
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
  secondaryCta: string;
  secondaryCtaAnchor: string;

  sectionTitle: string;
  sectionSubtitle: string;

  mainFeature: {
    icon: string;
    title: string;
    description: string;
    bgIcon: string;
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
    heroTitle: "Social media",
    heroHighlight: "verification",
    heroDescription:
      "Get verified on major platforms and build real trust with your audience. Stand out, protect your identity, and make your presence official.",
    ctaText: "Get verified",
    secondaryCta: "View process",
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
    closingTitle: "Get your",
    closingHighlight: "Blue Check",
    closingDescription: "Verification builds trust. We handle everything for you.",
    closingCta: "Start Verification",
  },
  {
    slug: "reputation",
    title: "Reputation Management",
    tagline: "Narrative Control",
    heroTitle: "Reputation",
    heroHighlight: "management",
    heroDescription:
      "Curating your digital shadow. We monitor, protect, and enhance your online presence, ensuring only the most prestigious narrative prevails.",
    ctaText: "Control your narrative",
    secondaryCta: "View methods",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Digital Shield Systems",
    sectionSubtitle: "Reputation Arsenal",
    mainFeature: {
      icon: "security",
      title: "360° Reputation Monitoring",
      description:
        "Real-time surveillance of your digital footprint across search engines, social media, news outlets, and review platforms. We detect threats before they materialize.",
      bgIcon: "radar",
    },
    sideFeature: {
      icon: "auto_fix_high",
      title: "Content Suppression",
      description:
        "Legal and algorithmic strategies to suppress negative content and elevate positive narratives.",
      statLabel: "Monitored 24/7",
      statIcon: "visibility",
    },
    smallFeatures: [
      { icon: "search", title: "SEO Defense", description: "Search result optimization to control what people find about you." },
      { icon: "rate_review", title: "Review Management", description: "Strategic review response and sentiment improvement campaigns." },
      { icon: "gavel", title: "Legal Takedowns", description: "Defamatory content removal through legal channels and DMCA." },
    ],
    processTitle: "Narrative Control Framework",
    processSubtitle: "Defense Protocol",
    processSteps: [
      { number: "01", title: "Threat Assessment", description: "Full audit of your digital footprint identifying risks, negative content, and vulnerability points." },
      { number: "02", title: "Defense Deployment", description: "Multi-channel strategy execution including content creation, SEO, and legal action." },
      { number: "03", title: "Ongoing Monitoring", description: "24/7 surveillance and rapid-response protocols for emerging threats." },
    ],
    imageUrl: "/images/reputation.jpg",
    statValue: "24/7",
    statLabel: "Monitoring",
    closingTitle: "Protect your",
    closingHighlight: "Reputation",
    closingDescription: "Your reputation is your most valuable asset. Let us guard it with military precision.",
    closingCta: "Start Protection",
  },
  {
    slug: "recovery",
    title: "Account Recovery",
    tagline: "Asset Retrieval",
    heroTitle: "Account",
    heroHighlight: "recovery",
    heroDescription:
      "Restoring lost assets. Our specialized team utilizes high-level contacts to recover disabled or hacked high-value social profiles swiftly and securely.",
    ctaText: "Recover your account",
    secondaryCta: "View process",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Recovery Capabilities",
    sectionSubtitle: "Recovery Arsenal",
    mainFeature: {
      icon: "restore",
      title: "Multi-Vector Recovery",
      description:
        "Whether your account was hacked, disabled, or suspended — we deploy multiple recovery vectors simultaneously. Our direct contacts at major platforms accelerate the restoration process.",
      bgIcon: "key",
    },
    sideFeature: {
      icon: "speed",
      title: "Rapid Response",
      description:
        "Priority recovery timelines for high-value accounts requiring immediate action.",
      statLabel: "Avg. 72hr recovery",
      statIcon: "timer",
    },
    smallFeatures: [
      { icon: "lock_open", title: "Hacked Accounts", description: "Full account restoration and security hardening after unauthorized access." },
      { icon: "block", title: "Disabled Accounts", description: "Appeal and reinstatement of disabled or suspended accounts." },
      { icon: "enhanced_encryption", title: "Security Hardening", description: "Post-recovery security audit and protection implementation." },
    ],
    processTitle: "Recovery Protocol",
    processSubtitle: "Retrieval Process",
    processSteps: [
      { number: "01", title: "Incident Assessment", description: "Rapid triage to determine account status, compromise vectors, and recovery pathway." },
      { number: "02", title: "Recovery Execution", description: "Multi-channel recovery through platform contacts, legal identity verification, and appeal processes." },
      { number: "03", title: "Security Lockdown", description: "Post-recovery security hardening — 2FA, session purge, and ongoing monitoring." },
    ],
    imageUrl: "/images/recovery.jpg",
    statValue: "72hr",
    statLabel: "Avg Recovery",
    closingTitle: "Recover your",
    closingHighlight: "Digital Assets",
    closingDescription: "Every hour counts. Start the recovery process now and reclaim what's yours.",
    closingCta: "Start Recovery",
  },
  {
    slug: "username",
    title: "Username Claim",
    tagline: "Digital Real Estate",
    heroTitle: "Premium",
    heroHighlight: "username",
    heroDescription:
      "Your @handle is your most visible digital asset. We secure the exact username you need across all platforms through legal trademark claims and administrative channels.",
    ctaText: "Claim your handle",
    secondaryCta: "View process",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Secure Your Digital Identity",
    sectionSubtitle: "Handle Acquisition",
    mainFeature: {
      icon: "alternate_email",
      title: "Trademark-Based Claims",
      description:
        "We leverage trademark law and platform policies to claim usernames held by inactive or squatting accounts. Our legal team handles every step from filing to acquisition.",
      bgIcon: "badge",
    },
    sideFeature: {
      icon: "language",
      title: "Cross-Platform",
      description:
        "Instagram, Twitter/X, TikTok, YouTube, and more — unified handle strategy.",
      statLabel: "All major platforms",
      statIcon: "check",
    },
    smallFeatures: [
      { icon: "gavel", title: "Legal Claims", description: "Trademark-based username release through official platform processes." },
      { icon: "schedule", title: "Inactive Release", description: "Policy-compliant reclamation of dormant username registrations." },
      { icon: "swap_horiz", title: "Negotiated Transfer", description: "Mediated acquisition from current holders when applicable." },
    ],
    processTitle: "Systematic Handle Reclamation",
    processSubtitle: "Acquisition Process",
    processSteps: [
      { number: "01", title: "Availability Analysis", description: "Deep scan across platforms determining handle status, ownership, and the most viable acquisition pathway." },
      { number: "02", title: "Legal Preparation", description: "Trademark filing, official complaints, and legal documentation for platform-compliant claim submission." },
      { number: "03", title: "Claim Execution", description: "Submission through official channels with monitoring until the handle transitions to your ownership." },
    ],
    imageUrl: "/images/username.jpg",
    statValue: "@yours",
    statLabel: "Every Platform",
    closingTitle: "Claim your",
    closingHighlight: "@Handle",
    closingDescription: "Premium usernames are finite. Secure yours before someone else does.",
    closingCta: "Start Acquisition",
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "Identity Architecture",
    heroTitle: "Sovereign",
    heroHighlight: "brand",
    heroDescription:
      "We don't just design logos — we forge identities. Every brand we build commands respect, radiates exclusivity, and stands as an immovable pillar of digital authority.",
    ctaText: "Build your brand",
    secondaryCta: "View deliverables",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Comprehensive Identity Engineering",
    sectionSubtitle: "Brand Systems",
    mainFeature: {
      icon: "palette",
      title: "Visual Identity System",
      description:
        "Every element — from logomark to color palette, typography to photography direction — is engineered to form a cohesive identity system that scales across all touchpoints.",
      bgIcon: "auto_awesome",
    },
    sideFeature: {
      icon: "psychology",
      title: "Strategy First",
      description:
        "Every visual decision is rooted in strategic positioning and audience psychology.",
      statLabel: "Luxury Tier",
      statIcon: "diamond",
    },
    smallFeatures: [
      { icon: "draw", title: "Logo & Wordmark", description: "Custom hand-crafted logomarks with full variation libraries." },
      { icon: "format_color_fill", title: "Color & Typography", description: "Proprietary palettes and type hierarchies engineered for impact." },
      { icon: "menu_book", title: "Brand Guidelines", description: "Comprehensive brand books with usage rules and application standards." },
    ],
    processTitle: "From Vision to Visual Empire",
    processSubtitle: "The Framework",
    processSteps: [
      { number: "01", title: "Strategic Discovery", description: "Immersive brand audit covering market positioning, competitor landscape, and audience psychographics." },
      { number: "02", title: "Design Engineering", description: "Creating the complete visual identity system — logo, color, type, imagery direction, and motion language." },
      { number: "03", title: "Deployment & Guidelines", description: "Delivering brand book, asset libraries, and usage guidelines for consistent implementation across all channels." },
    ],
    imageUrl: "/images/branding.jpg",
    statValue: "100+",
    statLabel: "Brands Forged",
    closingTitle: "Forge your",
    closingHighlight: "Identity",
    closingDescription: "Your brand is the foundation of your digital empire. Let's build it to last.",
    closingCta: "Start Branding",
  },
  {
    slug: "webdev",
    title: "Website Development",
    tagline: "Digital Engineering",
    heroTitle: "High-performance",
    heroHighlight: "web",
    heroDescription:
      "We don't build websites — we engineer digital vaults. Every project is a bespoke creation with performance, security, and conversion as non-negotiable foundations.",
    ctaText: "Start your build",
    secondaryCta: "View tech stack",
    secondaryCtaAnchor: "#method",
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
    closingTitle: "Build your",
    closingHighlight: "Digital Vault",
    closingDescription: "Your website is the headquarters of your digital empire. Let's engineer it to perform.",
    closingCta: "Start Engineering",
  },
  {
    slug: "pr-media",
    title: "PR & Media",
    tagline: "Media Operations",
    heroTitle: "Strategic",
    heroHighlight: "PR & media",
    heroDescription:
      "Get featured in the world's most prestigious publications. Our media network spans Forbes, Bloomberg, The New York Times, and 200+ tier-one outlets worldwide.",
    ctaText: "Get featured",
    secondaryCta: "Media network",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Full-Spectrum Media Coverage",
    sectionSubtitle: "Media Arsenal",
    mainFeature: {
      icon: "newspaper",
      title: "Tier-One Publication Features",
      description:
        "We don't pitch blindly — we engineer newsroom relationships. Our direct connections with editors at Forbes, Bloomberg, TechCrunch, and Vogue ensure your story gets the platform it deserves.",
      bgIcon: "newsmode",
    },
    sideFeature: {
      icon: "hub",
      title: "200+ Outlets",
      description:
        "Direct relationships with editorial teams across global media networks.",
      statLabel: "Global Reach",
      statIcon: "public",
    },
    smallFeatures: [
      { icon: "edit_note", title: "Press Releases", description: "Professional press materials distributed through major wire services." },
      { icon: "podcasts", title: "Podcast & TV", description: "Booking appearances on top podcasts, news shows, and panel discussions." },
      { icon: "crisis_alert", title: "Crisis Management", description: "Rapid-response PR for damage control and narrative recovery." },
    ],
    mediaLogos: ["Forbes", "Bloomberg", "NYT", "Vogue", "TechCrunch", "Reuters"],
    processTitle: "Publication Strategy",
    processSubtitle: "Media Framework",
    processSteps: [
      { number: "01", title: "Story Engineering", description: "Craft newsworthy angles that align with editorial calendars and trending conversations." },
      { number: "02", title: "Targeted Outreach", description: "Direct pitches to editors and journalists in our established network." },
      { number: "03", title: "Publication & Amplification", description: "Feature publication with social amplification and syndication strategy." },
    ],
    imageUrl: "/images/pr-media.jpg",
    statValue: "200+",
    statLabel: "Media Outlets",
    closingTitle: "Dominate the",
    closingHighlight: "Newsroom",
    closingDescription: "Your story deserves the world's biggest stage. Let's secure your feature.",
    closingCta: "Get Featured",
  },
  {
    slug: "growth",
    title: "Growth & Engagement",
    tagline: "Amplification Engine",
    heroTitle: "Engineered",
    heroHighlight: "growth",
    heroDescription:
      "Algorithm-compliant amplification strategies that grow your audience, boost engagement, and build loyal communities — sustainably and at scale.",
    ctaText: "Accelerate growth",
    secondaryCta: "View strategy",
    secondaryCtaAnchor: "#method",
    sectionTitle: "Multi-Vector Amplification",
    sectionSubtitle: "Growth Arsenal",
    mainFeature: {
      icon: "trending_up",
      title: "Organic Growth Engineering",
      description:
        "We decode platform algorithms and engineer content strategies that trigger organic amplification loops. No bots, no fake engagement — just sophisticated growth mechanics that comply with every platform's terms of service.",
      bgIcon: "rocket_launch",
    },
    sideFeature: {
      icon: "analytics",
      title: "Data-Driven",
      description:
        "Every strategy is backed by deep analytics and real-time performance tracking.",
      statLabel: "10x Avg. Growth",
      statIcon: "show_chart",
    },
    smallFeatures: [
      { icon: "group", title: "Community Building", description: "Cultivating engaged communities that advocate for your brand organically." },
      { icon: "campaign", title: "Paid Amplification", description: "Strategic ad spend across platforms with surgical audience targeting." },
      { icon: "auto_graph", title: "Algorithm Mastery", description: "Content optimization based on real-time algorithm behavior analysis." },
    ],
    processTitle: "Systematic Audience Amplification",
    processSubtitle: "Growth Framework",
    processSteps: [
      { number: "01", title: "Audit & Baseline", description: "Comprehensive analysis of current metrics, audience demographics, content performance, and competitive landscape." },
      { number: "02", title: "Strategy Deployment", description: "Custom growth playbook execution with content calendar, engagement protocols, and paid amplification campaigns." },
      { number: "03", title: "Scale & Optimize", description: "Continuous performance iteration, A/B testing, and strategy refinement based on real-time data." },
    ],
    imageUrl: "/images/growth.jpg",
    statValue: "10x",
    statLabel: "Average Growth",
    closingTitle: "Ready to",
    closingHighlight: "Scale?",
    closingDescription: "Your audience is out there. Let's engineer the growth engine to reach them.",
    closingCta: "Accelerate Now",
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
      "Get verified on major platforms and build real trust with your audience. Stand out, protect your identity, and make your presence official.",
  },
  {
    slug: "reputation",
    icon: "shield",
    title: "Reputation Management",
    description:
      "Curating your digital shadow. We monitor, protect, and enhance your online presence, ensuring only the most prestigious narrative prevails.",
  },
  {
    slug: "recovery",
    icon: "history",
    title: "Account Recovery",
    description:
      "Restoring lost assets. Our specialized team utilizes high-level contacts to recover disabled or hacked high-value social profiles swiftly and securely.",
  },
  {
    slug: "username",
    icon: "alternate_email",
    title: "Username Claim",
    description:
      "Securing digital identity. Claim inactive or trademarked handles that define your brand. We navigate platform policies to deliver the handle you deserve.",
  },
  {
    slug: "branding",
    icon: "auto_awesome",
    title: "Branding",
    description:
      "Forging sovereign identities. From visual systems to core messaging, we build brands that command respect and radiate premium architectural quality.",
  },
  {
    slug: "webdev",
    icon: "code",
    title: "Website Development",
    description:
      "High-performance digital vaults. We engineer bespoke, secure, and blazing-fast web experiences tailored for conversion and elite aesthetic impact.",
  },
  {
    slug: "pr-media",
    icon: "article",
    title: "PR & Media",
    description:
      "Mastering the newsroom. Secure features in top-tier publications to build immediate credibility and support verification requirements globally.",
  },
  {
    slug: "growth",
    icon: "trending_up",
    title: "Growth & Engagement",
    description:
      "Accelerating digital influence. Algorithmic strategies designed to increase your reach, authority, and active community participation sustainably.",
  },
];
