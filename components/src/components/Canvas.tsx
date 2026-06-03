import { useBuilderStore } from "../../../store/src/store/useBuilderStore";

import SectionRenderer from "../../SectionRenderer";

export default function Canvas() {
  const sections = useBuilderStore((state) => state.sections);

  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
      }}
    >
      <h2>Canvas</h2>

      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <SectionRenderer section={section} />
        </div>
      ))}
    </div>
  );
}

