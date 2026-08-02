import type { Metadata } from "next";
import styles from "./fincost.module.css";

const repositoryUrl = "https://github.com/CyannSyin/FinCost-ToolKit";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "FinCost — Nicole",
  description:
    "A cost-aware toolkit that measures the real operating cost of agentic trading systems and turns cost drivers into configuration-level recommendations.",
};

export const dynamic = "force-static";

const costLayers = [
  {
    number: "01",
    label: "STATIC",
    title: "The cost of being ready",
    items: ["Market-data subscription", "Recurring services", "Baseline access"],
    text: "Costs that remain even when the system makes fewer decisions or trades.",
  },
  {
    number: "02",
    label: "DYNAMIC",
    title: "The cost of every run",
    items: ["LLM tokens", "Infrastructure", "Trading commission"],
    text: "Usage-linked costs that grow with decision frequency, agent count, context size, and turnover.",
  },
  {
    number: "03",
    label: "UNCERTAIN",
    title: "The cost hidden in time",
    items: ["Slippage", "Opportunity cost", "Decision latency"],
    text: "Economically relevant losses that are harder to observe directly but can erase a narrow edge.",
  },
];

const levers = [
  { number: "01", title: "Model choice", question: "Does every decision need the most capable—and expensive—model?", action: "Route screening to a smaller model and escalate only high-value cases." },
  { number: "02", title: "Capital scale", question: "Is the system cost proportionate to the capital it manages?", action: "Test whether a different allocation or position threshold improves cost efficiency." },
  { number: "03", title: "Decision frequency", question: "Is another inference cycle creating information or only churn?", action: "Move from fixed hourly runs to persistence rules or event-driven triggers." },
  { number: "04", title: "Architecture", question: "Which agents and tools change the decision—and which repeat work?", action: "Compress overlapping agents, batch symbols, cache context, and add pre-filters." },
];

