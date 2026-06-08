import ReactMarkdown from "react-markdown";

import { useBuilderStore } from "../store/useBuilderStore";
import { generateMarkdown } from "../utils/markdownGenerator";

export default function Preview() {
  const sections = useBuilderStore((s) => s.sections);
  const markdown = generateMarkdown(sections);

  return (
    <div
      style={{
        width: "450px",
        borderLeft: "1px solid gray",
        padding: "20px",
        overflow: "auto",
        height: "100%",
      }}
    >
      <h2>Preview</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

