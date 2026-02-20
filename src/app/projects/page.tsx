"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import { useState } from "react";

const allProjects = [
    {
        id: 1,
        title: "Luxury Villa",
        location: "Tirupati",
        category: "Residential",
        year: "2024",
        status: "Completed",
        image: "/project1.jpg",
    },
    {
        id: 2,
        title: "Corporate Office",
        location: "Renigunta",
        category: "Commercial",
        year: "2023",
        status: "Completed",
        image: "/project2.jpg",
    },
    {
        id: 3,
        title: "Green Valley Apartments",
        location: "Chandragiri",
        category: "Residential",
        year: "2025",
        status: "Ongoing",
        image: "/project3.jpg",
    },
    {
        id: 4,
        title: "Shopping Complex",
        location: "Tirupati",
        category: "Commercial",
        year: "2022",
        status: "Completed",
        image: "/project4.jpg",
    },
    {
        id: 5,
        title: "Farm House",
        location: "Karakambadi",
        category: "Residential",
        year: "2023",
        status: "Completed",
        image: "/project5.jpg",
    },
    {
        id: 6,
        title: "IT Park Interior",
        location: "Tirupati",
        category: "Commercial",
        year: "2024",
        status: "Completed",
        image: "/project6.jpg",
    },
];

const categories = ["All", "Residential", "Commercial", "Ongoing", "Completed"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = allProjects.filter((project) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Ongoing" || activeFilter === "Completed") {
            return project.status === activeFilter;
        }
        return project.category === activeFilter;
    });

    return (
        <div>
            <PageHero
                title="Our Projects"
                subtitle="Exploring Our Portfolio of Excellence"
            />

            <section className="py-20 bg-white">
                <Container>
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeFilter === category ? "primary" : "outline"}
                                onClick={() => setActiveFilter(category)}
                                className={`rounded-full px-6 min-w-[100px] ${activeFilter !== category ? "border-[var(--neutral-200)] text-[var(--neutral-800)] hover:border-[var(--color-primary)]" : ""}`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group border border-[var(--neutral-200)] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                                    {/* Placeholder Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-[var(--neutral-100)] group-hover:scale-110 transition-transform duration-500">
                                        [Image: {project.title}]
                                    </div>

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${project.status === "Ongoing" ? "bg-[var(--color-secondary)]" : "bg-green-600"}`}>
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="text-sm text-[var(--color-primary)] font-semibold mb-1 uppercase tracking-wide">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-[var(--neutral-500)] text-sm mb-4">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {project.location} • {project.year}
                                    </div>
                                    <Button variant="outline" size="sm" fullWidth className="border-[var(--neutral-200)] hover:border-[var(--color-primary)]">
                                        View Project
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-[var(--neutral-500)]">
                            <p className="text-xl">No projects found in this category.</p>
                            <Button variant="outline" className="mt-4" onClick={() => setActiveFilter("All")}>
                                View All Projects
                            </Button>
                        </div>
                    )}
                </Container>
            </section>
        </div>
    );
}
