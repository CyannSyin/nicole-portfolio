import type { Metadata } from "next";
import styles from "./trace.module.css";

const paperUrl = "https://dl.acm.org/doi/10.1145/3772363.3798905";

export const metadata: Metadata = {
  title: "TRACE — Nicole",
  description:
    "A human-AI writing system that helps long-form authors maintain narrative consistency without giving up creative control.",
};

const researchSignals = [
  { value: "2,850", label: "community threads analyzed" },
  { value: "31,400", label: "replies collected" },
  { value: "8", label: "professional authors interviewed" },
];

const designGoals = [
  {
    number: "01",
    title: "Externalize narrative memory",
    text: "Turn scattered character sheets, timelines, and notes into one dynamic knowledge base that evolves with the story.",
  },
  {
    number: "02",
    title: "Audit without interruption",
    text: "Keep consistency checking inside the writing flow and let authors decide when an audit should run.",
  },
  {
    number: "03",
    title: "Guard, never ghostwrite",
    text: "Surface evidence-backed suggestions while leaving every creative decision and final correction to the author.",
  },
];

export default function TraceCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a href="/" className={styles.back}>← Back to portfolio</a>
        <span>TRACE · CASE STUDY</span>
        <a href={paperUrl} target="_blank" rel="noreferrer">Read the paper ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLabel}>
          <span>AI · CREATIVE TOOLS · HUMAN–AI INTERACTION</span>
          <span>CHI EA ’26</span>
        </div>
        <h1>TRACE</h1>
        <div className={styles.heroBottom}>
          <h2>Guardian,<br /><em>not ghostwriter.</em></h2>
          <p>
            A human-AI writing system that helps long-form authors remember what
            they wrote, catch inconsistencies, and stay in control of the story.
          </p>
        </div>
        <dl className={styles.projectMeta}>
          <div><dt>MY ROLE</dt><dd>Product · Research · Development</dd></div>
          <div><dt>TIMELINE</dt><dd>Jul — Sep 2025</dd></div>
          <div><dt>CONTEXT</dt><dd>MPhil Research · HKUST(GZ)</dd></div>
          <div><dt>OUTCOME</dt><dd>CHI Extended Abstracts 2026</dd></div>
        </dl>
      </section>

      <section className={styles.heroMedia}>
        <figure className={styles.teaserFigure}>
          <img src="/trace/trace-hero.png" alt="Comparison between a fragmented general writing workflow and the TRACE-assisted writing workflow" />
          <figcaption>From fragmented memory and late conflict discovery to an integrated, author-controlled writing workflow.</figcaption>
        </figure>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>01</span><p>THE OPPORTUNITY</p></div>
        <div className={styles.splitIntro}>
          <h2>Writing longer makes<br />remembering <em>harder.</em></h2>
          <div>
            <p>
              Serialized fiction grows over months or years. Characters change,
              relationships accumulate, and a detail written twenty chapters ago
              can quietly become tomorrow&apos;s plot hole.
            </p>
            <p>
              Existing notes were fragmented and static. Existing AI tools focused
              on generating prose. Neither supported the continuous memory work
              authors were actually struggling with.
            </p>
          </div>
        </div>
        <div className={styles.researchStats}>
          {researchSignals.map((signal) => (
            <div key={signal.label}><strong>{signal.value}</strong><span>{signal.label}</span></div>
          ))}
        </div>
        <div className={styles.problemGrid}>
          <article><span>01</span><h3>Fragmented memory</h3><p>Authors repeatedly left the draft to search character sheets, timelines, and scattered notes.</p></article>
          <article><span>02</span><h3>Late discovery</h3><p>Character conflicts and plot holes often surfaced during review, creating expensive backtracking.</p></article>
          <article><span>03</span><h3>AI without agency</h3><p>Authors were skeptical of generated prose and wanted support that preserved intent and ownership.</p></article>
        </div>
      </section>

      <section className={styles.decision}>
        <p>THE PRODUCT DECISION</p>
        <blockquote>
          Don&apos;t ask AI to write the story.<br />
          Ask it to help the author <em>remember.</em>
        </blockquote>
        <span>
          TRACE shifted the product from content generation to decision support:
          an author-controlled guardian for narrative memory and consistency.
        </span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><p>DESIGN PRINCIPLES</p></div>
        <div className={styles.goalList}>
          {designGoals.map((goal) => (
            <article key={goal.number}>
              <span>{goal.number}</span><h3>{goal.title}</h3><p>{goal.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.productSection}`}>
        <div className={styles.sectionLabel}><span>03</span><p>THE PRODUCT</p></div>
        <div className={styles.splitIntro}>
          <h2>One workspace.<br />Three connected <em>views.</em></h2>
          <p>
            TRACE keeps chapter navigation, immersive writing, and AI assistance
            together. The system converts saved chapters into editable character
            memory and highlights conflicts directly in context.
          </p>
        </div>
        <figure className={styles.productFigure}>
          <img src="/trace/trace-ui-overview-web.jpg" alt="Annotated overview of the TRACE interface, character cards, and conflict detection interactions" />
          <figcaption><span>FIG. 02 / PRODUCT DESIGN OVERVIEW</span><p>The three-column workspace keeps chapter navigation, writing, narrative memory, and conflict resolution in one continuous surface.</p></figcaption>
        </figure>
        <div className={styles.featurePair}>
          <article>
            <span>01 / DYNAMIC MEMORY</span>
            <h3>Character cards that evolve with the story</h3>
            <p>Stable attributes and evolving events are separated, ordered over time, and kept editable by the author.</p>
          </article>
          <article>
            <span>02 / ON-DEMAND AUDIT</span>
            <h3>Conflicts with evidence, not automatic edits</h3>
            <p>Every alert includes the conflicting sentence, rationale, and supporting memory so authors can correct or dismiss it.</p>
          </article>
        </div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.sectionLabel}><span>04</span><p>THE WORKFLOW</p></div>
        <h2>Write · Audit · Correct</h2>
        <figure className={styles.processFigure}>
          <img src="/trace/trace-process-web.jpg" alt="Detailed human-in-the-loop TRACE workflow across writing, auditing, and correction" />
          <figcaption>
            <span>FIG. 03 / HUMAN-IN-THE-LOOP WORKFLOW</span>
            <p>Authors write and save normally; the system extracts or merges character facts, retrieves relevant memory during an audit, and returns evidence-linked conflicts for human review and revision.</p>
          </figcaption>
        </figure>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>05</span><p>VALIDATION</p></div>
        <div className={styles.validationHero}>
          <strong>12</strong>
          <h2>authors tested TRACE against their existing workflow.</h2>
        </div>
        <div className={styles.validationGrid}>
          <div><span>STUDY</span><p>Within-subject comparison with Microsoft Word, a note-taking app, and optional chatbot use.</p></div>
          <div><span>EXPERIENCE</span><p>Participants had 0.5–10 years of long-form writing experience across diverse genres.</p></div>
          <div><span>WHAT IMPROVED</span><p>Writers reported less context switching, a smoother write–check rhythm, and more confidence while exploring.</p></div>
          <div><span>WHAT WE LEARNED</span><p>Overly strict alerts can constrain intentional twists, so reminders must stay adjustable, tolerant, and evidence-linked.</p></div>
        </div>
      </section>

      <section className={styles.takeaway}>
        <p>PRODUCT TAKEAWAY</p>
        <h2>The best AI intervention is not always more generation.</h2>
        <span>
          In creative work, value can come from preserving context, surfacing the
          right evidence, and giving people more confidence in their own decisions.
        </span>
      </section>

      <section className={styles.paperCta}>
        <span>FULL RESEARCH PAPER</span>
        <h2>Tracking, Retrieving, and Auditing for Coherent Epics in Online Narratives</h2>
        <p>Qiqi Duan, Chen Wang, Yuxiang Luo, Nan Tang, Leixian Shen, and Yuyu Luo · CHI EA ’26</p>
        <a href={paperUrl} target="_blank" rel="noreferrer">Read on ACM Digital Library ↗</a>
      </section>

      <footer className={styles.footer}>
        <a href="/">← Portfolio</a><span>TRACE · 2025</span><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
