import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Kingdom Prize Ticket",
            },
            unit_amount: 1000, // $10 per ticket
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.PUBLIC_DOMAIN}/tickets?success=true`,
      cancel_url: `${process.env.PUBLIC_DOMAIN}/tickets?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
