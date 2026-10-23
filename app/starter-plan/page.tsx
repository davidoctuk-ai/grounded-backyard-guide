import Link from "next/link";

const days = [
  ["Day 1", "Map the light", "Check the space in the morning, at midday and late afternoon. Mark the areas that receive six or more hours of direct sun."],
  ["Day 2", "Follow the water", "Notice where rain collects, where soil dries first and where a water butt or simple collection point could work."],
  ["Day 3", "Choose one useful crop", "Pick one food or herb your household uses often and that suits your light, season and available space."],
  ["Day 4", "Prepare the soil", "Loosen compacted ground or fill a container with a quality growing mix. Add finished compost if appropriate."],
  ["Day 5", "Plant small", "Sow or plant a manageable first batch. Follow the seed packet for depth, spacing and local timing."],
  ["Day 6", "Create a care cue", "Attach watering and observation to an existing habit, such as making your first drink in the morning."],
  ["Day 7", "Review and record", "Write down what changed, what you noticed and the single next improvement worth making."],
];

export default function StarterPlan() {
  return <main className="starter">
    <Link className="back" href="/">← Grounded Backyard</Link>
    <p className="eyebrow">Free starter plan</p><h1>Seven days to a more useful backyard.</h1>
    <p>Keep the first week deliberately small. The goal is not to transform everything—it is to build a repeatable habit of observing, choosing and improving.</p>
    <ol className="day-list">{days.map(([day,title,copy])=><li key={day}><strong>{day}</strong><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
    <h2>What to do next</h2><p>Repeat the cycle for a second crop or a simple water-saving project. Expand only after the first routine is easy to maintain.</p>
    <Link className="button button-primary" href="/#resources">Compare deeper resources →</Link>
  </main>;
}
