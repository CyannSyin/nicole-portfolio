import type { Metadata } from "next";
import styles from "./promptpin.module.css";

const repositoryUrl = "https://github.com/CyannSyin/PromptPin";

export const metadata: Metadata = {
  title: "PromptPin — Nicole",
  description:
    "An independently designed and built macOS menu bar app that keeps reusable prompts ordered and one click away.",
};

const principles = [
  {
    number: "01",
    title: "Retrieval before management",
    text: "The everyday surface is the menu bar, where a useful prompt can be found and copied without opening another workspace.",
  },
  {
    number: "02",
    title: "Workflows, not a prompt pile",
    text: "Prompts live inside projects and keep a deliberate order, turning reusable instructions into repeatable steps.",
  },
  {
    number: "03",
    title: "Local by default",
    text: "No account or cloud dependency. The MVP stores a portable JSON file locally and keeps the product lightweight.",
  },
];

const workflow = [
  { number: "01", title: "Choose a project", text: "Search or select the workflow you are currently running." },
  { number: "02", title: "Find the next step", text: "Prompts appear in the sequence you defined in Manage." },
  { number: "03", title: "Copy in one click", text: "A lightweight confirmation replaces navigation and modal friction." },
  { number: "04", title: "Continue where you work", text: "Paste into ChatGPT, Claude, Cursor, or any other tool." },
];

function MenuBarMockup() {
  return (
    <div className={styles.desktopMockup} aria-label="Illustration of the PromptPin menu bar workflow">
      <div className={styles.desktopBar}>
        <span>● ● ●</span>
        <span>⌁ &nbsp; ◌ &nbsp; 10:24</span>
      </div>
      <div className={styles.popover}>
        <div className={styles.popoverHeading}>
          <img src="/promptpin/promptpin-icon.png" alt="" />
          <div><strong>PromptPin</strong><span>Your prompts, one click away.</span></div>
        </div>
        <label>SEARCH PROJECTS</label>
        <div className={styles.search}>⌕ &nbsp; Search</div>
        <div className={styles.projectRow}><span>⌘</span><b>Product Development</b><i>›</i></div>
        <div className={styles.projectRow}><span>✦</span><b>Research</b><i>›</i></div>
        <div className={styles.projectRow}><span>✎</span><b>Writing</b><i>›</i></div>
        <div className={styles.manageRow}><span>Manage</span><span>⌘ ,</span></div>
      </div>
      <div className={styles.promptList}>
        <div className={styles.listHeading}><span>‹</span><strong>Product Development</strong></div>
        <button><i>1</i><span><b>Clarify requirements</b><small>Identify ambiguities, constraints and edge cases…</small></span><em>▢</em></button>
        <button><i>2</i><span><b>Create technical plan</b><small>Turn the requirement into a clear implementation plan…</small></span><em>▢</em></button>
        <button><i>3</i><span><b>Review implementation</b><small>Review correctness, security and missing tests…</small></span><em>✓</em></button>
      </div>
    </div>
  );
}

function ManagerMockup() {
  return (
    <div className={styles.managerMockup} aria-label="Illustration of the PromptPin management window">
      <div className={styles.windowBar}><span>● ● ●</span><b>PromptPin</b><i>+</i></div>
      <aside>
        <strong>Projects</strong>
        <p className={styles.selected}>⌘ &nbsp; Product Development</p>
        <p>✦ &nbsp; Research</p>
        <p>✎ &nbsp; Writing</p>
      </aside>
      <div className={styles.managerBody}>
        <header><div><h3>Product Development</h3><p>3 prompts</p></div><button>＋ Add Prompt</button></header>
        <article><i>1</i><div><b>Clarify requirements</b><p>Review the requirement and identify ambiguities, missing constraints, and edge cases.</p></div><span>↑ ↓ &nbsp; ✎ &nbsp; ⌫</span></article>
        <article><i>2</i><div><b>Create technical plan</b><p>Create an implementation plan with architecture, risks, tests, and task breakdown.</p></div><span>↑ ↓ &nbsp; ✎ &nbsp; ⌫</span></article>
        <article><i>3</i><div><b>Review implementation</b><p>Review correctness, maintainability, security, performance, and test coverage.</p></div><span>↑ ↓ &nbsp; ✎ &nbsp; ⌫</span></article>
      </div>
    </div>
  );
}

