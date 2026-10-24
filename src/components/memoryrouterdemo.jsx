import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h3>Welcome to Memory Home Page</h3>;
}

function About() {
  return <h3>This is Memory About Page</h3>;
}

export default function MemoryRouterDemo() {
  return (
    <div className="router-box">
      <h2>MemoryRouter Demo</h2>
      <p>MemoryRouter stores navigation history in memory.</p>

      <MemoryRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

