"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormField {
  name: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder: string;
  options?: string[];
  required?: boolean;
}

const formFields: FormField[] = [
  { name: "from_name", type: "text", placeholder: "Full Name", required: true },
  { name: "from_email", type: "email", placeholder: "Email Address", required: true },
  {
    name: "service",
    type: "select",
    placeholder: "Select Service",
    options: [
      "Social Media Verification",
      "Reputation Management",
      "Account Recovery",
      "Username Claim",
      "Branding",
      "Website Development",
      "PR & Media",
      "Growth & Engagement",
      "Other",
    ],
    required: true,
  },
  { name: "message", type: "textarea", placeholder: "Tell us about your project...", required: true },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    for (const field of formFields) {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = "This field is required";
      }
      if (field.type === "email" && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = "Please enter a valid email";
        }
      }
    }
    setErrors(newErrors);

    // Conditional validation for "Other" service
    if (formData.service === "Other" && !formData.custom_service?.trim()) {
      newErrors.custom_service = "Please specify your request";
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !form.current) return;
    setStatus("submitting");

    try {
      // 1. Send notification to admin using sendForm
      await emailjs.sendForm(
        "service_e5n5eds",
        "template_qrk21bn",
        form.current,
        "qOpgbC4RGXupwAnrO"
      );

      // 2. Send auto-reply to user (independent call)
      try {
        await emailjs.send(
          "service_e5n5eds",
          "template_3ek0uyn",
          {
            from_name: formData.from_name,
            from_email: formData.from_email,
          },
          "qOpgbC4RGXupwAnrO"
        );
      } catch (autoReplyError) {
        // Log auto-reply error separately so it doesn't break main flow
        console.error("EmailJS Auto-Reply Error:", autoReplyError);
      }

      setStatus("success");
      setFormData({});
    } catch (error) {
      console.error("EmailJS Main Submission Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-12 text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-4">
          check_circle
        </span>
        <h3 className="font-headline font-bold text-2xl text-on-surface mb-3">
          Message Received
        </h3>
        <p className="text-on-surface-variant">
          Our team will reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-8 md:p-12 space-y-6"
    >
      {formFields.map((field) => (
        <div key={field.name}>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              className="form-input min-h-[140px] resize-none"
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ) : field.type === "select" ? (
            <div className="space-y-4">
              <input
                type="hidden"
                name="service"
                value={formData.service || ""}
              />
              <input
                type="hidden"
                name="custom_service"
                value={formData.service === "Other" ? formData.custom_service || "" : ""}
              />

              {/* Custom Luxury Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`form-input flex items-center justify-between cursor-pointer text-left select-none
                    ${formData.service ? "font-semibold text-on-surface" : "font-medium text-on-surface-variant/50"}
                    tracking-wider transition-all duration-300 border-outline/30 hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/5
                  `}
                  style={{
                    letterSpacing: '0.04em',
                    lineHeight: '1.5',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <span className="truncate">
                    {formData.service || field.placeholder}
                  </span>
                  <span className={`material-symbols-outlined transition-transform duration-500 text-lg ${isDropdownOpen ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute top-full left-0 right-0 mt-3 z-[100] bg-surface-container/90 backdrop-blur-[18px] border border-outline/30 rounded-2xl overflow-hidden shadow-lg py-2 animate-fade-in slide-in-from-top-2">
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {field.options?.map((opt) => (
                          <div
                            key={opt}
                            className={`px-6 py-4 cursor-pointer font-medium text-sm tracking-wide transition-all duration-200
                              ${formData.service === opt
                                ? "bg-primary/10 text-primary"
                                : "text-on-surface-variant/80 hover:bg-surface-variant hover:text-on-surface"
                              }
                            `}
                            onClick={() => {
                              handleChange("service", opt);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${field.name === "service" && formData.service === "Other"
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                  }`}
              >
                <input
                  name="custom_service_input"
                  type="text"
                  className="form-input font-medium tracking-wide text-on-surface border-outline/30 focus:border-primary focus:ring-4 focus:ring-primary/5"
                  placeholder="Please specify your request"
                  value={formData.custom_service || ""}
                  onChange={(e) => handleChange("custom_service", e.target.value)}
                  style={{ letterSpacing: '0.04em' }}
                />
                {errors.custom_service && (
                  <p className="text-error text-[10px] uppercase tracking-widest mt-2 ml-2 font-bold opacity-80">{errors.custom_service}</p>
                )}
              </div>
            </div>
          ) : (
            <input
              name={field.name}
              type={field.type}
              className="form-input"
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
          {errors[field.name] && (
            <p className="text-error text-xs mt-1.5 ml-1">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="primary-cta w-full py-5 text-lg justify-center neon-glow disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <span className="material-symbols-outlined animate-spin">progress_activity</span>
            SENDING...
          </>
        ) : (
          <>
            SEND MESSAGE
            <span className="material-symbols-outlined">send</span>
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-error text-center text-sm mt-4">
          Failed to send message. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
