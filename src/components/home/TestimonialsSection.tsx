"use client";

import { Container } from "@/components/ui/Container";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        text: "ABS delivered our dream home exactly as we envisioned. Their engineering precision and commitment to quality is truly unmatched.",
        author: "Ravi Kumar",
        location: "Tirupati",
        project: "Luxury Villa",
        rating: 5,
    },
    {
        text: "Professional team and timely execution. The commercial complex they built for us is structurally solid and visually excellent.",
        author: "Srinivas Reddy",
        location: "Renigunta",
        project: "Commercial Complex",
        rating: 5,
    },
    {
        text: "Transparent pricing, zero surprises. The ABS team managed every step from approvals to final handover with complete professionalism.",
        author: "Lakshmi Narayana",
        location: "Chandragiri",
        project: "Residential Apartment",
        rating: 5,
    },
];

export function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;

    const prev = () => setCurrent((c) => (c - 1 + total) % total);
    const next = () => setCurrent((c) => (c + 1) % total);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ background: "var(--color-navy-light)", backgroundImage: "var(--blueprint-grid)" }}
        >
            {/* Large decorative quote */}
            <div
                className="absolute top-12 right-12 text-[16rem] font-black leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block"
                style={{ fontFamily: "Georgia, serif" }}
            >
                "
            </div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Label */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-3 mb-5 lg:mb-12">
                            <div className="w-8 h-[2px]" style={{ background: "var(--color-primary)" }} />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--color-primary)" }}>
                                Client Stories
                            </span>
                        </div>
                        <h2
                            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8 hidden lg:block"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            What Our<br />Clients Say
                        </h2>

                        {/* Navigation */}
                        <div className="hidden lg:flex items-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="w-12 h-12 flex items-center justify-center border transition-colors duration-200"
                                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 flex items-center justify-center border transition-colors duration-200"
                                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <span className="text-white/30 text-sm ml-2">
                                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    {/* Right: Testimonial */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4 }}
                                className="p-8 md:p-12 relative"
                                style={{
                                    background: "var(--color-navy-mid)",
                                    borderTop: "2px solid rgba(255,107,53,0.3)"
                                }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--color-secondary)" }} />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 italic">
                                    "{testimonials[current].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0"
                                        style={{
                                            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                            color: "white",
                                            fontFamily: "var(--font-heading)"
                                        }}
                                    >
                                        {testimonials[current].author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{testimonials[current].author}</p>
                                        <p className="text-sm text-white/40">{testimonials[current].project} · {testimonials[current].location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile navigation */}
                        <div className="flex items-center gap-4 mt-6 lg:hidden">
                            <button onClick={prev} className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/50">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button onClick={next} className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/50">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
