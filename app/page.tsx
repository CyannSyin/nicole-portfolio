const experiences = [
  {
    number: "01", company: "Tencent Cloud · ClawPro", role: "Technical Product Manager", period: "2026 — Now",
    summary: "Designing the infrastructure that helps enterprises safely extend, reuse, and coordinate AI agents.",
    details: ["Agent tool library and governance", "Multi-agent collaboration and agent images", "AI-native product release workflows"],
  },
  {
    number: "02", company: "Paradox Hylas · Fintech AI", role: "LLM Project Lead", period: "2026",
    summary: "Turned model evaluation into an economic viability decision for real-world financial agents.",
    details: ["Client discovery and solution design", "Cost-sensitive agent evaluation", "User validation with investors and experts"],
  },
  {
    number: "03", company: "HKUST(GZ) · AI Research", role: "Product Researcher & Builder", period: "2024 — 2026",
    summary: "Exploring how intelligent systems can support human judgment across creativity and finance.",
    details: ["Human-AI interaction research", "Agent systems and evaluation", "CHI, NeurIPS and ICML research"],
  },
];

const projects = [
  {
    index: "01", title: "TRACE", category: "AI · CREATIVE TOOLS · PRODUCT",
    description: "A long-form writing companion that helps creators maintain character and story consistency without taking away creative control.",
    outcome: "11/15 evaluation metrics improved across a 12-writer study", motif: "trace", tags: ["Product Strategy", "HCI", "LLM"],
  },
  {
    index: "02", title: "FinCost", category: "AI AGENT · FINTECH · PROJECT LEAD",
    description: "A cost-aware evaluation toolkit that asks a practical question: can an AI trading strategy earn more than it costs to run?",
    outcome: "Validated with 13 target users and industry experts", motif: "fincost", tags: ["0→1", "Agent Design", "User Research"],
  },
  {
    index: "03", title: "DeepFund", category: "MULTI-AGENT · BENCHMARK · DEVELOPMENT",
    description: "A real-time benchmark that connects language models with live market context to reveal how AI agents actually make investment decisions.",
    outcome: "Compared decision patterns across 9 leading models", motif: "deepfund", tags: ["Multi-Agent", "Evaluation", "Data"],
  },
  {
    index: "04", title: "Islecho", category: "SOCIAL PRODUCT · IOS · INDEPENDENT",
    description: "A low-pressure social space built around one daily thought and a small, kind echo from a stranger.",
    outcome: "Shipped as a functional iOS MVP", motif: "islecho", tags: ["Product Vision", "Interaction", "MVP"],
  },
];

const skills = [
  { title: "Product thinking", note: "Find the signal inside an ambiguous problem, define the value, and shape a focused product direction.", items: ["Problem framing", "Product strategy", "Roadmapping", "Metrics"] },
  { title: "AI systems", note: "Translate emerging model capabilities into understandable, controllable, and useful product behavior.", items: ["AI agents", "LLM workflows", "Evaluation", "Human-in-the-loop"] },
  { title: "Research & craft", note: "Move between qualitative insight, quantitative evidence, prototypes, and clear product narratives.", items: ["User research", "Data analysis", "Prototyping", "Figma · Python · SQL"] },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Nicole, back to top">N<span>✦</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a></nav>
        <a className="availability" href="#contact"><span /> Available for conversations</a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow-row"><p>AI PRODUCT MANAGER · RESEARCHER · BUILDER</p><p>BASED IN SHENZHEN / GUANGZHOU</p></div>
        <h1>Building products<br />at the edge of <em>AI.</em></h1>
        <div className="hero-footer">
          <p className="intro">I&apos;m Nicole — a product thinker turning emerging AI capabilities into clear, useful experiences for the real world.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><span>EXPLORE</span><Arrow /></a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /><span className="orbit-dot dot-three" /></div>
      </section>

      <section className="marquee" aria-label="Areas of focus"><div>PRODUCT STRATEGY <i>✦</i> AI AGENTS <i>✦</i> HUMAN–AI INTERACTION <i>✦</i> PRODUCT STRATEGY <i>✦</i> AI AGENTS <i>✦</i> HUMAN–AI INTERACTION <i>✦</i></div></section>

      <section className="about section shell" id="about">
        <div className="section-index"><span>01</span><p>ABOUT / EXPERIENCE</p></div>
        <div className="about-copy">
          <p className="kicker">I work where new technology meets an unfinished problem.</p>
          <h2>Product thinking gives AI<br /><em>direction.</em></h2>
          <p className="body-large">My work spans enterprise agents, financial decision systems, and creative tools. Across them, I ask the same questions: What matters to the user? What can the technology truly do? And what is the smallest product that proves the value?</p>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience" key={experience.number}>
              <div className="experience-heading"><span>{experience.number}</span><div><h3>{experience.company}</h3><p>{experience.role}</p></div><time>{experience.period}</time></div>
              <p className="experience-summary">{experience.summary}</p>
              <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-index"><span>02</span><p>SELECTED WORK</p></div>
        <div className="section-title-row"><h2>Ideas, tested in the<br /><em>real world.</em></h2><p>Selected projects across AI product strategy, agent systems, research, and independent building.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.motif}`} aria-hidden="true">
                <span className="project-number">{project.index}</span>
                {project.motif === "trace" && <div className="trace-ui"><b>STORY MEMORY</b><i /><i /><i /><small>CONSISTENCY · 94%</small></div>}
                {project.motif === "fincost" && <div className="chart-ui"><span>COST</span><i /><i /><i /><b>ECONOMIC<br />VIABILITY</b></div>}
                {project.motif === "deepfund" && <div className="nodes-ui"><i>A</i><i>B</i><i>C</i><i>D</i><i>E</i><b>LIVE MARKET</b></div>}
                {project.motif === "islecho" && <div className="echo-ui"><i /><i /><b>one thought<br />one kind echo</b></div>}
              </div>
              <div className="project-meta"><p>{project.category}</p><span>{project.index} / 04</span></div>
              <h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="outcome">↳ {project.outcome}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section shell" id="skills">
        <div className="section-index light"><span>03</span><p>HOW I WORK</p></div>
        <div className="skills-intro"><h2>From ambiguity<br />to <em>momentum.</em></h2><p>I connect product judgment with technical fluency — enough to ask better questions, prototype faster, and help teams make confident decisions.</p></div>
        <div className="skill-list">
          {skills.map((skill, index) => <article key={skill.title}><span>0{index + 1}</span><h3>{skill.title}</h3><p>{skill.note}</p><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </section>

      <section className="contact shell" id="contact"><p className="contact-label">LET&apos;S MAKE SOMETHING USEFUL.</p><h2>Have an interesting<br />problem in <em>mind?</em></h2><a href="https://github.com/CyannSyin" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a></section>
      <footer className="site-footer shell"><p>© 2026 NICOLE</p><p>PRODUCT · AI · PEOPLE</p><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
