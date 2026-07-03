// Portfolio content data for Kanhaiya Mehta

export const PROFILE = {
    name: "Kanhaiya Mehta",
    roles: ["Full-Stack Developer", "AI/ML Engineer", "Quantum Computing Researcher"],
    email: "kanhaiyakumar76618@gmail.com",
    github: "https://github.com/Kanhaiya76618",
    linkedin: "https://linkedin.com/in/kanhaiya-mehta-b70aa7324",
    cv: "#",
};

export const ABOUT = `I'm Kanhaiya Mehta, a full-stack developer who also works on AI/ML systems, with a major interest in quantum computing. I'm a B.Tech CSE student at IIIT Dharwad (CGPA 8.10/10) with a Minor in Quantum Information Science (Minor CGPA 10/10). I build production-grade web platforms, multi-agent AI systems, and quantum optimization research — mostly through competitive hackathons at national and international level.`;

export const ACHIEVEMENTS = [
    {
        rank: "3rd",
        emoji: "🥉",
        title: "Aerothon'26",
        subtitle: "IIIT Dharwad × HAL — 24-hour AI hackathon",
        detail: "Built RAGVault — offline-first RAG system for aerospace/industrial compliance.",
        accent: "from-amber-400/40 to-orange-500/40",
    },
    {
        rank: "1st",
        emoji: "🥇",
        title: "VLSI Club Hackathon",
        subtitle: "IIIT Dharwad",
        detail: "Telemetry Power Governor — real-time FPGA telemetry dashboard.",
        accent: "from-cyan-400/40 to-violet-500/40",
    },
    {
        rank: "Top 800",
        emoji: "🌍",
        title: "Meta × Hugging Face Hackathon",
        subtitle: "Top 800 of 32,000+ teams · Top 2.5%",
        detail: "Advanced to Round 2 with EnterpriseOps Arena.",
        accent: "from-violet-500/40 to-magenta-500/40",
    },
    {
        rank: "NDCG@10 · 0.928",
        emoji: "🏅",
        title: "India Runs Hackathon 2026",
        subtitle: "Redrob AI × Hack2Skill",
        detail: "Candidate Ranking Engine — three-tier verification funnel on 100K candidates.",
        accent: "from-cyan-400/40 to-teal-500/40",
    },
    {
        rank: "Certified",
        emoji: "📜",
        title: "IBM Quantum Certification",
        subtitle: "Basics of Quantum Information",
        detail: "Formal certification from IBM Quantum learning track.",
        accent: "from-fuchsia-500/40 to-violet-500/40",
    },
];

export const SKILL_GROUPS = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "Bootstrap", "Tailwind CSS"],
    },
    {
        category: "Backend & Tools",
        items: ["Python", "FastAPI", "SQL", "Git", "GitHub"],
    },
    {
        category: "AI & Tooling",
        items: ["Prompt Engineering", "Groq API", "Llama", "RAG Systems", "LLM Integration", "Multi-Agent RL (GRPO)"],
    },
    {
        category: "Quantum",
        items: ["Qiskit", "QAOA", "QUBO formulation", "IBM Quantum Runtime"],
    },
    {
        category: "Web3",
        items: ["Smart Contracts", "Solidity (learning)", "dApp fundamentals"],
    },
    {
        category: "Design & UX",
        items: ["UI pipeline visualization", "Component-based design", "Accessibility"],
    },
];

