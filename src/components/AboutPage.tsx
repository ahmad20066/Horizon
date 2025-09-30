import React from 'react';
import { motion } from 'framer-motion';

interface AboutPageProps {
    heroVideoSrc?: string;
    heroPosterSrc?: string;
    heroHeadline?: string;
    heroSubline?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    stats?: { label: string; value: string }[];
}

const AboutPage: React.FC<AboutPageProps> = ({
    heroVideoSrc,
    heroPosterSrc = "/media/office.jpg",
    heroHeadline = "We Build Brands That Stand Out & Stay On Top.",
    heroSubline = "At Horizon Top, we turn creativity and strategy into marketing impact.",
    primaryCta = { label: "Start Your Project", href: "#contact" },
    secondaryCta = { label: "See Our Work", href: "#work" },
    stats = [
        { label: "Happy Clients", value: "217+" },
        { label: "Projects", value: "312+" },
        { label: "Awards", value: "3+" }
    ]
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <div className="bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
                {/* Background Media */}
                <div className="absolute inset-0 z-0">
                    {heroVideoSrc ? (
                        <video
                            className="w-full h-full object-cover"
                            poster={heroPosterSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={heroVideoSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={heroPosterSrc}
                            alt="Horizon Top Office"
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#081A2C]/80 via-[#0A3C64]/60 to-[#081A2C]/80" />

                    {/* Background Logo Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <img
                            src="/media/background.png"
                            alt="Horizon Top Background"
                            className="w-96 h-96 object-contain"
                        />
                    </div>
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
                        شريكك التسويقي
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

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
                    >
                        <a
                            href={primaryCta.href}
                            className="w-full sm:w-auto px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C]"
                        >
                            {primaryCta.label}
                        </a>
                        <a
                            href={secondaryCta.href}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/10 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C]"
                        >
                            {secondaryCta.label}
                        </a>
                    </motion.div>

                    {/* Stats Strip */}
                    {stats && stats.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center mb-16 sm:mb-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-[#1E88E5] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm sm:text-base text-white/70">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Brand Story Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                            Our Story
                        </h2>
                        <div className="text-lg sm:text-xl text-white/80 leading-relaxed space-y-6">
                            <p>
                                Horizon Top is an Emirati Advertising Agency in Dubai that provides advertising
                                and marketing services. Additionally, it is registered and licensed in the United
                                Arab Emirates, specifically in Dubai, and operates in compliance with labor laws.
                            </p>
                            <p>
                                We have a dynamic team of media enthusiasts, marketing strategists, video production
                                experts, and print aficionados. Moreover, with four years of experience, we have
                                consistently been at the forefront of brand development, crafting impactful narratives,
                                and transforming ideas into captivating visuals.
                            </p>
                            <p>
                                From content creation to comprehensive branding, from social media strategies to
                                large-scale events, we've helped over 217 clients transform their vision into
                                market-leading realities. Our bilingual expertise in Arabic and English markets
                                gives us a unique edge in the UAE's diverse business landscape.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0A3C64]/20 to-[#1E88E5]/10">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                            Dynamic media enthusiasts, marketing strategists, video production experts, and print aficionados.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
                        {[
                            {
                                name: "Akram Jarwan",
                                position: "CEO",
                                image: "/media/team/akram.png"
                            },
                            {
                                name: "Ahmad Alyas",
                                position: "Social Media Specialist",
                                image: "/media/team/ahmad.png"
                            },
                            {
                                name: "Said Ahmad",
                                position: "Advertising Campaign Manager",
                                image: "/media/team/said.png"
                            },
                            {
                                name: "Rana Abod",
                                position: "Graphic Designer",
                                image: "/media/team/rana.png"
                            },
                            {
                                name: "Dana Sami",
                                position: "Content Writer",
                                image: "/media/team/dana.png"
                            },
                            {
                                name: "Noor Alhuda",
                                position: "Event Manager",
                                image: "/media/team/noor.png"
                            },
                            {
                                name: "Zaki Ali",
                                position: "Production Manager",
                                image: "/media/team/zaki.png"
                            },
                            {
                                name: "Hadi Allam",
                                position: "Videographer, Editor",
                                image: "/media/team/hadi.png"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.19, 1, 0.22, 1]
                                }}
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1E88E5]/30 transition-all duration-300 hover:transform hover:scale-105">
                                    <div className="relative mb-4">
                                        <div className="w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[#1E88E5]/20 to-[#0A3C64]/20 flex items-center justify-center">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    // Fallback to initials if image fails to load
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const initials = member.name.split(' ').map(n => n[0]).join('');
                                                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1E88E5] to-[#0A3C64] text-white text-2xl font-bold rounded-full">${initials}</div>`;
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#1E88E5] font-medium text-sm sm:text-base">
                                            {member.position}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Expertise Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Expertise That Delivers
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                            Our team combines creative vision with strategic thinking to deliver results that matter.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Creative Strategy",
                                description: "Turning ideas into compelling narratives that connect with your audience.",
                                icon: "🎨"
                            },
                            {
                                title: "Digital Marketing",
                                description: "Data-driven campaigns that maximize ROI across all digital channels.",
                                icon: "📱"
                            },
                            {
                                title: "Brand Development",
                                description: "Building cohesive brand identities that stand out in competitive markets.",
                                icon: "🏆"
                            },
                            {
                                title: "Content Creation",
                                description: "Engaging content that tells your story and drives meaningful engagement.",
                                icon: "✍️"
                            },
                            {
                                title: "Event Management",
                                description: "Memorable experiences that create lasting impressions and drive results.",
                                icon: "🎪"
                            },
                            {
                                title: "Print & Production",
                                description: "High-quality materials that bring your brand to life in the physical world.",
                                icon: "🖨️"
                            }
                        ].map((expertise, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#1E88E5]/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.19, 1, 0.22, 1]
                                }}
                            >
                                <div className="text-4xl mb-4">{expertise.icon}</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                    {expertise.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {expertise.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Why Choose Horizon Top?
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                            We're not just service providers – we're your partners in success.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Logo Container - First on mobile, second on desktop */}
                        <motion.div
                            className="relative order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        >
                            <div className="bg-gradient-to-br from-[#1E88E5]/20 to-[#0A3C64]/20 rounded-3xl p-8 sm:p-12 border border-[#1E88E5]/30">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                        <img
                                            src="/media/logo.png"
                                            alt="Horizon Top Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        Be On The Top
                                    </h3>
                                    <p className="text-white/80 text-lg leading-relaxed">
                                        Our tagline isn't just a promise – it's our commitment to elevating
                                        your brand above the competition through strategic creativity and
                                        measurable results.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bullet Points - Second on mobile, first on desktop */}
                        <motion.div
                            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        >
                            {[
                                {
                                    title: "Local Expertise, Global Standards",
                                    description: "Deep understanding of UAE markets with international best practices."
                                },
                                {
                                    title: "Bilingual Excellence",
                                    description: "Native fluency in Arabic and English for authentic market connection."
                                },
                                {
                                    title: "Results-Driven Approach",
                                    description: "Every strategy is built around measurable outcomes and ROI."
                                },
                                {
                                    title: "End-to-End Solutions",
                                    description: "From concept to execution, we handle every aspect of your marketing needs."
                                }
                            ].map((point, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.19, 1, 0.22, 1]
                                    }}
                                >
                                    <div className="w-6 h-6 bg-[#1E88E5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/70">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0A3C64]/30 to-[#1E88E5]/20">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                            Ready to Be On The Top?
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed">
                            Let's discuss how we can transform your brand and drive the results you need.
                            Your success story starts with a conversation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C]"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="https://wa.me/971554195656"
                                className="px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/10 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] flex items-center justify-center gap-2"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
