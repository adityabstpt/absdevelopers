"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Clock, Building } from "lucide-react";
import Link from "next/link";

const quickStats = [
    { icon: Clock, value: "10+", label: "Years" },
    { icon: Building, value: "100+", label: "Projects" },
    { icon: Shield, value: "AMIE", label: "Certified" },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ background: "var(--color-navy)" }}
        >
            {/* Blueprint grid overlay */}
            <div
                className="absolute inset-0 z-0 opacity-100"
                style={{ backgroundImage: "var(--blueprint-grid)" }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 70% at 70% 50%, rgba(255,107,53,0.12) 0%, transparent 65%), linear-gradient(135deg, rgba(15,22,36,0.97) 0%, rgba(26,36,56,0.93) 100%)"
                }}
            />

            {/* Decorative orange accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 50%, transparent 100%)" }}
            />

            {/* Large decorative background text */}
            <div className="absolute right-0 bottom-20 text-[20vw] font-black leading-none text-white/[0.02] select-none pointer-events-none z-0 tracking-tight hidden lg:block">
                BUILD
            </div>

            <Container className="relative z-10 pt-28 pb-20">
                <div className="max-w-5xl">

                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-[2px]" style={{ background: "var(--color-primary)" }} />
                        <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-[0.15em]">
                            Est. 2015 · Tirupati, Andhra Pradesh
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] text-white mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Building Dreams,
                        <br />
                        <span style={{
                            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            Creating Landmarks
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
                    >
                        A decade of engineering excellence — delivering residential & commercial
                        construction projects with precision, quality, and integrity.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="rounded-none px-10 h-14 text-base font-semibold tracking-wide uppercase"
                                style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)", color: "white", border: "none" }}>
                                Get Free Consultation
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg" className="rounded-none h-14 px-10 text-base font-semibold tracking-wide uppercase border-white/30 text-white hover:bg-white hover:text-[var(--color-navy)]">
                                View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Quick Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-wrap gap-8 md:gap-12"
                    >
                        {quickStats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-[2px] h-12 hidden sm:block"
                                    style={{ background: "linear-gradient(to bottom, var(--color-primary), var(--color-secondary))" }} />
                                <div>
                                    <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-accent)" }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
}
