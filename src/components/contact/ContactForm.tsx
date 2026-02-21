"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        // Added the Web3Forms access key
        formData.append("access_key", "32b7a6a7-a916-4080-a707-0a9c0ae91799");
        // Set email subject
        formData.append("subject", "New Contact Form Submission from ABS Website");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                e.currentTarget.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("Web3Forms API Error:", data);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error("Web3Forms Catch Error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--neutral-800)]">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                        placeholder="Your Name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[var(--neutral-800)]">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                        placeholder="Your Phone Number"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--neutral-800)]">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-[var(--neutral-800)]">Service Interested In</label>
                <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all bg-white"
                >
                    <option value="">Select a Service</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Land Development">Land Development</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--neutral-800)]">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    placeholder="Tell us about your project requirements..."
                ></textarea>
            </div>

            {/* Web3Forms spam protection honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <Button size="lg" fullWidth className="text-lg" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
                <p className="text-green-600 text-sm mt-3 text-center font-medium bg-green-50 p-3 rounded-lg">
                    Message sent successfully! We will get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p className="text-red-600 text-sm mt-3 text-center font-medium bg-red-50 p-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                </p>
            )}
        </form>
    );
}
