import { Landmark, ShieldCheck, Users } from "lucide-react";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

const reasons = [
  {
    title: "Executive credibility",
    description:
      "We communicate with healthcare leaders, manufacturers, investors, and institutions with the discipline expected in serious commercial conversations.",
    icon: Landmark
  },
  {
    title: "Local ecosystem fluency",
    description:
      "We understand the relationship, procurement, and stakeholder realities that shape healthcare market access in Nigeria.",
    icon: Users
  },
  {
    title: "Partner-first operating model",
    description:
      "We represent long-term commercial interests with clarity. No inventory conflict, no distributor ambiguity, no consultancy posture.",
    icon: ShieldCheck
  }
];

export function WhyRevayah() {
  return (
    <MotionSection className="bg-[#fbfaf7] py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why Revayah"
          title="Quiet confidence for high-stakes healthcare expansion."
          description="International healthcare companies need more than introductions. They need a partner who can protect credibility while building market momentum."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="premium-panel rounded-[18px] p-8 transition duration-300 hover:-translate-y-1 hover:border-champagne/35">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/25 bg-white text-emerald">
                  <Icon aria-hidden="true" className="h-6 w-6 stroke-[1.5]" />
                </div>
                <div className="mt-12 h-px w-14 bg-champagne/60" />
                <h3 className="mt-6 text-2xl font-semibold">{reason.title}</h3>
                <p className="mt-4 leading-7 text-muted">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
