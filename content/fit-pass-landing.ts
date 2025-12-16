export const content = {
  // Global
  globalStrip: "No address stored • Photos purged in 72 hours • Refunds if your delivery fails after a Pass",
  
  // Hero
  hero: {
    eyebrow: "Delivery fit calculator",
    h1: "Will it fit through every door, turn, and stair?",
    subhead: "Map your delivery path in minutes. Our rules engine flags bottlenecks and creates a time‑stamped Fit Pass PDF you can share with movers.",
    bullets: [
      "Multi‑checkpoint path: doorways, hall turns, stairs, landings, elevators",
      "Clear pass/warn/fail at each step with safety margin",
      "Shareable, standardized PDF with photos and timestamp"
    ],
    reassurance: [
      { icon: "shield", text: "No address stored" },
      { icon: "camera", text: "EXIF stripped" },
      { icon: "clock", text: "Photos deleted in 72 hours" }
    ],
    overlayTag: "$3 per Fit Pass • CPU‑only tool • Ready in ~2 minutes.",
  },
  
  // Social Proof
  socialProof: {
    text: "Trusted by apartment dwellers, schedulers, and local movers",
    partners: ["MoversCo", "Apt Concierge", "Building Services"]
  },
  
  // Quick Try
  quickTry: {
    title: "Try a single checkpoint",
    helperTitle: "About diagonal tilt and safety margins",
    helperText: "When fitting furniture through doorways, items can often be tilted diagonally to gain clearance. Most furniture also comes with packaging that adds 1-2 inches per side. Professional movers typically need 3-6 inches of total clearance (including packaging and handler space) for safe passage. This Quick Try demo uses a straight-width check with a 3-inch default safety margin.",
    belowCard: "This is a single checkpoint test. The full wizard maps your entire path, including stairs, landings, and elevator diagonals.",
  },
  
  // How It Works
  howItWorks: {
    title: "How Fit Pass works",
    steps: [
      {
        number: 1,
        title: "Map your path",
        description: "Front door, hallways/turns, stairs and landings, elevators, and final room entry. We prompt for photos or manual entry."
      },
      {
        number: 2,
        title: "Our rules engine checks clearances",
        description: "Calculates required diagonals, turn arcs, minimum widths, and packaging/handler allowance (typically 3–6 in)."
      },
      {
        number: 3,
        title: "Share your Fit Pass",
        description: "Get a branded, time‑stamped PDF with pass/warn/fail per checkpoint. Send via link, email, or QR to your delivery team."
      }
    ]
  },
  
  // Features
  features: [
    {
      icon: "path",
      title: "Multi‑checkpoint path",
      description: "Track every doorway, turn, stair flight, landing, and elevator from entry to final room."
    },
    {
      icon: "engine",
      title: "Rules engine geometry",
      description: "Automated diagonal, turn arc, and clearance calculations based on industry best practices."
    },
    {
      icon: "pdf",
      title: "Fit Pass PDF",
      description: "Time‑stamped, branded report with photos, measurements, and pass/warn/fail status per checkpoint."
    },
    {
      icon: "privacy",
      title: "Privacy-first",
      description: "No address storage. EXIF data stripped from photos. All images auto-deleted in 72 hours."
    },
    {
      icon: "measure",
      title: "Two‑measure check",
      description: "Prompted to measure twice at critical points. Visual nudge if measurements differ by more than 0.5 in."
    },
    {
      icon: "refund",
      title: "Refund-friendly",
      description: "If delivery fails after a Pass, we refund your $3—no questions asked."
    }
  ],
  
  // Rules Engine
  rulesEngine: {
    title: "What we check under the hood",
    checks: [
      "Straight-through doorway clearance (width and height minus trim, knobs, and safety margin)",
      "Diagonal tilt calculations for box corners through openings",
      "Hallway turn geometry (inner and outer wall clearances for pivoting)",
      "Stair flight clearances (width, ceiling height at multiple points, landing depth)",
      "Elevator diagonals (floor-to-ceiling measurement from door opening to back corner)",
      "Configurable safety margins (default 3 in; adjustable 0–6 in based on your comfort level)"
    ],
    footnote: "These checks follow best‑practice guides from Room & Board, Joybird, and Wayfair with our own conservative safety margins."
  },
  
  // PDF Preview
  pdfPreview: {
    title: "What your mover receives",
    thumbnails: [
      { label: "Cover page with summary", id: "cover" },
      { label: "Route summary", id: "route" },
      { label: "Photos with labels", id: "photos" },
      { label: "Checkpoint table", id: "table" },
      { label: "Mover notes & refund policy", id: "notes" }
    ],
    microcopy: "Photos are purged 72 hours after generation. PDF remains accessible; you can regenerate with new photos anytime."
  },
  
  // Pricing
  pricing: {
    title: "Simple pricing",
    mainCard: {
      price: "$3",
      title: "per Fit Pass",
      includes: [
        "Full path check",
        "Photo annotations",
        "Share link + QR",
        "1 free re‑issue within 24 hours"
      ],
      refund: "If your delivery fails after a Pass, we'll refund you—no questions asked"
    },
    bundleCard: {
      price: "$7/mo",
      title: "Buy With Confidence Pack",
      description: "Includes: Doorway/Delivery Fit Calculator + [#2 variants] + priority support",
      linkText: "See what's included"
    }
  },
  
  // Privacy & Liability
  privacy: {
    title: "Trust, privacy, and liability",
    points: [
      { icon: "noAddress", text: "No address storage" },
      { icon: "exif", text: "EXIF stripped" },
      { icon: "autoDelete", text: "Auto-deletion in 72 hours" },
      { icon: "secure", text: "Secure processing" }
    ],
    liability: "Fit Pass provides guidance based on the measurements you enter. We recommend two measurements per choke point and a 3–6 in safety margin. Movers may still refuse delivery if conditions differ on-site."
  },
  
  // Partners
  partners: {
    title: "For movers and buildings",
    subtitle: "Standardize pre-checks and cut failed deliveries",
    benefits: [
      "Reduce failed delivery attempts",
      "Clear documentation for building approvals",
      "Standardized format all teams can read",
      "QR poster for building lobbies"
    ]
  },
  
  // Educational Guide
  eduGuide: {
    title: "How to measure for furniture delivery (complete guide)",
    topics: [
      {
        id: "entry",
        title: "Entry options: front door, service entrance, balcony",
        content: "Start by identifying all possible entry points to your home or apartment. The front door is the most common route, but don't overlook service entrances, garage doors, or even balconies with sliding glass doors. Each option has its own measurement requirements. For standard doors, measure the clear opening width (not the door frame itself), accounting for knobs, weather stripping, and any door stops. Measure at the narrowest point, typically where the door fully opens."
      },
      {
        id: "doorways",
        title: "Doorways and hallways: measure at the narrowest point",
        content: "Interior doorways are often narrower than entry doors and can be the most restrictive checkpoints. Measure the clear width between the door frame's inner edges, not the trim. If the door is installed, open it fully and measure the actual passable width. For hallways, measure width at multiple points, especially where there are wall protrusions, radiators, light switches, or decorative molding. Even a 1-inch obstruction at waist height can prevent a large box from passing through."
      },
      {
        id: "stairs",
        title: "Stairs and landings: width, height, and diagonal space",
        content: "Stairs present the most complex fit challenges. Measure stair width between handrails or walls at multiple points (bottom, middle, top). Note the ceiling height above the stairs—measure from the stair tread straight up at the bottom of the flight, mid-flight, and at the landing. Low ceilings can prevent tilting large items diagonally. Landing depth is critical: measure from the top stair to any walls or doors that might block pivoting. If stairs end at a wall, you'll need to pivot the furniture on the landing, requiring both adequate depth and width."
      },
      {
        id: "elevators",
        title: "Elevator considerations and diagonal measurements",
        content: "Elevators often allow the largest items to reach upper floors, but they have their own constraints. Measure the elevator door opening width and height. Inside, measure the interior width, depth, and height. The critical measurement is the diagonal: measure from the bottom corner of the door opening to the opposite back corner of the ceiling. This diagonal space often determines the maximum size item you can fit. Also note any handrails, mirrors, or control panels that might obstruct placement."
      },
      {
        id: "compare",
        title: "Comparing furniture dimensions with safety margins",
        content: "Once you have all pathway measurements, compare them to your furniture dimensions. Always use the outer dimensions including any packaging—add 1-2 inches per side for boxed items. Professional movers recommend a minimum 3-inch clearance (the difference between your narrowest opening and the furniture's largest dimension). This margin accounts for handler hand placement, slight measurement errors, and maneuvering space. For tight fits (less than 3 inches of clearance), consider whether you can remove doors, disassemble furniture, or find an alternate route."
      },
      {
        id: "tips",
        title: "Moving day tips: protect your space and verify on-site",
        content: "Even with careful planning, verify measurements on moving day before the truck arrives. Have a tape measure ready and double-check your narrowest points. Protect floors, walls, and door frames with padding or cardboard. Remove any doors that are close clearances before the movers arrive—this saves time and prevents damage. If you're borderline on any checkpoint, have a backup plan: disassembly tools on hand, or knowledge of an alternate entry route."
      }
    ]
  },
  
  // FAQ
  faq: [
    {
      question: "What dimensions should I use for the furniture?",
      answer: "Use the outer dimensions of the furniture as it will be delivered. If it arrives fully boxed, add 1-2 inches per side for packaging thickness. Check the retailer's shipping dimensions if available. For assembled items, measure the tallest, widest, and deepest points."
    },
    {
      question: "How much safety margin do movers need?",
      answer: "Professional movers typically need 3-6 inches of total clearance beyond the furniture dimensions. This accounts for handler hand placement, packaging, and maneuvering space. Our default is 3 inches, but you can adjust this in the wizard based on your comfort level."
    },
    {
      question: "Can I remove interior doors to gain space?",
      answer: "Yes! Removing interior doors is a common and effective strategy for tight fits. Most interior doors can be removed in minutes by popping the hinge pins. Just make sure to measure the clear opening without the door, and verify the door frame itself doesn't narrow the passage."
    },
    {
      question: "Do you store my photos or address?",
      answer: "No. We never ask for or store your address. Photos are processed to strip EXIF data (which can contain location information) and are automatically deleted from our servers 72 hours after you generate your Fit Pass. The PDF remains accessible and can be regenerated anytime."
    },
    {
      question: "What happens if my result says Warn or Fail?",
      answer: "A Warn status means you have minimal clearance (0-1.5 inches). Consider removing doors, disassembling furniture, or tilting diagonally. A Fail status means the item likely won't fit without major changes. We provide workaround suggestions: try an alternate entry route, remove the item from packaging, or disassemble if possible."
    },
    {
      question: "How do refunds work if my Pass was wrong?",
      answer: "If your delivery fails after receiving a Pass status, contact us with your Fit Pass number and brief details. We'll refund your $3 immediately, no questions asked. We want to improve our calculator and appreciate the feedback."
    },
    {
      question: "Will the PDF help with building approvals?",
      answer: "Many building management offices and concierge desks appreciate having a standardized fit check document. The PDF shows you've done due diligence and provides clear measurements. While we can't guarantee building approval, the professional format and detailed checkpoint data typically satisfy their requirements."
    },
    {
      question: "Can I share the Fit Pass without showing my contact info?",
      answer: "Yes. The Fit Pass PDF includes only the information you choose to add in the optional 'Mover Notes' field. No personal contact information is required or displayed unless you add it yourself."
    },
    {
      question: "Do you handle metric units?",
      answer: "Yes! You can toggle between inches and centimeters throughout the entire wizard. All calculations and safety margins are converted automatically."
    }
  ],
  
  // Bottom CTA
  bottomCta: {
    title: "Avoid delivery-day surprises",
    subtitle: "Know exactly where your furniture will fit—before the truck arrives."
  },
  
  // Footer
  footer: {
    product: {
      title: "Product",
      links: [
        { text: "How It Works", href: "#how-it-works" },
        { text: "Example Fit Pass", href: "/pdfs/example-fit-pass.pdf" },
        { text: "Pricing", href: "#pricing" },
        { text: "FAQ", href: "#faq" }
      ]
    },
    forPros: {
      title: "For Pros",
      links: [
        { text: "Movers & Buildings", href: "#for-movers" },
        { text: "QR Poster Template", href: "/pdfs/qr-poster-template.pdf" },
        { text: "Partner Info", href: "mailto:partners@fitpass.example" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { text: "Measurement Guide", href: "#edu-guide" },
        { text: "FAQ", href: "#faq" },
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
        { text: "Refunds", href: "/refunds" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Contact", href: "mailto:hello@fitpass.example" }
      ]
    },
    copyright: "© 2024 Fit Pass. All rights reserved."
  }
};
