import type { LocalizedText } from "@/components/bilingual-text";

const tx = (id: string, en: string): LocalizedText => ({ id, en });

export const siteConfig = {
  name: "Ferly Jeremi Purnawan Apiang",
  shortName: "Ferly Apiang",
  role: tx("Senior Full Stack Software Engineer", "Senior Full Stack Software Engineer"),
  location: "Indonesia",
  experience: tx("4+ tahun membangun software enterprise", "4+ years shipping enterprise software"),
  headline: tx(
    "Membangun sistem digital terpusat yang benar-benar dipakai bisnis setiap hari.",
    "Building centralized digital systems that businesses can rely on every day.",
  ),
  subheadline: tx(
    "Saya membantu perusahaan merancang, membangun, dan mengembangkan software dari dashboard admin, portal customer, aplikasi mobile, backend service, hingga integrasi operasional agar seluruh proses kerja berjalan dalam satu sistem yang rapi, aman, dan scalable.",
    "I help companies design, build, and grow software across admin dashboards, customer portals, mobile applications, backend services, and operational integrations so the entire workflow runs inside one secure, scalable, and well-structured system.",
  ),
  description:
    "Portfolio of Ferly Jeremi Purnawan Apiang, a Senior Full Stack Software Engineer focused on enterprise systems, backend architecture, modern frontend delivery, and operational software.",
  availability: tx(
    "Terbuka untuk pengembangan sistem custom, consulting, modernisasi sistem, arsitektur berbasis keamanan, dan kerja sama produk jangka panjang.",
    "Available for custom system development, consulting, modernization, security-focused architecture, and long-term product partnerships.",
  ),
  email: "082110933040",
  whatsapp: "https://wa.me/6282110933040",
  linkedin: "https://www.linkedin.com/in/ferly-apiang-6410371ba/?skipRedirect=true",
  github: "https://github.com/Ferlyapiang",
  telegram: "https://wa.me/6282110933040",
  domain: "https://your-domain.com",
};

export const trustAreas = [
  {
    name: "Adhiratransejahtera",
    logo: "/assets/ATSLogo.png",
    short: "AT",
  },
  {
    name: "Motion Bank",
    logo: "/assets/motionbank.png",
    short: "MB",
  },
  {
    name: "YogiGroup",
    logo: "/assets/yogi_group_logo.png",
    short: "YG",
  },
  {
    name: "SateTegalOrtega",
    logo: "/assets/sateTegal.png",
    short: "ST",
  },
];

