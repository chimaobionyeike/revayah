"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  company: z.string().min(2, "Company is required."),
  name: z.string().min(2, "Name is required."),
  role: z.string().min(2, "Role is required."),
  country: z.string().min(2, "Country is required."),
  email: z.string().email("Enter a valid business email."),
  website: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
  message: z.string().min(20, "Please share a little more context.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

type ContactField = {
  name: keyof Pick<ContactFormValues, "company" | "name" | "role" | "country" | "email" | "website">;
  label: string;
  placeholder: string;
  type?: "email" | "text" | "url";
};

const fields: ContactField[] = [
  { name: "company", label: "Company", placeholder: "Company name" },
  { name: "name", label: "Name", placeholder: "Your name" },
  { name: "role", label: "Role", placeholder: "Chief Commercial Officer" },
  { name: "country", label: "Country", placeholder: "United Kingdom" },
  { name: "email", label: "Email", placeholder: "name@company.com", type: "email" },
  { name: "website", label: "Website", placeholder: "https://company.com", type: "url" }
] as const;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      company: "",
      name: "",
      role: "",
      country: "",
      email: "",
      website: "",
      message: ""
    }
  });

  function onSubmit(values: ContactFormValues) {
    const body = [
      `Company: ${values.company}`,
      `Name: ${values.name}`,
      `Role: ${values.role}`,
      `Country: ${values.country}`,
      `Email: ${values.email}`,
      `Website: ${values.website || "Not provided"}`,
      "",
      values.message
    ].join("\n");
    const params = new URLSearchParams({
      subject: `Partnership enquiry from ${values.company}`,
      body
    });

    window.location.assign(`mailto:${siteConfig.email}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[18px] border border-emerald/10 bg-white p-6 shadow-[0_18px_60px_rgba(13,59,46,0.05)] md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="grid gap-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input id={field.name} type={field.type ?? "text"} placeholder={field.placeholder} {...register(field.name)} />
            {errors[field.name] ? (
              <p className="text-sm font-medium text-red-700">{errors[field.name]?.message}</p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your company, your healthcare segment, and what you are evaluating in Nigeria."
          {...register("message")}
        />
        {errors.message ? <p className="text-sm font-medium text-red-700">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" className="mt-8 w-full md:w-auto" disabled={isSubmitting}>
        <Send aria-hidden="true" className="h-4 w-4" />
        Send enquiry
      </Button>
    </form>
  );
}
