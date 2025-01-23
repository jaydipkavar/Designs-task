import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import Section1 from "./components/Section1";
import ScrollDemo from "./components/ScrollDemo";

function App() {
  return (
    <div className="App">
      <Section1 />
      <ScrollDemo />
      <Blog />
    </div>
  );
}

export default App;
