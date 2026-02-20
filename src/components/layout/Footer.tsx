import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
    ],
    services: [
        { name: "Building Construction", href: "/services#building" },
        { name: "Consulting Services", href: "/services#consulting" },
        { name: "Land Development", href: "/services#development" },
        { name: "All Services", href: "/services" },
    ],
};

const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer style={{ background: "var(--color-navy)", backgroundImage: "var(--blueprint-grid)" }}>
            {/* orange top accent */}
            <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 60%, transparent 100%)" }} />

            <Container className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-20 h-16 relative flex-shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src="/images/blue_logo.jpg"
                                    alt="Aditya Building Solutions Logo"
                                    fill
                                    className="object-cover object-center scale-150"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm" style={{ fontFamily: "var(--font-heading)" }}>Aditya Building Solutions</p>
                                <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--neutral-400)" }}>Est. 2015 · Tirupati</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--neutral-400)" }}>
                            Engineering excellence through every brick. Your trusted construction partner in Andhra Pradesh since 2015.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center border transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                                    style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-6" style={{ color: "var(--color-primary)" }}>Company</p>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-200 hover:text-white"
                                        style={{ color: "var(--neutral-400)" }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-6" style={{ color: "var(--color-primary)" }}>Services</p>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors duration-200 hover:text-white"
                                        style={{ color: "var(--neutral-400)" }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-6" style={{ color: "var(--color-primary)" }}>Contact</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                <span className="text-sm leading-relaxed" style={{ color: "var(--neutral-400)" }}>
                                    Opp. Pillar No. 68, Tirumala Bypass Rd.,<br />Tirupati, AP 517501
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                <a href="tel:+919133533289" className="text-sm hover:text-white transition-colors" style={{ color: "var(--neutral-400)" }}>
                                    +91 9133533289
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                <a href="mailto:adityabs.tpt@gmail.com" className="text-sm hover:text-white transition-colors" style={{ color: "var(--neutral-400)" }}>
                                    adityabs.tpt@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "var(--neutral-500)" }}>
                    <p>© {new Date().getFullYear()} Aditya Building Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
