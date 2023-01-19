import Navbar from "./Components/Navbar/Navbar";
import Intro from "../src/Components/Navbar/intro/intro";
import "../src/App.css";
import { Parallax } from "react-parallax";
import Skills from "./Components/skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
