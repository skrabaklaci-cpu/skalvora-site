import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: Replace console logging with real transactional email or CRM integration.
    // Example options: Resend, SendGrid, HubSpot, Salesforce.
    console.info("[Contact Form Submission]", {
      name: body.name,
      email: body.email,
      company: body.company,
      interest: body.interest,
      message: body.message,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);

    return NextResponse.json(
      { success: false, message: "Unable to process request." },
      { status: 500 }
    );
  }
}
