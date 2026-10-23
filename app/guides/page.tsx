import type { Metadata } from "next";
import Link from "next/link";
import { GuideFooter, GuideHeader } from "../guide-shell";

export const metadata: Metadata = { title: "Practical garden and home guides", description: "Free, step-by-step guides for small-space vegetables, rainwater planning and comparing home-project quotes.", alternates: { canonical: "/guides" } };

const guides = [
  ["/guides/small-space-vegetable-garden-plan", "Grow food", "Small-space vegetable garden plan", "A realistic one-hour planning method for balconies, patios and compact backyards.", "8 min read"],
  ["/guides/rain-barrel-sizing-guide", "Use water wisely", "Rain-barrel sizing guide", "Estimate how much rain your roof can collect and choose useful storage without guesswork.", "7 min read"],
  ["/guides/home-project-quote-checklist", "Plan a project", "Home-project quote checklist", "Define the same scope for every provider, then compare inclusions, timing and total cost.", "9 min read"],
];

export default function GuidesPage() {
  return <main><GuideHeader /><section className="guide-index-hero"><p className="eyebrow">Free field guides</p><h1>Make the next practical decision with less guesswork.</h1><p>Each guide gives you a usable method, a worked example and the limits you should check before spending money or sharing contact details.</p></section><section className="guide-index-grid" aria-label="Available guides">{guides.map(([href,label,title,copy,time], index) => <article key={href}><span className="guide-number">0{index + 1}</span><p className="card-label">{label}</p><h2>{title}</h2><p>{copy}</p><div><span>{time}</span><Link href={href}>Read the guide →</Link></div></article>)}</section><section className="guide-method"><p className="eyebrow">Our standard</p><h2>Specific enough to use. Honest about what varies.</h2><p>We favour measurements, checklists and primary sources. Climate, local rules, property condition and provider eligibility can change the right answer, so every guide identifies the checks that still belong to you.</p><Link className="text-link" href="/about">How we research and fund the site →</Link></section><GuideFooter /></main>;
}
