const experiences = [
  {
    number: "01", company: "Tencent Cloud · ClawPro", role: "Technical Product Manager", period: "2026 — Now",
    summary: "Designing the infrastructure that helps enterprises safely extend, reuse, and coordinate AI agents.",
    details: ["Agent tool library and governance", "Multi-agent collaboration and agent images", "AI-native product release workflows"],
  },
  {
    number: "02", company: "Paradoox · Fintech AI", role: "LLM Project Lead", period: "2026",
    summary: "Turned model evaluation into an economic viability decision for real-world financial agents.",
    details: ["Client discovery and solution design", "Cost-sensitive agent evaluation", "User validation with investors and experts"],
  },
  {
    number: "03", company: "MPhil Student · HKUST(GZ)", role: "Product Researcher & Builder", period: "2024 — 2026",
    summary: "Exploring how intelligent systems can support human judgment across creativity and finance.",
    details: ["Human-AI interaction research", "Agent systems and evaluation", "CHI, NeurIPS and ICML research"],
  },
];

const projects = [
  {
    index: "01", title: "TRACE", category: "AI · CREATIVE TOOLS · PRODUCT",
    description: "A long-form writing companion that turns every chapter into structured, reviewable memory. It surfaces character and setting conflicts at the right moment, helping creators preserve story consistency without taking away creative control.",
    outcome: "11/15 evaluation metrics improved across a 12-writer study", motif: "trace", tags: ["Product Strategy", "HCI", "LLM"],
  },
  {
    index: "02", title: "AI for Finance", category: "AI AGENT · FINTECH · PRODUCT RESEARCH",
    description: "A connected research and product journey that moved AI investment evaluation from model performance to real-world deployment decisions.",
    outcome: "9 models analyzed · 13 target users and experts validated", motif: "finance", tags: ["Multi-Agent", "Evaluation", "Product Strategy"],
    phases: [
      { name: "DeepFund", label: "REAL-TIME EVALUATION", question: "Can an AI agent make reliable decisions without looking into the future?" },
      { name: "FinCost", label: "ECONOMIC VIABILITY", question: "Can the strategy create enough value to justify inference and trading costs?" },
    ],
  },
  {
    index: "03", title: "PromptPin", category: "PERSONAL TOOL · AI WORKFLOW · INDEPENDENT BUILD",
    description: "A lightweight tool for capturing, organizing, and reusing prompts without breaking the flow of work.",
    outcome: "Built independently from a recurring workflow pain point", motif: "promptpin", tags: ["Product Instinct", "Rapid Build", "AI Workflow"],
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
        <a className="wordmark" href="#top" aria-label="Nicole, back to top"><img src="/nicole-avatar.jpg?v=2" alt="" /></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a></nav>
        <a className="availability" href="#contact"><span /> Available for conversations</a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow-row"><p>AI PRODUCT MANAGER · RESEARCHER · BUILDER</p></div>
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
              <div className={`project-visual ${project.motif}`}>
                <span className="project-number">{project.index}</span>
                {project.motif === "trace" && <a className="project-visual-link" href="/work/trace" aria-label="View the TRACE case study"><span>VIEW CASE STUDY ↗</span></a>}
                {project.motif === "promptpin" && <a className="project-visual-link" href="/work/promptpin" aria-label="View the PromptPin case study"><span>VIEW CASE STUDY ↗</span></a>}
                {project.motif === "islecho" && <a className="project-visual-link" href="/work/islecho" aria-label="View the Islecho case study"><span>VIEW CASE STUDY ↗</span></a>}
                {project.motif === "trace" && <div className="trace-ui"><b>STORY MEMORY</b><i /><i /><i /><small>CONSISTENCY · 94%</small></div>}
                {project.motif === "finance" && <div className="visual-card finance-ui"><div className="visual-label"><span>AI FOR FINANCE</span><span>FIG. 02</span></div><div className="finance-split"><div className="deepfund-mini"><span>01 / DEEPFUND</span><div className="mini-nodes"><i>A</i><i>B</i><i>C</i><i>D</i><i>E</i></div><b>LIVE MARKET</b></div><div className="fincost-mini"><span>02 / FINCOST</span><div className="mini-chart"><i /><i /><i /></div><b>ECONOMIC<br />VIABILITY</b></div></div><p>REAL-TIME PERFORMANCE → COST → DECISION</p></div>}
                {project.motif === "promptpin" && <div className="prompt-ui"><span>PROMPT LIBRARY</span><div><small>RESEARCH</small><b>Summarize the user signal...</b></div><div><small>PRODUCT</small><b>Turn this insight into...</b></div><div><small>WRITING</small><b>Make the argument clearer...</b></div><i>⌘ P</i></div>}
                {project.motif === "islecho" && <div className="echo-ui"><i /><i /><b>one thought<br />one kind echo</b></div>}
              </div>
              <div className="project-meta"><p>{project.category}</p><span>{project.index} / 04</span></div>
              <h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="outcome">↳ {project.outcome}</p>
              {project.phases && <div className="project-phases">{project.phases.map((phase, phaseIndex) => <div key={phase.name}><span>0{phaseIndex + 1} / {phase.label}</span><h4>{phase.name}</h4><p>{phase.question}</p>{(phase.name === "DeepFund" || phase.name === "FinCost") && <a className="phase-case-link" href={phase.name === "DeepFund" ? "/work/deepfund" : "/work/fincost"}>View case ↗</a>}</div>)}</div>}
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-chapter section shell" id="earlier">
        <div className="section-index"><span>03</span><p>EARLIER CHAPTER / CONTENT</p></div>
        <div className="chapter-intro">
          <h2>Before products, I learned<br />how ideas <em>travel.</em></h2>
          <p>Three years in content taught me to read audience signals, shape a clear story, and carry an idea all the way from production to distribution.</p>
        </div>
        <div className="chapter-stats">
          <div><strong>≈1M</strong><span>views on a featured video</span></div>
          <div><strong>47K</strong><span>followers grown</span></div>
          <div><strong>3 yrs</strong><span>in content & operations</span></div>
        </div>
        <div className="chapter-work">
          <a className="video-poster" href="https://www.bilibili.com/video/BV1dK411H76x/?spm_id_from=333.337.search-card.all.click&vd_source=d31ce06e89d693d5bdd7a68dff5632ff" target="_blank" rel="noreferrer" aria-label="Watch Into the Sea, Southern Universities Edition on Bilibili">
            <span className="poster-label">FEATURED VIDEO · 2020</span>
            <div className="poster-wave" aria-hidden="true"><i /><i /><i /></div>
            <div className="poster-title"><small>20 UNIVERSITIES</small><b>《入海》<br />南方高校版</b></div>
            <span className="play-button">PLAY ↗</span>
          </a>
          <div className="content-credits">
            <p>SELECTED CREDITS</p>
            <a href="https://www.bilibili.com/video/BV1dK411H76x/?spm_id_from=333.337.search-card.all.click&vd_source=d31ce06e89d693d5bdd7a68dff5632ff" target="_blank" rel="noreferrer"><article><span>01</span><div><h3>《入海》南方高校版</h3><p>Sichuan University segment lead · Approx. 1M views</p></div><b>↗</b></article></a>
            <a href="https://www.bilibili.com/video/BV1To4y1S7g3/?spm_id_from=333.337.search-card.all.click&vd_source=d31ce06e89d693d5bdd7a68dff5632ff" target="_blank" rel="noreferrer"><article><span>02</span><div><h3>《你眼里的光》综合篇</h3><p>Director · Cross-campus video production</p></div><b>↗</b></article></a>
            <a href="https://www.bilibili.com/video/BV1hQ4y1d7e8/?spm_id_from=333.337.search-card.all.click" target="_blank" rel="noreferrer"><article><span>03</span><div><h3>《时光沙盒》</h3><p>Copywriting · Central Committee of the Communist Youth League</p></div><b>↗</b></article></a>
          </div>
        </div>
      </section>

      <section className="skills section shell" id="skills">
        <div className="section-index light"><span>04</span><p>HOW I WORK</p></div>
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
