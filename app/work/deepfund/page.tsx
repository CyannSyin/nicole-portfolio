import type { Metadata } from "next";
import styles from "./deepfund.module.css";

const repositoryUrl = "https://github.com/HKUSTDial/DeepFund";
const paperUrl = "https://neurips.cc/virtual/2025/poster/121642";

export const metadata: Metadata = {
  title: "DeepFund — Nicole",
  description:
    "A live, leakage-resistant benchmark for evaluating LLM fund managers in real market conditions.",
};

const analysts = [
  { name: "Technical", input: "Price · volume · volatility", signal: "BEARISH" },
  { name: "Company news", input: "News · material events", signal: "BULLISH" },
  { name: "Policy", input: "Fiscal · monetary policy", signal: "NEUTRAL" },
  { name: "Insider", input: "Executive transactions", signal: "NEUTRAL" },
  { name: "Fundamental", input: "Earnings · margins · valuation", signal: "SYSTEM" },
  { name: "Macro", input: "GDP · inflation · rates", signal: "SYSTEM" },
];

const experiment = [
  { value: "9", label: "flagship LLMs" },
  { value: "24", label: "live trading days" },
  { value: "$100K", label: "initial cash per model" },
  { value: "5", label: "portfolio tickers" },
];

const models = [
  ["Grok 3 mini Beta", "+1.1", "positive"],
  ["Gemini 2.5 Flash", "−1.9", "negative"],
  ["Claude 3.7 Sonnet", "−3.7", "negative"],
  ["Llama 4 Scout", "−4.3", "negative"],
  ["DeepSeek-V3", "−5.7", "negative"],
  ["GPT-4.1", "−5.9", "negative"],
  ["Qwen2.5-Max", "−6.7", "negative"],
  ["GLM-4-Air", "−7.5", "negative"],
  ["Doubao-1.5-pro", "−8.1", "negative"],
];

