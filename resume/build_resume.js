// Public resume served at woooj02.github.io/resume.pdf, in the locked resume format
// (Calibri, blue name + section rules only, single contact line, inline titles).
// Phone number is left off on purpose: this copy is public.
// Build: NODE_PATH=<dir with docx> node resume/build_resume.js
//        soffice --headless --convert-to pdf --outdir public resume/Aryan_Neopane_Resume.docx
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
        LevelFormat, ExternalHyperlink } = require("docx");

const BLUE = "1F4E79";
const BLACK = "000000";
const FONT = "Calibri";
const BODY = 21;
const NAME_SZ = 32;
const HEADER_SZ = 22;

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 160, after: 40 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE, space: 1 } },
    children: [new TextRun({ text, bold: true, color: BLUE, size: HEADER_SZ, font: FONT, allCaps: true })],
  });
}
function tr(text, opts = {}) {
  return new TextRun({ text, font: FONT, size: opts.size || BODY, color: opts.color || BLACK, ...opts });
}
function link(text, url) {
  return new ExternalHyperlink({ link: url,
    children: [new TextRun({ text, font: FONT, size: BODY, color: BLUE, underline: {} })] });
}
function bullet(text) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 0, after: 30 },
    children: [tr(text)] });
}
function line(runs, after = 30) {
  return new Paragraph({ spacing: { before: 0, after }, children: runs });
}
function skill(label, text) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 0, after: 30 },
    children: [tr(label + ": ", { bold: true }), tr(text)] });
}
function project(name, subtitle, stack, bullets, url) {
  const title = [tr(name + " — " + subtitle + " ", { bold: true }), tr("(" + stack + ")")];
  if (url) title.push(tr(" · "), link(url.replace("https://", ""), url));
  return [line(title, 20), ...bullets.map(bullet)];
}
function role(title, org, dates, bullets) {
  return [line([tr(title + " — " + org + " · " + dates, { bold: true })], 20), ...bullets.map(bullet)];
}

