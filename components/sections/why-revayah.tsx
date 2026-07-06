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
    <MotionSection className="bg-white py-24 md:py-32">
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
              <article key={reason.title} className="rounded-[18px] border border-emerald/10 bg-background p-8">
                <Icon aria-hidden="true" className="h-7 w-7 stroke-[1.5] text-emerald" />
                <h3 className="mt-12 text-2xl font-semibold">{reason.title}</h3>
                <p className="mt-4 leading-7 text-muted">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
