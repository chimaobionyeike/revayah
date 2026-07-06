"use server";

import { integrations } from "@/config/integrations";

export async function submitPartnershipEnquiry() {
  void integrations;
  return {
    ok: true,
    message:
      "Contact submissions currently use mailto. This action is reserved for future Resend, HubSpot, or CRM enablement."
  };
}
