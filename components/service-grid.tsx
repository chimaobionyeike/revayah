import { services } from "@/config/site";
import { ServiceCard } from "@/components/cards/service-card";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function ServiceGrid({ preview = false }: { preview?: boolean }) {
  const items = preview ? services.slice(0, 6) : services;

  return (
    <MotionSection className="bg-[#fbfaf7] py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Commercial services for digital health companies entering Nigeria."
          description="From a first strategy session to launch planning, outreach, intelligence, and local representation, REVAYAH helps teams move with confidence instead of guesswork."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
