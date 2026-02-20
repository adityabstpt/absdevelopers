"use client";

import { Container } from "@/components/ui/Container";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{ background: "var(--color-primary)" }}
        >
            {/* Blueprint grid overlay */}
            <div className="absolute inset-0 opacity-100" style={{ backgroundImage: "var(--blueprint-grid)" }} />

            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />

            {/* Large decorative text */}
            <div
                className="absolute right-0 bottom-0 text-[18vw] font-black leading-none text-white/[0.04] select-none pointer-events-none"
                style={{ fontFamily: "var(--font-accent)" }}
            >
                ABS
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-white/40" />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                                Start Your Project
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Ready to Build<br />Something Great?
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                            Connect with our engineering team today for a free consultation —
                            we'll discuss your vision, site requirements, and budget in detail.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-4">
                        <Link href="/contact" className="group flex items-center justify-between px-8 py-5 transition-all duration-300 hover:-translate-y-1"
                            style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
                            <span className="font-bold text-lg" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                                Get Free Consultation
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: "var(--color-primary)" }} />
                        </Link>

                        <a href="tel:+919133533289" className="group flex items-center justify-between px-8 py-5 border-2 transition-all duration-300 hover:-translate-y-1"
                            style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent" }}>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Call us directly</p>
                                <p className="font-bold text-white text-lg">+91 9133533289</p>
                            </div>
                            <Phone className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
