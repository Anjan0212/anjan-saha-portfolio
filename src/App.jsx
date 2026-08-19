import { useEffect, useState } from "react";
import "./App.css";
import { TypeAnimation } from 'react-type-animation';


const navItems = [
  ["Home", "home"], ["About", "about"], ["Projects", "projects"], 
  ["Skills", "skills"],["Education", "education"],
  ["Services", "services"], ["Contact", "contact"]
];

const skillGroups = [
  ["PROGRAMMING LANGUAGES", ["Java", "Python", "C", "C++"]],
  ["WEB DEVELOPMENT", ["HTML", "CSS", "JavaScript"]],
  ["DATABASE", ["MySQL", "JDBC"]],
  ["CORE CONCEPTS", ["OOPs", "DBMS", "Data Structures"]],
  ["TOOLS", ["Git", "VS Code"]]
];

const education = [
  ["Master of Computer Applications (MCA)", "Techno India University", "CGPA: 8.8", "PURSUING"],
  ["Bachelor of Computer Applications (BCA)", "University of Burdwan", "CGPA: 7.2", "2025"],
  ["Higher Secondary", "Galsi High School", "Percentage: 84%", "2022"],
  ["Secondary", "Holy Rock School", "Percentage: 69%", "2020"]
];

const process = [
  ["01", "DISCOVER", "Understand the requirement and user needs."],
  ["02", "PLAN", "Structure the interface, content and functionality."],
  ["03", "DEVELOP", "Build clean and responsive frontend interfaces."],
  ["04", "TEST", "Check responsiveness, usability and functionality."],
  ["05", "REFINE", "Improve performance, visual details and user experience."],
  ["06", "DELIVER", "Provide a polished and responsive final website."]
];

function Tags({ items }) {
  return <div className="tags">{items.map((x) => <span key={x}>{x}</span>)}</div>;
}

