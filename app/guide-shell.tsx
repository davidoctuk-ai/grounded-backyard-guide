import Link from "next/link";

export function GuideHeader() {
  return <header className="guide-header">
    <Link className="brand" href="/" aria-label="Grounded Backyard home"><span className="brand-mark" aria-hidden="true">G</span><span>Grounded Backyard</span></Link>
    <nav aria-label="Guide navigation"><Link href="/guides">All guides</Link><Link href="/starter-plan">7-day plan</Link><Link href="/about">About</Link></nav>
  </header>;
}

export function GuideFooter() {
  return <footer className="guide-footer"><div><Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">G</span><span>Grounded Backyard</span></Link><p>Useful plans for gardens, water and practical home projects.</p></div><div className="footer-links"><Link href="/guides">Guides</Link><Link href="/disclosure">Disclosure</Link><Link href="/privacy">Privacy</Link></div></footer>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span></nav>;
}
