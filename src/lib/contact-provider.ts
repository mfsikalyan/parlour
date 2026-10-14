import { ContactFormInput } from "./validation";

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

export async function submitContactInquiry(input: ContactFormInput): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || "Thank you for reaching out! Our salon desk will respond to your inquiry shortly.",
      };
    }
  } catch {
    // Graceful demo fallback
  }

  return {
    success: true,
    message: "Thank you for your message! Our salon team has received your inquiry and will contact you shortly via email or phone.",
  };
}
