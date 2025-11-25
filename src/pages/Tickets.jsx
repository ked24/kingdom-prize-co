import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Tickets() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const handleBuyTicket = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await response.json();
      window.location.href = data.url; // redirect to Stripe checkout
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check console.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Buy Tickets</h1>

      {success && (
        <div style={{ margin: "1rem 0", color: "green", fontWeight: "bold" }}>
          🎉 Payment successful! Your ticket has been purchased.
        </div>
      )}

      {canceled && (
        <div style={{ margin: "1rem 0", color: "red", fontWeight: "bold" }}>
          ❌ Payment canceled. Try again if you want a ticket.
        </div>
      )}

      <p>Each ticket gives you a chance to win amazing prizes!</p>

      <button 
        onClick={handleBuyTicket} 
        style={{
          marginTop: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "#6b21a8",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1.1rem"
        }}
      >
        Buy Ticket
      </button>
    </div>
  );
}


