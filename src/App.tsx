import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Globe,
  Mail,
  Menu,
  X,
  Volume2,
  VolumeX,
  Linkedin,
  Download,
  Gamepad2,
  Brain,
  Server,
  Layers,
} from "lucide-react";

import profilePhoto from "./photo/darren.jpeg";

// ============================================================
// PROJECT IMAGES
// ============================================================

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

import speech1 from "./projects/speechcommand/1.png";
import speech2 from "./projects/speechcommand/2.png";

// ============================================================
// TYPES
// ============================================================

type Project = {
  n: string;
  year: string;
  category: string;
  title: string;
  status: string;
  role: string;
  description: string;
  details: string;
  technologies: string[];
  images: string[];
  links?: {
    label: string;
    url: string;
  }[];
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
};

// ============================================================
// PROJECT DATA
// ============================================================

const projects: Project[] = [
  {
    n: "01",
    year: "2025",
    category: "WEB APPLICATION",
    title: "TASKWEAVER",
    status: "COMPLETED",
    role: "Frontend Developer",

    description:
      "A web-based AI task allocation platform designed to distribute group tasks fairly and reduce disagreements over workload.",

    details:
      "TaskWeaver was developed as a five-person group project. I worked primarily on the frontend, including the interface design, dark mode, reusable components, additional pages, bug fixing, and connecting the frontend with the backend. One of my major contributions was implementing the real-time chat functionality using Socket-based communication, allowing users to see messages from other members live.",

    technologies: [
      "React",
      "TypeScript",
      "Socket",
      "Frontend",
      "REST API",
    ],

    images: [
      taskweaver1,
      taskweaver2,
      taskweaver4,
    ],

    links: [
      {
        label: "Frontend GitHub",
        url: "https://github.com/rfvvel/TaskWeaver",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/myxolorian/ProjectTaskWeaverBackend",
      },
    ],
  },

  {
    n: "02",
    year: "2025",
    category: "AI / NLP",
    title: "CALORIQ",
    status: "COMPLETED",
    role: "Frontend Developer",

    description:
      "An AI-powered application designed around food and nutritional information.",

    details:
      "CalorIQ was developed as a three-person project. My responsibilities covered the frontend implementation, UI design using Figma, frontend and backend integration, formula implementation, and evaluation metrics for the machine learning model. Through this project, I gained practical experience connecting a user interface with a machine learning backend.",

    technologies: [
      "React",
      "TypeScript",
      "Figma",
      "NLP",
      "Machine Learning",
    ],

    images: [
      calorIQ1,
      calorIQ2,
      calorIQ3,
      calorIQ4,
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/ldkudrcrkz-droid/NLP-CalorIQ-",
      },
    ],
  },

  {
    n: "03",
    year: "2026",
    category: "MUSIC APPLICATION",
    title: "SONATA",
    status: "COMPLETED",
    role: "Backend Developer",

    description:
      "A desktop-oriented music player designed to scan a local music directory and organize downloaded songs for playback.",

    details:
      "Sonata is a self-initiated project developed by a three-person team. I work primarily on the backend using C#, while also contributing to debugging and the integration between the backend and React-based frontend. The application is designed around managing and playing music files stored locally.",

    technologies: [
      "C#",
      ".NET",
      "React",
      "TypeScript",
      "REST API",
    ],

    images: [
      sonata1,
      sonata2,
    ],

    links: [
      {
        label: "Frontend GitHub",
        url: "https://github.com/Pr13stess/SonataFrontend",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/ldkudrcrkz-droid/SonataBackend",
      },
    ],
  },

  {
    n: "04",
    year: "2026",
    category: "GAME DEVELOPMENT",
    title: "ROOM TO GROW",
    status: "COMPLETED",
    role: "3D Designer",

    description:
      "A game-jam project created during a seven-day game development challenge.",

    details:
      "Room to Grow was created as part of the BINUS S Class Program's additional game development class. Our team consisted of four people and participated in a seven-day game jam. My role was 3D Designer, where I created environmental assets in Blender including furniture and other objects used throughout the game.",

    technologies: [
      "Blender",
      "Unity",
      "3D Modeling",
      "Game Development",
    ],

    images: [
      roomtogrow1,
      roomtogrow2,
      roomtogrow3,
      roomtogrow4,
    ],

    links: [
      {
        label: "Play / Project Page",
        url: "https://jlhady.itch.io/room-to-grow",
      },
    ],
  },

  {
    n: "05",
    year: "2025",
    category: "MACHINE LEARNING",
    title: "MEASLES FORECASTING",
    status: "COMPLETED",
    role: "Machine Learning Researcher",

    description:
      "A research project investigating machine learning approaches for forecasting measles cases in tropical countries.",

    details:
      "This research project compared several forecasting approaches, including Random Forest, ARIMA, and XGBoost. I worked extensively on the machine learning experimentation and wrote a large portion of the research paper. The project also taught me the importance of feature selection and dataset size when developing forecasting models.",

    technologies: [
      "Python",
      "Random Forest",
      "ARIMA",
      "XGBoost",
      "Machine Learning",
    ],

    images: [
      measles1,
      measles2,
      measles3,
      measles4,
    ],
  },

  {
    n: "06",
    year: "2026",
    category: "DEEP LEARNING",
    title: "SPEECH COMMANDMENT",
    status: "IN DEVELOPMENT",
    role: "Machine Learning Developer",

    description:
      "A speech command recognition project using deep learning techniques.",

    details:
      "Speech Commandment is a machine learning project focused on recognizing spoken commands. The project involved preparing audio data, developing the recognition pipeline, training the model, and evaluating its performance.",

    technologies: [
      "Python",
      "Deep Learning",
      "Audio Processing",
      "Speech Recognition",
    ],

    images: [
      speech1,
      speech2,
    ],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/ldkudrcrkz-droid/SpeechCommandRecog",
      },
    ],
  },
];

