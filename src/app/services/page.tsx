import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Building2, Briefcase, Ruler, PaintBucket, Hammer, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Services - Aditya Building Solutions",
    description: "Comprehensive construction services including residential building, commercial development, and consulting.",
};

const services = [
    {
        id: "building",
        icon: Building2,
        title: "Building Construction",
        description: "We handle construction projects from ground up, ensuring structural integrity and premium finishes.",
        features: ["Residential Villas & Apartments", "Commercial Complexes", "Industrial Sheds", "Renovations"],
    },
    {
        id: "consulting",
        icon: Briefcase,
        title: "Consulting Services",
        description: "Expert advice on project feasibility, cost estimation, and structural stability.",
        features: ["Structural Design", "Cost Estimation", "Project Management", "Legal Approvals Assistance"],
    },
    {
        id: "development",
        icon: Ruler,
        title: "Land Development",
        description: "Transforming raw land into well-planned communities with all necessary infrastructure.",
        features: ["Layout Planning", "Roads & Drainage", "Landscape Development", "Plotting"],
    },
];

const processSteps = [
    { id: 1, title: "Consultation", desc: "Understanding your requirements" },
    { id: 2, title: "Planning", desc: "Design & Cost Estimation" },
    { id: 3, title: "Approval", desc: "Permits & Documentation" },
    { id: 4, title: "Execution", desc: "Construction with Quality" },
    { id: 5, title: "Handover", desc: "On-time Delivery" },
];

export default function ServicesPage() {
    return (
        <div>
            <PageHero
                title="Our Services"
                subtitle="End-to-End Construction Solutions"
            />

            {/* Services List */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center p-8 rounded-2xl bg-[var(--neutral-50)] border border-[var(--neutral-200)] hover:shadow-lg transition-shadow duration-300`}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-4 bg-white rounded-xl shadow-sm border border-[var(--neutral-100)]">
                                            <service.icon className="w-10 h-10 text-[var(--color-primary)]" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[var(--color-navy)]">{service.title}</h3>
                                    </div>
                                    <p className="text-[var(--neutral-800)] text-lg mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)]" />
                                                <span className="text-[var(--neutral-900)] font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact">
                                        <Button>Request Quote</Button>
                                    </Link>
                                </div>

                                {/* Image Placeholder */}
                                <div className="flex-1 w-full h-[300px] bg-[var(--neutral-200)] rounded-xl flex items-center justify-center text-[var(--neutral-500)] font-medium">
                                    [Image for {service.title}]
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Usage Process */}
            <section className="py-20 bg-[var(--color-navy)] text-white">
                <Container>
                    <div className="text-center mb-16">
                        <h4 className="text-[var(--color-secondary)] font-semibold uppercase tracking-wider mb-2">
                            How We Work
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
                            Our Process from Start to Finish
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[var(--color-navy-light)] z-0" />

                        {processSteps.map((step) => (
                            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl shadow-lg mb-4 border-4 border-[var(--color-navy)]">
                                    {step.id}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-[var(--neutral-200)] text-sm px-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
