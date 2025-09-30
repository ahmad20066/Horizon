import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {
    heroHeadline?: string;
    heroSubline?: string;
    whatsappNumber?: string;
    phoneNumber?: string;
    address?: string;
    email?: string;
    officeHours?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({
    heroHeadline = "Let's Start Your Journey to the Top",
    heroSubline = "Ready to transform your brand? We're here to make it happen.",
    whatsappNumber = "+971554195656",
    phoneNumber = "+971 55 419 5656",
    address = "UAE - DUBAI - Business Bay - The Prism Tower - 3304",
    email = "info@horizontop.ae",
    officeHours = "Sunday - Thursday: 9:00 AM - 6:00 PM"
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
        }, 5000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1] as const,
            },
        },
    };

    const services = [
        "Branding & Identity",
        "Digital Marketing",
        "Social Media Management",
        "Content Creation",
        "Web Development",
        "Print Design",
        "Event Management",
        "Video Production",
        "Other"
    ];

    const budgetRanges = [
        "Under $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "$50,000 - $100,000",
        "Over $100,000"
    ];

    return (
        <div className="bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1E88E5]/10 to-[#0A3C64]/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-[#0A3C64]/10 to-[#1E88E5]/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 0.8, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Arabic Eyebrow */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[#1E88E5]/80 text-sm sm:text-base font-medium tracking-wider mb-4 sm:mb-6"
                    >
                        تواصل معنا
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
                    >
                        {heroHeadline}
                    </motion.h1>

                    {/* Subline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {heroSubline}
                    </motion.p>

                    {/* Quick Contact Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                    >
                        <motion.a
                            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20B858] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                            </svg>
                            WhatsApp Us
                        </motion.a>
                        <motion.a
                            href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
                            className="flex items-center gap-3 px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/10 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Call Now
                        </motion.a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Information - Left Side */}
                        <motion.div
                            className="lg:col-span-2 space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
                        >
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-white/80 leading-relaxed mb-8">
                                    Ready to elevate your brand? Let's discuss your project and create something amazing together.
                                </p>
                            </div>

                            {/* Contact Methods */}
                            <div className="space-y-6">
                                {/* Office Location */}
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-[#1E88E5]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#1E88E5]">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Visit Our Office</h3>
                                        <p className="text-white/70 leading-relaxed">{address}</p>
                                        <p className="text-[#1E88E5] text-sm mt-2">{officeHours}</p>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-[#1E88E5]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#1E88E5]">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Email Us</h3>
                                        <a href={`mailto:${email}`} className="text-[#1E88E5] hover:text-[#1976D2] transition-colors">
                                            {email}
                                        </a>
                                        <p className="text-white/70 text-sm mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-12 h-12 bg-[#1E88E5]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#1E88E5]">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Call Us</h3>
                                        <a href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`} className="text-[#1E88E5] hover:text-[#1976D2] transition-colors">
                                            {phoneNumber}
                                        </a>
                                        <p className="text-white/70 text-sm mt-1">Available during office hours</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {[
                                        { name: "Instagram", href: "https://instagram.com/horizontop.ae", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                                        { name: "LinkedIn", href: "https://linkedin.com/company/horizontop", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                                        { name: "Facebook", href: "https://facebook.com/horizontop.ae", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white/10 hover:bg-[#1E88E5]/20 border border-white/20 hover:border-[#1E88E5]/40 rounded-lg flex items-center justify-center text-white/70 hover:text-[#1E88E5] transition-all duration-300"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d={social.icon} />
                                            </svg>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form - Right Side */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-white/10">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Start Your Project</h3>
                                <p className="text-white/70 mb-8">Tell us about your vision and we'll bring it to life.</p>

                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name & Email Row */}
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone & Company Row */}
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-white font-medium mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                    placeholder="+971 XX XXX XXXX"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-white font-medium mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                    placeholder="Your company"
                                                />
                                            </div>
                                        </div>

                                        {/* Service & Budget Row */}
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="service" className="block text-white font-medium mb-2">
                                                    Service Needed
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                >
                                                    <option value="" className="bg-[#081A2C] text-white">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service} className="bg-[#081A2C] text-white">
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="budget" className="block text-white font-medium mb-2">
                                                    Project Budget
                                                </label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                                >
                                                    <option value="" className="bg-[#081A2C] text-white">Select budget range</option>
                                                    {budgetRanges.map((budget, index) => (
                                                        <option key={index} value={budget} className="bg-[#081A2C] text-white">
                                                            {budget}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-white font-medium mb-2">
                                                Project Details *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-[#1E88E5] to-[#1976D2] text-white font-semibold rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center gap-3">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Sending Your Message...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center gap-3">
                                                    <span>Send Message & Start Project</span>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </motion.button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                                        <p className="text-white/70 text-lg leading-relaxed">
                                            Thank you for reaching out! Our team will review your project details and get back to you within 24 hours with a personalized proposal.
                                        </p>
                                        <div className="mt-6 p-4 bg-[#1E88E5]/10 rounded-lg border border-[#1E88E5]/20">
                                            <p className="text-[#1E88E5] font-medium">
                                                Need immediate assistance? Call us at {phoneNumber}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0A3C64]/20 to-[#1E88E5]/10">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as const }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Visit Our Dubai Office
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Located in the heart of Business Bay, we're easily accessible and ready to welcome you for a consultation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
                    >
                        <div className="aspect-video bg-gradient-to-br from-[#1E88E5]/20 to-[#0A3C64]/20 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#1E88E5]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#1E88E5]">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
                                <p className="text-white/70 mb-4">Click to view our location on Google Maps</p>
                                <motion.a
                                    href="https://maps.google.com/?q=Business+Bay+Dubai+Prism+Tower"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-medium rounded-lg transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Open in Google Maps
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
