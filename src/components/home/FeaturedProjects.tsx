"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    { id: 1, title: "Luxury Villa", location: "Tirupati", type: "Residential", year: "2024" },
    { id: 2, title: "Corporate Office", location: "Renigunta", type: "Commercial", year: "2023" },
    { id: 3, title: "Green Valley Apts.", location: "Chandragiri", type: "Residential", year: "2025" },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 md:py-32" style={{ background: "var(--neutral-50)", backgroundImage: "var(--blueprint-grid-dark)" }}>
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-[2px]" style={{ background: "var(--color-primary)" }} />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--color-primary)" }}>
                                Our Portfolio
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                            Featured Projects
                        </h2>
                    </div>
                    <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group"
                        style={{ color: "var(--color-navy)" }}>
                        View All Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href="/projects"
                            className="group relative overflow-hidden block"
                            style={{ boxShadow: "0 4px 24px rgba(15,22,36,0.08)" }}
                        >
                            {/* Image Placeholder */}
                            <div
                                className="aspect-[3/4] relative overflow-hidden"
                                style={{ background: "linear-gradient(135deg, var(--neutral-150) 0%, var(--neutral-200) 100%)" }}
                            >
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-sm font-medium group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: "var(--blueprint-grid-dark)", color: "var(--neutral-400)" }}
                                >
                                    {project.title}
                                </div>

                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                    style={{ background: "linear-gradient(to top, rgba(15,22,36,0.85) 0%, rgba(15,22,36,0.2) 50%, transparent 100%)" }}
                                />

                                {/* Arrow icon - appears on hover */}
                                <div
                                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                                    style={{ background: "var(--color-primary)" }}
                                >
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Card Info */}
                            <div
                                className="p-5 border-b-2 transition-colors duration-300 group-hover:border-[var(--color-primary)]"
                                style={{
                                    background: "white",
                                    borderBottom: "2px solid var(--neutral-200)"
                                }}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest mb-1 font-medium" style={{ color: "var(--color-primary)" }}>
                                            {project.type} · {project.year}
                                        </p>
                                        <h3 className="text-lg font-bold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 mt-2 text-xs" style={{ color: "var(--neutral-400)" }}>
                                    <MapPin className="w-3 h-3" />
                                    {project.location}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile view all */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group"
                        style={{ color: "var(--color-navy)" }}>
                        View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
