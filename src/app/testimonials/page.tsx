import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Quote, Star } from "lucide-react";

export const metadata = {
    title: "Client Testimonials - Aditya Building Solutions",
    description: "Read what our satisfied clients have to say about our construction services.",
};

const testimonials = [
    {
        id: 1,
        text: "ABS delivered our dream home exactly as we envisioned. Their attention to detail and commitment to quality is unmatched.",
        author: "Ravi Kumar",
        location: "Tirupati",
        rating: 5,
        project: "Luxury Villa",
    },
    {
        id: 2,
        text: "Professional team and timely execution. We are very happy with the commercial complex they built for us in Renigunta.",
        author: "Srinivas Reddy",
        location: "Renigunta",
        rating: 5,
        project: "Commercial Complex",
    },
    {
        id: 3,
        text: "Transparency in pricing and excellent service throughout the project. Highly recommended for any construction needs.",
        author: "Lakshmi Narayana",
        location: "Chandragiri",
        rating: 4,
        project: "Residential Apartment",
    },
    {
        id: 4,
        text: "The team at ABS is very knowledgeable and helped us with every step of the approval process. Great people to work with.",
        author: "Padma Vathi",
        location: "Tirupati",
        rating: 5,
        project: "Individual House",
    },
    {
        id: 5,
        text: "Best construction company in Tirupati. They use high quality materials and the finishing is top notch.",
        author: "Balaji Gupta",
        location: "Tirumala Bypass",
        rating: 5,
        project: "Renovation",
    },
];

export default function TestimonialsPage() {
    return (
        <div>
            <PageHero
                title="Testimonials"
                subtitle="Stories of Satisfaction & Trust"
            />

            <section className="py-20 bg-[var(--neutral-50)]">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 masonry-grid">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--neutral-200)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                            >
                                <Quote className="w-10 h-10 text-[var(--color-secondary)] mb-4 opacity-30" />
                                <p className="text-[var(--neutral-800)] text-lg mb-6 leading-relaxed italic flex-grow">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto border-t border-[var(--neutral-100)] pt-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--neutral-100)] flex items-center justify-center font-bold text-[var(--color-primary)] text-xl">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--color-navy)]">{testimonial.author}</h4>
                                        <p className="text-sm text-[var(--neutral-500)]">{testimonial.location} • {testimonial.project}</p>
                                    </div>
                                    <div className="ml-auto text-[var(--color-secondary)] flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
