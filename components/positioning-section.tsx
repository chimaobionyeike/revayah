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
            title="A local commercial partner for serious digital health expansion."
            description="REVAYAH helps international digital health companies understand Nigerian healthcare buying realities, validate demand, build credible relationships, and pursue qualified commercial opportunities."
          />
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="grid gap-4">
            {[
              "Evidence-based market validation",
              "Hospital, clinic, and health-system buyer intelligence",
              "Decision-maker and stakeholder mapping",
              "Qualified outreach and market testing",
              "Long-term local representation"
            ].map((item) => (
              <div key={item} className="premium-panel flex gap-4 rounded-[18px] p-5">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-champagne" />
                <p className="text-lg font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[18px] border border-champagne/18 bg-chocolate p-7 text-[#f7f7f5] shadow-[0_28px_90px_rgba(33,26,23,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-champagne">
              Clear operating model
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {["No product ownership", "No inventory", "No importation", "Not a consultancy"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-[#f7f7f5]/82">
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
