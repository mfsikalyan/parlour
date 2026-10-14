import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";
import { brandConfig } from "@/config/brand";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = validateContactForm(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          message: "Please correct the form errors.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${body.fullName}! Your message has been received by the ${brandConfig.shortName} concierge. We will reply to your contact details promptly.`,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}
