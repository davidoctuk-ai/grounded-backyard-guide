import Link from "next/link";

const bookHero = "/go/backyard-book.html";
const bookCompare = "/go/backyard-book.html";
const kitCompare = "/go/seed-kit.html";

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>Independent, practical backyard guidance</span>
        <Link href="/guides">Browse the free field guides →</Link>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Grounded Backyard home">
          <span className="brand-mark" aria-hidden="true">↟</span><span>Grounded Backyard</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#start">Start here</a><Link href="/guides">Guides</Link>
          <a href="#resources">Resources</a><Link href="/home-services">Home quotes</Link><Link href="/about">About</Link>
        </nav>
      </header>
      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">Make your patch work harder</p>
          <h1>Grow more from the space you already have.</h1>
          <p className="hero-lede">Straightforward ideas for producing useful food, reducing wasted water and building a backyard that gets better every season.</p>
          <p className="disclosure">This page contains affiliate links. If you buy through them, we may earn a commission at no extra cost to you.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/starter-plan">Get the free 7-day plan</Link>
            <a className="button button-secondary" href={bookHero} rel="sponsored nofollow">See the complete blueprint ↗</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustrated productive backyard">
          <div className="sun" /><div className="plant plant-one"><i /><i /><i /></div>
          <div className="plant plant-two"><i /><i /><i /></div>
          <div className="water"><span>RAIN</span><strong>BARREL</strong></div>
          <div className="bed"><span>HERBS</span><span>GREENS</span><span>ROOTS</span></div>
        </div>
      </section>
      <section className="proof-strip" aria-label="Editorial principles">
        <p><strong>Small-space friendly</strong><span>Start with what you have</span></p>
        <p><strong>Low-waste methods</strong><span>Use resources thoughtfully</span></p>
        <p><strong>No miracle claims</strong><span>Practical steps, honestly framed</span></p>
      </section>
      <section className="section principles" id="principles">
        <div className="section-heading">
          <p className="eyebrow">The grounded method</p>
          <h2>Build capability one useful layer at a time.</h2>
          <p>A productive backyard is a system. Begin with observation, improve the soil, capture what nature gives you, then expand only when the basics are working.</p>
        </div>
        <div className="principle-grid">
          <article><span>01</span><h3>Read the space</h3><p>Track sun, shade, wind and water before choosing what to grow.</p></article>
          <article><span>02</span><h3>Feed the soil</h3><p>Healthy soil makes plants more resilient and reduces ongoing inputs.</p></article>
          <article><span>03</span><h3>Plant for use</h3><p>Prioritise foods and herbs your household will genuinely use.</p></article>
          <article><span>04</span><h3>Close the loops</h3><p>Compost scraps, save water and turn waste into the next season’s resources.</p></article>
        </div>
      </section>
      <section className="plan-callout">
        <div><p className="eyebrow">Free, no email required</p><h2>Your first productive week.</h2>
          <p>Seven short tasks to assess your space, choose a first crop and create a realistic next step.</p></div>
        <Link className="button button-light" href="/starter-plan">Open the starter plan →</Link>
      </section>
      <section className="section home-guides" id="guides">
        <div className="section-heading split-heading"><div><p className="eyebrow">Evergreen field guides</p><h2>Useful answers people can find, save and use.</h2></div><p>Start with a practical plan, a worked calculation or a comparison checklist. Every guide is free and available without giving us your email address.</p></div>
        <div className="guide-preview-grid">
          <article><p className="card-label">Grow food</p><h3>Plan a small-space vegetable garden</h3><p>Map light, choose containers and build a three-crop first season.</p><Link href="/guides/small-space-vegetable-garden-plan">Read the guide →</Link></article>
          <article><p className="card-label">Use water wisely</p><h3>Size a rain barrel from your roof</h3><p>Estimate collection, storage, weight and overflow before buying.</p><Link href="/guides/rain-barrel-sizing-guide">Read the guide →</Link></article>
          <article><p className="card-label">Plan a project</p><h3>Compare home-project quotes fairly</h3><p>Use the same scope, questions and cost fields for every provider.</p><Link href="/guides/home-project-quote-checklist">Read the guide →</Link></article>
        </div>
      </section>
      <section className="section resources" id="resources">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Editor’s resource shelf</p><h2>Two different ways to go deeper.</h2></div>
          <p>These are paid third-party resources. We reviewed their marketplace history, commercial terms and intended use; your results will still depend on your space, climate and follow-through.</p>
        </div>
        <div className="resource-grid">
          <article className="resource-card featured">
            <p className="card-label">Best for a complete system</p><h3>The Self-Sufficient Backyard</h3>
            <p className="card-subtitle">A broad, illustrated backyard blueprint</p>
            <ul><li>Whole-backyard planning in one resource</li><li>Food, water and practical self-sufficiency topics</li><li>Suited to readers who want the bigger picture</li></ul>
            <a className="button button-primary" href={bookCompare} rel="sponsored nofollow">View the book details ↗</a>
            <small>Sold and fulfilled by the publisher. Pricing may change.</small>
          </article>
          <article className="resource-card">
            <p className="card-label">Best for a hands-on start</p><h3>Medicinal Garden Kit</h3>
            <p className="card-subtitle">A physical seed collection for a traditional herb garden</p>
            <ul><li>A tangible starting point for growing herbs</li><li>Useful for gardeners who prefer learning by doing</li><li>Seeds and information—not medical treatment</li></ul>
            <a className="button button-secondary dark-border" href={kitCompare} rel="sponsored nofollow">View the garden kit ↗</a>
            <small>Always check local growing conditions and product terms.</small>
          </article>
        </div>
        <aside className="note"><strong>A sensible order:</strong> If you are starting from scratch, read and plan before buying supplies. If you already understand your space and want a focused project, a seed kit may be the more direct route.</aside>
      </section>
      <section className="section partner-hub" aria-labelledby="partner-heading">
        <div className="section-heading"><p className="eyebrow">More homeowner resources</p><h2 id="partner-heading">Choose the path that matches what you need.</h2><p>These pages lead to independent partners. Grounded Backyard does not collect your contact details; the partner page explains its own eligibility and privacy terms.</p></div>
        <div className="partner-grid">
          <article><p className="card-label">For US homeowners</p><h3>Home project quote options</h3><p>Explore current third-party options for comparing the cost and price of eligible home projects.</p><Link className="button button-primary" href="/home-services">Explore home quotes →</Link></article>
          <article><p className="card-label">Eligibility varies</p><h3>Current consumer offers</h3><p>Browse current third-party surveys, promotions and registration offers. No purchase or reward is promised.</p><Link className="button button-secondary" href="/current-offers">Browse current offers →</Link></article>
        </div>
      </section>
      <section className="section newsletter">
        <p className="eyebrow">Seasonal field notes</p><h2>Useful guidance, without the panic.</h2>
        <p>New guides will cover small-space growing, water-wise systems and realistic backyard projects. Bookmark this page while the free email edition is being prepared.</p>
        <Link className="text-link" href="/starter-plan">Begin with the 7-day plan →</Link>
      </section>
      <footer>
        <div><Link className="brand footer-brand" href="/"><span className="brand-mark">↟</span><span>Grounded Backyard</span></Link><p>Practical ideas for a more useful patch of ground.</p></div>
        <div className="footer-links"><Link href="/guides">Guides</Link><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/privacy">Privacy</Link></div>
        <p className="fine-print">Educational content only. Nothing on this site is medical, legal, financial or professional agricultural advice. We do not promise particular gardening, health or income outcomes.</p>
      </footer>
    </main>
  );
}
