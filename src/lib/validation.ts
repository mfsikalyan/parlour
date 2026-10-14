export interface BookingFormInput {
  serviceSlug: string;
  stylistSlug?: string;
  branchId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email?: string;
  notes?: string;
  consent: boolean;
}

export interface ContactFormInput {
  fullName: string;
  phone: string;
  email: string;
  branchId?: string;
  subject: string;
  message: string;
}

export interface ValidationResult<T> {
  success: boolean;
  errors: Partial<Record<keyof T, string>>;
}

export function validateBookingForm(data: Partial<BookingFormInput>): ValidationResult<BookingFormInput> {
  const errors: Partial<Record<keyof BookingFormInput, string>> = {};

  if (!data.serviceSlug || data.serviceSlug.trim() === "") {
    errors.serviceSlug = "Please select a service";
  }

  if (!data.branchId || data.branchId.trim() === "") {
    errors.branchId = "Please select a preferred salon branch";
  }

  if (!data.date || data.date.trim() === "") {
    errors.date = "Please choose an appointment date";
  } else {
    const selected = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selected.getTime()) || selected < today) {
      errors.date = "Please select a date from today onwards";
    }
  }

  if (!data.timeSlot || data.timeSlot.trim() === "") {
    errors.timeSlot = "Please select a preferred time slot";
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 letters)";
  }

  // Clean phone number (strip whitespace, hyphens)
  const cleanPhone = (data.phone || "").replace(/[\s-()+]/g, "");
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = "Please enter a valid phone number (at least 10 digits)";
  }

  if (data.email && data.email.trim() !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  if (!data.consent) {
    errors.consent = "Please agree to salon appointment policies to proceed";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(data: Partial<ContactFormInput>): ValidationResult<ContactFormInput> {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name";
  }

  const cleanPhone = (data.phone || "").replace(/[\s-()+]/g, "");
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = "Please enter a subject";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please write a message with at least 10 characters";
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}
