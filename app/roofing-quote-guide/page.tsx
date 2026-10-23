import type { Metadata } from "next";
import Link from "next/link";
import "../partner-pages.css";
import "./roofing.css";

const homeBuddyRoofingPage =
  "https://www.homebuddy.com/roofing/vdefault?_stsgnoredir=1&_configname=landing_page_rf";

export const metadata: Metadata = {
  title: "Planning a roof replacement",
  description:
    "A practical checklist for US homeowners preparing to request a free roofing quote.",
  robots: { index: false, follow: false },
};

export default function RoofingQuoteGuide() {
  return (
    <main className="partner-page roofing-page">
      <Link className="back" href="/">← Grounded Backyard</Link>
      <section className="partner-hero roofing-hero">
        <p className="eyebrow">Practical guide for US homeowners</p>
        <h1>Planning a roof replacement?</h1>
        <p className="partner-lede">
          Get the details of your project in order before requesting a free
          roofing quote from a participating contractor.
        </p>
        <a
          className="button button-primary"
          href={homeBuddyRoofingPage}
          rel="sponsored nofollow noopener"
          target="_blank"
        >
          Request a free roofing quote ↗
        </a>
        <p className="partner-fine">
          HomeBuddy is a matching service, not a contractor. Availability and
          service area vary. Completing the form does not guarantee a match,
          quote, price or completed project.
        </p>
      </section>
      <section className="roofing-checklist" aria-labelledby="roofing-checklist-title">
        <div className="roofing-intro">
          <p className="eyebrow">Before requesting a quote</p>
          <h2 id="roofing-checklist-title">Prepare these three details.</h2>
        </div>
        <div className="expectation-grid">
          <article><span>01</span><h3>Roof material</h3><p>Note whether the roof uses asphalt shingles, tile, metal or another material.</p></article>
          <article><span>02</span><h3>Visible concerns</h3><p>Record leaks, missing materials or other observations without attempting unsafe roof access.</p></article>
          <article><span>03</span><h3>Project location</h3><p>Have the property ZIP code ready so service availability can be checked.</p></article>
        </div>
      </section>
      <aside className="partner-notice">
        <strong>Affiliate notice:</strong> Grounded Backyard may earn a
        commission if you submit a qualifying enquiry. This does not increase
        your price. Read the provider’s privacy notice before sharing personal
        information.
      </aside>
    </main>
  );
}
