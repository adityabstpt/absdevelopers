import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function Section({ className, children, ...props }: ContainerProps) {
    return (
        <section
            className={cn("py-12 md:py-16 lg:py-24", className)}
            {...props}
        >
            {children}
        </section>
    );
}
