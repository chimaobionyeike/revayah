import Image from "next/image";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function NigeriaSection() {
  return (
    <MotionSection className="container py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative min-h-[440px] overflow-hidden rounded-[20px] shadow-[0_28px_90px_rgba(33,26,23,0.12)]">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82"
            alt="Contemporary institutional architecture representing long-term market presence"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate/24 to-transparent" />
        </div>
        <div>
          <SectionHeading
            eyebrow="Why Nigeria"
            title="A major digital health market where relationships matter."
            description="Nigeria is one of Africa's largest healthcare markets, with digital health demand shaped by physician shortages, capacity constraints, private-sector growth, and the need for technologies that extend clinical reach."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              "Large and evolving healthcare demand",
              "Shortage of physicians relative to population",
              "Growing private healthcare investment",
              "Complex technology adoption journeys"
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
