"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Building2, Briefcase, Ruler, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        number: "01",
        icon: Building2,
        title: "Building Construction",
        description: "Full-cycle residential and commercial construction — from structural design to final handover — engineered for durability.",
        href: "/services#building",
    },
    {
        number: "02",
        icon: Briefcase,
        title: "Consulting Services",
        description: "Expert project planning, cost estimation, structural assessments, and regulatory approvals handled end-to-end.",
        href: "/services#consulting",
    },
    {
        number: "03",
        icon: Ruler,
        title: "Land Development",
        description: "Transforming raw plots into integrated communities with roads, drainage, utilities, and landscape design.",
        href: "/services#development",
    },
];

export function ServicesSection() {
    return (
        <section
            className="py-24 md:py-32 relative"
            style={{
                background: "var(--color-navy)",
                backgroundImage: "var(--blueprint-grid)"
            }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, var(--color-primary) 30%, var(--color-secondary) 70%, transparent)" }} />

            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px]" style={{ background: "var(--color-primary)" }} />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--color-primary)" }}>
                                What We Do
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
                            style={{ fontFamily: "var(--font-heading)" }}>
                            Engineering-Grade<br />Services
                        </h2>
                    </div>
                    <Link href="/services">
                        <Button variant="outline" size="md"
                            className="rounded-none px-6 h-11 text-xs uppercase tracking-wider border-white/20 text-white/70 hover:bg-white hover:text-[var(--color-navy)]">
                            All Services
                        </Button>
                    </Link>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                    {services.map((service) => (
                        <Link key={service.number} href={service.href} className="group block">
                            <div
                                className="h-full p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
                                style={{ background: "var(--color-navy-light)" }}
                            >
                                {/* Hover fill */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,184,0,0.05) 100%)" }}
                                />

                                {/* Number */}
                                <p
                                    className="text-6xl font-black mb-6 leading-none select-none"
                                    style={{
                                        fontFamily: "var(--font-accent)",
                                        background: "linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,184,0,0.1) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {service.number}
                                </p>

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                    style={{ background: "rgba(255,107,53,0.12)" }}
                                >
                                    <service.icon className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                                </div>

                                <h3
                                    className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[var(--color-secondary)]"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Learn more */}
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
                                    style={{ color: "var(--color-primary)" }}>
                                    Read More
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                    style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))" }}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
