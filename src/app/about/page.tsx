import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Award, Users } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About Us - Aditya Building Solutions",
    description: "Learn about our journey, mission, and the expert team behind ABS.",
};

export default function AboutPage() {
    return (
        <div>
            <PageHero
                title="About Us"
                subtitle="Building Excellence Since 2015"
            />

            {/* Company Story Section */}
            <section className="py-20 bg-white">
                <Container>
                    {/* Part 1: Our Journey */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h4 className="text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-2">
                                Our Journey
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6 font-[family-name:var(--font-heading)]">
                                A Decade of Construction Excellence
                            </h2>
                            <p className="text-[var(--neutral-800)] text-lg mb-6 leading-relaxed">
                                Founded in 2015, Aditya Building Solutions began with a simple mission: to build structures that stand the test of time while building relationships that last a lifetime.
                            </p>
                            <p className="text-[var(--neutral-800)] text-lg mb-6 leading-relaxed">
                                Over the past 10 years, we have grown from a small consultancy firm to a full-fledged construction and development company, delivering over 100+ successful projects across Tirupati and surrounding regions.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-[var(--color-secondary)]">10+</span>
                                    <span className="text-sm text-[var(--neutral-800)]">Years</span>
                                </div>
                                <div className="w-[1px] bg-[var(--neutral-200)]" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-[var(--color-secondary)]">100+</span>
                                    <span className="text-sm text-[var(--neutral-800)]">Projects</span>
                                </div>
                                <div className="w-[1px] bg-[var(--neutral-200)]" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-[var(--color-secondary)]">AMIE</span>
                                    <span className="text-sm text-[var(--neutral-800)]">Certified</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-[var(--neutral-100)] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                            <span className="text-[var(--neutral-400)]">[Company History Image]</span>
                        </div>
                    </div>

                    {/* Part 2: Mission & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative h-[400px] bg-[var(--neutral-100)] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                            <span className="text-[var(--neutral-400)]">[Mission Vision Image]</span>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h4 className="text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-2">
                                Mission & Vision
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6 font-[family-name:var(--font-heading)]">
                                Building Dreams, Creating Landmarks
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-[var(--neutral-50)] rounded-full h-fit">
                                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Our Mission</h3>
                                        <p className="text-[var(--neutral-800)]">To provide superior construction services with uncompromising quality, safety, and transparency.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-[var(--neutral-50)] rounded-full h-fit">
                                        <Award className="w-6 h-6 text-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Our Vision</h3>
                                        <p className="text-[var(--neutral-800)]">To be the most trusted and preferred construction partner in the region, known for innovation and excellence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-[var(--neutral-50)]">
                <Container>
                    <div className="text-center mb-16">
                        <h4 className="text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-2">
                            Leadership
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6 font-[family-name:var(--font-heading)]">
                            Meet Our Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-[var(--color-primary)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 mx-auto bg-[var(--neutral-100)] rounded-full mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-12 h-12 text-[var(--neutral-400)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-navy)]">Aditya Varma</h3>
                            <p className="text-[var(--color-primary)] font-medium mb-3">Founder & CEO</p>
                            <p className="text-sm text-[var(--neutral-800)]">
                                Civil Engineer with 10+ years of experience in construction management and structural design.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-[var(--color-secondary)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 mx-auto bg-[var(--neutral-100)] rounded-full mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-12 h-12 text-[var(--neutral-400)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-navy)]">Senior Engineer</h3>
                            <p className="text-[var(--color-secondary)] font-medium mb-3">Project Manager</p>
                            <p className="text-sm text-[var(--neutral-800)]">
                                Expert in on-site execution and quality control with a track record of timely delivery.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-[var(--color-primary)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-32 h-32 mx-auto bg-[var(--neutral-100)] rounded-full mb-6 flex items-center justify-center overflow-hidden">
                                <Users className="w-12 h-12 text-[var(--neutral-400)]" />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-navy)]">Design Head</h3>
                            <p className="text-[var(--color-primary)] font-medium mb-3">Architect</p>
                            <p className="text-sm text-[var(--neutral-800)]">
                                Creative visionary ensuring every project is aesthetically pleasing and functional.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
