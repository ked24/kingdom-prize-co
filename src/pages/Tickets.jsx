import React from "react";

export default function Tickets() {

  const handleBuyTicket = async () => {
    // Replace with your real checkout endpoint later
    alert("Stripe test checkout would open here!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Buy Tickets</h1>
      <p>Test checkout using Stripe sandbox.</p>
      <button 
        onClick={handleBuyTicket} 
        style={{
          marginTop: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "#6b21a8",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Buy Ticket
      </button>
    </div>
  );
}
