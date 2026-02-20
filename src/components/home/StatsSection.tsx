"use client";

import { Container } from "@/components/ui/Container";

const stats = [
    { value: "10+", label: "Years of Experience", suffix: "" },
    { value: "100+", label: "Projects Completed", suffix: "" },
    { value: "AMIE", label: "Engineer Certified", suffix: "" },
];

export function StatsSection() {
    return (
        <div
            className="relative py-14 border-y"
            style={{
                background: "var(--color-navy-light)",
                backgroundImage: "var(--blueprint-grid)",
                borderColor: "rgba(255,107,53,0.15)",
            }}
        >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center py-6 px-4 text-center relative"
                        >
                            {/* Vertical separator */}
                            {i < stats.length - 1 && (
                                <div
                                    className="absolute right-0 top-1/4 bottom-1/4 w-px hidden md:block"
                                    style={{ background: "linear-gradient(to bottom, transparent, rgba(255,107,53,0.4), transparent)" }}
                                />
                            )}
                            <p
                                className="text-4xl md:text-5xl font-black text-white mb-2"
                                style={{ fontFamily: "var(--font-accent)" }}
                            >
                                {stat.value}
                            </p>
                            <p className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
