import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-lg shadow-sm border border-neutral-100 p-6 transition-all duration-300",
                hoverEffect && "hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-primary)]/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureCard({ icon: Icon, title, description, className, ...props }: FeatureCardProps) {
    return (
        <div
            className={cn(
                "bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-primary)] hover:shadow-lg transition-shadow",
                className
            )}
            {...props}
        >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-neutral-100)] text-[var(--color-primary)]">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[var(--color-navy)]">{title}</h3>
            <p className="text-[var(--neutral-800)]">{description}</p>
        </div>
    );
}

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href = "/services", className, ...props }: ServiceCardProps) {
    return (
        <Link href={href} className={cn("group flex flex-col h-full", className)}>
            <Card hoverEffect className="flex flex-col h-full">
                <Icon className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[var(--color-navy)]">{title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <span className="text-[var(--color-primary)] font-semibold flex items-center group-hover:underline">
                    Learn More →
                </span>
            </Card>
        </Link>
    );
}
