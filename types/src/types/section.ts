export type SectionType =
  | "header"
  | "stats"
  | "tech"
  | "social"
  | "markdown";

export interface Section {
  id: string;
  type: SectionType;
  data: Record<string, unknown>;
}