// ============================================================
// EXPERIENCE DATA
// ============================================================

const experiences: Experience[] = [
  {
    n: "01",
    date: "2026",
    organization: "Teaching for Indonesia",
    title: "Basic Computer Training Volunteer",
    category: "VOLUNTEER",

    description:
      "Volunteered as a teaching assistant for basic computer training activities.",

    details:
      "Participated in Teaching for Indonesia activities focused on helping participants become more familiar with fundamental computer concepts and everyday computer usage.",

    responsibilities: [
      "Assisted participants during basic computer training sessions.",
      "Explained fundamental computer concepts and workflows.",
      "Supported participants when they encountered difficulties.",
    ],
  },

  {
    n: "02",
    date: "2026",
    organization: "Nippon Club BINUS",
    title: "Member Support Coordinator",
    category: "ORGANIZATION",

    description:
      "Coordinator responsible for member support, community management, and internal activities.",

    details:
      "As a Member Support Coordinator at Nippon Club BINUS, I help organize and maintain member data, coordinate activities within the division, moderate the community server, and lead activists working under Member Support.",

    responsibilities: [
      "Organizing and maintaining student membership data.",
      "Organizing events and activities within the club.",
      "Moderating and maintaining the club's community server.",
      "Leading activists within the Member Support division.",
      "Supporting communication between members and the organization.",
    ],
  },

  {
    n: "03",
    date: "2025",
    organization: "Nippon Club BINUS",
    title: "Vice Project Manager",
    category: "EVENT MANAGEMENT",

    description:
      "Served as Vice Project Manager for a Nippon Club BINUS expo event.",

    details:
      "Worked as a Vice Project Manager during the organization of a Nippon Club BINUS expo. The role involved helping coordinate the project, supporting the project manager, and communicating with different teams involved in the event.",

    responsibilities: [
      "Assisted the Project Manager with event coordination.",
      "Helped coordinate different divisions and teams.",
      "Supported event preparation and execution.",
      "Communicated project information between teams.",
    ],
  },

  {
    n: "04",
    date: "2026",
    organization: "BINUS University",
    title: "S Class Program",
    category: "ACADEMIC",

    description:
      "Selected for the BINUS S Class Program and chose additional game development classes.",

    details:
      "After achieving a high GPA, I became eligible for the BINUS S Class Program, which provides additional class opportunities and academic options. I chose game development as my additional area of study, gaining practical experience with game development workflows and 3D asset creation.",

    responsibilities: [
      "Participated in additional game development classes.",
      "Learned game development workflows beyond the regular curriculum.",
      "Worked with a team on a seven-day game jam.",
      "Created 3D environmental assets using Blender.",
    ],
  },
];