export const PROJECTS = [
    {
        id: "truthforge",
        name: "TruthForge",
        tagline: "Enterprise Verification Intelligence",
        tag: "International Hackathon — Web Data UNLOCKED (lablab.ai × Bright Data)",
        summary: "AI-powered enterprise verification platform. Three specialized AI engines run in parallel to return a TruthScore (0–100) in 60–90 seconds.",
        overview: "AI-powered enterprise verification platform built SOLO in under 5 days for an international hackathon by lablab.ai in partnership with Bright Data (web data platform). I didn't win, but it was a massive learning experience competing at international level. Enter any company name + URL, and three specialized AI engines run in parallel (SignalForge for buying intent, GreenwashGuard for ESG integrity, ClaimWire for claim verification), making 15+ real-time Bright Data API calls and returning a TruthScore (0–100) in 60–90 seconds. Includes a SignalJobs hiring-intelligence layer, Celery background workers, Slack alerts, and AI chat.",
        highlights: [
            "3 parallel AI verification engines: SignalForge, GreenwashGuard, ClaimWire",
            "15+ real-time Bright Data API calls per verification",
            "60–90s end-to-end TruthScore output",
            "SignalJobs hiring-intelligence layer + Slack alerts + AI chat",
        ],
        tech: ["Python 3.11", "FastAPI", "Groq Llama 3.3-70B", "AI/ML API (GPT-4o)", "Bright Data", "Supabase PostgreSQL", "Celery + Redis", "Vercel + Railway"],
        links: [
            { label: "Live demo", href: "https://truthforge-iota.vercel.app" },
            { label: "GitHub", href: "https://github.com/Kanhaiya76618/truthforge" },
        ],
        badge: "SOLO · 5 days · International",
        color: "from-cyan-500/30 to-violet-500/30",
    },
    {
        id: "enterpriseops",
        name: "EnterpriseOps Arena",
        tagline: "Multi-Agent RL Environment",
        tag: "Meta × PyTorch OpenEnv Hackathon — Top 800 / 32,000+ teams",
        summary: "A multi-agent RL environment teaching LLMs to coordinate like a real enterprise team. Peak episode score +77%, task completion +114%.",
        overview: "A multi-agent RL environment teaching LLMs to coordinate like a real enterprise team. Four specialized LLM agents (IT, Manager, Finance, Oversight) coordinate in a simulated enterprise with partial observability, schema drift every 20 steps, real-time SLA pressure, 12% random tool failures, and 8 difficulty levels with automatic curriculum advancement. Trained Qwen2.5-3B-Instruct with GRPO (TRL) using a 7-component research-based reward design. Results: peak episode score 114 (+77%), task completion improved from 35 → 75 (+114%), all 8 scenarios completed automatically, trained on a Tesla T4 with Unsloth 4-bit LoRA. LoRA adapter published on HuggingFace.",
        highlights: [
            "4 specialized LLM agents (IT, Manager, Finance, Oversight)",
            "Partial observability + schema drift + 12% tool failures",
            "8 difficulty levels with automatic curriculum",
            "Peak episode score 114 (+77%), task completion 35→75 (+114%)",
            "Qwen2.5-3B-Instruct + GRPO + Unsloth 4-bit LoRA on Tesla T4",
        ],
        tech: ["Qwen2.5-3B-Instruct", "GRPO (TRL)", "Unsloth 4-bit LoRA", "FastAPI + Gradio", "Pydantic", "Wandb"],
        links: [
            { label: "HF Space", href: "https://huggingface.co/spaces/Anurag137/enterprise-ops-arena" },
            { label: "Model", href: "https://huggingface.co/Anurag137/enterprise-ops-lora" },
            { label: "GitHub", href: "https://github.com/anuragverma025/Meta-Hackathon" },
            { label: "Blog", href: "https://github.com/anuragverma025/Meta-Hackathon/blob/main/enterprise_ops/BLOG.md" },
        ],
        badge: "Top 800 · 32,000+ teams",
        color: "from-violet-500/30 to-magenta-500/30",
    },
    {
        id: "telemetry",
        name: "Telemetry Power Governor",
        tagline: "Real-Time FPGA Dashboard",
        tag: "🥇 1st Place — VLSI Club Hackathon, IIIT Dharwad",
        summary: "Replaced raw terminal telemetry with a real-time web dashboard visualizing live bitrate and power metrics from a Cora Z-7 FPGA board.",
        overview: "Replaced raw terminal telemetry with a real-time web dashboard visualizing live bitrate and power metrics from a Cora Z-7 FPGA board. Frontend (HTML/CSS/JS) served via FastAPI, integrated with an AXI-Lite firmware bridge over USB, rendering power states and bit-rate graphs as dynamic color-coded charts.",
        highlights: [
            "Real-time bitrate + power visualization",
            "AXI-Lite firmware bridge over USB",
            "Dynamic color-coded power-state charts",
            "1st Place among VLSI hackathon entries",
        ],
        tech: ["HTML/CSS/JavaScript", "Python FastAPI", "AXI-Lite", "FPGA (Cora Z-7)"],
        links: [],
        badge: "1st Place",
        color: "from-cyan-500/30 to-teal-500/30",
    },
    {
        id: "ragvault",
        name: "RAGVault",
        tagline: "Offline AI Knowledge System",
        tag: "🥉 3rd Place — Aerothon'26 (IIIT Dharwad × HAL)",
        summary: "Privacy-first, zero-internet-dependency RAG system for aerospace/industrial compliance with an interactive visual pipeline UI.",
        overview: "Privacy-first, zero-internet-dependency RAG system for aerospace/industrial compliance. Built an interactive visual pipeline UI showing every stage of the RAG workflow (ingestion → chunking → embedding → retrieval → generation) as a step-by-step flow diagram — specifically praised by judges for design innovation. Supports multi-format upload (PDF, DOCX, TXT).",
        highlights: [
            "Zero-internet-dependency, on-device RAG",
            "Interactive visual pipeline UI (ingest → chunk → embed → retrieve → generate)",
            "Multi-format upload: PDF, DOCX, TXT",
            "Judges' pick for design innovation",
        ],
        tech: ["HTML/CSS/JavaScript", "RAG pipeline", "Local LLM", "Offline-first architecture"],
        links: [],
        badge: "3rd Place",
        color: "from-amber-500/30 to-orange-500/30",
    },
    {
        id: "candidate-ranking",
        name: "Candidate Ranking Engine",
        tagline: "India Runs Hackathon 2026",
        tag: "Redrob AI × Hack2Skill",
        summary: "Intelligent candidate discovery & ranking engine for 100K candidates using a three-tier verification funnel. NDCG@10: 0.928.",
        overview: "Intelligent candidate discovery & ranking engine for 100K candidates using a three-tier verification funnel: integrity gate → semantic recall → cross-encoder rerank. Achieved NDCG@10 of 0.928 with zero honeypot profiles in the top 100.",
        highlights: [
            "100K-candidate corpus",
            "3-tier funnel: integrity gate → semantic recall → cross-encoder rerank",
            "NDCG@10: 0.928",
            "Zero honeypot profiles in top 100",
        ],
        tech: ["Python", "Semantic search", "Cross-encoder reranking"],
        links: [],
        badge: "NDCG@10 · 0.928",
        color: "from-fuchsia-500/30 to-violet-500/30",
    },
];

export const RESEARCH = {
    title: "Quantum Approximate Optimization for Join Order Selection: An Empirical Study with TPC-H Queries",
    authors: ["Kanhaiya Mehta", "Mohammad Owais"],
    affiliation: "IIIT Dharwad",
    status: "arXiv preprint in preparation",
    summary: "First systematic study applying gate-based QAOA to database join order optimization using the industry-standard TPC-H benchmark. Formulated a 3-table subset of TPC-H Query 5 as a 9-qubit QUBO with one-hot positional encoding and evaluated across four configurations: classical exact baseline, noiseless simulation, depolarizing noise simulation, and real IBM quantum hardware (ibm_kingston, 156 qubits). Noiseless QAOA at p=1 recovered the exact optimal join order; real-hardware execution quantified the NISQ coherence gap (peak probability 0.66% at 263 transpiled circuit depth). Gate-count crossover analysis shows QAOA overtakes classical DP near N≈9 tables.",
    badges: ["9-qubit QUBO", "IBM ibm_kingston (156 qubits)", "TPC-H benchmark", "O(N²) qubit scaling"],
};

export const NAV_SECTIONS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "achievements", label: "Achievements" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "contact", label: "Contact" },
];
