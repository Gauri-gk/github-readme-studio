import { useBuilderStore } from "../store/src/store/useBuilderStore";
import { generateMarkdown } from "../utils/markdownGenerator";

export default function MarkdownOutput() {
  const sections = useBuilderStore((state) => state.sections);
  const markdown = generateMarkdown(sections);

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = markdown;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        borderLeft: "1px solid gray",
        padding: "20px",
        overflow: "auto",
        height: "100%",
      }}
    >
      <h2>Markdown</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={copyMarkdown}>Copy Markdown</button>
      </div>
      <textarea value={markdown} readOnly rows={20} style={{ width: "100%" }} />
    </div>
  );
}

