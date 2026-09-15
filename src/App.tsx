import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cpu,
  Music2,
  Gamepad2,
  Users,
  Speaker,
  Volume2,
  VolumeX,
} from "lucide-react";

import bgm from "./assets/BGM.mp3";

import darren from "./photo/darren.jpeg";

import taskweaver1 from "./projects/taskweaver/1.jpeg";
import taskweaver2 from "./projects/taskweaver/2.jpeg";
import taskweaver4 from "./projects/taskweaver/4.jpeg";

import calorIQ1 from "./projects/calorIQ/1.jpeg";
import calorIQ2 from "./projects/calorIQ/2.jpeg";
import calorIQ3 from "./projects/calorIQ/3.jpeg";
import calorIQ4 from "./projects/calorIQ/4.jpeg";

import sonata1 from "./projects/sonata/1.jpeg";
import sonata2 from "./projects/sonata/2.jpeg";

import roomtogrow1 from "./projects/roomtogrow/1.jpeg";
import roomtogrow2 from "./projects/roomtogrow/2.jpeg";
import roomtogrow3 from "./projects/roomtogrow/3.jpeg";
import roomtogrow4 from "./projects/roomtogrow/4.jpeg";

import measles1 from "./projects/measles/1.jpeg";
import measles2 from "./projects/measles/2.jpeg";
import measles3 from "./projects/measles/3.jpeg";
import measles4 from "./projects/measles/4.jpeg";

import speechcommand1 from "./projects/speechcommand/1.png";
import speechcommand2 from "./projects/speechcommand/2.png";

type Project = {
  n: string;
  status: "COMPLETED" | "IN DEVELOPMENT" | "ON HOLD" | "ARCHIVED";
  title: string;
  category: string;
  desc: string;
  details: string;
  role: string;
  tech: string[];

  github?: {
    frontend?: string;
    backend?: string;
    main?: string;
  };

  itchio?: string;

  images: string[];
  icon: typeof Users;
};

