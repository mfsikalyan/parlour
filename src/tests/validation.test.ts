import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validateBookingForm, validateContactForm } from "../lib/validation";

describe("Form Validation Suite", () => {
  it("should validate a complete booking request successfully", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    const dateStr = tomorrow.toISOString().split("T")[0];

    const result = validateBookingForm({
      serviceSlug: "bespoke-haircut-and-style",
      branchId: "indiranagar-flagship",
      date: dateStr,
      timeSlot: "11:00 AM",
      fullName: "Ananya Sharma",
      phone: "+91 98765 43210",
      email: "ananya@example.com",
      consent: true,
    });

    assert.equal(result.success, true);
    assert.deepEqual(result.errors, {});
  });

  it("should reject booking requests with missing required fields", () => {
    const result = validateBookingForm({
      serviceSlug: "",
      branchId: "",
      date: "",
      timeSlot: "",
      fullName: "A",
      phone: "123",
      consent: false,
    });

    assert.equal(result.success, false);
    assert.ok(result.errors.serviceSlug, "Must flag missing service");
    assert.ok(result.errors.branchId, "Must flag missing branch");
    assert.ok(result.errors.date, "Must flag missing date");
    assert.ok(result.errors.fullName, "Must flag short name");
    assert.ok(result.errors.phone, "Must flag invalid phone");
    assert.ok(result.errors.consent, "Must flag missing consent");
  });

  it("should validate contact inquiries correctly", () => {
    const valid = validateContactForm({
      fullName: "Rohan Malhotra",
      phone: "9876543210",
      email: "rohan@example.com",
      subject: "Appointment Inquiry",
      message: "Hello, I would like to book a group session for next Friday afternoon.",
    });

    assert.equal(valid.success, true);

    const invalid = validateContactForm({
      fullName: "",
      phone: "123",
      email: "not-an-email",
      subject: "",
      message: "Short",
    });

    assert.equal(invalid.success, false);
    assert.ok(invalid.errors.fullName);
    assert.ok(invalid.errors.email);
    assert.ok(invalid.errors.phone);
    assert.ok(invalid.errors.message);
  });
});
