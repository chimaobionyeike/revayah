import { ArrowDown } from "lucide-react";
import { processSteps } from "@/config/site";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function ProcessSection() {
  return (
    <MotionSection className="bg-emerald py-24 text-white md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="A disciplined path from market interest to durable growth."
          description="We align with international healthcare companies before introducing the market, then build the relationships and commercial motion required for confidence."
          className="[&_.eyebrow]:text-champagne [&_h2]:text-white [&_p]:text-white/72"
        />
        <ol className="mt-14 grid gap-4 lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <li key={step} className="relative">
              <div className="min-h-36 rounded-[18px] border border-white/12 bg-white/[0.06] p-5">
                <span className="text-sm font-semibold text-champagne">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-8 text-lg font-semibold leading-tight text-white">{step}</p>
              </div>
              {index < processSteps.length - 1 ? (
                <ArrowDown
                  aria-hidden="true"
                  className="mx-auto my-3 h-5 w-5 text-champagne lg:absolute lg:-right-3 lg:top-14 lg:mx-0 lg:my-0 lg:-rotate-90"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  );
}
