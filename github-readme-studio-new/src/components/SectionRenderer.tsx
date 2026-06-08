import type { Section } from "../types/section";

import HeaderSection from "../sections/HeaderSection";
import StatsSection from "../sections/StatsSection";
import TechSection from "../sections/TechSection";
import SocialSection from "../sections/SocialSection";

export default function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "header":
      return <HeaderSection />;
    case "stats":
      return <StatsSection />;
    case "tech":
      return <TechSection />;
    case "social":
      return <SocialSection />;
    case "markdown":
      return <div>Custom Markdown</div>;
    default:
      return null;
  }
}

