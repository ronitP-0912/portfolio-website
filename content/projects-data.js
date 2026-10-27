// ==============================================================================
// PAUL BUSINESS SOLUTIONS (PBS) — MASTER SHOWCASE DATASET
// Factual, Verified Information Grounded in Project Records & Screenshot Registers
// ==============================================================================

const PBS_PROJECTS = [
  {
    id: "restaurant-os",
    name: "Restaurant OS",
    categoryKey: "systems",
    categoryLabel: "Custom Business Systems",
    statusBadge: "Enterprise System Demo",
    badgeClass: "badge-demo",
    subtitle: "Multi-Tenant Restaurant Operating System & Cashier POS",
    problem: "Modern dining and takeaway establishments face fragmented operations across table seating, kitchen order tickets, waiter dispatch, and strict Indian GST tax compliance.",
    solution: "PBS developed a full-stack, multi-tenant operating system featuring an authoritative server-side GST calculation engine, high-speed cashier POS, interactive kitchen display system (KDS), and customer QR code ordering.",
    features: [
      "Authoritative server-side Indian GST calculation (CGST + SGST) with exact Decimal precision",
      "Cashier POS terminal supporting dine-in table orders, counter takeaways, and instant bill settlement",
      "80mm ESC/POS thermal receipt formatting and Kitchen Order Ticket (KOT) generation",
      "Real-time kitchen order tracking with 1-tap state progression (New → Preparing → Ready)",
      "Zero-install customer mobile QR ordering web app with live cart and dietary filters"
    ],
    techStack: ["Next.js 16", "React 19", "Python (FastAPI)", "SQLAlchemy 2.0", "PostgreSQL 16", "WebSockets", "Tailwind CSS"],
    primaryImage: "public-assets/projects/restaurant-os/01-restaurant-dashboard-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/restaurant-os/01-restaurant-dashboard-desktop.png",
        caption: "Administrative Dashboard: Onboarding checklist, branch indicators, and kitchen fulfillment configuration."
      },
      {
        url: "public-assets/projects/restaurant-os/02-pos-order-taking-desktop.png",
        caption: "Cashier POS Station: Multi-category order entry, table dispatch, and live cart calculation."
      },
      {
        url: "public-assets/projects/restaurant-os/03-menu-management-desktop.png",
        caption: "Menu Catalogue Management: Multi-category menu dishes, INR pricing, and dietary classification."
      },
      {
        url: "public-assets/projects/restaurant-os/04-orders-and-billing-desktop.png",
        caption: "Active Orders & Tax Billing: Order status pipeline alongside 80mm thermal receipt and GST modal."
      },
      {
        url: "public-assets/projects/restaurant-os/05-restaurant-operations-mobile.png",
        caption: "Mobile Customer QR Menu: Responsive table-side ordering web app (/order/demo-cafe/table-1)."
      }
    ],
    liveUrl: null,
    syntheticNotice: "Demonstrated using verified synthetic 'Demo Cafe' tenant data. No customer personal information."
  },
  {
    id: "pbs-account-system",
    name: "PBS Account System",
    categoryKey: "systems",
    categoryLabel: "Custom Business Systems",
    statusBadge: "Internal Software Demo",
    badgeClass: "badge-synthetic",
    subtitle: "Enterprise Invoicing, Multi-Client Billing & Money Movement Engine",
    problem: "Growing B2B service firms need reliable accounting systems that prevent accidental record alteration, track sequential GST tax invoices, manage disbursements, and give instant cash visibility.",
    solution: "PBS built an in-house enterprise accounting SaaS platform with atomic gapless tax invoice generation, client directory CRM, multi-mode receipt tracking, expense vouchers, and real-time cash flow analytics.",
    features: [
      "Sequential gapless GST tax invoice generation with strict server-side tax verification",
      "Executive financial dashboard with KPI cards for cash movement, gross collections, and net cash",
      "Client CRM directory managing enterprise accounts, GSTIN numbers, and billing history",
      "Reconciled payment receipts audit log supporting Cash, NEFT, RTGS, and UPI transactions",
      "Expense disbursement ledger tracking 12 operational corporate categories and vouchers"
    ],
    techStack: ["React", "TypeScript", "Python (FastAPI)", "SQLAlchemy", "PostgreSQL", "Tailwind CSS", "Vite"],
    primaryImage: "public-assets/projects/pbs-account-system/01-dashboard-financial-summary-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/pbs-account-system/01-dashboard-financial-summary-desktop.png",
        caption: "Executive Financial Dashboard: Cash in/out indicators, gross revenue, and operational movement."
      },
      {
        url: "public-assets/projects/pbs-account-system/02-client-directory-desktop.png",
        caption: "Enterprise Client CRM: Corporate client profiles, billing contacts, and payment status tracking."
      },
      {
        url: "public-assets/projects/pbs-account-system/03-invoice-register-desktop.png",
        caption: "Invoice Lifecycle Register: Status-coded tax invoice tracking (Paid, Partial, Overdue, Draft)."
      },
      {
        url: "public-assets/projects/pbs-account-system/04-invoice-detail-desktop.png",
        caption: "Tax Invoice Modal: Itemized deliverables, CGST/SGST calculation, and PDF invoice generation."
      },
      {
        url: "public-assets/projects/pbs-account-system/05-receipt-payment-register-desktop.png",
        caption: "Receipt Ledger: Reconciled transaction audit trail with payment methods and reference IDs."
      },
      {
        url: "public-assets/projects/pbs-account-system/06-expense-register-desktop.png",
        caption: "Expense Register: Operational voucher disbursements and categorized expense audit log."
      },
      {
        url: "public-assets/projects/pbs-account-system/01-dashboard-mobile.png",
        caption: "Mobile Dashboard: Responsive financial summary and quick-action billing overview."
      }
    ],
    liveUrl: null,
    syntheticNotice: "Captured from local isolated development database with 100% synthetic tenant data (Superknown profile)."
  },
  {
    id: "grocery-os",
    name: "Grocery OS",
    categoryKey: "automation",
    categoryLabel: "Custom Systems & AI",
    statusBadge: "Concept Demo",
    badgeClass: "badge-concept",
    subtitle: "Retail Store Operations & WhatsApp AI Order Simulator",
    problem: "Neighborhood grocery and FMCG retail stores receive large volumes of unformatted grocery list messages on WhatsApp, leading to manual transcription errors and slow fulfillment.",
    solution: "PBS created an omnichannel retail operations concept that simulates incoming conversational WhatsApp orders, parses grocery items automatically into structured order cards, and syncs directly with inventory.",
    features: [
      "Interactive WhatsApp customer order simulation with natural language grocery message parsing",
      "Automated order review card with line-item detection and instant cashier acceptance workflow",
      "Multi-stage order lifecycle pipeline (New Incoming → In Packing → Out for Delivery → Completed)",
      "Product inventory catalogue managing 30+ FMCG SKUs, category margins, and low-stock warning badges",
      "Thermal receipt preview generator for retail checkout handoffs"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel Cloud", "Conversational AI Logic"],
    primaryImage: "public-assets/projects/grocery-os/01-store-dashboard-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/grocery-os/01-store-dashboard-desktop.png",
        caption: "Retail Store Dashboard: Daily sales indicators, order fulfillment volume, and product category trends."
      },
      {
        url: "public-assets/projects/grocery-os/02-whatsapp-order-simulator-desktop.png",
        caption: "WhatsApp Order Simulator: Conversational customer chat with real-time parsed order acceptance."
      },
      {
        url: "public-assets/projects/grocery-os/03-order-management-pipeline-desktop.png",
        caption: "Order Management Pipeline: Multi-stage status pipeline and customer receipt modal."
      },
      {
        url: "public-assets/projects/grocery-os/04-product-inventory-desktop.png",
        caption: "Product Inventory: FMCG catalogue, pricing, gross margin metrics, and stock alerts."
      },
      {
        url: "public-assets/projects/grocery-os/05-store-operations-mobile.png",
        caption: "Mobile Operations: Responsive retail management and quick order status updating."
      }
    ],
    liveUrl: "https://pbs-grocery-stores-os.vercel.app",
    syntheticNotice: "Concept SaaS demonstration deployed on Vercel with fictional FreshMart demo data."
  },
  {
    id: "superknown",
    name: "Superknown",
    categoryKey: "websites",
    categoryLabel: "Websites & Digital Platforms",
    statusBadge: "Client Website",
    badgeClass: "badge-client",
    subtitle: "Commercial Website & Creative Technology Showcase",
    problem: "A creative agency delivering design, video, and technology solutions needed a high-impact digital presence that showcased their full capabilities and established credibility with major brands.",
    solution: "PBS partnered with Superknown to build a dynamic, modern commercial web platform featuring interactive service portfolios, core value narratives, and responsive agency communication touchpoints.",
    features: [
      "Dynamic interactive hero slider conveying brand identity and creative momentum",
      "End-to-end creative and technology solutions catalog detailing client engagement options",
      "Structured agency core values grid highlighting company philosophy and execution ethics",
      "Responsive multi-device layout engineered for seamless desktop and mobile agency browsing",
      "Integrated inquiry routing for prospective commercial client engagements"
    ],
    techStack: ["Next.js", "React", "Vanilla CSS", "Modern Web APIs", "Vercel"],
    primaryImage: "public-assets/projects/superknown/01-homepage-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/superknown/01-homepage-desktop.png",
        caption: "Hero Section: 'Creativity That Moves Brands Forward' interactive slider and agency identity."
      },
      {
        url: "public-assets/projects/superknown/02-main-content-desktop.png",
        caption: "Solutions Catalogue: End-to-end creative, technology, and execution capabilities."
      },
      {
        url: "public-assets/projects/superknown/03-feature-desktop.png",
        caption: "Core Values: 'Why We Exist' distinctive philosophy and creative standards grid."
      },
      {
        url: "public-assets/projects/superknown/04-footer-desktop.png",
        caption: "Agency Footer: Direct inquiry channels, agency location, and social links."
      },
      {
        url: "public-assets/projects/superknown/01-homepage-mobile.png",
        caption: "Mobile View: Responsive hero section and mobile navigation layout."
      }
    ],
    liveUrl: "https://www.superknown.in",
    syntheticNotice: null
  },
  {
    id: "germinnaa",
    name: "Germinnaa",
    categoryKey: "websites",
    categoryLabel: "Websites & Digital Platforms",
    statusBadge: "Client Website",
    badgeClass: "badge-client",
    subtitle: "Fine Dining Culinary Showcase (Lake Road, Kolkata)",
    problem: "A premier fine-dining culinary establishment in South Kolkata required an elegant web presence to communicate its culinary philosophy, founders' vision, and signature menus to discerning patrons.",
    solution: "PBS designed and delivered an understated, typography-driven digital platform reflecting the restaurant's interior aesthetic, signature European gastronomy, and direct reservation details.",
    features: [
      "Curated culinary storytelling presenting 'Culinary Elegance in the Heart of Kolkata'",
      "Founders' narrative and culinary background spotlighting ingredient-first craftsmanship",
      "Signature menu showcase detailing appetizers, mains, and artisanal beverage pairings",
      "Location and visiting hours presentation for Lake Road, South Kolkata patrons",
      "Optimized mobile browsing for on-the-go reservation lookups and directions"
    ],
    techStack: ["HTML5", "CSS3 Design Tokens", "JavaScript", "Responsive Web Framework"],
    primaryImage: "public-assets/projects/germinnaa/01-homepage-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/germinnaa/01-homepage-desktop.png",
        caption: "Hero Presentation: 'Culinary Elegance in the Heart of Kolkata' brand statement."
      },
      {
        url: "public-assets/projects/germinnaa/02-main-content-desktop.png",
        caption: "Our Story: Founders' background and culinary vision for Kolkata's dining landscape."
      },
      {
        url: "public-assets/projects/germinnaa/03-feature-desktop.png",
        caption: "Food Philosophy: Selected signature dishes, flavor profiles, and seasonal preparations."
      },
      {
        url: "public-assets/projects/germinnaa/04-footer-desktop.png",
        caption: "Visiting Information: Lake Road location details, opening hours, and direct reservations."
      },
      {
        url: "public-assets/projects/germinnaa/01-homepage-mobile.png",
        caption: "Mobile Responsive View: Clean hero layout tailored for smartphone diners."
      }
    ],
    liveUrl: "https://germinnaa.com/",
    syntheticNotice: null
  },
  {
    id: "criollo-cafe",
    name: "Criollo Cafe",
    categoryKey: "websites",
    categoryLabel: "Websites & Digital Platforms",
    statusBadge: "Concept Demo",
    badgeClass: "badge-demo",
    subtitle: "Artisanal Bakery & Master Chocolaterie Showcase",
    problem: "Specialty confectionery and single-origin chocolate brands need digital experiences that translate the sensory craftsmanship and heritage of bean-to-bar chocolate into online customer engagement.",
    solution: "PBS developed a hospitality concept showcase featuring an immersive craft atelier, bean sourcing philosophy, curated confectionery menu, and table reservation architecture.",
    features: [
      "Bespoke brand presentation: 'Artisanal Bakery • Master Chocolaterie'",
      "Three Culinary Pillars narrative: Single-Origin Cacao, Slow Fermentation, Precision Craft",
      "Interactive Craft Atelier highlighting bean-to-bar roasting and confectionery art",
      "Seasonal confectionery menu showcase with tasting notes and pairing recommendations",
      "Hospitality contact layout with visiting hours, seating policies, and private event inquiries"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel Cloud", "Micro-Interactions"],
    primaryImage: "public-assets/projects/criollo-cafe/01-homepage-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/criollo-cafe/01-homepage-desktop.png",
        caption: "Hero Section: 'Artisanal Bakery • Master Chocolaterie' brand introduction."
      },
      {
        url: "public-assets/projects/criollo-cafe/02-main-content-desktop.png",
        caption: "Our Essence: Three Culinary Pillars and single-origin cacao philosophy."
      },
      {
        url: "public-assets/projects/criollo-cafe/03-feature-desktop.png",
        caption: "Craft Atelier: Interactive presentation of artisanal chocolate craftsmanship."
      },
      {
        url: "public-assets/projects/criollo-cafe/04-footer-desktop.png",
        caption: "Contact & Hours: Bakery operational timings, directions, and private reservations."
      },
      {
        url: "public-assets/projects/criollo-cafe/01-homepage-mobile.png",
        caption: "Mobile Responsive Experience: Seamless touch-friendly brand presentation."
      }
    ],
    liveUrl: "https://criollo-website-demo.vercel.app",
    syntheticNotice: "Hospitality concept demonstration deployed on Vercel."
  },
  {
    id: "ascend-demo-website",
    name: "Ascend Demo Website",
    categoryKey: "websites",
    categoryLabel: "Websites & Digital Platforms",
    statusBadge: "Concept Demo",
    badgeClass: "badge-demo",
    subtitle: "Rehabilitation, Recovery & Wellness Centre Showcase",
    problem: "Specialized clinical rehabilitation and mental wellness facilities require sensitive, clear, and trustworthy digital platforms that explain care pathways, facility accommodations, and admissions procedures without intimidating families.",
    solution: "PBS built a comprehensive wellness showcase website structured around compassionate care programs, architectural facility tours, clinical standards, and 24/7 confidential inquiry channels.",
    features: [
      "Serene, reassuring brand presentation: 'A place to heal. A space to rebuild.'",
      "Care Programmes Hierarchy detailing clinical care levels across outpatient, inpatient, and rehab",
      "The Centre architectural showcase presenting therapeutic spaces, private suites, and grounds",
      "Step-by-step admissions workflow guiding families through confidential assessment and intake",
      "Dedicated 24/7 admissions helpline and quick consultation inquiry form"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    primaryImage: "public-assets/projects/ascend-demo-website/01-homepage-desktop.png",
    screenshots: [
      {
        url: "public-assets/projects/ascend-demo-website/01-homepage-desktop.png",
        caption: "Hero Section: 'A place to heal. A space to rebuild.' patient-centric care mission."
      },
      {
        url: "public-assets/projects/ascend-demo-website/02-main-content-desktop.png",
        caption: "Our Programmes: Structured clinical pathways from detox to long-term reintegration."
      },
      {
        url: "public-assets/projects/ascend-demo-website/03-feature-desktop.png",
        caption: "The Centre: Architectural facility gallery showcasing modern recovery environments."
      },
      {
        url: "public-assets/projects/ascend-demo-website/04-footer-desktop.png",
        caption: "Admissions & Helpline: Confidential 24/7 intake contact and visiting protocols."
      },
      {
        url: "public-assets/projects/ascend-demo-website/01-homepage-mobile.png",
        caption: "Mobile View: Responsive care overview designed for family assistance on smartphones."
      }
    ],
    liveUrl: "https://ascend-website-demo.vercel.app",
    syntheticNotice: "Public demo website showcasing the facility concept. Maintained strictly separate from internal clinical software."
  },
  {
    id: "divine-fellowship",
    name: "Divine Fellowship",
    categoryKey: "infrastructure",
    categoryLabel: "IT Infrastructure",
    statusBadge: "Client Implementation",
    badgeClass: "badge-client",
    subtitle: "Turnkey Physical IT Infrastructure & Workstation Deployment",
    problem: "An institutional organization required a complete on-premise IT modernization, replacing aging individual computer setups with a unified, high-reliability local network, dedicated workstations, and central management.",
    solution: "PBS planned and executed a comprehensive turnkey IT implementation on-site, including hardware procurement, structured network cabling, workstation provisioning, and local operational handoff.",
    features: [
      "Turnkey physical IT deployment and workstation procurement for organizational staff",
      "Structured on-premise local area networking (LAN) and hardware rack configuration",
      "Endpoint OS installation, security configuration, and local printing integration",
      "Operational staff orientation and on-site deployment validation",
      "Demonstrated physical IT execution capabilities complementing PBS's software offerings"
    ],
    techStack: ["On-Premise Hardware", "Structured Network Cabling", "Workstation Provisioning", "Security Configuration"],
    primaryImage: null, // Physical deployment without public photos
    screenshots: [],
    liveUrl: null,
    syntheticNotice: "Completed on-premise physical deployment. Technical and photographic assets maintained under client privacy review."
  }
];

