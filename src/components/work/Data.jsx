import Work5 from "../../assets/work5.jpg"
import FinBert from "../../assets/Finbert.jpg"
import Tow from "../../assets/Tow.png"
import Bank from "../../assets/Bank.jpg"
import Server from "../../assets/Server.jpg"
import Portfolio from "../../assets/Portfolio.png"
import ReactJob from "../../assets/ReactJob.png"
import LinkShortener from "../../assets/LinkShortener.png"
import Legal from "../../assets/Legal.jpg"
import DQL from "../../assets/DQL.jpg"
import Nine from "../../assets/911.jpg"
import Sonic from "../../assets/sonic.jpg"

export const projectsData = [
  {
    image: Sonic,
    title: "Synapse — AI Prediction Market Intelligence",
    category: "AI",
    featured: true,
    tags: ["Spring Boot", "Kafka", "Spring AI", "Next.js", "GPT-4o", "RabbitMQ"],
    desc: "A full-stack agentic platform that streams live Polymarket data, cross-references it against real-time news and social sentiment, and fires AI-driven alerts whenever crowd odds diverge from reality.",
    highlights: [
      "Streams live trades and order book changes from Polymarket via WebSocket",
      "Buffers high-frequency price updates through RabbitMQ to handle volatility spikes without data loss",
      "Triggers a Deep Research agent when a market moves >5% in a short window",
      "Compares current odds against scraped news using GPT-4o / Claude to flag irrational pricing",
      "Displays everything on a live Next.js dashboard with a real-time AI Insight ticker",
    ],
    link: {
      github: "https://github.com/OwinoMichael/Synapse",
      site: "https://mikeowino.cloud/synapse",
    },
  },
  {
    image: Sonic,
    title: "Plasso CodeSync — Collaborative Code Editor",
    category: "Web",
    featured: true,
    tags: ["React", "TypeScript", "Spring Boot", "Apache Kafka", "JWT", "OAuth"],
    desc: "A full-stack real-time collaborative code editor supporting multi-user synchronization, passwordless authentication with magic link email verification, and Google SSO.",
    highlights: [
      "Engineered with React TypeScript frontend and Java Spring Boot backend using Apache Kafka for real-time sync",
      "Implemented passwordless authentication with magic link email verification and JWT session management",
      "Google SSO via OAuth reducing login friction by 60%",
      "PostgreSQL schema with role-based access control for project workspaces and collaborative file management",
    ],
    link: {
      github: "https://github.com/OwinoMichael/Plasso",
      site: "https://mikeowino.cloud/plasso",
    },
  },
  {
    image: Sonic,
    title: "Sonic Resonance",
    category: "AI",
    featured: true,
    tags: ["Spring Boot", "React TS", "FFmpeg", "PostgreSQL", "Redis"],
    desc: "A full Shazam-style audio fingerprinting system with real-time decoding, spectrogram generation, and hash-based fingerprint matching across thousands of tracks.",
    highlights: [
      "Built with Spring Boot WebFlux, React TypeScript, and FFmpeg for real-time audio decoding",
      "Implemented non-blocking I/O and parallelized audio processing to reduce recognition latency at scale",
      "Designed spectrogram generation pipeline for robust audio fingerprint creation",
      "PostgreSQL + Redis for optimized fingerprint storage and fast retrieval",
    ],
    link: {
      github: "https://github.com/OwinoMichael/Sonic-Resonance",
      site: "https://mikeowino.cloud/sonicres/",
    },
  },
  {
    image: Legal,
    title: "Legal Mind — AI MCP System",
    category: "AI",
    featured: true,
    tags: ["Java", "Spring Boot", "Python", "FastAPI", "React TS", "Legal-BERT"],
    desc: "An AI-powered MCP server that automatically scans and analyzes legal documents, achieving 93% accuracy in identifying clauses, risks, and compliance warnings.",
    highlights: [
      "Developed MCP server using Java Spring Boot and Python FastAPI with a React TypeScript frontend",
      "Integrated Legal-BERT LLM and ETL workflows for clause classification and risk detection",
      "Reduced manual legal review time by 65% across 500+ documents using a RAG design",
      "Achieved 95% test coverage with JUnit and Selenium automated testing",
    ],
    link: {
      github: "https://github.com/OwinoMichael/AI-Legal-Assistance",
      site: "https://mikeowino.cloud/legallens/",
    },
  },
  {
    image: DQL,
    title: "Deep Q-Learning Stock Trader",
    category: "AI",
    tags: ["Python", "Deep Q-Learning", "PyTorch", "Reinforcement Learning"],
    desc: "An autonomous stock trading agent built using Deep Q-Learning, trained to maximize portfolio returns through reinforcement learning on historical market data.",
    highlights: [
      "Implemented a DQL agent with experience replay and target network stabilization",
      "Trained on historical stock data with custom reward shaping for portfolio optimization",
      "Visualized agent behavior, Q-values, and portfolio growth over training episodes",
      "Published full exploration notebook on Kaggle with reproducible results",
    ],
    link: {
      github: "https://github.com/OwinoMichael/AI-Autonomous-Stock-Trader-DQL-Agent",
      kaggle: "https://www.kaggle.com/code/owinomikey/exploring-deep-q-learning-for-stock-trading-portfo",
    },
  },
  {
    image: Nine,
    title: "911 Calls Visualization Platform",
    category: "AI",
    tags: ["Python", "Java", "Spring Boot", "React", "Data Viz"],
    desc: "An interactive platform for visualizing and analyzing 911 emergency call data, surfacing patterns in call volume, type, and geography.",
    highlights: [
      "Built full-stack platform with Spring Boot backend and React frontend",
      "Processed and cleaned large 911 call datasets for accurate trend analysis",
      "Implemented interactive charts and heatmaps for geographic call distribution",
      "Deployed live dashboard accessible via authenticated web portal",
    ],
    link: {
      github: "https://github.com/OwinoMichael/AI-911-Calls-Platform",
      site: "http://owinomike.me:8081/login",
    },
  },
  {
    image: FinBert,
    title: "FinBERT & LSTM Stock Prediction",
    category: "AI",
    tags: ["Python", "FinBERT", "LSTM", "NLP", "PyTorch"],
    desc: "A hybrid model combining FinBERT sentiment analysis on financial news with a multi-temporal attention LSTM for improved stock price prediction.",
    highlights: [
      "Fine-tuned FinBERT on financial news headlines for investor sentiment scoring",
      "Built a multi-temporal attention LSTM to capture short and long-term price trends",
      "Combined sentiment signals with price features to improve prediction accuracy",
    ],
    link: {
      github: "https://github.com/OwinoMichael/FinBERT-Sentiment-Analysis-and-MTS-Temp-Att.-LSTM-",
      kaggle: "https://www.kaggle.com/code/owinomikey/exploring-investors-emotions-for-financial-sentim/edit",
    },
  },
  {
    image: Server,
    title: "Multi-Client Chat Server",
    category: "Systems",
    tags: ["C", "POSIX Sockets", "Multithreading", "pthreads", "Linux"],
    desc: "A multi-client TCP chat server written in C, supporting concurrent client connections with real-time message broadcasting using POSIX threads and sockets.",
    highlights: [
      "Built from scratch in C using POSIX socket API and pthreads for concurrent client handling",
      "Each client connection handled on a dedicated thread with shared broadcast logic",
      "Implemented graceful disconnect detection and client registry management",
    ],
    link: { github: "https://github.com/OwinoMichael/Multi-client-Chat-Server-in-C" },
  },
  {
    image: Server,
    title: "TCP & UDP Client-Server",
    category: "Systems",
    tags: ["C", "TCP", "UDP", "POSIX Sockets", "Networking", "Linux"],
    desc: "A low-level networking project in C implementing both TCP and UDP client-server communication from scratch.",
    highlights: [
      "Implemented full TCP client-server with handshake, reliable data transfer, and teardown",
      "Built parallel UDP client-server for low-latency datagram-based communication",
      "Pure C with POSIX socket API — no external libraries",
    ],
    link: { github: "https://github.com/OwinoMichael/TCP-and-UDP-Client-Server-in-C" },
  },
  {
    image: Server,
    title: "Multi-Threaded HTTP Server",
    category: "Systems",
    tags: ["Java", "Multithreading", "HTTP", "Sockets", "Concurrency"],
    desc: "A custom-built multi-threaded HTTP server in Java, handling concurrent client connections using thread pooling and raw socket programming.",
    highlights: [
      "Implemented HTTP/1.1 request parsing and response generation from scratch",
      "Thread pool executor for managing concurrent client connections efficiently",
      "Handled GET, POST, and static file serving with proper MIME types",
    ],
    link: { github: "https://github.com/OwinoMichael/Multi-Threaded-HTTP-Server-in-Java" },
  },
  {
    image: ReactJob,
    title: "HireHive — Jobs Site",
    category: "Web",
    tags: ["React 18", "JavaScript", "REST API", "Tailwind CSS"],
    desc: "A modern job posting and browsing web app built with React 18, allowing employers to post roles and candidates to search and filter listings.",
    highlights: [
      "Built with React 18 using hooks, context, and component-driven architecture",
      "Implemented job filtering by role type, location, and salary range",
      "Connected to a mock REST API for job CRUD operations",
    ],
    link: { github: "https://github.com/OwinoMichael/HireHive-Job-Posting-App-react-18" },
  },
  {
    image: Tow,
    title: "Truck on Wheels — Android App",
    category: "Mobile",
    tags: ["Android", "Java", "Google Maps API", "Firebase"],
    desc: "An Android application for truck logistics and on-demand towing services, connecting drivers with customers needing roadside assistance.",
    highlights: [
      "Built natively in Java for Android with Google Maps API integration",
      "Real-time driver tracking and job dispatch flow for towing requests",
      "Firebase backend for authentication, job storage, and push notifications",
    ],
    link: {
      github: "https://github.com/OwinoMichael/Truck-On-Wheels-Android-Java",
      link: "https://drive.google.com/file/d/1RjBmwfeB0cTeYCNEFOAQkinEsKLUH9y-/view?usp=drive_link",
    },
  },
  {
    image: Bank,
    title: "Financial Service API",
    category: "Backend",
    tags: ["Java", "Spring Boot", "REST API", "MySQL", "JWT"],
    desc: "A secure, scalable banking backend built with Spring Boot, supporting account management, transactions, and financial reporting.",
    highlights: [
      "Designed RESTful endpoints for account creation, transfers, and balance queries",
      "Implemented JWT-based authentication and role-based access control",
      "Optimized MySQL queries for high-throughput transaction processing",
    ],
    link: { github: "https://github.com/OwinoMichael/Banking-System-Backend-SpringBoot" },
  },
  {
    image: Work5,
    title: "Invoicing App",
    category: "Web",
    tags: ["Laravel", "Vue.js", "MySQL", "PHP"],
    desc: "A full-stack invoicing application built with Laravel and Vue.js, enabling businesses to create, manage, and track invoices and client payments.",
    highlights: [
      "Built RESTful API with Laravel for invoice and client management",
      "Vue.js frontend with reactive invoice builder and PDF export",
      "Authentication with Laravel Sanctum and role-based permissions",
    ],
    link: { github: "https://github.com/OwinoMichael/Laravel-Vue-JS-Invoicing-App" },
  },
  {
    image: Portfolio,
    title: "Personal Portfolio",
    category: "Web",
    tags: ["React", "JavaScript", "CSS3"],
    desc: "My personal developer portfolio showcasing projects, skills, and experience — built from scratch with React.",
    highlights: [
      "Fully responsive layout with smooth scroll and section animations",
      "Dynamic project filtering and category-based navigation",
      "Integrated contact form with EmailJS for direct message delivery",
    ],
    link: { link: "https://mikeowino.cloud/" },
  },
  {
    image: LinkShortener,
    title: "URL Shortener — Petite Link",
    category: "Web",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    desc: "A lightweight URL shortener that generates compact shareable links and tracks click analytics.",
    highlights: [
      "Built with Node.js and Express for fast link generation and redirection",
      "MongoDB for storing original URLs, short codes, and click metadata",
      "Click tracking with basic analytics on usage per shortened link",
    ],
    link: { github: "https://github.com/OwinoMichael/url-shortener-petite-link" },
  },
];

export const projectNav = [
  { name: "All" },
  { name: "AI" },
  { name: "Web" },
  { name: "Backend" },
  { name: "Mobile" },
  { name: "Systems" },
];