export default function FinCostCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a href={withBasePath("/")}>← Back to portfolio</a>
        <span>FINCOST · CASE STUDY</span>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">View source ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLabel}><span>AI ECONOMICS · FINTECH · PRODUCT TOOLKIT</span><span>OPEN SOURCE</span></div>
        <h1>FinCost</h1>
        <div className={styles.heroBottom}>
          <h2>Profit before cost<br />is only <em>half the answer.</em></h2>
          <p>A measurement and optimization toolkit that asks whether an agentic trading system creates enough value to justify its inference, infrastructure, data, execution, and latency costs.</p>
        </div>
        <dl className={styles.projectMeta}>
          <div><dt>MY ROLE</dt><dd>Product Research · Cost Modeling · Toolkit Design</dd></div>
          <div><dt>TIMELINE</dt><dd>2026</dd></div>
          <div><dt>CONTEXT</dt><dd>Fintech AI · Deployment Research</dd></div>
          <div><dt>OUTCOME</dt><dd>Open-source toolkit · 13 deployment cases</dd></div>
        </dl>
      </section>

      <section className={styles.heroVisual}>
        <div className={styles.equationBoard}>
          <div className={styles.grossBlock}><span>01 / PERFORMANCE</span><strong>GROSS<br />PROFIT</strong><b>+$4,280</b></div>
          <i>−</i>
          <div className={styles.costBlock}><span>02 / SYSTEM BILL</span><strong>REAL<br />COST</strong><ul><li>Inference</li><li>Infrastructure</li><li>Commission</li><li>Latency</li></ul></div>
          <i>=</i>
          <div className={styles.netBlock}><span>03 / DECISION</span><strong>NET<br />OUTCOME</strong><b>VIABLE?</b></div>
        </div>
        <div className={styles.visualCaption}><span>FIG. 01 / THE ECONOMIC QUESTION</span><p>FinCost moves the evaluation boundary from strategy performance to the net value of running the complete AI system.</p></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>01</span><p>THE DEPLOYMENT GAP</p></div>
        <div className={styles.splitIntro}>
          <h2>A good model can still<br />be a bad <em>business.</em></h2>
          <div>
            <p>Agent evaluations often end at accuracy, return, or task success. Deployment begins where those evaluations stop.</p>
            <p>More reasoning cycles, larger models, deeper agent teams, and faster trading can improve a gross result while quietly increasing the bill—or slowing the decision until its value disappears.</p>
          </div>
        </div>
        <div className={styles.problemGrid}>
          <article><span>01</span><h3>Fragmented accounting</h3><p>Model, infrastructure, data, and transaction costs are reported in separate systems—or not recorded at all.</p></article>
          <article><span>02</span><h3>Invisible trade-offs</h3><p>Teams can see that one configuration performs better but not whether the incremental gain is worth its operating cost.</p></article>
          <article><span>03</span><h3>Generic optimization</h3><p>“Use a cheaper model” is not enough. The useful question is which knob to change for this strategy and why.</p></article>
        </div>
      </section>

      <section className={styles.decision}>
        <p>THE PRODUCT DECISION</p>
        <blockquote>Turn every system run<br />into a <em>bill</em> and a <em>diagnosis.</em></blockquote>
        <span>A consistent cost bill makes the hidden system legible. A diagnosis layer then connects the largest cost driver to an actionable deployment configuration.</span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><p>THE TOOLKIT</p></div>
        <div className={styles.splitIntro}><h2>Measure first.<br />Optimize with <em>evidence.</em></h2><p>FinCost ingests runtime traces, trading results, model pricing, and system configuration. It calculates total cost, checks net viability, and generates configuration-level suggestions.</p></div>
        <figure className={styles.overviewFigure}><img src={withBasePath("/fincost/overview.webp")} alt="FinCost overview from unknown system cost and net loss to measured costs and net profit" /><figcaption><span>FIG. 02 / COST-AWARE TOOLKIT</span><p>The toolkit connects gross performance to complete system cost, then uses diagnosis and optimization to test whether the deployment is economically viable.</p></figcaption></figure>
        <figure className={styles.frameworkFigure}><img src={withBasePath("/fincost/framework.webp")} alt="FinCost framework from runtime trace and configuration through measurement, viability check, diagnosis, and optimization" /><figcaption><span>FIG. 03 / MEASURE → CHECK → OPTIMIZE</span><p>Runtime trace and trading results feed cost accounting; system configuration gives the optimizer controllable knobs for the next iteration.</p></figcaption></figure>
      </section>

      <section className={styles.costSection}>
        <div className={styles.costInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>03</span><p>THE COST MODEL</p></div>
          <div className={styles.costIntro}><h2>Not one cost.<br />Three layers of <em>reality.</em></h2><p>The taxonomy separates what is fixed, what scales with execution, and what must be estimated. That distinction makes optimization more precise.</p></div>
          <div className={styles.costGrid}>{costLayers.map((layer) => <article key={layer.number}><div><span>{layer.number}</span><b>{layer.label}</b></div><h3>{layer.title}</h3><p>{layer.text}</p><ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <div className={styles.formula}><span>NET ECONOMIC OUTCOME</span><strong>Gross Profit − Static Cost − Dynamic Cost − Uncertain Cost</strong></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>04</span><p>FROM TRACE TO BILL</p></div>
        <div className={styles.billIntro}><h2>A report that answers<br /><em>“where did the value go?”</em></h2><p>The output combines portfolio state, cost attribution, latency, and net result in one artifact. The example below is an included hourly DeepSeek deployment—not a general performance claim.</p></div>
        <div className={styles.billLayout}>
          <div className={styles.billCard}>
            <header><span>FINCOST SUMMARY BILL</span><span>DEC 01 — DEC 31, 2025</span></header>
            <div className={styles.billTop}><div><span>STRATEGY</span><b>deepseek-v3.2-fast-hour-100000</b></div><div><span>INITIAL CAPITAL</span><b>$100,000.00</b></div></div>
            <div className={styles.billRows}>
              <div><span>Gross trading result</span><b>−$1,547.57</b></div>
              <div><span>Data subscription</span><b>$100.00</b></div>
              <div><span>Transaction commission</span><b>$92.00</b></div>
              <div><span>LLM token cost</span><b>$63.41</b></div>
              <div><span>Infrastructure</span><b>$26.20</b></div>
              <div><span>Uncertain cost</span><b>$30.94</b></div>
            </div>
            <div className={styles.billTotal}><span>TOTAL SYSTEM COST</span><b>$312.54</b></div>
            <div className={styles.billNet}><span>NET ECONOMIC OUTCOME</span><strong>−$1,860.12</strong></div>
          </div>
          <div className={styles.billSignals}>
            <article><span>190</span><p>trades in one month</p></article>
            <article><span>40.5M</span><p>total tokens processed</p></article>
            <article><span>20.0s</span><p>average latency per trade</p></article>
            <article><span>$38.04</span><p>measured opportunity cost</p></article>
          </div>
        </div>
      </section>

      <section className={styles.diagnosisSection}>
        <div className={styles.diagnosisInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>05</span><p>THE DIAGNOSIS LOOP</p></div>
          <div className={styles.diagnosisIntro}><h2>Find the driver.<br />Change a <em>controllable knob.</em></h2><p>The diagnosis agent does not promise profitability. It identifies cost inefficiency and proposes specific experiments that can lower the bill without blindly removing capability.</p></div>
          <div className={styles.leverList}>{levers.map((lever) => <article key={lever.number}><span>{lever.number}</span><div><h3>{lever.title}</h3><p>{lever.question}</p></div><b>{lever.action}</b></article>)}</div>
          <div className={styles.exampleRecommendation}><span>EXAMPLE DIAGNOSIS</span><blockquote>Reduce hourly full-decision cycles, add a low-cost pre-filter, and reserve the larger model for confirmed signals.</blockquote><p>Why: the example system paid for repeated context and long inference while generating 190 trades and measurable slippage. Frequency and routing are more actionable than a generic request for “better prompts.”</p></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>06</span><p>DEPLOYMENT VALIDATION</p></div>
        <div className={styles.validationIntro}><h2>Test whether the advice<br />survives different <em>systems.</em></h2><p>The toolkit repository includes 13 retail deployment examples across model types, capital scales, frequencies, and single- or multi-agent architectures, with a five-expert judgment attached to each recommendation set.</p></div>
        <div className={styles.validationStats}><div><strong>13</strong><span>retail deployment examples</span></div><div><strong>5</strong><span>domain experts in the review panel</span></div><div><strong>4</strong><span>configuration levers evaluated</span></div></div>
        <div className={styles.deploymentGallery}>
          <figure><img src={withBasePath("/fincost/deployment-01.webp")} alt="FinCost deployment example for a daily single-agent retail system" /><figcaption>DAILY · SINGLE AGENT · COMMERCIAL API</figcaption></figure>
          <figure><img src={withBasePath("/fincost/deployment-08.webp")} alt="FinCost deployment example for an hourly multi-agent retail system" /><figcaption>HOURLY · MULTI-AGENT · HYBRID MODEL</figcaption></figure>
          <figure><img src={withBasePath("/fincost/deployment-13.webp")} alt="FinCost deployment example for a daily multi-agent retail system" /><figcaption>DAILY · MULTI-AGENT · COMMERCIAL API</figcaption></figure>
        </div>
        <p className={styles.validationNote}>These examples demonstrate applicability and actionability across configurations; they do not establish that FinCost guarantees profitable trading.</p>
      </section>

      <section className={styles.productSection}>
        <div className={styles.productInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>07</span><p>THE PRODUCT SURFACE</p></div>
          <div className={styles.productIntro}><h2>Turn accounting into<br />a deployment <em>decision.</em></h2><p>The repository currently produces Markdown, HTML, JSONL, PDF cost charts, performance curves, and optional diagnosis notes. A visual dashboard can make configuration comparison faster.</p></div>
        </div>
      </section>

      <section className={styles.takeaway}>
        <p>PRODUCT TAKEAWAY</p><h2>An AI system is viable only when the value of its decisions exceeds the cost of producing them.</h2>
        <span>FinCost makes that trade-off measurable, diagnosable, and configurable—so deployment teams can optimize the system instead of guessing which part is too expensive.</span>
      </section>

      <section className={styles.sourceCta}><span>OPEN-SOURCE COST-AWARE TOOLKIT</span><h2>FinCost</h2><p>Python · Runtime trace analysis · Cost accounting · Diagnosis agent</p><a href={repositoryUrl} target="_blank" rel="noreferrer">Explore the repository ↗</a></section>

      <footer className={styles.footer}><a href={withBasePath("/")}>← Portfolio</a><span>FINCOST · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
