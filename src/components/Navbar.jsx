export default function Navbar() {
  return (
    <nav style={{
      padding: "1rem",
      background: "#111",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "1.5rem" }}>The Kingdom Prize Co.</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="/" style={{ color: "white" }}>Home</a>
        <a href="/tickets" style={{ color: "white" }}>Tickets</a>
        <a href="/about" style={{ color: "white" }}>About</a>
      </div>
    </nav>
  );
}
