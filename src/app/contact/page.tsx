import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us - Aditya Building Solutions",
    description: "Get in touch with us for your construction needs. Visit our office in Tirupati or call us.",
};

export default function ContactPage() {
    return (
        <div>
            <PageHero
                title="Get In Touch"
                subtitle="We'd Love to Hear From You"
            />

            <section className="py-20 bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h4 className="text-[var(--color-primary)] font-semibold uppercase tracking-wider mb-2">
                                Send a Message
                            </h4>
                            <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-6 font-[family-name:var(--font-heading)]">
                                Start Your Project Today
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-[var(--neutral-800)]">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-[var(--neutral-800)]">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                            placeholder="Your Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[var(--neutral-800)]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-[var(--neutral-800)]">Service Interested In</label>
                                    <select
                                        id="service"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="building">Building Construction</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="development">Land Development</option>
                                        <option value="interior">Interior Design</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-[var(--neutral-800)]">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>

                                <Button size="lg" fullWidth className="text-lg">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            {/* Info Card */}
                            <div className="bg-[var(--neutral-50)] p-8 rounded-2xl border border-[var(--neutral-200)]">
                                <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)]">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-navy)]">Our Office</h4>
                                            <p className="text-[var(--neutral-800)]">
                                                Opp. pillar no. 68,<br />
                                                Tirumala Bypass Rd., Tirupati,<br />
                                                Andhra Pradesh 517501
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)]">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-navy)]">Phone</h4>
                                            <p className="text-[var(--neutral-800)]">+91 9133533289</p>
                                            <p className="text-sm text-[var(--neutral-500)]">Mon-Sat 9am to 6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full shadow-sm text-[var(--color-primary)]">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-navy)]">Email</h4>
                                            <p className="text-[var(--neutral-800)]">adityabs.tpt@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-[300px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-md relative">
                                {/* Embed Google Map here. Using placeholder for now */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.123456789!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQzLjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Google Maps Location"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
