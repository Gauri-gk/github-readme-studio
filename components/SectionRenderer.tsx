import HeaderSection from "../sections/HeaderSection.tsx";

export default function SectionRenderer({

  section,
}: {
  section: { type: string };
}) {
  switch (section.type) {
    case "header":
      return <HeaderSection />;
    case "stats":
      return <div>Stats Section</div>;
    case "tech":
      return <div>Tech Stack Section</div>;
    case "social":
      return <div>Social Section</div>;
    default:
      return null;
  }
}


