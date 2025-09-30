import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    logoSrc?: string;
    logoAlt?: string;
    companyName?: string;
    tagline?: string;
    navItems?: { label: string; href: string }[];
    whatsappNumber?: string;
    primaryAction?: { label: string; href: string };
    onNavigate?: (href: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
    logoSrc,
    logoAlt = "Horizon Top Logo",
    companyName = "Horizon Top",
    tagline = "Be On The Top",
    navItems = [
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
    ],
    whatsappNumber = "+971501234567",
    primaryAction = { label: "Start Your Project", href: "#contact" },
    onNavigate
}) => {
    // Force initial state to be false (transparent)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect - trigger at 24px
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    const LogoPlaceholder = () => (
        <div className="flex items-center space-x-3">
            {logoSrc ? (
                <img
                    src={logoSrc}
                    alt={logoAlt}
                    className="h-20 w-auto"
                />
            ) : (
                // Logo Placeholder - Rounded "H" design
                <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E88E5] to-[#0A3C64] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>
                    {/* Small "Top" indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1E88E5] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">T</span>
                    </div>
                </div>
            )}


        </div>
    );

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0, backgroundColor: "transparent" }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ backgroundColor: 'transparent' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#081A2C]/90 backdrop-blur-xl shadow-2xl border-b border-[#1E88E5]/20'
                    : 'bg-transparent backdrop-blur-none shadow-none border-none'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 lg:h-20">

                        {/* Logo Section - Left */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                        >
                            <button
                                onClick={() => onNavigate ? onNavigate('#home') : window.location.href = '#home'}
                                className="flex items-center bg-transparent border-none cursor-pointer"
                            >
                                <LogoPlaceholder />
                            </button>
                        </motion.div>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <div className="flex items-center space-x-8">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => onNavigate ? onNavigate(item.href) : window.location.href = item.href}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                                        className="text-white hover:text-[#1E88E5] transition-colors duration-300 font-medium relative group bg-transparent border-none cursor-pointer"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E88E5] transition-all duration-300 group-hover:w-full"></span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Actions - Right */}
                        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                            {/* WhatsApp Button */}
                            <motion.a
                                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 text-white hover:text-[#25D366] transition-colors duration-300 font-medium group"
                                aria-label="Contact us on WhatsApp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                                <span className="group-hover:text-[#25D366]">WhatsApp</span>
                            </motion.a>

                            {/* Primary CTA Button */}
                            <motion.a
                                href={primaryAction.href}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1E88E5] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1976D2] hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C]"
                            >
                                {primaryAction.label}
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button - Extreme Right */}
                        <div className="lg:hidden flex-shrink-0 ml-auto">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMobileMenuOpen(!isMobileMenuOpen);
                                }}
                                className="text-white hover:text-[#1E88E5] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] rounded-lg p-2"
                                aria-label="Toggle mobile menu"
                            >
                                <div className="w-6 h-6 relative">
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                        className="absolute top-0 left-0 w-full h-0.5 bg-current transform origin-center transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300"
                                    />
                                    <motion.span
                                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                        className="absolute top-5 left-0 w-full h-0.5 bg-current transform origin-center transition-all duration-300"
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden bg-[#081A2C]/95 backdrop-blur-xl border-t border-[#1E88E5]/20 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="container mx-auto px-4 py-6 space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            onNavigate ? onNavigate(item.href) : window.location.href = item.href
                                            setIsMobileMenuOpen(false)
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                        className="block text-white hover:text-[#1E88E5] transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-[#0A3C64]/30 border-l-2 border-transparent hover:border-[#1E88E5] w-full text-left bg-transparent border-none cursor-pointer"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                {/* Mobile Actions */}
                                <div className="pt-4 border-t border-[#0A3C64]/30 space-y-3">
                                    {/* Mobile WhatsApp Button */}
                                    <motion.a
                                        href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center space-x-3 text-white hover:text-[#25D366] transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-[#0A3C64]/30 border border-[#25D366]/30"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                        <span>WhatsApp Us</span>
                                    </motion.a>

                                    {/* Mobile Primary CTA Button */}
                                    <motion.a
                                        href={primaryAction.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.3 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block bg-[#1E88E5] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#1976D2] transition-colors duration-300 text-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C]"
                                    >
                                        {primaryAction.label}
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;