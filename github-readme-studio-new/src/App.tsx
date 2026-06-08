import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import MarkdownOutput from "./components/MarkdownOutput";
import Preview from "./components/Preview";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Canvas />
      <MarkdownOutput />
      <Preview />
    </div>
  );
}

export default App;

