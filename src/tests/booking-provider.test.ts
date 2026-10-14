import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  generateWhatsAppBookingUrl,
  generateBookingReference,
} from "../lib/booking-provider";

describe("Booking Provider & WhatsApp Deep Links", () => {
  it("should generate unique, alphanumeric booking references", () => {
    const ref1 = generateBookingReference();
    const ref2 = generateBookingReference();

    assert.notEqual(ref1, ref2);
    assert.match(ref1, /^[A-Z]{3}-\d{6}$/);
  });

  it("should build safe, URI-encoded WhatsApp links with client and service details", () => {
    const url = generateWhatsAppBookingUrl({
      serviceSlug: "bespoke-haircut-and-style",
      branchId: "indiranagar-flagship",
      date: "2026-10-15",
      timeSlot: "02:30 PM",
      fullName: "Pooja Hegde",
      phone: "+91 98765 00000",
      notes: "First time haircut, looking for curtain bangs",
      consent: true,
    });

    assert.ok(url.startsWith("https://wa.me/"), "Must be a wa.me URL");
    assert.ok(url.includes("text="), "Must contain encoded text parameter");

    // Decode message and verify contents
    const textParam = url.split("text=")[1];
    const decoded = decodeURIComponent(textParam);

    assert.ok(decoded.includes("Pooja Hegde"), "Decoded message must contain client name");
    assert.ok(decoded.includes("Bespoke Precision Haircut"), "Decoded message must contain service name");
    assert.ok(decoded.includes("2026-10-15"), "Decoded message must contain date");
    assert.ok(decoded.includes("02:30 PM"), "Decoded message must contain slot");
    assert.ok(decoded.includes("curtain bangs"), "Decoded message must include special notes");
  });
});
