import Sidebar from "./sidebar/src/Sidebar/Sidebar";
import Canvas from "./components/src/components/Canvas";
import MarkdownOutput from "./components/MarkdownOutput.tsx";
import Preview from "./components/Preview.tsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Canvas />
      <MarkdownOutput />
      <Preview />
    </div>
  );
}

export default App;


