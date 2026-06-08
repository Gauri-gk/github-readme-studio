import type { Section } from "../types/section";

function getString(data: Record<string, unknown>, key: string, fallback = "") {
  const v = data?.[key];
  return typeof v === "string" ? v : fallback;
}

export function generateMarkdown(sections: Section[]) {
  let markdown = "";

  for (const section of sections) {
    switch (section.type) {
      case "header": {
        const name = getString(section.data, "name", "Your Name");
        const title = getString(section.data, "title", "Developer");
        const tagline = getString(section.data, "tagline", "");

        markdown += `# ${name}\n`;
        if (title) markdown += `${title}\n`;
        if (tagline) markdown += `${tagline}\n`;
        markdown += "\n";
        break;
      }

      case "stats": {
        const username = getString(section.data, "username", "");
        const theme = getString(section.data, "theme", "transparent");
        const showIcons = Boolean(section.data.showIcons);
        if (!username) break;

        markdown += `## Stats\n\n`;
        markdown += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(
          username
        )}&show_icons=${showIcons ? "true" : "false"}&theme=${encodeURIComponent(
          theme
        )})\n\n`;
        break;
      }

      case "tech": {
        const technologies = Array.isArray(section.data.technologies)
          ? (section.data.technologies.filter((t) => typeof t === "string") as string[])
          : [];

        if (technologies.length === 0) break;

        markdown += `## Tech Stack\n\n`;
        markdown += technologies.map((t) => `- ${t}`).join("\n");
        markdown += "\n\n";
        break;
      }

      case "social": {
        const links = Array.isArray(section.data.links)
          ? section.data.links
              .filter(Boolean)
              .map((l) => l as { label?: unknown; url?: unknown })
          : [];


        if (links.length === 0) break;

        markdown += `## Social\n\n`;
        for (const l of links) {
          const label = typeof l?.label === "string" ? l.label : "Link";
          const url = typeof l?.url === "string" ? l.url : "";
          if (!url) continue;
          markdown += `- [${label}](${url})\n`;
        }
        markdown += "\n";
        break;
      }

      case "markdown": {
        const raw = getString(section.data, "markdown", "");
        if (!raw) break;
        markdown += `${raw}\n\n`;
        break;
      }

      default:
        break;
    }
  }

  return markdown.trim() + "\n";
}