// Service Pillars
const PBS_SERVICES = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    title: "Websites & Digital Platforms",
    desc: "Bespoke commercial web applications, brand platforms, and high-performance showcase websites engineered for uncompromising aesthetic standard, sub-second loading speed, and multi-device fluidity.",
    capabilities: [
      "High-aesthetic commercial agency & hospitality showcases",
      "Next.js App Router & modern headless frontend architectures",
      "Responsive, touch-first layouts tailored for mobile patrons",
      "SEO-optimized semantic structures and Core Web Vital excellence"
    ]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Custom Business Systems",
    desc: "Purpose-built operational software, multi-tenant billing engines, Point-of-Sale (POS) terminals, and inventory platforms designed around how your company actually functions — eliminating operational bottlenecks.",
    capabilities: [
      "Indian GST tax invoice engines with gapless sequence locking",
      "Multi-tenant data isolation with strict tenant segregation",
      "High-speed cashier POS stations & Kitchen Display Systems (KDS)",
      "Financial ledgering, disbursements, and cash flow reconciliation"
    ]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>`,
    title: "Automation & AI Workflows",
    desc: "Practical conversational commerce, natural language order simulators, real-time ticket handoffs, and notification pipelines that transform manual back-and-forth into automated business speed.",
    capabilities: [
      "WhatsApp ordering simulation with AI line-item parsing",
      "Instant cashier order acceptance and thermal receipt triggers",
      "Real-time multi-device synchronization via persistent WebSockets",
      "FMCG SKU margin monitoring and automated stock threshold alerts"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PBS_PROJECTS, PBS_SERVICES };
}
