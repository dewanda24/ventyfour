export const products = [
  {
    slug: "ventykit",
    name: "Ventykit",
    description: "Toolkit lengkap untuk solusi digital Anda.",
    image: "/produk/ventykit.svg", // ← path dari public/
    pricing: {
      basic: "Rp149rb",
      pro: "Rp399rb",
    },
    isPromo: true,
    features: [
      "UI/UX Profesional",
      "Siap pakai langsung",
      "Dukungan update gratis",
      "Optimasi kecepatan website",
    ],
    specs: [
      { label: "Platform", value: "Next.js + Tailwind CSS" },
      { label: "Responsive", value: "Ya (mobile & desktop)" },
      { label: "Support", value: "Live chat & email" },
    ],
  },
  {
    slug: "ventyads",
    name: "Ventyads",
    description: "Platform manajemen iklan digital yang canggih.",
    image: "/produk/ventyads.svg",
    pricing: {
      basic: "Rp249rb",
      pro: "Rp349rb",
    },
    isPromo: false,
    features: [
      "Integrasi Meta & Google Ads",
      "Dashboard performa realtime",
      "Fitur A/B testing iklan",
    ],
    specs: [
      { label: "Bahasa", value: "Bahasa Indonesia & Inggris" },
      { label: "Analytics", value: "Realtime & Akurat" },
    ],
  },
  {
    slug: "ventyform",
    name: "Ventyform",
    description: "Form builder cerdas dan fleksibel.",
    image: "/produk/ventyform.svg",
    pricing: {
      basic: "Rp79rb",
      pro: "Rp149rb",
    },
    isPromo: false,
    features: [
      "Drag & drop form builder",
      "Integrasi WhatsApp",
      "Webhook & Zapier support",
    ],
    specs: [
      { label: "Form Limit", value: "Tak terbatas" },
      { label: "Export Data", value: "CSV & JSON" },
    ],
  },
  {
    slug: "ventypage",
    name: "Ventypage",
    description: "Landing page generator instan tanpa coding.",
    image: "/produk/ventypage.svg",
    pricing: {
      basic: "Rp199rb",
      pro: "Rp249rb",
    },
    isPromo: false,
    features: [
      "Template siap pakai",
      "SEO-friendly",
      "Form & CTA terintegrasi",
    ],
    specs: [
      { label: "Builder", value: "Drag & drop" },
      { label: "SEO Tools", value: "Custom meta tag + sitemap" },
    ],
  },
];