export const services = [
  {
    slug: "enterprise-web-applications",
    title: tx("Pengembangan Aplikasi Web Enterprise", "Enterprise Web Application Development"),
    summary: tx(
      "Platform internal dan customer-facing yang dirancang untuk skala besar, governance, dan maintainability jangka panjang.",
      "Custom internal and client-facing platforms designed for scale, governance, and long-term maintainability.",
    ),
    details: tx(
      "Saya membangun software operasional untuk organisasi yang membutuhkan permission yang kuat, alur kerja yang rapi, auditability, dan integrasi yang stabil antar divisi.",
      "I build operational software for organizations that need robust permissions, clean workflows, auditability, and reliable integrations across departments.",
    ),
    outcomes: [
      tx("Efisiensi operasional", "Operational efficiency"),
      tx("Visibilitas proses", "Process visibility"),
      tx("Reliabilitas sistem lebih kuat", "Stronger system reliability"),
    ],
  },
  {
    slug: "erp-development",
    title: tx("Pengembangan ERP Custom", "Custom ERP Development"),
    summary: tx(
      "Modul ERP yang disesuaikan untuk inventory, purchasing, payroll, finance, dan reporting dalam satu ekosistem terhubung.",
      "ERP modules tailored for inventory, purchasing, payroll, finance, and reporting in one connected ecosystem.",
    ),
    details: tx(
      "Cocok untuk perusahaan yang sudah melewati tahap spreadsheet dan tools terpisah, tetapi membutuhkan software yang benar-benar mengikuti proses bisnis mereka.",
      "Ideal for growing companies that have outgrown spreadsheets and fragmented tools but need software aligned to how the business actually runs.",
    ),
    outcomes: [
      tx("Data terpusat", "Centralized data"),
      tx("Lebih sedikit proses manual", "Fewer manual steps"),
      tx("Sinkronisasi antar tim", "Cross-team alignment"),
    ],
  },
  {
    slug: "crm-development",
    title: tx("Pengembangan CRM", "CRM Development"),
    summary: tx(
      "Sistem customer dan pipeline yang membantu tim mengelola leads, follow-up, task, dan hubungan bisnis dengan lebih jelas.",
      "Customer and pipeline systems that help teams manage leads, follow-ups, tasks, and business relationships with clarity.",
    ),
    details: tx(
      "Saya merancang pengalaman CRM yang sesuai untuk tim sales dan operasional, mulai dari activity tracking sampai reporting dan automation.",
      "I design CRM experiences that fit sales and operational teams, from activity tracking to reporting and automation.",
    ),
    outcomes: [
      tx("Follow-up lebih cepat", "Faster follow-up"),
      tx("Tracking pipeline lebih baik", "Better pipeline tracking"),
      tx("Riwayat customer lebih rapi", "Cleaner customer history"),
    ],
  },
  {
    slug: "centralized-multi-platform-systems",
    title: tx(
      "Sistem Terpusat Web, Customer Portal, dan Mobile",
      "Centralized Web, Customer Portal, and Mobile Systems",
    ),
    summary: tx(
      "Sistem terintegrasi di mana web admin, aplikasi customer, dan aplikasi mobile bekerja bersama dalam satu platform yang saling terhubung.",
      "Integrated systems where admin web, customer-facing applications, and mobile apps work together inside one connected platform.",
    ),
    details: tx(
      "Saya dapat merancang flow yang benar-benar terpusat agar operasional, customer, dan user lapangan berjalan di ekosistem yang sama dengan data sinkron, workflow bersama, dan kontrol yang lebih rapi di setiap touchpoint.",
      "I can design flows that are fully centralized so operations, customers, and field users all work in the same ecosystem with synchronized data, shared workflows, and cleaner control across every touchpoint.",
    ),
    outcomes: [
      tx("Satu sistem terhubung", "One connected system"),
      tx("Workflow tersinkronisasi", "Synchronized workflows"),
      tx("Kontrol operasional lebih baik", "Better operational control"),
    ],
  },
  {
    slug: "logistics-systems",
    title: tx("Sistem Logistik & Warehouse", "Logistics & Warehouse Systems"),
    summary: tx(
      "Sistem berbasis workflow untuk pergerakan gudang, tracking pengiriman, kontrol stok, dan reporting operasional.",
      "Workflow-driven systems for warehouse movement, shipment tracking, stock control, and operational reporting.",
    ),
    details: tx(
      "Dibangun untuk bisnis yang membutuhkan kecepatan dan akurasi tinggi pada receiving, dispatch, inventory movement, dan koordinasi logistik.",
      "Built for businesses where speed and accuracy matter across receiving, dispatch, inventory movement, and logistics coordination.",
    ),
    outcomes: [
      tx("Akurasi inventory", "Inventory accuracy"),
      tx("Operasional lebih cepat", "Faster operations"),
      tx("Risiko proses berkurang", "Reduced process risk"),
    ],
  },
  {
    slug: "backend-and-api",
    title: tx("Backend Development & API Integration", "Backend Development & API Integration"),
    summary: tx(
      "Backend service, integration layer, dan REST API yang andal untuk menghubungkan produk, tim, dan data bisnis.",
      "Reliable backend services, integration layers, and REST APIs that connect products, teams, and business data.",
    ),
    details: tx(
      "Mulai dari monolith sampai service-based architecture, saya fokus pada contract yang rapi, validasi yang kuat, arsitektur yang maintainable, dan performa yang praktis.",
      "From monoliths to services, I focus on clean contracts, strong validation, maintainable architecture, and practical performance.",
    ),
    outcomes: [
      tx("Integrasi lebih andal", "Reliable integrations"),
      tx("Service yang scalable", "Scalable services"),
      tx("Ekspansi lebih mudah", "Simpler future expansion"),
    ],
  },
  {
    slug: "frontend-and-dashboards",
    title: tx("Frontend Engineering & Admin Dashboard", "Frontend Engineering & Admin Dashboards"),
    summary: tx(
      "Interface premium untuk tim operasional, stakeholder, dan customer dengan fokus pada kejelasan dan usability.",
      "Premium interfaces for operational teams, stakeholders, and customers with a focus on clarity and usability.",
    ),
    details: tx(
      "Saya membangun dashboard yang membantu user bekerja cepat, bukan hanya terlihat bagus di screenshot. Workflow yang kompleks tetap mudah dipahami dan responsif.",
      "I build dashboards that help users act quickly, not just look good in screenshots. Complex workflows stay understandable and fast.",
    ),
    outcomes: [
      tx("Adopsi user lebih baik", "Better user adoption"),
      tx("Lebih sedikit kesalahan operator", "Fewer operator errors"),
      tx("Dukungan keputusan lebih bersih", "Cleaner decision support"),
    ],
  },
  {
    slug: "cloud-and-deployment",
    title: tx("Cloud Deployment & Modernisasi Sistem", "Cloud Deployment & System Modernization"),
    summary: tx(
      "Deployment, performance tuning, dan modernisasi untuk tim yang membutuhkan delivery stabil dan kesiapan production.",
      "Deployment, performance tuning, and modernization for teams that need stable delivery and production readiness.",
    ),
    details: tx(
      "Mencakup setup server, workflow berbasis container, dukungan CI/CD, dan upgrade pragmatis untuk legacy system yang tetap harus terus berjalan.",
      "This includes server setup, containerized workflows, CI/CD support, and pragmatic upgrades for legacy systems that must keep running.",
    ),
    outcomes: [
      tx("Release lebih aman", "Safer releases"),
      tx("Uptime meningkat", "Improved uptime"),
      tx("Hambatan teknis lebih rendah", "Lower technical friction"),
    ],
  },
  {
    slug: "security-architecture",
    title: tx("Keamanan Aplikasi & Secure Data Flow", "Application Security & Secure Data Flow"),
    summary: tx(
      "Desain sistem yang sadar keamanan untuk aplikasi yang membutuhkan pertukaran data terkontrol, proteksi lebih kuat, dan komunikasi yang aman antar platform.",
      "Security-aware system design for applications that need controlled data exchange, stronger protection, and safer communication between platforms.",
    ),
    details: tx(
      "Tergantung kasusnya, saya dapat membantu merancang flow aman menggunakan strategi encryption dan decryption, dynamic key exchange seperti ECDH, dan lapisan keamanan praktis lainnya yang disesuaikan dengan risiko dan kompleksitas sistem.",
      "Depending on the case, I can help design secure flows using encryption and decryption strategies, dynamic key exchange approaches such as ECDH, and other practical security layers aligned to the system's risk and complexity.",
    ),
    outcomes: [
      tx("Komunikasi lebih aman", "Safer communication"),
      tx("Proteksi data lebih kuat", "Stronger data protection"),
      tx("Security posture lebih baik", "Better security posture"),
    ],
  },
  {
    slug: "ai-integration",
    title: tx("Integrasi AI untuk Aplikasi Bisnis", "AI Integration for Business Applications"),
    summary: tx(
      "Kapabilitas AI yang praktis untuk ditanamkan ke tools internal, workflow customer, dan sistem produktivitas.",
      "Practical AI capabilities embedded into internal tools, customer workflows, and productivity systems.",
    ),
    details: tx(
      "Saya membantu tim menambahkan AI di area yang benar-benar memberi nilai ukur, seperti document assistance, search, summarization, atau process support di aplikasi yang sudah ada.",
      "I help teams add AI where it creates measurable value, such as document assistance, search, summarization, or process support inside existing apps.",
    ),
    outcomes: [
      tx("Workflow lebih cepat", "Faster workflows"),
      tx("Leverage tim lebih tinggi", "Higher team leverage"),
      tx("Kapabilitas software lebih baik", "Better software capability"),
    ],
  },
];