type Experience = {
  n: string;
  date: string;
  organization: string;
  title: string;
  category: string;
  description: string;
  details: string;
  responsibilities: string[];
  images: string[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "TASKWEAVER",
    category: "WEB / AI",
    status: "COMPLETED",

    desc:
      "AI-powered task allocation for groups, built to make work distribution fairer.",

    details:
      "TaskWeaver is a web-based AI task allocation application designed to help groups distribute work fairly. I worked primarily on the frontend, including the interface design, dark mode, additional components and pages, bug fixes, and frontend/backend integration. I also contributed heavily to the real-time chat feature using Socket, allowing users to see messages from other members live.",

    role: "FRONTEND DEVELOPER",

    tech: ["REACT", "TYPESCRIPT", "SOCKET"],

    github: {
      frontend: "https://github.com/rfvvel/TaskWeaver",
      backend:
        "https://github.com/myxolorian/ProjectTaskWeaverBackend",
    },

    images: [taskweaver1, taskweaver2, taskweaver4],

    icon: Users,
  },

  {
    n: "02",
    title: "CalorIQ",
    category: "COMPUTER VISION",
    status: "COMPLETED",

    desc:
      "A computer-vision application where I worked on frontend development, Figma design, frontend/backend integration, formulas and model evaluation metrics.",

    details:
      "CalorIQ is a computer-vision project developed as a team project. I worked on the frontend implementation and designed the frontend interface in Figma. I also handled the connection between the frontend and backend, implemented the required formulas, and worked with the evaluation metrics used to evaluate the trained model.",

    role: "FRONTEND DEVELOPER",

    tech: ["PYTHON", "COMPUTER VISION", "FIGMA"],

    github: {
      main: "https://github.com/ldkudrcrkz-droid/NLP-CalorIQ-",
    },

    images: [
      calorIQ1,
      calorIQ2,
      calorIQ3,
      calorIQ4,
    ],

    icon: Cpu,
  },

  {
    n: "03",
    title: "SONATA",
    category: "DESKTOP / MUSIC",
    status: "COMPLETED",

    desc:
      "A self-initiated music player that scans and plays downloaded music. Backend development in C# with a React and TypeScript frontend.",

    details:
      "Sonata is a self-initiated music player application designed to scan a folder directory containing downloaded songs and allow users to play their music through the application. I worked as the backend developer using C#, while the frontend was developed using React and TypeScript. I also worked on debugging and connecting the different parts of the application.",

    role: "BACKEND DEVELOPER",

    tech: ["C#", "REACT", "TYPESCRIPT"],

    github: {
      frontend: "https://github.com/Pr13stess/SonataFrontend",
      backend:
        "https://github.com/ldkudrcrkz-droid/SonataBackend",
    },

    images: [
      sonata1,
      sonata2,
    ],

    icon: Music2,
  },

  {
    n: "04",
    title: "ROOM TO GROW",
    category: "GAME DEVELOPMENT",
    status: "COMPLETED",

    desc:
      "A 7-day game-jam project from the BINUS S Class Game Development program. I designed environmental assets and room props in Blender.",

    details:
      "Room to Grow was created during a 7-day game jam through the BINUS S Class Game Development program. Our team consisted of four people. I worked as the 3D designer, creating environmental assets and room props using Blender, including objects used to build the game's environment.",

    role: "3D DESIGNER",

    tech: ["BLENDER", "UNITY", "3D"],

    itchio:
      "https://jlhady.itch.io/room-to-grow",

    images: [
      roomtogrow1,
      roomtogrow2,
      roomtogrow3,
      roomtogrow4,
    ],

    icon: Gamepad2,
  },

  {
    n: "05",
    title: "MEASLES FORECASTING",
    category: "RESEARCH / ML",
    status: "COMPLETED",

    desc:
      "A machine-learning forecasting study comparing Random Forest, ARIMA and XGBoost for measles trends in tropical countries.",

    details:
      "This was a machine-learning forecasting research project focused on measles trends in tropical countries. The study compared the performance of Random Forest, ARIMA, and XGBoost models. I was heavily involved in the research paper and model comparison process. One of the main lessons from the project was the importance of having a larger dataset and more relevant features.",

    role: "MACHINE LEARNING / RESEARCH",

    tech: ["PYTHON", "ML", "RESEARCH"],

    images: [
      measles1,
      measles2,
      measles3,
      measles4,
    ],

    icon: Cpu,
  },

  {
    n: "06",
    title: "Speech Commandment",
    category: "AI / SPEECH RECOGNITION",
    status: "IN DEVELOPMENT",

    desc:
      "A real-time speech recognition system that captures microphone input and classifies spoken commands using a machine-learning model.",

    details:
      "This project is a real-time speech recognition system designed to recognize predefined voice commands from microphone input. The system continuously listens to the computer's audio input, processes the captured speech, and uses a trained machine-learning model to classify the audio into specific commands such as GO, RIGHT, and UP. It also provides a confidence score for each prediction, allowing the system to indicate how certain the model is about the recognized command. The project serves as a foundation for integrating voice-controlled interactions into applications such as games and other interactive systems.",

    role: "AI / DEEP LEARNING / SPEECH RECOGNITION",

    tech: [
      "PYTHON",
      "DEEP LEARNING",
      "SPEECH RECOGNITION",
      "AUDIO PROCESSING",
    ],

    github: {
      main:
        "https://github.com/ldkudrcrkz-droid/SpeechCommandRecog",
    },

    images: [
      speechcommand1,
      speechcommand2,
    ],

    icon: Speaker,
  },
];

