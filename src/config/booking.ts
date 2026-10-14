/**
 * Booking System Configuration
 * =====================================================================
 * Controls appointment request parameters, validation rules, available
 * timeslots, advance notice windows, and transparent confirmation copy.
 * =====================================================================
 */

export interface BookingConfig {
  mode: "manual-request" | "whatsapp" | "external-link";
  externalUrl?: string;
  
  // Advance booking rules
  minNoticeHours: number; // e.g. 2 hours before slot
  maxAdvanceDays: number; // e.g. 30 days ahead
  slotIntervalMinutes: number; // 30 mins
  
  // Daily time slots available for request
  timeSlots: string[];
  
  // Policies and transparent disclaimers
  cancellationNoticeHours: number;
  confirmationNotice: string;
  depositRequired: boolean;
  depositAmount?: number;
  
  // Required fields
  requireEmail: boolean;
  requireStylistSelection: boolean;
  requireBranchSelection: boolean;
}

export const bookingConfig: BookingConfig = {
  mode: "manual-request",
  externalUrl: "",
  
  minNoticeHours: 3,
  maxAdvanceDays: 30,
  slotIntervalMinutes: 30,
  
  timeSlots: [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM"
  ],

  cancellationNoticeHours: 4,
  confirmationNotice: "Note: Submitting this form creates an Appointment Request. Our concierge will review stylist availability and confirm your exact slot via WhatsApp / SMS within 30 minutes during working hours.",
  depositRequired: false,

  requireEmail: false,
  requireStylistSelection: false,
  requireBranchSelection: true,
};
