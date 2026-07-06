import Image from "next/image";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function NigeriaSection() {
  return (
    <MotionSection className="container py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative min-h-[440px] overflow-hidden rounded-[20px]">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=82"
            alt="Executive healthcare partnership meeting in a modern conference room"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Why Nigeria"
            title="A major healthcare market where relationships matter."
            description="Nigeria offers meaningful long-term potential for healthcare companies, but entry requires local judgment, institutional trust, and a clear understanding of how healthcare decisions are made."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              "Large and evolving healthcare demand",
              "Growing private healthcare investment",
              "Complex institutional buying journeys",
              "Strong need for credible local representation"
            ].map((item) => (
              <p key={item} className="border-t border-emerald/12 pt-5 text-lg font-medium leading-7">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
