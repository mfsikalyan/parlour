import { NextResponse } from "next/server";
import { validateBookingForm } from "@/lib/validation";
import { brandConfig } from "@/config/brand";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = validateBookingForm(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          message: "Please correct the highlighted form errors.",
        },
        { status: 400 }
      );
    }

    const referenceId = body.referenceId || `REQ-${Math.floor(100000 + Math.random() * 900000)}`;

    // In a production environment with an integrated calendar or SMS/WhatsApp gateway,
    // you would trigger the respective webhooks or CRM API here.
    return NextResponse.json({
      success: true,
      referenceId,
      message: `Your appointment request has been logged at ${brandConfig.shortName}. A concierge will review floor availability and confirm your exact slot via WhatsApp / SMS within 30 minutes.`,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while logging your appointment request.",
      },
      { status: 500 }
    );
  }
}
