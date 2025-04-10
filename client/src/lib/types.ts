// Waitlist form types
export interface WaitlistFormData {
  name: string;
  email: string;
  specialty: string;
  hospital: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
}

// Newsletter form types
export interface NewsletterFormData {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}
