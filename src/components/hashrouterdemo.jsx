import { HashRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h3>Welcome to Home Page</h3>;
}

function About() {
  return <h3>This is About Page</h3>;
}

export default function HashRouterDemo() {
  return (
    <div className="router-box">
      <h2>HashRouter Demo</h2>
      <p>HashRouter uses # in the URL.</p>

      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}