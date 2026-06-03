import { create } from "zustand";

import type { Section } from "../../../types/src/types/section";


interface Store {
  sections: Section[];

  setSections: (sections: Section[]) => void;

  addSection: (section: Section) => void;

  removeSection: (id: string) => void;
}

const STORAGE_KEY = "github-readme-studio:draft";

function safeLoadSections(): Section[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Section[];
  } catch {
    return [];
  }
}

export const useBuilderStore = create<Store>((set) => {
  const initialSections = safeLoadSections();

  return {
    sections: initialSections,

    setSections: (sections: Section[]) => {
      set({ sections });
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
      }
    },

    addSection: (section: Section) =>
      set((state) => {
        const next = [...state.sections, section];
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        return { sections: next };
      }),

    removeSection: (id: string) =>
      set((state) => {
        const next = state.sections.filter((s) => s.id !== id);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        return { sections: next };
      }),
  };
});
