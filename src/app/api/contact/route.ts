import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/emailjs";
import type { ContactFormData } from "@/types";

const SERVICE_ID =
  process.env.EMAILJS_SERVICE_ID ?? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID =
  process.env.EMAILJS_TEMPLATE_ID ?? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY =
  process.env.EMAILJS_PUBLIC_KEY ?? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

export async function POST(request: Request) {
  let data: ContactFormData;

  try {
    data = (await request.json()) as ContactFormData;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateContactForm(data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  const payload: Record<string, unknown> = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      reply_to: data.email.trim(),
      subject: data.subject.trim(),
      message: data.message.trim(),
    },
  };

  if (PRIVATE_KEY) {
    payload.accessToken = PRIVATE_KEY;
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        { error: text || `Email service error (${response.status})` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: text });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach the email service. Please try again later." },
      { status: 502 }
    );
  }
}
