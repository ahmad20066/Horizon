import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface HeroProps {
    eyebrowAr?: string;
    title?: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    stats?: { label: string }[];
    videoSrc?: string;
    posterSrc?: string;
}

const HeroSection: React.FC<HeroProps> = ({
    eyebrowAr = "شريكك التسويقي",
    subtitle = "Advertising Agency in dubai",
    primaryCta = { label: "Start Your Project", href: "#contact" },
    secondaryCta = { label: "View Our Work", href: "#work" },
    stats = [
        { label: "217+ Happy Clients" },
        { label: "312+ Projects" },
        { label: "3+ Awards" }
    ],
    videoSrc,
    posterSrc = "/media/office.webp"
}) => {
    const [countUpValues, setCountUpValues] = useState([0, 0, 0]);
    const statsRef = useRef<HTMLDivElement>(null);
    const isStatsInView = useInView(statsRef, { once: true });

    // Count-up animation for stats
    useEffect(() => {
        if (isStatsInView) {
            const targets = [217, 312, 3];
            const durations = [2000, 2200, 1500];

            targets.forEach((target, index) => {
                let start = 0;
                const increment = target / (durations[index] / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        start = target;
                        clearInterval(timer);
                    }
                    setCountUpValues(prev => {
                        const newValues = [...prev];
                        newValues[index] = Math.floor(start);
                        return newValues;
                    });
                }, 16);
            });
        }
    }, [isStatsInView]);

    // Enhanced floating shapes animation variants
    const floatingShapeVariants = {
        animate: {
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1] as const
            }
        }
    };

    const floatingShapeVariants2 = {
        animate: {
            y: [0, 25, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
            opacity: [0.15, 0.35, 0.15],
            transition: {
                duration: 18,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1] as const,
                delay: 2
            }
        }
    };

    const floatingShapeVariants3 = {
        animate: {
            y: [0, -20, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180],
            opacity: [0.05, 0.2, 0.05],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1] as const,
                delay: 4
            }
        }
    };


    return (
        <>
            <section
                aria-label="Horizon Top hero"
                className="relative min-h-screen bg-gradient-to-br from-[#081A2C] via-[#0A3C64] to-[#081A2C] overflow-hidden"
            >
                {/* Particle Field Background */}
                {/* Enhanced Floating Background Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        variants={floatingShapeVariants}
                        animate="animate"
                        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#1E88E5] to-[#0A3C64] rounded-full blur-3xl"
                    />
                    <motion.div
                        variants={floatingShapeVariants2}
                        animate="animate"
                        className="absolute top-1/3 right-32 w-48 h-48 bg-gradient-to-tr from-[#0A3C64] to-[#1E88E5] rounded-full blur-3xl"
                    />
                    <motion.div
                        variants={floatingShapeVariants3}
                        animate="animate"
                        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-bl from-[#1E88E5] via-[#0A3C64] to-transparent rounded-full blur-3xl"
                    />

                    {/* Additional geometric shapes */}
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-[#1E88E5]/20 rounded-lg"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081A2C]/50 to-[#081A2C]/80" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12">

                        {/* Visual Column - First on Mobile, Second on Desktop */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                            className="relative order-1 lg:order-2 max-w-sm mx-auto lg:max-w-md"
                        >
                            {/* Enhanced Background behind circle */}
                            <motion.div
                                className="absolute -inset-6 z-0"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Background Image */}
                                    <img
                                        src="/media/background.png"
                                        alt="Background"
                                        className="w-full h-full object-cover rounded-full opacity-50"
                                    />

                                    {/* Animated Gradient Overlay */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        animate={{
                                            background: [
                                                "radial-gradient(circle at 30% 30%, rgba(30, 136, 229, 0.3) 0%, rgba(8, 26, 44, 0.6) 50%, rgba(10, 60, 100, 0.4) 100%)",
                                                "radial-gradient(circle at 70% 70%, rgba(10, 60, 100, 0.4) 0%, rgba(30, 136, 229, 0.3) 50%, rgba(8, 26, 44, 0.6) 100%)",
                                                "radial-gradient(circle at 30% 30%, rgba(30, 136, 229, 0.3) 0%, rgba(8, 26, 44, 0.6) 50%, rgba(10, 60, 100, 0.4) 100%)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Subtle Pulse Ring */}
                                    <motion.div
                                        className="absolute inset-2 border-2 border-[#1E88E5]/20 rounded-full"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Outer Glow */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#1E88E5]/10 via-transparent to-[#0A3C64]/10 rounded-full blur-xl" />
                                </div>
                            </motion.div>

                            <div className="relative z-10 rounded-full overflow-hidden bg-gradient-to-br from-[#0A3C64] to-[#081A2C] p-1 aspect-square">
                                <div className="relative rounded-full overflow-hidden bg-black w-full h-full">
                                    {/* Logo Mark Placeholder */}
                                    <div className="absolute top-4 left-4 z-10 w-12 h-12 bg-[#1E88E5] rounded-full flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                            <path
                                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2 17L12 22L22 17"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2 12L12 17L22 12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    {/* Enhanced Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A2C] via-[#081A2C]/20 to-transparent opacity-80 z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5]/10 to-transparent opacity-50 z-10" />

                                    {/* Video or Image */}
                                    {videoSrc ? (
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            poster={posterSrc}
                                            className="w-full h-full object-cover"
                                            aria-label="Horizon Top office and team showcase video"
                                            title="Horizon Top Marketing Agency"
                                        >
                                            <source src={videoSrc} type="video/mp4" />
                                            <img
                                                src={posterSrc}
                                                alt="Horizon Top office and team"
                                                className="w-full h-full object-cover"
                                                loading="eager"
                                            />
                                        </video>
                                    ) : (
                                        <img
                                            src={posterSrc}
                                            alt="Horizon Top office and team"
                                            className="w-full h-full object-cover"
                                            loading="eager"
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column - Second on Mobile, First on Desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                        >
                            {/* Arabic Eyebrow */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 justify-center lg:justify-start mb-2"
                            >
                                <motion.div
                                    className="h-px w-8 bg-gradient-to-r from-transparent to-[#1E88E5]"
                                    initial={{ width: 0 }}
                                    animate={{ width: 32 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                                <p className="text-[#1E88E5] text-sm font-medium tracking-wider" style={{ direction: 'rtl' }}>
                                    {eyebrowAr}
                                </p>
                                <motion.div
                                    className="h-px w-8 bg-gradient-to-l from-transparent to-[#1E88E5]"
                                    initial={{ width: 0 }}
                                    animate={{ width: 32 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </motion.div>

                            {/* Main Title with Gradient */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.3, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight relative"
                            >
                                <span className="block text-white">
                                    BE ON THE
                                </span>
                                <span className="block text-[#1E88E5] font-black">
                                    TOP
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="space-y-2 mb-8"
                            >
                                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                                    {subtitle}
                                </p>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                                    Creatively turn ideas into impactful messages of value.
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10"
                            >
                                <motion.a
                                    href={primaryCta.href}
                                    role="button"
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1E88E5] to-[#1976D2] text-white font-semibold rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] text-lg sm:text-xl relative overflow-hidden"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">{primaryCta.label}</span>
                                    <motion.svg
                                        className="ml-2 w-5 h-5 relative z-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </motion.svg>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#1976D2] to-[#1E88E5]"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>

                                <motion.a
                                    href={secondaryCta.href}
                                    role="button"
                                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] font-semibold rounded-lg hover:text-white hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] text-lg sm:text-xl relative overflow-hidden backdrop-blur-sm"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">{secondaryCta.label}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#1E88E5] to-[#1976D2]"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    />
                                </motion.a>
                            </motion.div>

                            {/* Trust Stats */}
                            <motion.div
                                ref={statsRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            >
                                {stats.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                                        className="bg-gradient-to-r from-[#0A3C64]/50 to-[#1E88E5]/20 backdrop-blur-md px-5 py-3 rounded-full border border-[#1E88E5]/40 shadow-lg hover:shadow-xl hover:border-[#1E88E5]/60 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <span className="text-white font-medium text-base sm:text-lg">
                                            {index === 0 ? `${countUpValues[0]}+ Happy Clients` :
                                                index === 1 ? `${countUpValues[1]}+ Projects` :
                                                    `${countUpValues[2]}+ Awards`}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;
