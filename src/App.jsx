import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Tickets from "./pages/Tickets";

function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#6b21a8" }}>
        Welcome to The Kingdom Prize Co.
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Join exciting competitions and win amazing prizes! Buy your tickets below and get ready for the thrill.
      </p>
      <a 
        href="/tickets" 
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#6b21a8",
          color: "white",
          fontWeight: "bold",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem"
        }}
      >
        Buy Tickets
      </a>

      <section style={{ marginTop: "3rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#4b0082" }}>How It Works</h2>
        <p style={{ marginBottom: "1rem" }}>
          1. Buy your ticket online. <br/>
          2. Wait for the competition draw. <br/>
          3. Check if you’re a winner! It’s that simple.
        </p>

        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#4b0082" }}>Why Join?</h2>
        <p>
          Exciting prizes, simple rules, and a fair draw. You could be our next big winner!
        </p>
      </section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;