export default function PromptPinCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a href="/">← Back to portfolio</a>
        <span>PROMPTPIN · CASE STUDY</span>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">View source ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLabel}><span>MACOS · AI WORKFLOW · INDEPENDENT BUILD</span><span>V0.1.2</span></div>
        <div className={styles.titleRow}>
          <img src="/promptpin/promptpin-icon.png" alt="PromptPin app icon" />
          <h1>Prompt<br />Pin</h1>
        </div>
        <div className={styles.heroBottom}>
          <h2>Your prompts,<br /><em>one click away.</em></h2>
          <p>
            A native macOS menu bar app for keeping reusable prompts organized
            as ordered workflows—and close enough to use without breaking focus.
          </p>
        </div>
        <dl className={styles.projectMeta}>
          <div><dt>MY ROLE</dt><dd>Product · Design · SwiftUI Development</dd></div>
          <div><dt>TIMELINE</dt><dd>Independent build · Jul 2026</dd></div>
          <div><dt>PLATFORM</dt><dd>Native macOS 14+</dd></div>
          <div><dt>OUTCOME</dt><dd>Shipped MVP · Packaged DMG</dd></div>
        </dl>
      </section>

      <section className={styles.heroVisual}>
        <MenuBarMockup />
        <div className={styles.visualCaption}><span>FIG. 01 / THE RETRIEVAL SURFACE</span><p>PromptPin stays in the menu bar until it is needed: select a project, choose the next prompt, and copy.</p></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>01</span><p>THE FRICTION</p></div>
        <div className={styles.splitIntro}>
          <h2>Good prompts existed.<br />Finding them was the <em>work.</em></h2>
          <div>
            <p>Reusable prompts were scattered across notes, chat histories, and documents. Saving them solved storage, but not retrieval.</p>
            <p>The recurring pain was smaller and more specific: when a workflow reached its next step, the right instruction should already be close at hand.</p>
          </div>
        </div>
        <div className={styles.frictionGrid}>
          <article><span>01</span><h3>Context switching</h3><p>Opening a document, locating a section, and copying text interrupted the task already in progress.</p></article>
          <article><span>02</span><h3>Flat collections</h3><p>Folders saved individual prompts but did not express the order of a repeatable workflow.</p></article>
          <article><span>03</span><h3>Too much product</h3><p>Accounts, collaboration, and complex editors would add weight before proving the core retrieval value.</p></article>
        </div>
      </section>

      <section className={styles.decision}>
        <p>THE PRODUCT DECISION</p>
        <blockquote>Separate the place where prompts are <em>managed</em><br />from the place where they are <em>used.</em></blockquote>
        <span>The manager supports deliberate setup. The menu bar supports fast retrieval. Each surface is optimized for a different moment.</span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><p>PRODUCT PRINCIPLES</p></div>
        <div className={styles.principleList}>
          {principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.productSection}`}>
        <div className={styles.sectionLabel}><span>03</span><p>THE PRODUCT</p></div>
        <div className={styles.splitIntro}>
          <h2>Two surfaces.<br />One lightweight <em>loop.</em></h2>
          <p>The manager makes projects and prompt order easy to maintain. The menu bar collapses that structure into a small, searchable retrieval surface.</p>
        </div>
        <ManagerMockup />
        <div className={styles.featurePair}>
          <article><span>01 / MANAGE</span><h3>Structure prompts as projects and steps</h3><p>Create, edit, delete, and reorder projects and prompts in a focused native window.</p></article>
          <article><span>02 / RETRIEVE</span><h3>Keep the next prompt one click away</h3><p>Search projects from the menu bar and copy any ordered step with immediate visual confirmation.</p></article>
        </div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.sectionLabel}><span>04</span><p>THE CORE FLOW</p></div>
        <h2>Pin · Pick · Paste</h2>
        <div className={styles.workflowGrid}>
          {workflow.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
        </div>
        <figure className={styles.demoMedia}>
          <div className={styles.demoFrame}>
            <video controls playsInline preload="metadata" poster="/promptpin/manage-window.png">
              <source src="/promptpin/promptpin-demo.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
          <figcaption><span>FIG. 03 / PRODUCT WALKTHROUGH</span><p>From opening PromptPin to selecting a project and bringing a reusable prompt back into the workflow.</p></figcaption>
        </figure>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.sectionLabel}><span>05</span><p>THE MVP SYSTEM</p></div>
        <div className={styles.systemIntro}><h2>Small on purpose.</h2><p>The first release proves the complete value loop without an account, backend, or dependency-heavy architecture.</p></div>
        <div className={styles.systemStats}>
          <div><strong>1</strong><span>click to copy</span></div>
          <div><strong>0</strong><span>accounts required</span></div>
          <div><strong>100%</strong><span>local prompt data</span></div>
        </div>
        <div className={styles.architecture}>
          <div><span>INPUT</span><b>Projects + ordered prompts</b></div><i>→</i>
          <div><span>STATE</span><b>Single SwiftUI store</b></div><i>→</i>
          <div><span>PERSISTENCE</span><b>Atomic local JSON</b></div><i>→</i>
          <div><span>OUTPUT</span><b>macOS clipboard</b></div>
        </div>
        <div className={styles.boundaries}>
          <article><span>SHIPPED IN MVP</span><p>Project search · ordered prompts · one-click copy · full CRUD · local persistence · DMG packaging</p></article>
          <article><span>DEFERRED DELIBERATELY</span><p>Cloud sync · teams · variables · analytics · version history · import/export UI</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>06</span><p>PRODUCT GALLERY</p></div>
        <div className={styles.galleryIntro}><h2>The same system,<br />at two <em>scales.</em></h2><p>A compact menu-bar surface for quick retrieval, paired with a larger workspace for maintaining project structure.</p></div>
        <div className={styles.galleryGrid}>
          <figure className={`${styles.galleryCard} ${styles.galleryPortrait}`}>
            <div className={styles.galleryCanvas}>
              <img src="/promptpin/menu-bar.png" alt="PromptPin menu bar popover listing three prompt projects" />
            </div>
            <figcaption><span>01 / QUICK ACCESS</span><p>Prompt projects remain one click away without taking over the desktop.</p></figcaption>
          </figure>
          <figure className={`${styles.galleryCard} ${styles.galleryLandscape}`}>
            <div className={styles.galleryCanvas}>
              <img src="/promptpin/manage-window.png" alt="PromptPin settings window showing projects and an ordered prompt" />
            </div>
            <figcaption><span>02 / MANAGE</span><p>The full workspace separates deliberate prompt setup from everyday retrieval.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.takeaway}>
        <p>PRODUCT TAKEAWAY</p>
        <h2>AI workflows need less friction around the model, not only a better model.</h2>
        <span>PromptPin turns a repeated personal pain point into a deliberately small native product—then carries it through design, implementation, testing, and release.</span>
      </section>

      <section className={styles.sourceCta}>
        <img src="/promptpin/promptpin-icon.png" alt="" />
        <span>OPEN-SOURCE MACOS APP</span>
        <h2>PromptPin</h2>
        <p>Swift · SwiftUI · AppKit · Local JSON persistence</p>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">Explore the repository ↗</a>
      </section>

      <footer className={styles.footer}><a href="/">← Portfolio</a><span>PROMPTPIN · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
