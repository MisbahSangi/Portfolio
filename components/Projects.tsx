// ╔══════════════════════════════════════════════════════════════╗
// ║               PROJECTS DATA — EDIT THIS FILE               ║
// ║  Add your GitHub links and image paths for each project.   ║
// ║  Search "TODO:" to find every placeholder.                 ║
// ╚══════════════════════════════════════════════════════════════╝

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDesc: string[];
  image: string;        // path in /public/images/projects/
  screenshots: string[];      // paths in /public/images/projects/[id]/
  tags: string[];
  category: string[];
  github: string | null;
  live: string | null;
  badge: string | null;
  color: string;        // gradient for card bg
  accentColor: string;        // tag accent color
  featured: boolean;
}

export const PROJECTS: Project[] = [

  // ── 1. CLAUSEGUARD ──────────────────────────────────────────
  {
    id: "clauseguard",
    name: "ClauseGuard",
    tagline: "AI-Powered Contract & Legal Risk Analyzer",
    description: "Production-grade system that flags risky or missing contract clauses using a three-layer AI pipeline, backed by an 80-test suite.",
    longDesc: [
      "ClauseGuard catches risky or missing clauses in contracts automatically — built as a Teyzix Core internship task, using three detection layers together: rule-based checks for missing clauses, embeddings for paraphrased risky language, and an LLM (used selectively, not on the whole document) for plain-language explanations and RAG-based Q&A.",
      "I started with Gemini as the only LLM provider, but hit a real multi-day Gemini outage while testing — so I built an automatic fallback chain (Gemini → Groq → AI21) so the system keeps working even when one provider goes down.",
      "Full auth, upload, semantic search, PDF/DOCX export, an insights dashboard, and an admin panel, backed by an 80-test automated suite. Shipped 7 of 9 bonus features, including OCR for scanned documents, voice summary narration, and clause/version comparison. Running it against a real lease agreement surfaced 5 real bugs, which I found, fixed, and verified.",
    ],
    // TODO: Add a cover image at /public/images/projects/clauseguard/ClauseGuard.png
    image: "/images/projects/clauseguard/ClauseGuard.png",
    screenshots: [
      "/images/projects/clauseguard/1.png",  // TODO
      "/images/projects/clauseguard/2.png",  // TODO
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "spaCy", "ChromaDB", "Gemini", "Groq", "AI21"],
    category: ["Web", "AI/ML", "Backend", "Full-Stack"],
    github: "https://github.com/MisbahSangi/Contract-Legal-Document-Risk-Analyzer",
    live: null,
    badge: "Internship Project",
    color: "from-slate-950 to-blue-900",
    accentColor: "blue",
    featured: true,
  },

  // ── 2. HOT SPOT FASTFOOD POS ───────────────────────────────
  {
    id: "hotspot-pos",
    name: "Hot Spot POS",
    tagline: "Flutter Android Point-of-Sale App",
    description: "Full Android POS application delivered as a paid client project for a fast food business, in daily production use.",
    longDesc: [
      "Before this app, the shop had no record system at all — no order summary, no count of what was delivered, no idea how much money was actually coming in. Built for a real paid client, not a demo or coursework assignment.",
      "Built with Flutter and Dart using Riverpod 3.x (AsyncNotifier pattern) for state management. The app is fully offline-first using SQLite (sqflite), so it works without depending on a stable internet connection.",
      "While building the backup/export module, I hit a real schema mismatch — a missing field was breaking Excel exports — and I traced and fixed it before it ever reached the owner in production. The app is now in daily use, handling 150–250 orders in a normal routine.",
    ],
    image: "/images/projects/hotspot-pos/Hot Spot FastFood POS.png",
    screenshots: [
      "/images/projects/hotspot-pos/1.png",  // TODO
      "/images/projects/hotspot-pos/2.png",  // TODO
      "/images/projects/hotspot-pos/3.png",  // TODO
    ],
    tags: ["Flutter", "Dart", "Riverpod", "SQLite", "Bluetooth", "fl_chart"],
    category: ["Flutter", "Mobile"],
    github: null,                        // TODO: add GitHub URL (or keep null if private)
    live: null,
    badge: "Client Project",
    color: "from-orange-950 to-red-900",
    accentColor: "orange",
    featured: true,
  },

  // ── 3. VULNERAX ────────────────────────────────────────────
  {
    id: "vulnerax",
    name: "VulneraX",
    tagline: "Web Vulnerability Scanner",
    description: "FastAPI scanner running 10 security checks with live progress streaming and PDF report generation.",
    longDesc: [
      "I was studying Information Security in my 5th semester and got interested in how real vulnerability scanners actually work under the hood — not just reading about XSS or SQL injection, but building something that could actually detect them on a live site.",
      "Built with a background scan engine that runs multiple checks (XSS, SQL Injection, CSRF, Clickjacking, Cookie Security, TLS/HSTS, Open Redirect, Sensitive Info Disclosure, Directory Listing, Security Headers) while streaming live progress to the dashboard. Getting the real-time progress bar working was the hardest part — the scan was running correctly in the background, but the frontend wasn't reflecting it, which came down to a polling timing issue I had to track down and fix.",
      "Tested against real sites, including my university's portal with instructor approval, and it surfaced real findings. Generates a structured PDF report with evidence and remediation advice per finding.",
    ],
    image: "/images/projects/vulnerax/Vulnerax.png",
    screenshots: [
      "/images/projects/vulnerax/1.png",  // TODO
      "/images/projects/vulnerax/2.png",  // TODO
    ],
    tags: ["FastAPI", "Python", "Uvicorn", "BeautifulSoup", "ReportLab", "JavaScript"],
    category: ["Web", "Python", "Backend"],
    github: "https://github.com/MisbahSangi/VulneraX",
    live: null,
    badge: null,
    color: "from-emerald-950 to-teal-900",
    accentColor: "teal",
    featured: true,
  },

  // ── 4. AUDITCHAIN (IN PROGRESS — FYP) ──────────────────────
  {
    id: "auditchain",
    name: "AuditChain",
    tagline: "AI Compliance Automation Platform (In Progress)",
    description: "In-progress FYP: an AI platform aiming to auto-generate SOC 2 audit trails from Slack, GitHub & Gmail using local LLMs.",
    longDesc: [
      "AuditChain is my Final Year Project, currently in progress — the goal is an AI-powered compliance automation platform addressing a real problem: SOC 2 compliance costs companies weeks of manual work and $10,000+/year with tools like Vanta.",
      "Planned architecture: connect Slack, GitHub, and Gmail via webhooks and APIs, capture events in real-time, and use a locally-hosted LLM to auto-generate human-readable audit trail entries, with anomaly detection and tamper-evident logging.",
      "This project is still being built — the repo is private until there's a working version worth sharing. Check back for updates, or see my completed projects above for finished, verifiable work.",
    ],
    image: "/images/projects/auditchain/AuditChain.png",
    screenshots: [],
    tags: ["FastAPI", "Next.js 14", "PostgreSQL", "Docker", "Ollama", "ChromaDB"],
    category: ["Web", "AI/ML", "Backend"],
    github: null,
    live: null,
    badge: "In Progress",
    color: "from-indigo-950 to-purple-900",
    accentColor: "blue",
    featured: false,
  },

  // ── 5. FLUTTER VIDEO PLAYER ────────────────────────────────
  {
    id: "flutter-video-player",
    name: "Flutter Video Player",
    tagline: "Cross-Platform Media Player",
    description: "Full-featured media player supporting IPTV/HLS/DASH, 19 video presets, 10-band EQ, and OpenSubtitles integration.",
    longDesc: [
      "A production-quality cross-platform media player built in Flutter. This is not a starter app — it supports local files, network streams, HLS, IPTV, DASH, and M3U playlists.",
      "Feature highlights include 19 built-in video filter presets (Cinematic, Noir, Vintage, Retro 70s, Night Mode etc.), a 10-band audio equalizer with custom preset saving, and full OpenSubtitles integration with search, download, caching, and style controls.",
      "Platform features include desktop drag-and-drop, custom keyboard hotkeys, fullscreen handling, casting (DLNA), Picture-in-Picture, screenshots, A-B looping, frame stepping, and watch history.",
    ],
    image: "/images/projects/flutter-video-player/Advance Video Player.png",
    screenshots: [
      "/images/projects/flutter-video-player/1.png",  // TODO
      "/images/projects/flutter-video-player/2.png",  // TODO
    ],
    tags: ["Flutter", "Dart", "media_kit", "FFmpeg", "OpenSubtitles API", "Provider"],
    category: ["Flutter", "Mobile"],
    github: "https://github.com/MisbahSangi/Advance-Video-Player",
    live: null,
    badge: null,
    color: "from-blue-950 to-indigo-900",
    accentColor: "blue",
    featured: false,
  },

  // ── 6. AUTHAPP ─────────────────────────────────────────────
  {
    id: "authapp",
    name: "AuthApp",
    tagline: "Flutter Authentication Platform",
    description: "Flutter auth platform with 6 sign-in methods, TOTP 2FA, biometric login, and 5 languages with RTL support.",
    longDesc: [
      "A comprehensive Flutter authentication application demonstrating near production-level auth engineering. Supports 6 sign-in methods: Email/Password, Google, Facebook, Twitter, Apple, and Phone OTP.",
      "Security features include TOTP-based 2FA with QR code generation and backup codes, biometric authentication (fingerprint/face), session management with per-device revocation, and activity logs.",
      "Internationalization support for 5 languages — English, Urdu, Arabic, Spanish, and French — with full RTL layout support for Arabic and Urdu.",
    ],
    image: "/images/projects/authapp/AuthApp.png",
    screenshots: [
      "/images/projects/authapp/1.png",  // TODO
      "/images/projects/authapp/2.png",  // TODO
    ],
    tags: ["Flutter", "Firebase Auth", "Firestore", "FCM", "OAuth 2.0", "Cloudinary"],
    category: ["Flutter", "Mobile"],
    github: "https://github.com/MisbahSangi/AuthApp",
    live: null,
    badge: null,
    color: "from-violet-950 to-purple-900",
    accentColor: "purple",
    featured: false,
  },

  // ── 7. AI PLAGIARISM CHECKER ───────────────────────────────
  {
    id: "plagiarism-checker",
    name: "AI Plagiarism Checker",
    tagline: "Django · NLP Detection",
    description: "Sentence-level plagiarism detection using TF-IDF + Jaccard scoring against live web sources.",
    longDesc: [
      "An AI Plagiarism Checker built with Django that processes text at sentence level, searches the live web for matching sources, and scores similarity using a weighted combination of TF-IDF cosine similarity (70%) and Jaccard scoring (30%).",
      "Supports TXT, PDF, and DOCX file uploads. Optional OpenAI integration provides AI-generated risk explanation for flagged sentences. Exports full PDF and JSON reports.",
      "Features include SQLite-backed check history, DuckDuckGo/Google search fallback, web content extraction via trafilatura, language detection, and search result caching.",
    ],
    image: "/images/projects/plagiarism-checker/Plagiarism Checker.png",
    screenshots: [
      "/images/projects/plagiarism-checker/1.png",  // TODO
      "/images/projects/plagiarism-checker/2.png",  // TODO
    ],
    tags: ["Django", "Python", "scikit-learn", "NLTK", "TF-IDF", "OpenAI API", "SQLite"],
    category: ["Web", "Python", "AI/ML"],
    github: null,                                                // TODO: add GitHub URL
    live: null,
    badge: null,
    color: "from-indigo-950 to-blue-900",
    accentColor: "blue",
    featured: false,
  },

  // ── 8. FRESHMART ───────────────────────────────────────────
  {
    id: "freshmart",
    name: "FreshMart",
    tagline: "Full-Stack MERN E-Commerce App",
    description: "Complete grocery e-commerce platform with Stripe payments, admin panel, and customer review system.",
    longDesc: [
      "FreshMart is a full-stack MERN (MongoDB, Express, React, Node) e-commerce application for an online grocery store. Built with React 19 and Express 5.",
      "Customer features include product browsing, shopping cart (Redux), Stripe payment integration, JWT authentication, order tracking with real-time status history, and a customer review system with star ratings.",
      "Admin panel includes full CRUD for products, orders, and categories, customer review moderation, Cloudinary image uploads, and Google Maps store location integration.",
    ],
    image: "/images/projects/freshmart/FreshMart .png",
    screenshots: [
      "/images/projects/freshmart/1.png",  // TODO
      "/images/projects/freshmart/2.png",  // TODO
    ],
    tags: ["React 19", "Node.js", "Express 5", "MongoDB", "Stripe", "Redux", "Cloudinary", "JWT"],
    category: ["Web", "Full-Stack"],
    github: null,                                                // TODO: add GitHub URL
    live: null,
    badge: null,
    color: "from-green-950 to-emerald-900",
    accentColor: "green",
    featured: false,
  },

  // ── 9. VOICE STUDIO PRO ────────────────────────────────────
  {
    id: "voice-studio-pro",
    name: "Voice Studio Pro",
    tagline: "Python Voice Cloning & TTS",
    description: "Voice cloning and synthesis tool using Coqui TTS (XTTS v2) with emotion control and batch processing.",
    longDesc: [
      "Voice Studio Pro is a Python-based voice cloning and text-to-speech tool running in Google Colab. Built on Coqui TTS (XTTS v2 v0.22.0) with a Gradio 3.50.2 UI.",
      "Phase 1 features include voice cloning, voice styles/presets, emotion intensity control, SSML support, background ambience, and multi-language mixing. Phase 2 adds voice morphing, multi-voice dialogue, prosody transfer, and quality metrics.",
      "Built as a free alternative to ElevenLabs — all processing runs on Google Colab's GPU with Google Drive integration for persistence.",
    ],
    image: "/images/projects/voice-studio-pro/voice studio.png",
    screenshots: [
      "/images/projects/voice-studio-pro/1.png",  // TODO
    ],
    tags: ["Python", "Coqui TTS", "Gradio", "Transformers", "Pydub", "Google Colab"],
    category: ["Python", "AI/ML"],
    github: null,                                                // TODO: add GitHub URL
    live: null,
    badge: null,
    color: "from-pink-950 to-rose-900",
    accentColor: "pink",
    featured: false,
  },

  // ── 10. SORTFLOW ────────────────────────────────────────────
  {
    id: "sortflow",
    name: "SORTFLOW",
    tagline: "Sorting Algorithm Visualizer",
    description: "Interactive sorting visualizer with dark industrial aesthetic, live counters, and complexity badges.",
    longDesc: [
      "SORTFLOW is a standalone HTML/CSS/JavaScript sorting algorithm visualizer with a distinctive dark industrial aesthetic using electric amber accents and CRT scanline texture.",
      "Implements 5 sorting algorithms — Bubble, Selection, Insertion, Merge, and Quick Sort — with live comparison and swap counters, time tracking, and color-coded bar states (comparing, swapping, sorted).",
      "Adjustable speed and array size controls with Big-O complexity badges (best, average, worst case) for each algorithm.",
    ],
    image: "/images/projects/sortflow/sortflow.png",
    screenshots: [
      "/images/projects/sortflow/1.png",  // TODO
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Algorithms", "Data Structures"],
    category: ["Web"],
    github: null,                                                // TODO: add GitHub URL
    live: null,                                                // TODO: if deployed
    badge: null,
    color: "from-gray-950 to-zinc-900",
    accentColor: "amber",
    featured: false,
  },
];

// ── SKILLS DATA ────────────────────────────────────────────────
// Note: `icon`/`bg` fields below are unused — Skills.tsx renders its own
// SVG icon set keyed by `category`, so these are kept only as reference
// metadata. Emoji removed for consistency with the "no emoji" style rule.
export const SKILLS = [
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Firebase", "FCM", "Riverpod", "Provider", "SQLite", "local_auth"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js 14", "Tailwind CSS", "Redux", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django 4.2", "Node.js", "Express.js", "REST APIs", "Celery"],
  },
  {
    category: "AI / ML",
    items: ["Python", "scikit-learn", "NLTK", "spaCy", "LangChain", "Ollama", "Hugging Face", "Gradio", "ChromaDB"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "ChromaDB", "Supabase"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Git", "Linux"],
  },
];

// ── EXPERIENCE DATA ────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "ML Engineering Intern",
    company: "FlyRank",
    period: "2026 – Present",
    type: "Internship",
    points: [
      "AI Fluency track — building production-grade AI-assisted workflows and applying structured prompt engineering to real development tasks.",
    ],
  },
  {
    role: "AI Engineering Intern",
    company: "Teyzix Core",
    period: "June 2026",
    type: "Internship",
    points: [
      "Built ClauseGuard, a production-grade AI contract risk analyzer with a hybrid rules + embeddings + LLM pipeline, an 80-test suite, and a multi-provider LLM fallback chain (Gemini → Groq → AI21) built after a real Gemini outage during testing.",
      "Built a Python CLI + Streamlit document summarization tool with extractive TF-IDF, language detection (~18 languages), and abstractive summarization via Hugging Face Transformers.",
      "Built a hybrid AI resume screening & ranking system (Python, Streamlit, SQLite, RapidFuzz, TF-IDF, spaCy) with explainable weighted scoring, candidate clustering, and 11 passing pytest tests.",
    ],
  },
];