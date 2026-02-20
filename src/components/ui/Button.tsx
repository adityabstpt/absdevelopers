import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

        const variantStyles = {
            primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg hover:-translate-y-0.5",
            secondary: "bg-[var(--color-secondary)] text-[var(--color-navy)] hover:brightness-110 shadow-md hover:shadow-lg hover:-translate-y-0.5",
            outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
            ghost: "hover:bg-[var(--neutral-100)] text-[var(--color-navy)]",
            white: "bg-white text-[var(--color-primary)] hover:bg-neutral-50 shadow-md hover:shadow-lg",
        };

        const sizeStyles = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variantStyles[variant],
                    sizeStyles[size],
                    fullWidth ? "w-full" : "",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
