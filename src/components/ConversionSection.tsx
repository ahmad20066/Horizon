import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ConversionSectionProps {
    headline?: string;
    subheading?: string;
    whatsappNumber?: string;
    phoneNumber?: string;
    address?: string;
    email?: string;
}

const ConversionSection: React.FC<ConversionSectionProps> = ({
    headline = "Ready to Be On The Top?",
    subheading = "Let's create campaigns that stand out.",
    whatsappNumber = "+971554195656",
    phoneNumber = "+971 55 419 5656",
    address = "UAE - DUBAI - Business Bay - The Prism Tower - 3304",
    email = "info@horizontop.ae"
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1] as const
            }
        }
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#1E88E5]/20 to-[#0A3C64]/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tr from-[#0A3C64]/20 to-[#1E88E5]/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 0.8, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                >
                    {/* Left Column - Content & Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                            >
                                {headline}
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl lg:text-2xl text-white/80 leading-relaxed"
                            >
                                {subheading}
                            </motion.p>
                        </div>

                        {/* Contact Options */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>

                            {/* WhatsApp Button */}
                            <motion.a
                                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:from-[#25D366]/30 hover:to-[#25D366]/20 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">WhatsApp</p>
                                    <p className="text-white/70 text-sm">{whatsappNumber}</p>
                                </div>
                            </motion.a>

                            {/* Phone Button */}
                            <motion.a
                                href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}
                                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-[#1E88E5]/20 to-[#1E88E5]/10 border border-[#1E88E5]/30 rounded-xl hover:from-[#1E88E5]/30 hover:to-[#1E88E5]/20 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-12 h-12 bg-[#1E88E5] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Call Us</p>
                                    <p className="text-white/70 text-sm">{phoneNumber}</p>
                                </div>
                            </motion.a>

                            {/* Location & Email */}
                            <motion.div variants={itemVariants} className="space-y-4 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 text-[#1E88E5] mt-1">
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Location</p>
                                        <p className="text-white/70">{address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 text-[#1E88E5] mt-1">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <a href={`mailto:${email}`} className="text-[#1E88E5] hover:text-[#1976D2] transition-colors">
                                            {email}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div variants={itemVariants} className="lg:pl-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2">
                                            Email Address
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

                                    <div>
                                        <label htmlFor="message" className="block text-white font-medium mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-[#1E88E5] to-[#1976D2] text-white font-semibold rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <span>Start Your Project</span>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        )}
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                                    <p className="text-white/70">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConversionSection;
