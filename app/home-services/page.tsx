import type { Metadata } from "next";
import Link from "next/link";
import "../partner-pages.css";

export const metadata: Metadata = {
  title: "Home project quote options",
  description: "Explore current third-party quote options for eligible US home projects.",
};

export default function HomeServices() {
  return (
    <main className="partner-page">
      <Link className="back" href="/">← Grounded Backyard</Link>
      <section className="partner-hero">
        <p className="eyebrow">For US homeowners</p>
        <h1>Explore home project quote options.</h1>
        <p className="partner-lede">Prepare before requesting a quote. Compare scope, materials, timelines, insurance and warranties using our independent homeowner checklist.</p>
        <Link className="button button-primary" href="/guides/home-project-quote-checklist">Open the free quote checklist →</Link>
        <p className="partner-fine">We are reviewing partner programmes and will only publish a commercial link when its destination, eligibility rules and tracking status have been verified.</p>
      </section>
      <section className="expectation-grid" aria-label="What to expect">
        <article><span>01</span><h2>Choose a relevant project</h2><p>The partner page shows services that may currently be available for your location.</p></article>
        <article><span>02</span><h2>Review the terms</h2><p>Read the provider’s privacy notice and eligibility details before entering contact information.</p></article>
        <article><span>03</span><h2>Decide without pressure</h2><p>A request is not a guarantee of a quote, match, saving or completed service.</p></article>
      </section>
      <aside className="partner-notice"><strong>Current status:</strong> No third-party quote link is active on this page. The checklist is free and does not require contact details.</aside>
    </main>
  );
}
