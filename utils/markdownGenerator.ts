export function generateMarkdown(sections: Array<{ type: string }>) {
  let markdown = "";

  sections.forEach((section) => {
    if (section.type === "header") {
      markdown += "# Your Name\n";
      markdown += "Developer\n\n";
    }
  });

  return markdown;
}

