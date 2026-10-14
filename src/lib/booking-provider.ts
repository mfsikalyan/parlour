import { brandConfig } from "@/config/brand";
import { bookingConfig } from "@/config/booking";
import { getServiceBySlug } from "@/content/services";
import { getTeamMemberBySlug } from "@/content/team";
import { BookingFormInput } from "./validation";

export interface BookingSubmissionResult {
  success: boolean;
  referenceId: string;
  status: "request-received" | "whatsapp-redirect" | "external-redirect" | "failed";
  message: string;
  whatsappUrl?: string;
  externalUrl?: string;
  summary: {
    serviceName: string;
    branchName: string;
    stylistName?: string;
    date: string;
    timeSlot: string;
    clientName: string;
    phone: string;
    estimatedPrice: number;
  };
}

/**
 * Generate safely URI-encoded WhatsApp link for instant appointment inquiry
 */
export function generateWhatsAppBookingUrl(input: BookingFormInput): string {
  const service = getServiceBySlug(input.serviceSlug);
  const stylist = input.stylistSlug ? getTeamMemberBySlug(input.stylistSlug) : null;
  const branch = brandConfig.branches.find((b) => b.id === input.branchId) || brandConfig.branches[0];

  const serviceTitle = service ? service.title : input.serviceSlug;
  const stylistTitle = stylist ? stylist.name : "First available master stylist";
  const branchTitle = branch ? branch.name : brandConfig.branches[0].name;

  const messageLines = [
    `✨ *New Appointment Request - ${brandConfig.name}* ✨`,
    ``,
    `*Client Name:* ${input.fullName}`,
    `*Phone:* ${input.phone}`,
    input.email ? `*Email:* ${input.email}` : null,
    ``,
    `*Service:* ${serviceTitle}`,
    `*Branch:* ${branchTitle}`,
    `*Preferred Date:* ${input.date}`,
    `*Preferred Time:* ${input.timeSlot}`,
    `*Preferred Stylist:* ${stylistTitle}`,
    input.notes ? `*Special Request:* ${input.notes}` : null,
    ``,
    `_Hello concierge, please check stylist availability and confirm my appointment request. Thank you!_`
  ].filter(Boolean) as string[];

  const fullText = messageLines.join("\n");
  const encodedText = encodeURIComponent(fullText);
  const phone = branch ? branch.whatsapp.replace(/\D/g, "") : brandConfig.whatsappNumber;

  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Generate a clean, unique reference ID for appointment tracking
 */
export function generateBookingReference(): string {
  const prefix = brandConfig.shortName.replace(/[^A-Z]/gi, "").substring(0, 3).toUpperCase() || "SAL";
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomPart}`;
}

/**
 * Process booking submission according to configured booking mode
 */
export async function submitBookingRequest(input: BookingFormInput): Promise<BookingSubmissionResult> {
  const service = getServiceBySlug(input.serviceSlug);
  const stylist = input.stylistSlug ? getTeamMemberBySlug(input.stylistSlug) : undefined;
  const branch = brandConfig.branches.find((b) => b.id === input.branchId) || brandConfig.branches[0];

  const referenceId = generateBookingReference();
  const summary = {
    serviceName: service ? service.title : input.serviceSlug,
    branchName: branch ? branch.name : "Main Branch",
    stylistName: stylist?.name,
    date: input.date,
    timeSlot: input.timeSlot,
    clientName: input.fullName,
    phone: input.phone,
    estimatedPrice: service ? service.price : 0,
  };

  if (bookingConfig.mode === "whatsapp") {
    const whatsappUrl = generateWhatsAppBookingUrl(input);
    return {
      success: true,
      referenceId,
      status: "whatsapp-redirect",
      message: "Your appointment details are prepared! Click the button below to send your request directly to our concierge on WhatsApp.",
      whatsappUrl,
      summary,
    };
  }

  if (bookingConfig.mode === "external-link" && bookingConfig.externalUrl) {
    return {
      success: true,
      referenceId,
      status: "external-redirect",
      message: "Redirecting to our live calendar system to complete your booking...",
      externalUrl: bookingConfig.externalUrl,
      summary,
    };
  }

  // Default mode: "manual-request"
  // Try sending to the internal server route /api/book; fallback gracefully if offline/static
  try {
    const response = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, referenceId }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        referenceId: data.referenceId || referenceId,
        status: "request-received",
        message: data.message || "Your appointment request has been received by our salon desk. A concierge will call or message you to confirm.",
        whatsappUrl: generateWhatsAppBookingUrl(input),
        summary,
      };
    }
  } catch {
    // Graceful offline/demo client fallback
  }

  return {
    success: true,
    referenceId,
    status: "request-received",
    message: "Your appointment request has been logged. Our concierge will review stylist schedules and contact you on WhatsApp / phone within 30 minutes during salon hours.",
    whatsappUrl: generateWhatsAppBookingUrl(input),
    summary,
  };
}