const children = [
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 20 },
    children: [new TextRun({ text: "ARYAN NEOPANE", bold: true, color: BLUE, size: NAME_SZ, font: FONT })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 80 }, children: [
    tr("woooj02@gmail.com | Aurora, CO | "), link("Portfolio", "https://woooj02.github.io"), tr(" | "),
    link("GitHub", "https://github.com/woooj02"), tr(" | "),
    link("LinkedIn", "https://www.linkedin.com/in/aryan-neopane"),
  ] }),
  line([tr(
    "AI Engineer who builds AI agent systems and runs them in production on servers I administer. My content " +
    "pipeline has published 265 videos across 4 channels since May 2026 with 97% of runs succeeding, unattended; " +
    "Shayaak is live on the web and the iOS App Store; and I have a fix merged into MLflow. Every build ships with " +
    "evaluation suites, code-enforced guardrails around the model, human approval for risky actions, and alerting " +
    "that reaches a person. B.S. Computer Science (GPA 3.59), University of Colorado Denver; U.S. citizen in Aurora, CO."
  )], 60),

  sectionHeader("Education"),
  line([tr("B.S. Computer Science", { bold: true }), tr(" — University of Colorado Denver · December 2023 · GPA 3.59")], 20),
  line([tr("Cybersecurity and Secure Computing Certificate", { bold: true }), tr(" — University of Colorado Denver · May 2023")], 20),

  sectionHeader("Technical Skills"),
  skill("LLMs & Agentic Systems",
    "Multi-agent orchestration, tool calling, RAG, MCP servers, structured outputs with schema validation, " +
    "human-in-the-loop design; Anthropic Claude, Google Gemini, Together AI, Amazon Bedrock, NVIDIA Nemotron, OpenAI, Ollama"),
  skill("Evaluation & LLMOps",
    "Golden sets of scored LLM eval cases, offline regression suites against fake models, release gates, hallucination " +
    "controls (verbatim-quote checks, multi-model agreement), MLflow tracing, structured logging, alerting"),
  skill("Machine Learning",
    "PyTorch, scikit-learn, OpenCV segmentation validated on held-out data, uncertainty quantification, " +
    "time-series forecasting (Holt-Winters, ARIMA), anomaly detection (Isolation Forest, Elliptic Envelope)"),
  skill("Programming",
    "Python (FastAPI, asyncio, Pydantic, Pandas, NumPy), TypeScript/JavaScript (React, Node.js, Express, Fastify), " +
    "SQL, Swift (StoreKit 2), C++, Bash; pytest, TDD"),
  skill("Infrastructure",
    "Linux (daily driver since 2021), nginx, systemd, SSL, nightly backups, Docker, Kubernetes, GitHub Actions, " +
    "GitLab CI, AWS (Lambda, Bedrock, S3, SES, SNS, CloudWatch)"),
  skill("Data & Security",
    "PostgreSQL, SQLite, Redis, ETL pipelines, data validation; Cybersecurity Certificate, OWASP Top 10, " +
    "SSN/card masking, verified webhook signatures, zero-data-retention model hosting"),

  sectionHeader("Projects"),
  ...project("Keeps Running Admin Agent", "Production Multi-Agent Platform for Small Offices",
    "Python, FastAPI, Pydantic, Together AI, Anthropic Claude, RapidOCR, AWS SES/S3/SNS, pytest, Linux", [
    "Designed and built four agents (inquiry intake and booking, paperwork collection, document reading, client " +
    "updates) on one engine, where each office is a YAML file merged over a per-trade template, so a new office goes " +
    "live by configuration, not code.",
    "Engineered guardrails where the model decides and code gates every action: drafts held for owner approval, " +
    "never-answer rules for forwards, auto-replies and mail loops, per-person rate caps, SSN and card-number masking.",
    "Built an evaluation harness: 45 scored LLM eval cases (45/45 passing, Oct 2026) plus 149 offline pytest tests " +
    "against a fake model, so prompt and model changes are measured before release.",
    "Built an OCR-first document pipeline: scans are read on-server by RapidOCR (~1 s a page) and escalate to a vision " +
    "LLM only for low-confidence pages; model 429/5xx errors retry with backoff and unfinished jobs re-queue.",
  ]),
  ...project("Autonomous Content Pipeline", "7-Stage Agent Pipeline, Live Since May 2026",
    "Python, Gemini, Tavily, Edge TTS, moviepy, ffmpeg, YouTube Data API, OAuth, SQLite, cron", [
    "Operate a 7-stage pipeline unattended on my own Linux server across 4 YouTube channels: 265 videos published " +
    "from 272 runs (97%) between May and November 2026, covering trend discovery, research, scriptwriting, neural " +
    "TTS, video assembly and scheduled uploads.",
    "Architected a config-overlay channel system (one profile file per channel over shared defaults) with per-channel " +
    "failure isolation and alerts that fall back from Discord to Telegram to email.",
  ]),
  ...project("Sandbox City", "Crash-Test Lab for AI Shopping Agents on PayPal",
    "TypeScript, Node 22, Fastify, React, PayPal Orders v2, PayPal Agent Toolkit, Ollama, GitHub Actions", [
    "Built 16 agent test cases with plain-code verdicts that exit 1 on a breach so they run in CI, and benchmarked six " +
    "payment-defense rulebooks over 30 simulated days per round with 95% intervals; the recommended rulebook refuses " +
    "a $1,620.64 order a real model was talked into placing on the PayPal sandbox.",
    "Engineered a durable payment journal: a test kills the process right after a capture, and recovery reads the " +
    "order back from PayPal and charges exactly once.",
  ], "https://github.com/woooj02/sandbox_city"),
  ...project("WoundTrace", "Agentic Computer Vision on AWS",
    "Python, OpenCV, PyTorch, Amazon Bedrock, AWS Lambda, CloudWatch", [
    "Trained and validated a segmentation model on held-out data: Dice 0.82 on 200 expert-annotated images, 0.77 on " +
    "122 smartphone photos, zero false outlines on 1,378 negatives.",
    "Built an Amazon Bedrock agent (9 tools) that turns one photo beside a calibration card into an area in cm² with " +
    "its uncertainty, with plain code gating every action; deployed serverless on AWS Lambda.",
  ], "https://github.com/woooj02/woundtrace"),
  ...project("Waive", "LLM + Theorem-Prover Policy Audit", "Python, FastAPI, NVIDIA Nemotron, Z3 SMT solver, pytest", [
    "Built a neuro-symbolic pipeline where NVIDIA Nemotron translates 10–40 page hospital charity-care policies into " +
    "formal logic and the Z3 theorem prover checks them against state and federal rules, returning the exact case " +
    "where a policy falls short.",
    "Engineered hallucination controls across the model chain: every encoded clause must quote its source verbatim " +
    "(checked in code), a second model verifies each quote, and a finding counts only if it reproduces in at least 3 " +
    "of 5 independently generated models; 53 pytest tests.",
  ], "https://github.com/woooj02/waive"),
  ...project("Shayaak", "Wellness App with an AI Companion, Live on Web and iOS",
    "React, Node.js, Express, SQLite, Capacitor, Swift, Stripe, Apple In-App Purchase, nginx", [
    "Designed, built and operate Shayaak solo, live at shayaak.com and on the iOS App Store, with a 16-tool agent layer " +
    "where the model decides and server code executes, and Stripe plus Apple in-app billing with server-side receipt checks.",
    "Took the iOS app through App Store review to release (v1.0 approved August 2026, v1.1 ten days later) with a " +
    "250+ test backend suite run before every deploy, nginx with SSL, systemd and nightly backups.",
  ]),
  ...project("Open Source", "MLflow Tracing", "Python, MLflow autolog, Mistral SDK, Groq SDK, pytest", [
    "Diagnosed an MLflow bug where mistral.autolog() silently dropped tool definitions from traces and authored the " +
    "fix with a regression test, merged into MLflow (PR #26959, Nov 2026); opened PR #27287 adding Groq streaming traces.",
  ]),

  sectionHeader("Experience"),
  ...role("Founder & Engineer", "Keeps Running LLC, Aurora, CO", "09/2026 – Present", [
    "Own the business end to end: product design, production operations on Linux (systemd, nginx, SSL, nightly S3 " +
    "backups), Stripe billing, and compliance-minded data handling (export and delete on request).",
  ]),
  ...role("Care Giver", "R&A Home Care, Centennial, CO", "05/2024 – Present", [
    "Deliver direct client care with strict documentation accuracy, schedule adherence and care-plan compliance.",
  ]),
  ...role("Teaching Assistant – Software Engineering", "University of Colorado Denver", "09/2023 – 12/2023", [
    "Led weekly office hours and code reviews for Python, C++, OOP and debugging; promoted modular design, version " +
    "control and TDD.",
  ]),
  ...role("Store Manager", "Gem Store, Denver, CO", "08/2020 – 12/2022", [
    "Drove a 25% revenue increase over two years through daily reconciliation, sales reporting and inventory analytics.",
  ]),
];

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: BODY } } } },
  numbering: { config: [{ reference: "bullets", levels: [{
    level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 280, hanging: 220 } } } }] }] },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 },
    margin: { top: 864, right: 1008, bottom: 864, left: 1008 } } }, children }],
});

const out = path.join(__dirname, "Aryan_Neopane_Resume.docx");
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(out, buf); console.log(out); });