export const techStack = {
  Frontend: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "NestJS", "Laravel", "PHP"],
  Database: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  Infrastructure: ["Docker", "Linux", "Nginx", "GitHub Actions", "AWS"],
};

export const processSteps = [
  tx("Penggalian kebutuhan sesuai kebutuhan bisnis", "Requirement gathering aligned to business needs"),
  tx("Perencanaan dan technical scoping", "Planning and technical scoping"),
  tx("Arsitektur dan perancangan sistem", "Architecture and system design"),
  tx("Desain UI untuk workflow yang praktis", "UI design for practical workflows"),
  tx("Implementasi frontend dan backend", "Implementation across frontend and backend"),
  tx("Testing, hardening, dan dukungan QA", "Testing, hardening, and QA support"),
  tx("Deployment dan release management", "Deployment and release management"),
  tx("Maintenance, iterasi, dan dukungan jangka panjang", "Maintenance, iteration, and long-term support"),
];

export const differentiators = [
  tx("Fokus pada hasil bisnis, bukan hanya menulis code", "Focused on business outcomes, not just writing code"),
  tx("Mampu menghubungkan web admin, aplikasi customer, mobile, dan backend ke satu alur kerja", "Able to connect admin web, customer apps, mobile, and backend into one workflow"),
  tx("Terbiasa membangun sistem yang siap dipakai tim operasional sehari-hari", "Experienced in building systems that real operational teams can use daily"),
  tx("Arsitektur yang scalable, maintainable, dan realistis untuk jangka panjang", "Architecture that is scalable, maintainable, and realistic for long-term growth"),
  tx("Komunikasi jelas dengan owner bisnis, user operasional, dan tim teknis", "Clear communication with business owners, operational users, and technical teams"),
  tx("Bisa masuk dari nol maupun melanjutkan sistem yang sudah berjalan", "Able to start from zero or continue improving an existing system"),
  tx("Membantu dari discovery, implementasi, deployment, sampai iterasi berikutnya", "Supports discovery, implementation, deployment, and the next iteration"),
  tx("Nyaman bekerja pada kebutuhan enterprise, internal tools, CRM, ERP, dan platform operasional", "Comfortable working across enterprise needs, internal tools, CRM, ERP, and operational platforms"),
];

