import { useBuilderStore } from "../../../store/src/store/useBuilderStore";

import { v4 as uuid } from "uuid";

import type { SectionType } from "../../../src/components/types/section";


export default function Sidebar() {

  const addSection =
    useBuilderStore(
      (state) => state.addSection
    );

  const add = (type: SectionType) => {

    addSection({
      id: uuid(),
      type,
      data: {},
    });

  };


  return (

    <div
      style={{
        width: "250px",
        padding: "20px",
        borderRight:
          "1px solid gray",
      }}
    >

      <h2>Sections</h2>

      <button
        onClick={() =>
          add("header")
        }
      >
        Header
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          add("stats")
        }
      >
        Stats
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          add("tech")
        }
      >
        Tech Stack
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          add("social")
        }
      >
        Social
      </button>

    </div>

  );
}