// ============================================================
// APP
// ============================================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ==========================================================
  // AUDIO
  // ==========================================================


  // ==========================================================
  // MUSIC TOGGLE
  // ==========================================================

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // ==========================================================
  // ESCAPE
  // ==========================================================

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // ==========================================================
  // SCROLL LOCK
  // ==========================================================

  useEffect(() => {
    const locked =
      selectedProject !== null ||
      selectedExperience !== null;

    document.body.style.overflow = locked
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    selectedProject,
    selectedExperience,
  ]);

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="app">

      {/* ======================================================
          BACKGROUND FX
      ====================================================== */}

      <div className="noise" />
      <div className="halftone" />
      <div className="scanline" />

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="topbar">

        <button
          className="brand"
          onClick={() => scrollTo("home")}
        >
          Lie <span>Darren</span> Keefe Utomo
        </button>

        <nav
          className={`nav ${
            menuOpen ? "open" : ""
          }`}
        >

          <button
            onClick={() => scrollTo("about")}
          >
            01 // ABOUT
          </button>

          <button
            onClick={() => scrollTo("skills")}
          >
            02 // SKILLS
          </button>

          <button
            onClick={() => scrollTo("projects")}
          >
            03 // PROJECTS
          </button>

          <button
            onClick={() => scrollTo("experience")}
          >
            04 // EXPERIENCE
          </button>

          <button
            className="nav-call"
            onClick={() => scrollTo("contact")}
          >
            CONTACT
            <ArrowUpRight size={15} />
          </button>

        </nav>

        <button
          className="mobile"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>

      </header>


      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="slash slash1" />
        <div className="slash slash2" />

        <div className="hero-copy">

          <div className="red-label">
            [ 001 // PORTFOLIO ]
          </div>

          <h1 className="hero-title">
            LIE DARREN
            <br />
            <span>
              KEEFE UTOMO
            </span>
          </h1>

          <p>
            Computer Science student focused on{" "}
            <b>
              software development
            </b>
            , AI, frontend engineering,
            backend systems, and creative
            technology.
          </p>

          <div className="hero-buttons">

            <button
              className="red-btn"
              onClick={() =>
                scrollTo("projects")
              }
            >
              VIEW PROJECTS
              <ArrowUpRight size={16} />
            </button>

            <button
              className="outline-btn"
              onClick={() =>
                scrollTo("about")
              }
            >
              ABOUT ME
              <ArrowDown size={16} />
            </button>

            <a
              className="outline-btn"
              href="/cv/LieDarrenKeefeUtomo_CV.pdf"
              download="LieDarrenKeefeUtomo_CV.pdf"
            >
              DOWNLOAD CV
              <Download size={16} />
            </a>

          </div>

          <div className="hero-photo">

            <img
              src={profilePhoto}
              alt="Darren"
            />

          </div>

        </div>

        {/* ====================================================
            TERMINAL
        ==================================================== */}

        <div className="hero-terminal">

          <div className="corner tl" />
          <div className="corner br" />

          <div className="terminal-head">

            <span>
              TERMINAL // DARREN.EXE
            </span>

            <span>
              ● ● ●
            </span>

          </div>

          <div className="terminal-body">

            <div className="terminal-big">
              ONLINE
            </div>

            <div className="terminal-rule" />

            <div className="line">

              <span>
                STATUS
              </span>

              <b>
                ACTIVE
              </b>

            </div>

            <div className="line">

              <span>
                ROLE
              </span>

              <span>
                CS STUDENT
              </span>

            </div>

            <div className="line">

              <span>
                FOCUS
              </span>

              <span>
                SOFTWARE / AI
              </span>

            </div>

            <div className="line">

              <span>
                STACK
              </span>

              <span>
                TS / C# / PYTHON
              </span>

            </div>

            <div className="cursor">
              &gt; awaiting next project_
            </div>

          </div>

        </div>

        <button
          className="down"
          onClick={() =>
            scrollTo("about")
          }
        >
          SCROLL TO EXPLORE ↓
        </button>

      </section>

      {/* ======================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="panel"
      >

        <div className="section-top">

          <span>
            01
          </span>

          <b>
            ABOUT
          </b>

          <em>
            IDENTITY FILE
          </em>

        </div>

        <div className="about-grid">

          <div>

            <h2>
              WHO
              <br />
              <i>
                AM I?
              </i>
            </h2>

            <div className="stamp">

              COMPUTER SCIENCE
              <br />
              BINUS UNIVERSITY

            </div>

          </div>

          <div>

            <p className="about-text">
              I am a Computer Science
              undergraduate student
              with an interest in building
              software that combines
              functionality, technology,
              and creative design.
            </p>

            <p className="about-text">
              My experience ranges from
              frontend and backend
              development to machine
              learning, computer vision,
              audio processing, and game
              development.
            </p>

            <div className="stats">

              <div>

                <strong>
                  2024
                </strong>

                <small>
                  STARTED CS
                </small>

              </div>

              <div>

                <strong>
                  06+
                </strong>

                <small>
                  PROJECTS
                </small>

              </div>

              <div>

                <strong>
                  04
                </strong>

                <small>
                  CORE AREAS
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="panel"
      >

        <div className="section-top">

          <span>
            02
          </span>

          <b>
            SKILL TREE
          </b>

          <em>
            TECHNICAL LOADOUT
          </em>

        </div>

        <div className="skill-grid">

          <div className="skill">

            <span>
              01
            </span>

            <Code2 size={25} />

            <h3>
              FRONTEND
            </h3>

            <p>
              React, TypeScript,
              JavaScript, responsive UI,
              component architecture.
            </p>

          </div>

          <div className="skill">

            <span>
              02
            </span>

            <Server size={25} />

            <h3>
              BACKEND
            </h3>

            <p>
              C#, .NET, APIs, backend
              architecture, database
              integration.
            </p>

          </div>

          <div className="skill">

            <span>
              03
            </span>

            <Brain size={25} />

            <h3>
              AI / ML
            </h3>

            <p>
              Machine learning, NLP,
              forecasting, deep learning,
              evaluation.
            </p>

          </div>

          <div className="skill">

            <span>
              04
            </span>

            <Gamepad2 size={25} />

            <h3>
              CREATIVE
            </h3>

            <p>
              Blender, Unity, 3D modeling,
              game development and design.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="panel"
      >

        <div className="section-top">

          <span>
            03
          </span>

          <b>
            PROJECTS
          </b>

          <em>
            SELECT A FILE
          </em>

        </div>

        <div className="work-list">

          {projects.map((project) => (

            <article
              className="work"
              key={project.n}
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <div className="work-num">
                {project.n}
              </div>

              <div className="work-icon">

                {project.category.includes(
                  "GAME"
                ) ? (

                  <Gamepad2 size={22} />

                ) : project.category.includes(
                    "MACHINE"
                  ) ||
                  project.category.includes(
                    "DEEP"
                  ) ? (

                  <Brain size={22} />

                ) : project.category.includes(
                    "MUSIC"
                  ) ? (

                  <Globe size={22} />

                ) : (

                  <Layers size={22} />

                )}

              </div>

              <div>

                <div className="project-meta">

                  <div className="category">
                    {project.category}
                  </div>

                  <div
                    className={`status status-${project.status
                      .toLowerCase()
                      .replace(
                        / /g,
                        "-"
                      )}`}
                  >
                    {project.status}
                  </div>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div>

                  {project.technologies
                    .slice(0, 4)
                    .map((tech) => (

                      <span
                        className="pill"
                        key={tech}
                      >
                        {tech}
                      </span>

                    ))}

                </div>

              </div>

              <ArrowUpRight
                className="work-arrow"
                size={20}
              />

            </article>

          ))}

        </div>

      </section>

      {/* ======================================================
          EXPERIENCE
      ====================================================== */}

      <section
        id="experience"
        className="panel"
      >

        <div className="section-top">

          <span>
            04
          </span>

          <b>
            EXPERIENCE
          </b>

          <em>
            MEMORY LOG
          </em>

        </div>

        <div className="memory-list">

          {experiences.map(
            (experience) => (

              <article
                className="memory"
                key={experience.n}
                onClick={() =>
                  setSelectedExperience(
                    experience
                  )
                }
              >

                <div className="mem-date">
                  {experience.date}
                </div>

                <div>

                  <small>
                    {experience.organization}
                  </small>

                  <h3>
                    {experience.title}
                  </h3>

                  <p>
                    {experience.description}
                  </p>

                </div>

                <ArrowUpRight
                  className="memory-arrow"
                  size={20}
                />

              </article>

            )
          )}

        </div>

      </section>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="contact"
      >

        <div className="contact-inner">

          <div className="red-label">
            [ 005 // CONNECTION ]
          </div>

          <h2>
            LET'S
            <br />
            <i>
              CONNECT.
            </i>
          </h2>

          <p>
            Have a project, collaboration,
            or opportunity? Send me a
            message and let's build
            something.
          </p>

          <a
            className="mail"
            href="mailto:ldkudrcrkz@gmail.com"
          >

            <Mail size={17} />

            ldkudrcrkz@gmail.com

          </a>

          <div className="socials">

            <a
              href="https://github.com/ldkudrcrkz-droid"
              target="_blank"
              rel="noreferrer"
            >

              <Github size={15} />

              GITHUB

            </a>

            <a
              href="https://www.linkedin.com/in/lie-darren-keefe-utomo-606948386/"
              target="_blank"
              rel="noreferrer"
            >

              <Linkedin size={15} />

              LINKEDIN

            </a>

          </div>

        </div>

        <div className="calling-card">

          DARREN

          <br />

          <span>
            COMPUTER SCIENCE // 2026
          </span>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer>

        <span>
          © 2026 DARREN// ALL SYSTEMS NOMINAL
        </span>

        <span>
          BUILT WITH REACT + TYPESCRIPT
        </span>

      </footer>

      {/* ======================================================
          PROJECT MODAL
      ====================================================== */}

      {selectedProject && (

        <div
          className="detail-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="detail-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="detail-close"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Close project"
            >
              <X size={20} />
            </button>

            <div className="detail-number">
              PROJECT //{" "}
              {selectedProject.n}
            </div>

            <div className="project-meta">

              <div className="category">
                {selectedProject.category}
              </div>

              <div
                className={`status status-${selectedProject.status
                  .toLowerCase()
                  .replace(
                    / /g,
                    "-"
                  )}`}
              >
                {selectedProject.status}
              </div>

            </div>

            <h2>
              {selectedProject.title}
            </h2>

            <div className="detail-role">
              ROLE //{" "}
              {selectedProject.role}
            </div>

            <p className="detail-description">
              {selectedProject.details}
            </p>

            <div className="detail-tech">

              {selectedProject.technologies.map(
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

            {selectedProject.links &&
              selectedProject.links.length >
                0 && (

                <div className="detail-links">

                  {selectedProject.links.map(
                    (link) => (

                      <a
                        key={link.url}
                        className="github-button"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >

                        <Github size={16} />

                        {link.label}

                      </a>

                    )
                  )}

                </div>

              )}

            <div className="project-gallery">

              <div className="gallery-title">
                PROJECT VISUALS //
              </div>

              <div className="gallery-grid">

                {selectedProject.images.map(
                  (image, index) => (

                    <div
                      className="gallery-image"
                      key={image}
                    >

                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${
                          index + 1
                        }`}
                      />

                      <div className="gallery-label">

                        FRAME{" "}

                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ======================================================
          EXPERIENCE MODAL
      ====================================================== */}

      {selectedExperience && (

        <div
          className="detail-overlay"
          onClick={() =>
            setSelectedExperience(null)
          }
        >

          <div
            className="detail-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="detail-close"
              onClick={() =>
                setSelectedExperience(null)
              }
              aria-label="Close experience"
            >
              <X size={20} />
            </button>

            <div className="detail-number">
              EXPERIENCE //{" "}
              {selectedExperience.n}
            </div>

            <div className="project-meta">

              <div className="category">
                {selectedExperience.category}
              </div>

              <div className="status status-completed">
                {selectedExperience.date}
              </div>

            </div>

            <h2>
              {selectedExperience.title}
            </h2>

            <div className="detail-role">
              {selectedExperience.organization}
            </div>

            <p className="detail-description">
              {selectedExperience.details}
            </p>

            <div className="detail-section">

              <div className="gallery-title">
                RESPONSIBILITIES //
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

                      <p>
                        {item}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;