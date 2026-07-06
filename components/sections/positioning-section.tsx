import { Check, Minus } from "lucide-react";
import { MotionSection } from "@/components/common/motion-section";
import { SectionHeading } from "@/components/common/section-heading";

export function PositioningSection() {
  return (
    <MotionSection className="container py-24 md:py-32">
      <div className="site-grid items-start">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeading
            eyebrow="Who we are"
            title="A local commercial partner for serious healthcare expansion."
            description="REVAYAH helps international healthcare companies build credible, lasting market presence in Nigeria through relationships, representation, and practical commercial execution."
          />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="grid gap-4">
            {[
              "Strategic healthcare partnerships",
              "Hospital and decision-maker relationships",
              "Commercial relationship development",
              "Qualified opportunity generation",
              "Sustainable market presence"
            ].map((item) => (
              <div key={item} className="flex gap-4 rounded-[18px] border border-emerald/10 bg-white p-5">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-emerald" />
                <p className="text-lg font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[18px] border border-emerald/10 bg-emerald p-7 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/70">
              Clear operating model
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["No manufacturing", "No inventory", "No importation", "Not a consultancy"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-white/88">
                    <Minus aria-hidden="true" className="h-4 w-4 text-champagne" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
