import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    logoSrc?: string;
    logoAlt?: string;
    tagline?: string;
    officeLocation?: string;
    email?: string;
    phone?: string;
    whatsapp?: string;
    instagramUrl?: string;
    facebookUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
    logoSrc = "/media/logo.png",
    logoAlt = "Horizon Top Logo",
    tagline = "Be On The Top",
    officeLocation = "UAE - DUBAI - Business Bay - The Prism Tower - 3304",
    email = "info@horizontop.ae",
    phone = "+971 55 419 5656",
    whatsapp = "+971554195656",
    instagramUrl = "https://instagram.com/horizontop.ae",
    facebookUrl = "https://facebook.com/horizontop.ae",
    linkedinUrl = "https://linkedin.com/company/horizontop",
    twitterUrl = "https://twitter.com/horizontop_ae"
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1]
            }
        }
    };

    const quickLinks = [
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Case Studies", href: "#case-studies" }
    ];

    const socialLinks = [
        {
            name: "Instagram",
            url: instagramUrl,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: "Facebook",
            url: facebookUrl,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: linkedinUrl,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: "Twitter",
            url: twitterUrl,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] border-t border-[#1E88E5]/20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {/* Logo & Tagline */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            {logoSrc ? (
                                <img
                                    src={logoSrc}
                                    alt={logoAlt}
                                    className="h-10 w-auto"
                                />
                            ) : (
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E88E5] to-[#0A3C64] rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">H</span>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1E88E5] rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">T</span>
                                    </div>
                                </div>
                            )}
                            <div>
                                <h3 className="text-xl font-bold text-white">Horizon Top</h3>
                                <p className="text-[#1E88E5] text-sm font-medium">{tagline}</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Your trusted marketing partner in Dubai. We create campaigns that stand out and deliver results that matter.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-[#1E88E5] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 text-[#1E88E5] mt-0.5 flex-shrink-0">
                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed">{officeLocation}</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 text-[#1E88E5] flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a
                                    href={`mailto:${email}`}
                                    className="text-white/70 hover:text-[#1E88E5] transition-colors duration-300 text-sm"
                                >
                                    {email}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 text-[#1E88E5] flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <a
                                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                                    className="text-white/70 hover:text-[#1E88E5] transition-colors duration-300 text-sm"
                                >
                                    {phone}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#1E88E5]/20 border border-white/20 hover:border-[#1E88E5]/40 rounded-lg flex items-center justify-center text-white/70 hover:text-[#1E88E5] transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="mt-6">
                            <motion.a
                                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-medium rounded-lg transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-7.496 11.893-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © 2024 Horizon Top. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#privacy" className="text-white/60 hover:text-[#1E88E5] transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-white/60 hover:text-[#1E88E5] transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
