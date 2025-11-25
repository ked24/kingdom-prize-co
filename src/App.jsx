import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 style={{ padding: "1rem" }}>Welcome to The Kingdom Prize Co.</h2>} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
