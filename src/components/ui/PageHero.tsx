import { Container } from "@/components/ui/Container";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[var(--color-navy)] overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none" }}
                />
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-primary)] opacity-80" />
            </div>

            <Container className="relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-[var(--neutral-100)] max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </Container>
        </section>
    );
}
