"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
    "AMIE-certified civil engineers on every project",
    "Transparent cost estimation with no hidden fees",
    "Premium-grade materials sourced from verified suppliers",
    "On-time delivery guaranteed across all project types",
];

export function AboutPreview() {
    return (
        <section className="py-24 md:py-32" style={{ background: "#fff" }}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image + Badge */}
                    <div className="relative">
                        {/* Main image */}
                        <div
                            className="relative aspect-square rounded-sm overflow-hidden"
                            style={{
                                boxShadow: "0 32px 64px -12px rgba(15,22,36,0.18)"
                            }}
                        >
                            <Image
                                src="/images/1.jpg"
                                alt="ABS Construction Project"
                                fill
                                className="object-cover"
                            />
                            {/* Inner accent border */}
                            <div className="absolute inset-4 border border-white/20 rounded-sm pointer-events-none z-10" />
                        </div>

                        {/* 10-year badge */}
                        <div
                            className="absolute -bottom-6 -right-4 lg:-right-8 p-6 min-w-[160px]"
                            style={{
                                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                                boxShadow: "0 16px 40px rgba(255,107,53,0.35)"
                            }}
                        >
                            <p className="text-4xl font-black text-white leading-none mb-1">10+</p>
                            <p className="text-xs text-white/80 uppercase tracking-wider leading-snug">Years of Construction Excellence</p>
                        </div>

                        {/* Decorative corner marks */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "var(--color-primary)" }} />
                        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "var(--color-secondary)" }} />
                    </div>

                    {/* Right: Content */}
                    <div className="lg:pl-4">
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px]" style={{ background: "var(--color-primary)" }} />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--color-primary)" }}>
                                Who We Are
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
                            style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
                        >
                            Built on Trust,<br />Driven by Engineering
                        </h2>

                        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--neutral-500)" }}>
                            Aditya Building Solutions is Tirupati's trusted construction partner — delivering
                            precision-engineered residential and commercial projects since 2015. Every
                            structure we build is a testament to our commitment to quality and client satisfaction.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                    <span className="font-medium" style={{ color: "var(--neutral-800)" }}>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/about">
                            <Button size="lg"
                                className="rounded-none h-12 px-8 text-sm font-semibold tracking-wider uppercase"
                                style={{ background: "var(--color-navy)", color: "white" }}>
                                Our Story <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
