import type { Metadata } from "next";
import Link from "next/link";
import "../partner-pages.css";

export const metadata: Metadata = {
  title: "Garden project and growing offers",
  description: "Browse garden, growing and home-improvement partner offers from Grounded Backyard.",
};

const rustOleumAffiliateUrl =
  "/go/rustoleum.html";
const selfSufficientBackyardAffiliateUrl =
  "/go/garden-offer.html";
const medicinalGardenKitAffiliateUrl =
  "/go/backyard-offer.html";

export default function CurrentOffers() {
  return (
    <main className="partner-page offers-page">
      <Link className="back" href="/">← Grounded Backyard</Link>
      <section className="partner-hero">
        <p className="eyebrow">Verified garden partner</p>
        <h1>Refresh outdoor furniture and garden projects.</h1>
        <p className="partner-lede">Explore Rust-Oleum colours and finishes for planters, furniture and practical outdoor upgrades. Check product suitability and preparation instructions before you buy.</p>
        <a className="button button-primary" href={rustOleumAffiliateUrl} rel="sponsored nofollow noreferrer" target="_blank">Explore Rust-Oleum colours →</a>
        <p className="partner-fine">Affiliate disclosure: Grounded Backyard may earn a commission if you buy after following this link, at no extra cost to you. Prices, availability and product suitability are set by Rust-Oleum.</p>
      </section>
      <section className="expectation-grid" aria-label="Garden planning offers">
        <article>
          <span>01</span>
          <h2>Self-sufficient backyard guide</h2>
          <p>Review a paid garden-planning package covering food growing and practical backyard projects. Check exactly what is included before purchasing.</p>
          <a className="button button-secondary" href={selfSufficientBackyardAffiliateUrl} rel="sponsored nofollow noreferrer" target="_blank">Review the backyard guide →</a>
        </article>
        <article>
          <span>02</span>
          <h2>Medicinal garden seed kit</h2>
          <p>Explore a physical seed-kit offer for home gardeners. This is a gardening product, not medical advice; verify plant suitability, local rules and safe handling.</p>
          <a className="button button-secondary" href={medicinalGardenKitAffiliateUrl} rel="sponsored nofollow noreferrer" target="_blank">Review the seed kit →</a>
        </article>
        <article>
          <span>03</span>
          <h2>Compare before buying</h2>
          <p>Read the seller’s delivery, refund and privacy terms. Results vary by climate, space, experience and maintenance.</p>
        </article>
      </section>
      <section className="expectation-grid" aria-label="Before you continue">
        <article><span>01</span><h2>Check eligibility</h2><p>Age, country and other requirements are set by each independent advertiser.</p></article>
        <article><span>02</span><h2>Protect your details</h2><p>Read the advertiser’s privacy notice before submitting an email address or other information.</p></article>
        <article><span>03</span><h2>Use accurate information</h2><p>Duplicate, false or incomplete registrations are normally ineligible and may be rejected.</p></article>
      </section>
      <aside className="partner-notice"><strong>Affiliate disclosure:</strong> Grounded Backyard may earn a commission from qualifying purchases through the links on this page, at no extra cost to you. Rust-Oleum is tracked through Awin; the two garden offers are tracked through Digistore24. Our free planning guides do not require contact details.</aside>
    </main>
  );
}
