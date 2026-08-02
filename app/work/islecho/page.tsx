import type { Metadata } from "next";
import styles from "./islecho.module.css";

const repositoryUrl = "https://github.com/CyannSyin/Islecho";

export const metadata: Metadata = {
  title: "Islecho — Nicole",
  description:
    "A low-pressure social product where one daily thought can drift to a stranger and return as a small, kind echo.",
};

const principles = [
  {
    number: "01",
    title: "One thought is enough",
    text: "A 200-character daily entry creates a gentle boundary. Participation can be honest without becoming performative.",
  },
  {
    number: "02",
    title: "Serendipity over feeds",
    text: "People drift to one stranger at a time. There are no follower counts, popularity signals, or infinite content queues.",
  },
  {
    number: "03",
    title: "Kindness without obligation",
    text: "An echo is a small one-way response—not the beginning of a chat, relationship, or demand for continued attention.",
  },
];

const loop = [
  { number: "01", title: "Leave a thought", text: "Choose a mood and write one short note for today." },
  { number: "02", title: "Enter the current", text: "Let the ocean transition carry you away from your own island." },
  { number: "03", title: "Meet one island", text: "Read one anonymous thought without profiles or social metrics." },
  { number: "04", title: "Send an echo", text: "Offer one small sign of recognition, then continue drifting or return home." },
];

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className={styles.phoneFigure}>
      <div className={styles.phone}><div className={styles.dynamicIsland} />{children}</div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function IslechoCaseStudy() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <a href="/">← Back to portfolio</a>
        <span>ISLECHO · CASE STUDY</span>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">View source ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroLabel}><span>SOCIAL PRODUCT · IOS · INDEPENDENT BUILD</span><span>岛语</span></div>
          <h1>Islecho</h1>
          <h2>One thought.<br /><em>One kind echo.</em></h2>
          <p>A quiet digital archipelago where people leave one daily thought, drift to a stranger&apos;s island, and respond without the pressure of a public identity.</p>
        </div>
        <div className={styles.heroArtwork}>
          <img src="/islecho/welcome-hero.webp" alt="A quiet archipelago at dusk with a small illuminated island and lighthouse" />
          <span>AN ARCHIPELAGO OF SMALL HUMAN MOMENTS</span>
        </div>
        <dl className={styles.projectMeta}>
          <div><dt>MY ROLE</dt><dd>Product · Interaction · SwiftUI Development</dd></div>
          <div><dt>CONTEXT</dt><dd>Independent product concept</dd></div>
          <div><dt>PLATFORM</dt><dd>Native iOS 17 · Swift 6</dd></div>
          <div><dt>OUTCOME</dt><dd>Functional iOS MVP</dd></div>
        </dl>
      </section>

      <section className={styles.panorama}>
        <img src="/islecho/drift-panorama.webp" alt="A calm ocean panorama at dusk" />
        <div><span>FIG. 01 / THE PRODUCT WORLD</span><p>The ocean is not decoration—it turns navigation into a slower, more intentional transition between self and stranger.</p></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>01</span><p>THE OPPORTUNITY</p></div>
        <div className={styles.splitIntro}>
          <h2>Social products ask us<br />to be <em>interesting.</em></h2>
          <div>
            <p>Most social spaces reward frequency, visibility, and reaction. Even small moments become content to package for an audience.</p>
            <p>Islecho explores the opposite question: could a social product help someone feel briefly heard without asking them to build a profile, attract attention, or maintain a conversation?</p>
          </div>
        </div>
        <div className={styles.problemGrid}>
          <article><span>01</span><h3>Performance pressure</h3><p>Profiles and public metrics encourage people to shape everyday feelings into shareable content.</p></article>
          <article><span>02</span><h3>Interaction debt</h3><p>Replies and direct messages can turn a small response into an obligation to continue engaging.</p></article>
          <article><span>03</span><h3>Endless consumption</h3><p>Feeds optimize for another swipe, making quiet reflection difficult to preserve.</p></article>
        </div>
      </section>

      <section className={styles.decision}>
        <p>THE PRODUCT DECISION</p>
        <blockquote>Design for a moment of <em>recognition,</em><br />not a network of attention.</blockquote>
        <span>Islecho removes identity, popularity, and conversational obligation. The core unit is simply one thought meeting one kind echo.</span>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>02</span><p>DESIGN PRINCIPLES</p></div>
        <div className={styles.principleList}>
          {principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}
        </div>
      </section>

      <section className={styles.productSection}>
        <div className={styles.productInner}>
          <div className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>03</span><p>THE PRODUCT</p></div>
          <div className={styles.productIntro}><h2>A social loop<br />with room to <em>breathe.</em></h2><p>Each screen narrows the next choice. The experience moves from private expression to anonymous discovery and back to a personal archive.</p></div>
          <div className={styles.phoneGallery}>
            <PhoneFrame label="01 / WRITE TODAY">
              <div className={styles.writeScreen}>
                <div className={styles.phoneNav}>‹ <span>写下今天</span></div>
                <h3>今天，有什么想留在岛上？</h3><p>它可能会被某座陌生的小岛听见。</p>
                <div className={styles.moods}><span>开心</span><span className={styles.activeMood}>平静</span><span>疲惫</span><span>难过</span><span>焦虑</span><span>孤独</span></div>
                <div className={styles.textArea}>今天下班时看见天边是粉色的，突然觉得今天也没有那么糟。</div>
                <small>34 / 200</small><button>让声音出发</button>
              </div>
            </PhoneFrame>
            <PhoneFrame label="02 / DRIFT TO A STRANGER">
              <div className={styles.islandScreen}>
                <div className={styles.phoneNav}>‹ <span>陌生岛</span></div>
                <h3>月见岛</h3><p>☾ 月光</p>
                <img src="/islecho/moon-island.webp" alt="Moon View Island with a lighthouse" />
                <div className={styles.messageCard}><small>一段被洋流带来的岛语</small><p>晚上抬头看见月亮的时候，突然觉得自己没有那么孤单。</p></div>
                <button>送出回响</button>
              </div>
            </PhoneFrame>
            <PhoneFrame label="03 / RECEIVE AN ECHO">
              <div className={styles.echoScreen}>
                <div className={styles.echoGlow}>✦</div><h3>来自远方的回响</h3>
                <p>虽然不知道你经历了什么，但希望你今晚能好好休息。</p>
                <button>收下这束微光</button>
              </div>
            </PhoneFrame>
          </div>
          <div className={styles.featurePair}>
            <article><span>01 / PRIVATE MEMORY</span><h3>Your island remembers what feeds forget</h3><p>Daily entries, moods, and received echoes become a personal chronological archive stored on the device.</p></article>
            <article><span>02 / SAFER SERENDIPITY</span><h3>A stranger can be skipped without friction</h3><p>People can continue drifting, return home, or report uncomfortable content without opening a conversation.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.sectionLabel}><span>04</span><p>THE EXPERIENCE LOOP</p></div>
        <h2>Leave · Drift · Echo</h2>
        <div className={styles.workflowGrid}>
          {loop.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
        </div>
        <figure className={styles.demoMedia}>
          <div className={styles.demoCopy}>
            <span>FIG. 02 / END-TO-END PROTOTYPE</span>
            <h3>A complete emotional loop, shown at the pace of the product.</h3>
            <p>The vertical capture follows the native experience from entering the archipelago to leaving a thought, drifting, and returning to a personal memory.</p>
          </div>
          <div className={styles.demoPhone}>
            <video controls playsInline preload="metadata" poster="/islecho/welcome-home.png" aria-label="Islecho end-to-end iPhone prototype demonstration">
              <source src="/islecho/islecho-demo.m4v?v=20260802-231456" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </figure>
      </section>

      <section className={styles.worldSection}>
        <div className={styles.sectionLabel}><span>05</span><p>THE PRODUCT WORLD</p></div>
        <div className={styles.worldIntro}><h2>Different islands.<br />The same quiet <em>ocean.</em></h2><p>A consistent illustrated system gives every anonymous destination a distinct identity without turning it into a user profile.</p></div>
        <div className={styles.islandGrid}>
          <figure><img src="/islecho/my-island.webp" alt="Nicole's home island with a house and lighthouse" /><figcaption><span>MY ISLAND</span><p>A private home for today&apos;s thought and remembered echoes.</p></figcaption></figure>
          <figure><img src="/islecho/mist-island.webp" alt="Mist Sleep Island" /><figcaption><span>雾眠岛 · MIST</span><p>A softer, enclosed shore for uncertain thoughts.</p></figcaption></figure>
          <figure><img src="/islecho/wind-island.webp" alt="Wind Rest Island" /><figcaption><span>风栖岛 · BREEZE</span><p>A small destination shaped by weather and atmosphere.</p></figcaption></figure>
          <figure><img src="/islecho/star-island.webp" alt="Star Islet" /><figcaption><span>星屿 · CLEAR NIGHT</span><p>Visual identity without biography, followers, or status.</p></figcaption></figure>
        </div>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.sectionLabel}><span>06</span><p>THE MVP SYSTEM</p></div>
        <div className={styles.systemIntro}><h2>Prototype the feeling,<br />then prove the <em>system.</em></h2><p>The current native demo makes the entire interaction testable while deliberately simulating stranger content and echoes locally. A real social backend remains outside the MVP boundary.</p></div>
        <div className={styles.systemStats}>
          <div><strong>1</strong><span>daily island entry</span></div><div><strong>200</strong><span>character maximum</span></div><div><strong>0</strong><span>third-party dependencies</span></div>
        </div>
        <div className={styles.architecture}>
          <div><span>EXPERIENCE</span><b>Native SwiftUI flows</b></div><i>→</i><div><span>STATE</span><b>Observable app model</b></div><i>→</i><div><span>MEMORY</span><b>Local SwiftData</b></div><i>→</i><div><span>PROTOTYPE</span><b>Mock stranger islands</b></div>
        </div>
        <div className={styles.boundaries}>
          <article><span>FUNCTIONAL IN MVP</span><p>Welcome · ocean home · daily writing · mood selection · island memory · drifting · anonymous echo flow · inbox · report path</p></article>
          <article><span>NEXT VALIDATION</span><p>Real matching and delivery · moderation operations · privacy model · notification cadence · safety testing · retention without feed mechanics</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}><span>07</span><p>PRODUCT GALLERY</p></div>
        <div className={styles.galleryIntro}><h2>Three moments.<br />One quiet <em>rhythm.</em></h2><p>The final iPhone captures connect the illustrated world to the daily product loop: arrive, leave something behind, then return to what the island remembers.</p></div>
        <div className={styles.galleryGrid}>
          <figure className={styles.galleryCard}>
            <div className={styles.galleryCanvas}><img src="/islecho/welcome-home.png" alt="Islecho welcome screen showing a lighthouse island at dusk" /></div>
            <figcaption><span>01 / ARRIVE</span><p>Enter a calm product world before any social action is requested.</p></figcaption>
          </figure>
          <figure className={styles.galleryCard}>
            <div className={styles.galleryCanvas}><img src="/islecho/write-drift.png" alt="Islecho daily writing screen with mood selection and a short thought" /></div>
            <figcaption><span>02 / LEAVE A THOUGHT</span><p>Mood and a 200-character boundary make daily expression feel finite.</p></figcaption>
          </figure>
          <figure className={styles.galleryCard}>
            <div className={styles.galleryCanvas}><img src="/islecho/echo-memory.png" alt="Islecho island memory screen with daily entries, moods, and echoes" /></div>
            <figcaption><span>03 / REMEMBER</span><p>Entries and echoes settle into a private archive instead of a feed.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.takeaway}>
        <p>PRODUCT TAKEAWAY</p><h2>Constraints can make a social product feel more human.</h2>
        <span>By limiting frequency, identity, and reciprocity, Islecho creates a small emotional exchange that feels complete without becoming a feed or relationship.</span>
      </section>

      <section className={styles.sourceCta}>
        <span>OPEN-SOURCE IOS PROTOTYPE</span><h2>Islecho</h2><p>Swift 6 · SwiftUI · SwiftData · iOS 17+</p>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">Explore the repository ↗</a>
      </section>

      <footer className={styles.footer}><a href="/">← Portfolio</a><span>ISLECHO · 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