function Heading({ eyebrow, children, number }) {
  return (
    <div className="section-head">
      <div className="section-kicker">
        <i />
        <span>{eyebrow}</span>
      </div>
      <div className="section-title-row">
        <h2>{children}</h2>
        {number && <span className="section-side">{number}</span>}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const progress = document.getElementById("scrollProgress");
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("show");
      });
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setForm((f) => ({ ...f, name: value.replace(/[^A-Za-z\s]/g, "") }));
    } else if (name === "phone") {
      setForm((f) => ({ ...f, phone: value.replace(/\D/g, "").slice(0, 10) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    setSent(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) next.name = "Only letters and spaces are allowed.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(form.phone)) next.phone = "Enter a valid 10-digit phone number.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (form.message.trim().length < 10) next.message = "Message must contain at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href =
      `mailto:sahaanjan2004@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <div className="grain" />
      <div id="scrollProgress" className="scroll-progress" />
 <div className="script">Hello, I'm</div>
 
      <header className="header">
        <a className="logo" href="#home">ANJAN SAHA</a>
        <nav>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="connect-top" href="#contact">LET'S CONNECT <b>↗</b></a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span /><span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      )}

      <main>
        <section className="hero section" id="home">
          <div className="hero-top">
            <span>ASPIRING FRONTEND DEVELOPER</span>
            <span><i className="dot" /> OPEN TO OPPORTUNITIES</span>
          </div>

          <div className="hero-content">
            <div className="hero-left reveal">
              <h1>ANJAN SAHA</h1>
              
              {/* The Animated Text */}
              <h3 style={{ color: 'var(--red2)' }}>
                <TypeAnimation
                  sequence={[
                    'FRONTEND DEVELOPER', 1500,
                    'WEB DEVELOPER', 1500,
                    'SOFTWARE ENGINEER', 1500
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={60}
                  repeat={Infinity}
                />
              </h3>

              <p>
                Aspiring Frontend Developer with an MCA background, skilled in HTML, CSS, JavaScript, Python, and Java. I focus on writing clean code to build responsive, intuitive user interfaces.
              </p>
              
              <div className="hero-buttons">
                  <div className="socials">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
              </div>
              
              <a className="red-btn" href="/CV.pdf" download>⇩ &nbsp; DOWNLOAD CV</a>
              <div className="location">⌖ &nbsp; BASED IN INDIA</div>
            </div>

            <div className="hero-photo reveal">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Anjan Saha" />
            </div>
          </div>

          <div className="hero-bottom">
            <span>＋ &nbsp; Open to opportunities</span>
            <span>＋ &nbsp; Clean, readable code</span>
            <span>＋ &nbsp; Responsive interfaces</span>
            <span>＋ &nbsp; Continuous learning</span>
          </div>
        </section>

        <section className="about section" id="about">
          <Heading eyebrow="ABOUT ME">BUILDING DIGITAL EXPERIENCES,<br /><em>LEARNING,BUILDING,EVOLVING.</em></Heading>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
               I’m an aspiring Full-Stack Web Developer with a strong foundation in programming, web development, and database management. I enjoy building responsive, user-focused web applications and working across both frontend and backend technologies to turn ideas into functional digital solutions. 
               Currently pursuing my MCA, I’m continuously strengthening my skills in JavaScript, React, Node.js, databases, and modern web development practices through hands-on projects. I’m passionate about writing clean, maintainable code, solving problems, and continuously learning to grow into a well-rounded software developer.
              </p>
              <ul>
                <li>Exploring new web technologies</li>
                <li>Reading technology blogs</li>
                <li>Building personal and side projects</li>
              </ul>
              <div className="cv-row">
                <a className="red-btn" href="/CV.pdf" download>⇩ &nbsp; DOWNLOAD MY CV</a>
                <span>PDF · UPDATED 2026</span>
              </div>
            </div>
            <div className="stats reveal">
              <div><strong>WEB</strong><span>DEVELOPMENT</span></div>
              <div><strong>FRONTEND</strong><span>TECHNOLOGIES</span></div>
              <div><strong>BACKEND</strong><span>TECHNOLOGIES</span></div>
              <div><strong>PROBLEM</strong><span>SOLVING</span></div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <Heading eyebrow="" number="02 FEATURED BUILDS">PROJECTS</Heading>
          <div className="project">
            <div className="project-image reveal"><span className="project-no">01</span><video width="100%" height="100%" autoPlay loop muted playsInline><source src={`${import.meta.env.BASE_URL}easyDonate - Save Food Share joy.mp4`} type="video/mp4" /></video></div>
            <div className="project-copy reveal">
              <small>PROJECT 01</small>
              <h3>FOOD WASTE MANAGEMENT<br />SYSTEM</h3>
              <p>A responsive web platform designed to connect food donors with NGOs to help reduce food waste.</p>
              <div className="feature-grid">
                <span>• User-friendly interface for food donors</span>
                <span>• NGO interface for managing food requests</span>
                <span>• Administrative dashboard</span>
                <span>• User management</span>
                <span>• Donation management</span>
                <span>• Request management</span>
                <span>• Responsive design</span>
              </div>
              <Tags items={["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"]} />
              <a className="project-link" href="#contact">ASK ABOUT THIS PROJECT →</a>
            </div>
          </div>

          <div className="project second">
            <div className="project-copy reveal">
              <small>PROJECT 02</small>
              <h3>WEATHER APP</h3>
              <p>A responsive weather application that provides real-time weather information based on user input.</p>
              <div className="feature-grid">
                <span>• Real-time weather information</span>
                <span>• REST API integration</span>
                <span>• Temperature information</span>
                <span>• Humidity information</span>
                <span>• Weather condition data</span>
                <span>• Interactive user interface</span>
                <span>• Responsive design</span>
              </div>
              <Tags items={["HTML", "CSS", "JAVASCRIPT", "REST API", "WEATHERAPI"]} />
              <a className="project-link" href="#contact">ASK ABOUT THIS PROJECT →</a>
            </div>
            <div className="project-image reveal"><span className="project-no">02</span><img src={`${import.meta.env.BASE_URL}weather-app.jpg`} alt="Weather App project" /></div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <Heading eyebrow="" number="TOOLSET">SKILLS</Heading>
          <div className="skills-grid">
            {skillGroups.map(([name, items]) => <div className="skill-box reveal" key={name}><small>{name}</small><Tags items={items} /></div>)}
            <div className="skill-box learning reveal"><small>CURRENTLY LEARNING</small><Tags items={["React", "Node.js", "MongoDB"]}/><p>In progress — currently studying these through practice projects, not yet professional expertise.</p></div>
          </div>
        </section>

        <section className="edu-process section" id="education">
          <div>
            <Heading eyebrow="EDUCATION & LEARNING">ACADEMIC <em>TIMELINE</em></Heading>
            <div className="edu-list">
              {education.map(([degree, school, score, year]) => (
                <div className="edu-item reveal" key={degree}>
                  <span className="edu-dot" />
                  <div><h3>{degree}</h3><p>{school}</p><strong>♧ &nbsp; {score}</strong></div><time>{year}</time>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Heading eyebrow="WORK PROCESS">HOW I <em>BUILD</em></Heading>
            <div className="process-list">
              {process.map(([n, title, text]) => <div className="process-item reveal" key={n}><span>{n}</span><div><b>{title}</b><p>{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <Heading eyebrow="" number="SERVICES">SERVICES YOU CAN GET</Heading>
          <div className="services-grid">
            {[
              ["⌘", "RESPONSIVE FRONTEND DEVELOPMENT", "Build responsive, user-friendly websites that work smoothly across desktop, tablet and mobile devices."],
              ["♢", "RESPONSIVE UI IMPLEMENTATION", "Convert design concepts into clean, functional HTML, CSS and JavaScript interfaces."],
              ["</>", "WEBSITE DEVELOPMENT", "Develop structured and interactive websites using modern frontend technologies."],
              ["▱", "USER-FRIENDLY INTERFACES", "Create intuitive layouts focused on usability, accessibility and a smooth browsing experience."]
            ].map(([icon, title, text]) => <article className="service-card reveal" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="career section">
          <div className="career-grid">
            <div className="career-copy reveal">
              <small>CAREER JOURNEY</small>
              <h2>CURRENTLY BUILDING<br />MY CAREER</h2>
              <p>I'm a passionate fresher focused on building strong foundations in frontend development, creating practical projects, and continuously learning modern web technologies.</p>
            </div>
            <div className="career-cards">
              <div className="career-card reveal"><h3>MCA — Techno India University</h3><p>Currently studying, deepening core computer science alongside hands-on web development.</p></div>
              <div className="career-card reveal"><h3>Project-Based Experience</h3><p>Food Waste Management System and a real-time Weather App built end to end with HTML, CSS, JavaScript and APIs.</p></div>
              <div className="career-card reveal"><h3>Self-Directed Learning</h3><p>Working through React, Node.js and MongoDB to grow towards full-stack capability.</p></div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <Heading eyebrow="CONTACT">LET'S BUILD SOMETHING <em>GREAT</em><br />TOGETHER.</Heading>
          <div className="contact-grid">
            <form className="contact-form reveal" onSubmit={submit} noValidate>
              <div className="form-row">
                <label>NAME<input name="name" value={form.name} onChange={change} placeholder="Your name" required pattern="[A-Za-z ]+" /></label>
                <label>EMAIL<input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" required /></label>
              </div>
              {errors.name && <small className="error">{errors.name}</small>}
              {errors.email && <small className="error">{errors.email}</small>}
              <label>PHONE<input name="phone" type="tel" inputMode="numeric" maxLength="10" value={form.phone} onChange={change} placeholder="10-digit phone number" required /></label>
              {errors.phone && <small className="error">{errors.phone}</small>}
              <label>SUBJECT<input name="subject" value={form.subject} onChange={change} placeholder="What is this about?" required /></label>
              {errors.subject && <small className="error">{errors.subject}</small>}
              <label>MESSAGE<textarea name="message" value={form.message} onChange={change} placeholder="Tell me about your project or opportunity..." minLength="10" required /></label>
              {errors.message && <small className="error">{errors.message}</small>}
              <button className="red-btn submit-btn" type="submit">SEND MESSAGE &nbsp; ➤</button>
              {sent && <p className="success">Your email client is being opened with the message prepared.</p>}
            </form>

            <div className="contact-info reveal">
              {[
                ["✉", "sahaanjan2004@gmail.com", "mailto:sahaanjan2004@gmail.com"],
                ["◯", "6294538963", "tel:6294538963"],
                ["in", "linkedin.com/in/anjan-saha-188354325", "https://www.linkedin.com/in/anjan-saha-188354325"],
                ["⌘", "github.com/Anjan0212", "https://github.com/Anjan0212"],
                ["⌖", "West Bengal, India", "https://maps.app.goo.gl/Z6n2AHfa8cbFfRSb6"]
              ].map(([icon, text, href]) => <a key={text} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><i>{icon}</i><span>{text}</span></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div><p>Designed & Developed by Anjan Saha © 2026</p></div>
        <nav>{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="socials">
          <a href="https://www.linkedin.com/in/anjan-saha-188354325" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Anjan0212" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
