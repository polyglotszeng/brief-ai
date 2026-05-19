import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: Stripe } = require("stripe");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as { customer_email: string; metadata: { plan: string } };
      const email = session.customer_email;
      const plan = session.metadata?.plan;
      const id = `sub_${Date.now()}`;
      db.prepare(
        "INSERT OR REPLACE INTO subscribers (id, email, stripe_session_id, plan, status, created_at) VALUES (?, ?, ?, ?, 'active', unixepoch())"
      ).run(id, email, "", plan);
      break;
    }
    case "customer.subscription.deleted": {
      // Handle cancellation
      break;
    }
  }

  return NextResponse.json({ received: true });
}