const experiences: Experience[] = [
  {
    n: "01",
    date: "2025",
    organization: "NIPPON CLUB BINUS",
    title: "VICE PROJECT MANAGER",
    category: "ORGANIZATION",

    description:
      "Supporting the planning and execution of a Nippon Club expo, coordinating tasks and project activities.",

    details:
      "As Vice Project Manager, I supported the planning and execution of a Nippon Club expo. I worked with the project team to coordinate tasks, organize activities, and help ensure that the event could be executed smoothly.",

    responsibilities: [
      "Assisted with event planning and preparation",
      "Coordinated project tasks and activities",
      "Worked with team members throughout the event preparation",
      "Supported the execution of the Nippon Club expo",
    ],

    images: [],
  },

  {
    n: "02",
    date: "CURRENT",
    organization: "NIPPON CLUB BINUS",
    title: "MEMBER SUPPORT COORDINATOR",
    category: "ORGANIZATION",

    description:
      "Organizing member data, internal events and community moderation while leading activists in the division.",

    details:
      "As the Member Support Coordinator, I am responsible for organizing and maintaining data for students who join Nippon Club. I also organize internal events, moderate the club server, and lead activists within the Member Support division while helping support members and other club activities.",

    responsibilities: [
      "Organize and maintain member data",
      "Organize internal club events",
      "Moderate the club community server",
      "Lead activists within the Member Support division",
      "Support members and internal club activities",
    ],

    images: [],
  },

  {
    n: "03",
    date: "S CLASS",
    organization: "BINUS UNIVERSITY",
    title: "GAME DEVELOPMENT",
    category: "EDUCATION / GAME DEV",

    description:
      "Selected for additional game development classes through the BINUS S Class program and participated in a 7-day game jam as a 3D designer.",

    details:
      "Through the BINUS S Class program, I took additional classes focused on game development. I later participated in a 7-day game jam as part of a four-person team, where I worked primarily as a 3D designer. I created environmental assets and room props using Blender and prepared them for use within the game.",

    responsibilities: [
      "Created 3D environmental assets",
      "Designed room props using Blender",
      "Worked as part of a four-person development team",
      "Participated in a 7-day game jam",
      "Prepared assets for use within the game",
    ],

    images: [],
  },

  {
    n: "04",
    date: "2026",
    organization: "TFI",
    title: "Teaching Assistant",
    category: "EXPERIENCE",

    description:
      "Volunteered as a teaching assistant for Teaching for Indonesia (TFI), helping children develop basic computer skills and learn introductory graphic design using Canva.",

    details:
      "As a volunteer with Teaching for Indonesia (TFI) at BINUS University, I taught children fundamental computer skills while introducing them to Canva and basic graphic design concepts. I developed simple and beginner-friendly lessons that turned design concepts into practical activities, then guided students through hands-on exercises and provided individual assistance throughout the learning process.",

    responsibilities: [
      "Taught children basic computer skills and introduced them to Canva and fundamental graphic design concepts.",
      "Developed simple, beginner-friendly lessons that broke down design tools and concepts into practical activities.",
      "Guided students through hands-on Canva exercises and provided individual assistance throughout the learning process.",
    ],

    images: [],
  },

  {
    n: "05",
    date: "currently",
    organization: "Mentor Binus University",
    title: "Mentor for Binus University",
    category: "EXPERIENCE",

    description:
      "Mentored BINUS University students by helping them understand and overcome difficulties with their academic coursework and learning materials.",

    details:
      "As a mentor at BINUS University, I supported students who were struggling with various academic materials and concepts. My role involved identifying the areas they found difficult, explaining the material in a simpler and more understandable way, and adapting my approach based on each student's needs. I also guided students through problems and exercises, answered questions, and helped them build a better understanding of the material rather than simply providing the answers.",

    responsibilities: [
      "Helped students understand academic materials and concepts they found difficult.",
      "Identified individual learning difficulties and adapted explanations accordingly.",
      "Explained complex topics using simpler and more approachable methods.",
      "Guided students through exercises, problems, and coursework.",
      "Answered questions and provided additional clarification when needed.",
    ],

    images: [],
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  // ==========================================================
  // BACKGROUND MUSIC
  // ==========================================================

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
  const audio = new Audio(bgm);
  audio.loop = true;
  audio.volume = 0.25;
  audioRef.current = audio;

  const startMusic = () => {
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay.
        setIsPlaying(false);
      });

    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
  };

  startMusic();

  document.addEventListener("click", startMusic);
  document.addEventListener("keydown", startMusic);

  return () => {
    audio.pause();
    audio.src = "";
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
  };
}, []);

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  const closeDetails = () => {
    setSelectedProject(null);
    setSelectedExperience(null);
  };

  return (
    <div className="app">
      <div className="noise" />
      <div className="halftone" />
      <div className="scanline" />

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="topbar">
        <button
          className="brand"
          onClick={() => go("home")}
        >
          LIE <span>DARREN</span> KEEFE UTOMO
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {[
            ["home", "HOME"],
            ["about", "ABOUT"],
            ["projects", "WORK"],
            ["experience", "EXP"],
          ].map(([id, title]) => (
            <button
              key={id}
              onClick={() => go(id)}
            >
              {title}
            </button>
          ))}

          <button
            className="nav-call"
            onClick={() => go("contact")}
          >
            CONTACT <ArrowUpRight size={15} />
          </button>
        </nav>

        <button
          className="mobile"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* ======================================================
          BGM BUTTON
      ====================================================== */}

      <button
        className="music-button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Turn music off"
            : "Turn music on"
        }
        title={
          isPlaying
            ? "Turn music off"
            : "Turn music on"
        }
      >
        {isPlaying ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
      </button>

      <main>
        {/* ====================================================
            HERO
        ==================================================== */}

        <section id="home" className="hero">
          <div className="slash slash1" />
          <div className="slash slash2" />

          <div className="hero-copy">
            <div className="red-label">
              /// SYSTEM ONLINE
            </div>

            <div className="tiny">
              BINUS UNIVERSITY · COMPUTER SCIENCE,
              Artificial Intelligence · SEMESTER 05
            </div>

            <div className="hero-photo">
              <img
                src={darren}
                alt="Darren"
              />
            </div>

            <p>
              I'M DARREN — A COMPUTER SCIENCE STUDENT
              MAJORING IN AI
            </p>

            <p>
              Turning ideas into{" "}
              <b>
                WEB APPS, AI PROJECTS, 3D MODELS AND MORE
              </b>
            </p>

            <div className="hero-buttons">
              <button
                className="red-btn"
                onClick={() => go("projects")}
              >
                VIEW MY WORK
                <ArrowRight size={19} />
              </button>

              <button
                className="outline-btn"
                onClick={() => go("contact")}
              >
                CONTACT_
              </button>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="corner tl" />
            <div className="corner br" />

            <div className="terminal-head">
              <span>
                PERSONAL_DATA.EXE
              </span>

              <span>●</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-big">
                DARREN
              </div>

              <div className="terminal-rule" />

              <div className="line">
                <span>ROLE</span>
                COMPUTER SCIENCE STUDENT
              </div>

              <div className="line">
                <span>FOCUS</span>
                WEB DEVELOPMENT · AI · 3D MODELLING
              </div>

              <div className="line">
                <span>STATUS</span>
                <b>BUILDING...</b>
              </div>

              <div className="cursor">
                █
              </div>
            </div>
          </div>

          <button
            className="down"
            onClick={() => go("about")}
          >
            ▼ SCROLL TO ENTER
          </button>
        </section>

        {/* ====================================================
            ABOUT
        ==================================================== */}

        <section
          id="about"
          className="panel"
        >
          <div className="section-top">
            <span>01</span>
            <b>ABOUT ME</b>
            <em>PERSONA FILE / 001</em>
          </div>

          <div className="about-grid">
            <div>
              <h2>
                WHO
                <br />
                <i>AM I?</i>
              </h2>

              <div className="stamp">
                CS / BINUS
                <br />
                2024—2028
              </div>
            </div>

            <div className="about-text">
              <p>
                Motivated Computer Science undergraduate
                student with interests in software development,
                machine learning, computer vision as well as
                3D Modelling. Experienced in working on
                collaborative software projects involving
                front-end development, back-end development,
                feature implementation, as well as debugging.
                Comfortable working in team environments,
                contributing ideas, and adapting to new
                technologies and challenges. Strong
                problem-solving and communication skills with
                a continuous interest in expanding technical
                knowledge and building practical solutions.
                Currently seeking internship opportunities to
                gain industry experience and contribute to
                real-world software and technology projects.
              </p>

              <p>
                Through coursework, personal projects, club
                activities and the S class program, I've had
                the chance to build things with different
                teams and technologies.
              </p>

              <div className="stats">
                <div>
                  <strong>05</strong>
                  <small>SEMESTER</small>
                </div>

                <div>
                  <strong>05+</strong>
                  <small>PROJECTS</small>
                </div>

                <div>
                  <strong>∞</strong>
                  <small>IDEAS</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            SKILLS
        ==================================================== */}

        <section className="panel skills-panel">
          <div className="section-top">
            <span>02</span>
            <b>SKILL TREE</b>
            <em>LOADOUT</em>
          </div>

          <div className="skill-grid">
            {[
              [
                "01",
                "FRONTEND",
                "REACT · TYPESCRIPT · JS · HTML · CSS",
              ],
              [
                "02",
                "BACKEND",
                "C# · NODE.JS · REST · SOCKET",
              ],
              [
                "03",
                "AI / DATA",
                "PYTHON · ML · COMPUTER VISION · OPENCV",
              ],
              [
                "04",
                "CREATIVE",
                "BLENDER · UNITY · FIGMA · 3D",
              ],
            ].map((x) => (
              <div
                className="skill"
                key={x[0]}
              >
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================
            PROJECTS
        ==================================================== */}

        <section
          id="projects"
          className="panel work-panel"
        >
          <div className="section-top">
            <span>03</span>
            <b>MY PROJECTS</b>
            <em>SELECT A TARGET</em>
          </div>

          <div className="work-list">
            {projects.map((p) => {
              const Icon = p.icon;

              return (
                <article
                  className="work"
                  key={p.title}
                  onClick={() =>
                    setSelectedProject(p)
                  }
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setSelectedProject(p);
                    }
                  }}
                >
                  <div className="work-num">
                    {p.n}
                  </div>

                  <div className="work-icon">
                    <Icon size={28} />
                  </div>

                  <div className="work-main">
                    <div className="category">
                      {p.category}
                    </div>

                    <div className="project-list-title">
                      <h3>{p.title}</h3>

                      <span
                        className={`status status-${p.status
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p>{p.desc}</p>

                    <div>
                      {p.tech.map((t) => (
                        <span
                          className="pill"
                          key={t}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight
                    className="work-arrow"
                    size={28}
                  />
                </article>
              );
            })}
          </div>
        </section>

        {/* ====================================================
            EXPERIENCE
        ==================================================== */}

        <section
          id="experience"
          className="panel exp-panel"
        >
          <div className="section-top">
            <span>04</span>
            <b>EXPERIENCE</b>
            <em>MEMORY LOG</em>
          </div>

          <div className="memory-list">
            {experiences.map((exp) => (
              <article
                className="memory"
                key={exp.n}
                onClick={() =>
                  setSelectedExperience(exp)
                }
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setSelectedExperience(exp);
                  }
                }}
              >
                <div className="mem-date">
                  {exp.date}
                </div>

                <div className="memory-content">
                  <small>
                    {exp.organization}
                  </small>

                  <h3>{exp.title}</h3>

                  <p>
                    {exp.description}
                  </p>
                </div>

                <ArrowUpRight
                  className="memory-arrow"
                  size={28}
                />
              </article>
            ))}
          </div>
        </section>

        {/* ====================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="contact"
        >
          <div className="contact-inner">
            <div className="red-label">
              /// FINAL CALL
            </div>

            <h2>
              LET'S
              <br />
              <i>HENSHIN.</i>
            </h2>

            <p>
              GOT A PROJECT, COLLABORATION OR JUST WANT TO
              TALK TECH?
            </p>

            <a
              className="mail"
              href="mailto:ldkudrcrkz@gmail.com"
            >
              ldkudrcrkz@gmail.com
              <ArrowUpRight />
            </a>

            <div className="socials">
              <a
                href="https://github.com/ldkudrcrkz-droid"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                GITHUB
              </a>

              <a
                href="https://www.linkedin.com/in/lie-darren-keefe-utomo-606948386/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                LINKEDIN
              </a>

              <a
                href="mailto:ldkudrcrkz@gmail.com"
              >
                <Mail />
                EMAIL
              </a>
            </div>
          </div>

          <div className="calling-card">
            DARREN
            <br />
            <span>
              DEVELOPER / STUDENT
            </span>
          </div>
        </section>
      </main>

      {/* ======================================================
          PROJECT DETAIL MODAL
      ====================================================== */}

      {selectedProject && (
        <div
          className="detail-overlay"
          onClick={closeDetails}
        >
          <div
            className="detail-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="detail-close"
              onClick={closeDetails}
              aria-label="Close project"
            >
              <X size={24} />
            </button>

            <div className="detail-number">
              PROJECT / {selectedProject.n}
            </div>

            <div className="project-meta">
              <div className="category">
                {selectedProject.category}
              </div>

              <div
                className={`status status-${selectedProject.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {selectedProject.status}
              </div>
            </div>

            <h3>
              {selectedProject.title}
            </h3>

            <div className="detail-role">
              ROLE: {selectedProject.role}
            </div>

            <p className="detail-description">
              {selectedProject.details}
            </p>

            <div className="detail-tech">
              {selectedProject.tech.map(
                (tech) => (
                  <span
                    className="pill"
                    key={tech}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* ==================================================
                PROJECT LINKS
            ================================================== */}

            <div className="project-links">
              {selectedProject.github?.main && (
                <a
                  className="github-button"
                  href={
                    selectedProject.github.main
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  VIEW GITHUB
                  <ArrowUpRight
                    size={18}
                  />
                </a>
              )}

              {selectedProject.github?.frontend && (
                <a
                  className="github-button"
                  href={
                    selectedProject.github
                      .frontend
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  FRONTEND
                  <ArrowUpRight
                    size={18}
                  />
                </a>
              )}

              {selectedProject.github?.backend && (
                <a
                  className="github-button"
                  href={
                    selectedProject.github
                      .backend
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  BACKEND
                  <ArrowUpRight
                    size={18}
                  />
                </a>
              )}

              {selectedProject.itchio && (
                <a
                  className="github-button"
                  href={
                    selectedProject.itchio
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  🎮
                  PLAY ON ITCH.IO
                  <ArrowUpRight
                    size={18}
                  />
                </a>
              )}
            </div>

            {/* ==================================================
                PROJECT GALLERY
            ================================================== */}

            {selectedProject.images.length > 0 && (
              <div className="project-gallery">
                <div className="gallery-title">
                  DEVELOPMENT ARCHIVE
                </div>

                <div className="gallery-grid">
                  {selectedProject.images.map(
                    (image, index) => (
                      <div
                        className="gallery-image"
                        key={image}
                      >
                        <div className="gallery-label">
                          IMG /{" "}
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        <img
                          src={image}
                          alt={`${selectedProject.title} development screenshot ${
                            index + 1
                          }`}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================
          EXPERIENCE DETAIL MODAL
      ====================================================== */}

      {selectedExperience && (
        <div
          className="detail-overlay"
          onClick={closeDetails}
        >
          <div
            className="detail-modal experience-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="detail-close"
              onClick={closeDetails}
              aria-label="Close experience"
            >
              <X size={24} />
            </button>

            <div className="detail-number">
              EXPERIENCE /{" "}
              {selectedExperience.n}
            </div>

            <div className="category">
              {selectedExperience.category}
            </div>

            <h2>
              {selectedExperience.title}
            </h2>

            <div className="detail-role">
              {selectedExperience.organization}{" "}
              · {selectedExperience.date}
            </div>

            <p className="detail-description">
              {selectedExperience.details}
            </p>

            {/* ==================================================
                RESPONSIBILITIES
            ================================================== */}

            <div className="detail-section">
              <div className="gallery-title">
                RESPONSIBILITIES
              </div>

              <div className="responsibilities">
                {selectedExperience.responsibilities.map(
                  (item, index) => (
                    <div
                      className="responsibility"
                      key={item}
                    >
                      <span>
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ==================================================
                EXPERIENCE MEDIA
            ================================================== */}

            {selectedExperience.images.length > 0 && (
              <div className="project-gallery">
                <div className="gallery-title">
                  EXPERIENCE ARCHIVE
                </div>

                <div className="gallery-grid">
                  {selectedExperience.images.map(
                    (image, index) => (
                      <div
                        className="gallery-image"
                        key={image}
                      >
                        <div className="gallery-label">
                          IMG /{" "}
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        <img
                          src={image}
                          alt={`${selectedExperience.title} ${
                            index + 1
                          }`}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer>
        <span>
          DARREN_ // 2026
        </span>

        <span>
          NO ONE CAN TAKE AWAY YOUR FUTURE.
        </span>
      </footer>
    </div>
  );
}

export default App;