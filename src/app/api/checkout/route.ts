import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, plan } = await req.json();
    if (!email || !plan) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    // Lazy init Stripe only at runtime (avoids build-time crash)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Stripe = require("stripe");
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-04-22.dahlia",
    });

    const priceId = plan === "yearly"
      ? "price_1TYihdCKnj1EEGKeBOe83GyH"
      : "price_1TYih5CKnj1EEGKeHYN71wG8";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/subscribe`,
      metadata: { plan },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