export const faqs = [
  {
    question: tx("Apakah Anda bisa membangun software custom untuk proses bisnis kami?", "Can you build custom software for our business process?"),
    answer: tx(
      "Ya. Saya fokus pada sistem yang benar-benar mengikuti cara bisnis Anda berjalan, bukan memaksa tim Anda menyesuaikan diri dengan software generik.",
      "Yes. I specialize in tailored systems that follow how your business actually works instead of forcing your team into generic software.",
    ),
  },
  {
    question: tx("Apakah Anda bisa membangun platform ERP dan CRM?", "Can you build ERP and CRM platforms?"),
    answer: tx(
      "Ya. ERP, CRM, dashboard operasional, dan sistem workflow adalah bagian inti dari portofolio dan spesialisasi saya.",
      "Yes. ERP, CRM, operational dashboards, and workflow systems are core parts of my portfolio and specialization.",
    ),
  },
  {
    question: tx("Apakah Anda bisa membangun satu sistem terpusat untuk web, portal customer, dan mobile app?", "Can you build one centralized system for web, customer portal, and mobile apps?"),
    answer: tx(
      "Ya. Saya dapat merancang sistem di mana admin, customer, dan pengguna mobile bekerja dalam satu platform terhubung dengan workflow bersama, data sinkron, dan akses berbasis peran.",
      "Yes. I can design systems where admin users, customers, and mobile users operate inside one connected platform with shared workflows, synchronized data, and role-based access.",
    ),
  },
  {
    question: tx("Apakah Anda bisa membantu mengembangkan atau melanjutkan sistem yang sudah ada?", "Can you help improve or continue an existing system?"),
    answer: tx(
      "Ya. Saya juga menerima consulting dan development untuk sistem yang sudah berjalan, baik untuk modernisasi, penambahan fitur, perbaikan arsitektur, security hardening, maupun peningkatan skalabilitas jangka panjang.",
      "Yes. I also accept consulting and development work for systems that already exist, whether the goal is modernization, feature expansion, architecture improvement, security hardening, or better long-term scalability.",
    ),
  },
  {
    question: tx("Apakah Anda juga menangani implementasi terkait keamanan?", "Do you handle security-related implementation as well?"),
    answer: tx(
      "Ya. Tergantung proyeknya, saya dapat membantu merancang pola komunikasi yang aman, flow encryption dan decryption, dynamic key exchange seperti ECDH, dan strategi keamanan aplikasi lain yang sesuai dengan kasusnya.",
      "Yes. Depending on the project, I can help design secure communication patterns, encryption and decryption flows, dynamic key exchange approaches such as ECDH, and other application security strategies suited to the case.",
    ),
  },
  {
    question: tx("Apakah Anda bisa memodernisasi aplikasi legacy yang sudah ada?", "Can you modernize an existing legacy application?"),
    answer: tx(
      "Ya. Saya dapat meningkatkan arsitektur, performa, UI, deployment, dan maintainability tanpa mengabaikan dependensi bisnis yang sudah berjalan.",
      "Yes. I can improve architecture, performance, UI, deployment, and maintainability while respecting existing business dependencies.",
    ),
  },
  {
    question: tx("Apakah Anda bisa melakukan deployment dan maintenance setelah aplikasi diluncurkan?", "Can you deploy and maintain the application after launch?"),
    answer: tx(
      "Ya. Saya mendukung workflow deployment, setup server, production hardening, dan iterasi setelah go-live jika dibutuhkan.",
      "Yes. I support deployment workflows, server setup, production hardening, and post-launch iteration where needed.",
    ),
  },
];

