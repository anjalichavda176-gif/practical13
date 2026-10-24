import hashrouterdemo from "./components/hashrouterdemo";
import memoryrouterdemo from "./components/memoryrouterdemo";
import StaticRouterDemo from "./components/staticrouterdemo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React Router Types</h1>

      <hashrouterdemo/>
      <memoryrouterdemo/>
      <StaticRouterDemo/>
    </div>
  );
}

export default App;
