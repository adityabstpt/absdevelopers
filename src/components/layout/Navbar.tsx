"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Building Construction", href: "/services#building" },
            { name: "Consulting Services", href: "/services#consulting" },
            { name: "Land Development", href: "/services#development" },
        ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [pathname]);

    return (
        <>
            {/* Top accent strip */}
            <div
                className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
                style={{ background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 60%, transparent 100%)" }}
            />

            <header
                className={cn(
                    "fixed top-[3px] left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "shadow-lg py-2"
                        : "py-4"
                )}
                style={{
                    background: isScrolled ? "rgba(255,255,255,0.97)" : "white",
                    backdropFilter: isScrolled ? "blur(12px)" : "none",
                    borderBottom: isScrolled ? "1px solid rgba(15,22,36,0.08)" : "1px solid rgba(15,22,36,0.06)",
                }}
            >
                <Container className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-14 h-14 relative flex-shrink-0">
                            <Image
                                src="/images/blue_logo.jpg"
                                alt="Aditya Building Solutions Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-bold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
                                Aditya Building Solutions
                            </span>
                            <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--neutral-400)" }}>
                                Est. 2015 · Tirupati
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                                        pathname === link.href
                                            ? "text-[var(--color-primary)]"
                                            : "text-[var(--color-navy)] hover:text-[var(--color-primary)]"
                                    )}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />}
                                </Link>

                                {/* Active indicator */}
                                {pathname === link.href && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-[2px]"
                                        style={{ background: "var(--color-primary)" }} />
                                )}

                                {/* Dropdown */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-0 w-52 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div
                                            className="py-2 shadow-xl"
                                            style={{
                                                background: "white",
                                                borderTop: "2px solid var(--color-primary)",
                                                boxShadow: "0 8px 32px rgba(15,22,36,0.12)"
                                            }}
                                        >
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block px-4 py-2.5 text-sm transition-colors duration-150"
                                                    style={{ color: "var(--neutral-800)" }}
                                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.background = 'var(--neutral-50)'; }}
                                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--neutral-800)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/contact">
                            <div
                                className="px-5 h-10 flex items-center text-sm font-semibold uppercase tracking-wider text-white cursor-pointer transition-opacity hover:opacity-90"
                                style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
                            >
                                Get Free Quote
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        style={{ color: "var(--color-navy)" }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </Container>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-[3px] z-40 overflow-y-auto"
                        style={{ background: "var(--color-navy)" }}
                    >
                        {/* Orange top line */}
                        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))" }} />

                        <div className="flex flex-col p-6 pt-20 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                        className={cn(
                                            "block py-4 text-xl font-semibold border-b transition-colors",
                                            pathname === link.href ? "text-[var(--color-primary)]" : "text-white"
                                        )}
                                        style={{ borderColor: "rgba(255,255,255,0.07)", fontFamily: "var(--font-heading)" }}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 py-2 space-y-2">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-8">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <div
                                        className="w-full flex items-center justify-center h-14 font-bold text-sm uppercase tracking-wider text-white"
                                        style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
                                    >
                                        Get Free Quote
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