export default function DeepFundCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a href="/">← Back to portfolio</a>
        <span>DEEPFUND · CASE STUDY</span>
        <a href={paperUrl} target="_blank" rel="noreferrer">Read the paper ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroLabel}><span>LIVE BENCHMARK · MULTI-AGENT · FINANCE</span><span>NEURIPS ’25</span></div>
        <h1>DeepFund</h1>
        <div className={styles.heroBottom}>
          <h2>No time travel.<br /><em>Just live markets.</em></h2>
          <p>A real-time benchmark that tests whether LLM fund managers can turn fresh market information into defensible decisions—without seeing the future in their training data.</p>
        </div>
        <dl className={styles.projectMeta}>
          <div><dt>MY ROLE</dt><dd>Research · Evaluation · Product Translation</dd></div>
          <div><dt>TIMELINE</dt><dd>2025</dd></div>
          <div><dt>CONTEXT</dt><dd>HKUST(GZ) · Paradoox AI Research</dd></div>
          <div><dt>OUTCOME</dt><dd>NeurIPS 2025 · Datasets &amp; Benchmarks</dd></div>
        </dl>
      </section>

      <section className={styles.heroVisual}>
        <div className={styles.liveBoard}>
          <div className={styles.boardHeader}><span>DEEPFUND / LIVE EVALUATION</span><span>MAR 17 — APR 17, 2025</span><b>● MARKET CLOSED</b></div>
          <div className={styles.boardBody}>
            <div className={styles.liveAxis}><span>$105K</span><span>$100K · BREAK EVEN</span><span>$95K</span><span>$90K</span></div>
            <div className={styles.marketLines} aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i /><i />
              <em className={styles.tariff}>TARIFF SHOCK</em><em className={styles.rebound}>POLICY REVERSAL</em>
            </div>
            <div className={styles.scoreRail}>{models.map(([name, score, status]) => <div key={name}><span>{name}</span><b className={status === "positive" ? styles.positive : styles.negative}>{score}%</b></div>)}</div>
          </div>
          <div className={styles.boardFooter}><span>POST-CUTOFF DATA ONLY</span><span>REAL MARKET · PAPER TRADING · RESEARCH USE ONLY</span></div>
        </div>
        <div className={styles.visualCaption}><span>FIG. 01 / THE LIVE BENCHMARK</span><p>Every model received the same capital, assets, market window, data access, and agent structure. Only the LLM backend changed.</p></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>01</span><p>THE EVALUATION GAP</p></div>
        <div className={styles.splitIntro}>
          <h2>Backtesting can let<br />models see the <em>future.</em></h2>
          <div>
            <p>Historical trading benchmarks assume the strategy has never seen the test period. For an LLM trained on internet-scale data, that assumption can fail.</p>
            <p>A model may recall events, prices, and market narratives from its pretraining corpus. The result can look like prediction while actually measuring memory.</p>
          </div>
        </div>
        <div className={styles.leakageDiagram}>
          <div><span>MODEL TRAINING DATA</span><b>Market history up to knowledge cutoff</b></div><i>×</i><div className={styles.invalid}><span>STATIC BACKTEST</span><b>Evaluation period may already be known</b></div><i>→</i><div><span>INFLATED RESULT</span><b>Memory is mistaken for forecasting ability</b></div>
        </div>
        <div className={styles.problemGrid}>
          <article><span>01</span><h3>Temporal leakage</h3><p>Different knowledge cutoffs make the same historical window unfair across models.</p></article>
          <article><span>02</span><h3>Static capability</h3><p>Document QA and retrospective analysis do not prove an agent can react to a changing market.</p></article>
          <article><span>03</span><h3>Missing behavior</h3><p>A single return number hides how a model interprets signals, controls risk, and changes its portfolio.</p></article>
        </div>
      </section>

      <section className={styles.decision}>
        <p>THE BENCHMARK DECISION</p>
        <blockquote>Move the test window<br />from the <em>past</em> to the <em>present.</em></blockquote>
        <span>DeepFund turns evaluation into a running system: models consume only information available on each trading day, make traceable decisions, and face the same market outcome afterward.</span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><p>THE EVALUATION SYSTEM</p></div>
        <div className={styles.splitIntro}><h2>One market.<br />One workflow.<br /><em>Any LLM.</em></h2><p>The benchmark isolates the model as the variable. A modular data environment and standardized multi-agent workflow stay consistent across providers.</p></div>
        <figure className={styles.frameworkFigure}>
          <img src="/deepfund/framework.webp" alt="DeepFund architecture connecting a live environment, multi-agent workflow, and selectable LLM backend" />
          <figcaption><span>FIG. 02 / DEEPFUND FRAMEWORK</span><p>Live fund state, trading history, and market data feed a planner–analyst–manager pipeline powered by a single selected LLM.</p></figcaption>
        </figure>
      </section>

      <section className={styles.agentSection}>
        <div className={styles.agentInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>03</span><p>MULTI-AGENT DECISION FLOW</p></div>
          <div className={styles.agentIntro}><h2>From raw data<br />to a traceable <em>decision.</em></h2><p>The architecture mirrors a fund team: plan the analysis, collect specialist signals in parallel, then translate evidence into portfolio action under risk constraints.</p></div>
          <div className={styles.flowStrip}>
            <article><span>01 / ORCHESTRATE</span><h3>Financial Planner</h3><p>Selects relevant analysts dynamically or runs a predefined team.</p></article><i>→</i>
            <article><span>02 / INTERPRET</span><h3>Analyst Team</h3><p>Returns standardized Bullish, Bearish, or Neutral signals with justification.</p></article><i>→</i>
            <article><span>03 / ACT</span><h3>Portfolio Manager</h3><p>Synthesizes signals, applies risk control, and chooses Buy, Sell, or Hold.</p></article>
          </div>
          <div className={styles.analystGrid}>
            {analysts.map((analyst) => <article key={analyst.name}><span>{analyst.name}</span><p>{analyst.input}</p><b>{analyst.signal}</b></article>)}
          </div>
          <p className={styles.experimentNote}>The system supports six analyst roles. The live daily experiment used Technical, Company News, Policy, and Insider analysts; longer-horizon Fundamental and Macro roles remain available in the framework.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>04</span><p>EXPERIMENT DESIGN</p></div>
        <div className={styles.experimentIntro}><h2>Make the comparison<br />fair enough to <em>matter.</em></h2><p>Nine models managed identical portfolios through 24 volatile trading days spanning an FOMC meeting and the April tariff shock.</p></div>
        <div className={styles.experimentStats}>{experiment.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        <div className={styles.experimentGrid}>
          <article><span>ASSETS</span><h3>Buffett’s top five holdings</h3><p>AAPL · AXP · BAC · KO · CVX</p></article>
          <article><span>MARKET WINDOW</span><h3>March 17 — April 17</h3><p>24 trading days at daily decision frequency</p></article>
          <article><span>CONTROL</span><h3>Same system, different model</h3><p>Standard prompts, temperature, data, capital, and evaluation metrics</p></article>
          <article><span>TRACEABILITY</span><h3>Every step persisted</h3><p>Signals, justifications, decisions, trading history, and portfolio state</p></article>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.resultsInner}>
          <div className={styles.sectionLabel}><span>05</span><p>WHAT THE LIVE MARKET REVEALED</p></div>
          <div className={styles.resultsHeadline}><strong>1 / 9</strong><h2>Only one model finished the evaluation period with a positive return.</h2></div>
          <figure className={styles.resultsFigure}><img src="/deepfund/results.webp" alt="DeepFund portfolio asset curves and performance table for nine evaluated LLMs" /><figcaption><span>FIG. 03 / LIVE PERFORMANCE</span><p>Grok 3 mini Beta returned +1.1%; the other eight models finished negative. Results are specific to the March–April 2025 window and do not imply future investment performance.</p></figcaption></figure>
          <div className={styles.resultStats}>
            <div><strong>96%</strong><span>valid analyst signals</span><p>4,144 of 4,320 signals included usable structured output and justification.</p></div>
            <div><strong>98%</strong><span>valid trading decisions</span><p>1,059 of 1,080 decisions successfully completed the end-to-end pipeline.</p></div>
            <div><strong>14.5%</strong><span>DeepSeek maximum drawdown</span><p>The largest model drawdown observed during the test window.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>06</span><p>FROM SCORE TO BEHAVIOR</p></div>
        <div className={styles.behaviorIntro}><h2>The return tells us <em>what.</em><br />The trace tells us <em>why.</em></h2><p>Because DeepFund records analyst outputs, portfolio decisions, and market state, evaluation can move beyond ranking into behavioral diagnosis.</p></div>
        <div className={styles.behaviorGrid}>
          <article><span>01 / SIGNAL SENSITIVITY</span><h3>Grok expressed more directional signals</h3><p>DeepSeek leaned heavily Neutral under identical information; both models missed the sharp April 9 reversal.</p></article>
          <article><span>02 / DECISION QUALITY</span><h3>Consistency did not guarantee profit</h3><p>A decision can logically follow its signals and still be ineffective in the market. Evaluation needs both reasoning traces and realized outcomes.</p></article>
          <article><span>03 / RISK PERSONALITY</span><h3>Cash reserve changed the recovery path</h3><p>Grok’s diversified, lower-frequency behavior preserved flexibility. DeepSeek’s concentration and aggressive cash use limited recovery after the shock.</p></article>
        </div>
      </section>

      <section className={styles.productizationSection}>
        <div className={styles.productizationInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>07</span><p>FROM BENCHMARK TO PRODUCT</p></div>
          <div className={styles.productizationIntro}><h2>Make model behavior<br />legible to more than <em>researchers.</em></h2><p>The arena metaphor turns a continuous evaluation system into a comparison surface. The next layer is a dashboard that connects headline performance to the decision trace underneath.</p></div>
          <figure className={styles.arenaFigure}><img src="/deepfund/arena.webp" alt="DeepFund Arena illustration comparing LLM fund managers as race cars" /><figcaption><span>EARLY ARENA METAPHOR</span><p>Car racing is illustrative only; the system performs research evaluation and does not execute real trades.</p></figcaption></figure>
        </div>
      </section>

      <section className={styles.takeaway}>
        <p>PRODUCT TAKEAWAY</p><h2>Trust starts with evaluating an AI system under the conditions where it will actually operate.</h2>
        <span>DeepFund reframes model evaluation as an ongoing product system: control the environment, expose the decision process, measure real outcomes, and resist impressive results that cannot survive tomorrow.</span>
      </section>

      <section className={styles.paperCta}>
        <span>NEURIPS 2025 · DATASETS &amp; BENCHMARKS</span>
        <h2>Time Travel is Cheating: Going Live with DeepFund for Real-Time Fund Investment Benchmarking</h2>
        <p>Changlun Li, Yao Shi, Chen Wang, Qiqi Duan, Runke Ruan, Weijie Huang, Haonan Long, Lijun Huang, Nan Tang, and Yuyu Luo</p>
        <div><a href={paperUrl} target="_blank" rel="noreferrer">Read the paper ↗</a><a href={repositoryUrl} target="_blank" rel="noreferrer">View source ↗</a></div>
      </section>

      <footer className={styles.footer}><a href="/">← Portfolio</a><span>DEEPFUND · 2025</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