export const projects = [
  {
    slug: "mnc-bank-cms",
    name: "MNC Bank CMS",
    category: tx("Manajemen Konten Perbankan", "Banking Content Management"),
    year: "2025",
    intro: tx(
      "Platform content management terkontrol untuk mendukung komunikasi perbankan dan kebutuhan publishing operasional.",
      "A controlled content management platform supporting banking communication and operational publishing needs.",
    ),
    problem: tx(
      "Tim perbankan membutuhkan cara yang andal untuk mengelola konten terstruktur, menjaga governance, dan mempublikasikan update tanpa menambah risiko operasional.",
      "Banking teams need a reliable way to manage structured content, maintain governance, and publish updates without introducing operational risk.",
    ),
    solution: tx(
      "Membangun workflow CMS dengan publishing berbasis role, admin UX yang maintainable, dan struktur backend yang siap untuk kebutuhan enterprise dan operasional.",
      "Built a CMS workflow with role-aware publishing, maintainable admin UX, and a backend structure ready for enterprise review and operational use.",
    ),
    responsibilities: [
      tx("Merancang struktur aplikasi dan alur fitur", "Architected application structure and feature flow"),
      tx("Mengimplementasikan modul frontend dan backend", "Implemented frontend and backend modules"),
      tx("Mendesain workflow admin yang maintainable", "Designed admin workflows for maintainability"),
      tx("Mendukung kesiapan deployment dan peningkatan kualitas", "Supported deployment readiness and quality improvements"),
    ],
    architecture: tx(
      "Aplikasi admin berbasis role yang didukung API konten terstruktur, business logic berbasis service, dan relational data model untuk auditability serta extensibility.",
      "Role-based admin application backed by structured content APIs, service-driven business logic, and a relational data model for auditability and extensibility.",
    ),
    technology: ["Next.js", "TypeScript", "Node.js", "REST API", "PostgreSQL"],
    impact: tx(
      "Meningkatkan disiplin publishing, mengurangi friction operasional, dan menciptakan workflow konten yang lebih mudah dikelola di lingkungan terregulasi.",
      "Improved publishing discipline, reduced operational friction, and created a more manageable content workflow for a regulated environment.",
    ),
    lessons: tx(
      "Di domain yang terregulasi, kejelasan, permission, dan workflow yang dapat diprediksi sama pentingnya dengan jumlah fitur.",
      "In regulated domains, clarity, permissions, and predictable workflows matter as much as raw feature count.",
    ),
    timeline: tx("Fase delivery enterprise", "Enterprise delivery phase"),
    gallery: [
      tx("Dashboard workflow editorial", "Editorial workflow dashboard"),
      tx("Status approval konten", "Content approval states"),
      tx("Ringkasan publishing", "Publishing overview"),
    ],
    media: [
      {
        type: tx("Foto Perusahaan", "Company Photo"),
        title: tx("Visual kantor atau branding korporat MNC Bank", "MNC Bank office or corporate brand visual"),
        description: tx(
          "Gunakan foto gedung perusahaan, lingkungan kantor, atau visual brand untuk membangun konteks bisnis sebelum menampilkan produknya.",
          "Use a company building, office environment, or branded corporate image to establish business context before showing the product.",
        ),
      },
      {
        type: tx("Screenshot Website", "Website Screenshot"),
        title: tx("Halaman utama dashboard CMS", "CMS dashboard homepage"),
        description: tx(
          "Screenshot yang bersih dari tampilan admin utama membantu pengunjung memahami skala dan keseriusan platform.",
          "A clean screenshot of the main admin view helps visitors understand the scale and seriousness of the platform.",
        ),
      },
      {
        type: tx("Screenshot Workflow", "Workflow Screenshot"),
        title: tx("Flow approval atau publishing konten", "Approval or content publishing flow"),
        description: tx(
          "Tampilkan bagian sistem yang membuktikan governance, penanganan status, dan usability tingkat enterprise.",
          "Show the part of the system that proves governance, status handling, and enterprise usability.",
        ),
      },
    ],
  },
  {
    slug: "ats-crm",
    name: "ATS CRM",
    category: tx("Customer Relationship Management", "Customer Relationship Management"),
    year: "2025",
    intro: tx(
      "Platform CRM yang dibangun untuk merapikan hubungan pelanggan, alur follow-up, dan visibilitas internal tim.",
      "A CRM platform created to organize customer relationships, follow-up workflows, and internal visibility.",
    ),
    problem: tx(
      "Tim sering kehilangan konteks antar lead, task, dan komunikasi ketika data customer tersebar di banyak tools yang tidak saling terhubung.",
      "Teams often lose context across leads, tasks, and communications when customer data is spread across disconnected tools.",
    ),
    solution: tx(
      "Merancang dan membangun workflow CRM yang memusatkan activity tracking, konteks customer, tanggung jawab task, dan reporting.",
      "Designed and built CRM workflows that centralize activity tracking, customer context, task ownership, and reporting.",
    ),
    responsibilities: [
      tx("Menyusun modul inti CRM dan alur UX", "Shaped core CRM modules and UX flow"),
      tx("Mengimplementasikan backend service dan struktur data", "Implemented backend services and data structure"),
      tx("Membangun pola UI reusable untuk halaman yang padat data", "Built reusable UI patterns for data-heavy screens"),
      tx("Meningkatkan kejelasan sistem untuk user internal", "Improved system clarity for internal users"),
    ],
    architecture: tx(
      "Platform web berbasis data dengan modular backend services, reusable dashboard components, dan relational model yang mendukung reporting.",
      "Data-centric web platform with modular backend services, reusable dashboard components, and reporting-oriented relational models.",
    ),
    technology: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    impact: tx(
      "Menciptakan pipeline view yang lebih bersih, mengurangi follow-up yang terlewat, dan meningkatkan visibilitas untuk workflow sales dan relationship.",
      "Created a cleaner pipeline view, reduced follow-up gaps, and improved visibility for sales and relationship workflows.",
    ),
    lessons: tx(
      "CRM terbaik adalah yang cukup dekat dengan kebiasaan kerja tim sehingga adopsinya terasa natural, bukan dipaksakan.",
      "The best CRM systems mirror team behavior closely enough that adoption feels natural instead of forced.",
    ),
    timeline: tx("Delivery multi-modul", "Multi-module delivery"),
    gallery: [
      tx("Board manajemen lead", "Lead management board"),
      tx("Detail profil customer", "Customer profile detail"),
      tx("Reporting task dan follow-up", "Task and follow-up reporting"),
    ],
    media: [
      {
        type: tx("Foto Perusahaan", "Company Photo"),
        title: tx("Visual perusahaan atau tim ATS", "ATS company or team visual"),
        description: tx(
          "Foto perusahaan membantu membangun trust dan membuat studi kasus CRM terasa nyata di konteks bisnis yang benar-benar berjalan.",
          "A company image adds trust and makes the CRM case study feel grounded in a real operating business.",
        ),
      },
      {
        type: tx("Screenshot Website", "Website Screenshot"),
        title: tx("Dashboard lead dan pipeline", "Lead and pipeline dashboard"),
        description: tx(
          "Tampilkan layar pertama yang dilihat user, terutama jika menjelaskan tracking, task, atau visibilitas customer.",
          "Show the first screen a user lands on, especially if it explains tracking, tasks, or customer visibility.",
        ),
      },
      {
        type: tx("Screenshot Detail", "Detail Screenshot"),
        title: tx("Detail customer atau activity timeline", "Customer detail or activity timeline"),
        description: tx(
          "Gunakan capture yang fokus untuk menunjukkan kedalaman workflow, bukan hanya branding di level permukaan.",
          "Use a focused capture to demonstrate practical workflow depth rather than only high-level branding.",
        ),
      },
    ],
  },
  {
    slug: "yogi-erp",
    name: "YOGI ERP",
    category: tx("Enterprise Resource Planning", "Enterprise Resource Planning"),
    year: "2024",
    intro: tx(
      "Inisiatif ERP yang berfokus menghubungkan operasional bisnis melalui workflow terpusat dan reporting yang lebih jelas.",
      "An ERP initiative focused on connecting business operations through centralized workflows and reporting.",
    ),
    problem: tx(
      "Proses finance, inventory, dan operasional yang terpisah menciptakan delay, data yang tidak konsisten, dan blind spot dalam pengambilan keputusan.",
      "Disconnected finance, inventory, and operational processes create delays, inconsistent data, and decision-making blind spots.",
    ),
    solution: tx(
      "Mengembangkan modul ERP dengan fokus kuat pada visibilitas operasional, modular scale, dan workflow bisnis yang praktis.",
      "Developed ERP-oriented modules with a strong focus on operational visibility, modular scale, and practical business workflows.",
    ),
    responsibilities: [
      tx("Berkontribusi pada arsitektur sistem dan perencanaan modul", "Contributed to system architecture and module planning"),
      tx("Membangun workflow bisnis di frontend dan backend", "Built business workflows across frontend and backend"),
      tx("Mendukung data modeling dan integrasi proses", "Supported data modeling and process integration"),
      tx("Meningkatkan maintainability struktur delivery", "Improved maintainability of the delivery structure"),
    ],
    architecture: tx(
      "Platform ERP modular yang menghubungkan workflow operasional ke shared data model dan fondasi backend yang siap untuk reporting.",
      "Modular ERP platform connecting operational workflows to a shared data model and reporting-ready backend foundation.",
    ),
    technology: ["Vue", "Node.js", "PostgreSQL", "Docker", "Nginx"],
    impact: tx(
      "Membantu menyatukan data operasional penting dan mengurangi biaya dari proses lintas divisi yang terfragmentasi.",
      "Helped unify critical operational data and reduced the cost of fragmented cross-department processes.",
    ),
    lessons: tx(
      "Keberhasilan ERP sangat bergantung pada kemampuan menghormati cara tim bekerja saat ini sambil mengarahkan mereka ke future state yang lebih rapi.",
      "ERP success depends on respecting how teams work today while guiding them toward a cleaner future state.",
    ),
    timeline: tx("Rollout sistem operasional", "Operational system rollout"),
    gallery: [
      tx("Dashboard modul", "Module dashboard"),
      tx("Reporting operasional", "Operational reporting"),
      tx("Form flow berbasis proses", "Process-oriented form flow"),
    ],
    media: [
      {
        type: tx("Foto Perusahaan", "Company Photo"),
        title: tx("Visual operasional atau korporat YogiGroup", "YogiGroup operational or corporate visual"),
        description: tx(
          "Foto perusahaan di dunia nyata membantu menjelaskan bahwa ERP ini dibangun di sekitar operasional harian, bukan teori produk abstrak.",
          "A real-world company photo helps explain that the ERP was built around day-to-day operations, not abstract product theory.",
        ),
      },
      {
        type: tx("Screenshot Dashboard", "Dashboard Screenshot"),
        title: tx("Ringkasan modul utama ERP", "ERP main module overview"),
        description: tx(
          "Tampilkan summary screen berisi modul, metrik, atau navigasi untuk menunjukkan luasnya cakupan operasional.",
          "Show a summary screen with modules, metrics, or navigation to communicate operational breadth.",
        ),
      },
      {
        type: tx("Screenshot Reporting", "Reporting Screenshot"),
        title: tx("Layar report inventory, finance, atau operasional", "Inventory, finance, or operational report screen"),
        description: tx(
          "Layar reporting sering kali membuat nilai ERP lebih mudah dipahami oleh owner bisnis dan hiring manager.",
          "Reporting screens often make ERP value easier to understand for business owners and hiring managers.",
        ),
      },
    ],
  },
  {
    slug: "ats-company-website",
    name: "ATS Company Website",
    category: "Corporate Web Presence",
    year: "2024",
    intro:
      "A company website built to present services clearly and create stronger digital credibility for the business.",
    problem:
      "A weak online presence makes it harder for potential clients to trust the company and understand its service value quickly.",
    solution:
      "Created a structured, modern web presence focused on positioning, service communication, and professional presentation.",
    responsibilities: [
      "Led frontend delivery and content structuring",
      "Designed page hierarchy for conversion clarity",
      "Implemented responsive presentation across devices",
      "Aligned technical execution with brand goals",
    ],
    architecture:
      "Fast web presentation layer with a modular component system, responsive layouts, and content sections designed for business conversion.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    impact:
      "Improved perceived credibility, made services easier to understand, and supported a stronger first impression for prospects.",
    lessons:
      "Simple business websites perform best when positioning is sharp and every section supports trust-building.",
    timeline: "Brand refresh delivery",
    gallery: ["Service highlight grid", "Conversion-focused hero", "Responsive company profile pages"],
    media: [
      {
        type: "Company Photo",
        title: "Company or brand visual asset",
        description: "Use a branded visual or company environment shot to strengthen identity before showing the website itself.",
      },
      {
        type: "Website Screenshot",
        title: "Landing page hero or service overview",
        description: "A polished hero screenshot is the fastest way to communicate design quality and business positioning.",
      },
      {
        type: "Mobile Screenshot",
        title: "Responsive company profile page",
        description: "Showing mobile presentation proves that the implementation works across devices and not just desktop mockups.",
      },
    ],
  },
  {
    slug: "future-das-platform",
    name: "Future DAS Platform",
    category: "Operational Platform",
    year: "2026",
    intro:
      "A forward-looking operational platform concept for scalable workflows, business visibility, and modern system foundations.",
    problem:
      "Teams need platforms that can evolve with changing operational demands without becoming brittle or overly dependent on manual processes.",
    solution:
      "Planned a scalable product direction that balances modular engineering, clear operator experience, and deployment readiness.",
    responsibilities: [
      "Defined technical direction and scalable structure",
      "Mapped product workflows into system modules",
      "Aligned architecture with practical business operations",
      "Prepared a foundation for long-term growth",
    ],
    architecture:
      "Scalable web platform with modular domain boundaries, service-friendly backend thinking, and dashboard-led operational visibility.",
    technology: ["Next.js", "NestJS", "PostgreSQL", "Docker", "AWS"],
    impact:
      "Established a future-ready direction for operational software that can support complexity without sacrificing maintainability.",
    lessons:
      "The most valuable systems are designed for change from the beginning, not patched for it later.",
    timeline: "Strategic platform planning",
    gallery: ["System map", "Operational dashboard concept", "Platform module overview"],
    media: [
      {
        type: "Concept Visual",
        title: "Platform direction or business flow visual",
        description: "For conceptual work, diagrams or visual strategy boards can replace product screenshots effectively.",
      },
      {
        type: "Dashboard Concept",
        title: "Operational control center",
        description: "A polished concept screen can still communicate clarity, modularity, and system thinking.",
      },
      {
        type: "Architecture Visual",
        title: "Service or module architecture map",
        description: "This helps technical stakeholders quickly understand the structure behind the platform direction.",
      },
    ],
  },
];
