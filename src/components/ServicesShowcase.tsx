import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Service Item Type
type ServiceItem = {
    id: string;
    title: string;
    blurb: string;
    caseSnippet?: string;
    icon: React.ReactNode;
};

// Component Props
type ServicesShowcaseProps = {
    heading?: string;
    subheading?: string;
    items?: ServiceItem[];
    columns?: 2 | 3 | 4;
    onNavigate?: (href: string) => void;
};

// Default service items with inline SVG icons
const defaultItems: ServiceItem[] = [
    {
        id: 'content-creation',
        title: 'Content Creation',
        blurb: 'Compelling stories that captivate your audience',
        caseSnippet: 'From viral social posts to engaging video content, we craft narratives that drive engagement and build lasting connections.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
            </svg>
        ),
    },
    {
        id: 'branding',
        title: 'Branding',
        blurb: 'Distinctive identities that stand out',
        caseSnippet: 'Complete brand transformations that elevate market presence and create memorable customer experiences across all touchpoints.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6" />
                <path d="m15.14 8.86 4.24-4.24" />
                <path d="m4.62 19.38 4.24-4.24" />
                <path d="m8.86 8.86-4.24-4.24" />
                <path d="m19.38 19.38-4.24-4.24" />
            </svg>
        ),
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        blurb: 'Visual excellence that communicates perfectly',
        caseSnippet: 'Award-winning designs that blend creativity with strategy, delivering impactful visuals that resonate with your target audience.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
        ),
    },
    {
        id: 'printing',
        title: 'Printing',
        blurb: 'Premium quality materials that impress',
        caseSnippet: 'From business cards to large format displays, we deliver exceptional print quality that brings your brand to life in the physical world.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6,9 6,2 18,2 18,9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
            </svg>
        )
    },
    {
        id: 'event-management',
        title: 'Event Management',
        blurb: 'Memorable experiences that leave lasting impressions',
        caseSnippet: 'End-to-end event planning and execution, from intimate corporate gatherings to large-scale brand activations that create buzz.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="m9 16 2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'social-media',
        title: 'Social Media',
        blurb: 'Strategic campaigns that drive engagement',
        caseSnippet: 'Data-driven social strategies that build communities, increase reach, and convert followers into loyal customers across all platforms.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        id: 'web-development',
        title: 'Web Development',
        blurb: 'Digital experiences that convert visitors',
        caseSnippet: 'Modern, responsive websites and applications that combine stunning design with powerful functionality to drive business growth.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        id: 'vip-media',
        title: 'VIP Media',
        blurb: 'Exclusive content for premium brands',
        caseSnippet: 'High-end media production and celebrity partnerships that elevate your brand to luxury status and capture premium market attention.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        id: 'corporate-gifts',
        title: 'Corporate Gifts',
        blurb: 'Thoughtful gifts that strengthen relationships',
        caseSnippet: 'Custom corporate gifting solutions that make lasting impressions on clients, partners, and employees while reinforcing brand values.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
                <path d="m9 17 5 5L22 6" />
            </svg>
        )
    }
];

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
    heading = "Our Creative Capabilities",
    subheading = "Comprehensive marketing solutions that drive results and elevate your brand presence",
    items = defaultItems,
    columns = 3,
    onNavigate
}) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const toggleExpanded = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const getColumnClass = () => {
        switch (columns) {
            case 2: return 'md:grid-cols-2 lg:grid-cols-2';
            case 3: return 'md:grid-cols-2 lg:grid-cols-3';
            case 4: return 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
            default: return 'md:grid-cols-2 lg:grid-cols-3';
        }
    };

    // Container variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    // Item variants for individual tiles
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.19, 1, 0.22, 1] as const
            }
        }
    };

    return (
        <section
            className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] relative overflow-hidden"
            aria-label="Services showcase"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,136,229,0.1)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(10,60,100,0.08)_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 lg:mb-16"
                >
                    {/* Arabic Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 justify-center mb-4"
                    >
                        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#1E88E5]" />
                        <span className="text-[#1E88E5] text-sm font-medium tracking-wider">
                            شريكك التسويقي
                        </span>
                        <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#1E88E5]" />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        {heading}
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {subheading}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={`grid grid-cols-1 ${getColumnClass()} gap-6 lg:gap-8`}
                >
                    {items.map((item) => {
                        const isExpanded = expandedItems.has(item.id);
                        const isHovered = hoveredItem === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => setHoveredItem(item.id)}
                                onHoverEnd={() => setHoveredItem(null)}
                                className="group"
                            >
                                <div
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleExpanded(item.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleExpanded(item.id);
                                        }
                                    }}
                                    className="relative rounded-2xl p-4 sm:p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(30,136,229,0.15)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2 focus:ring-offset-[#081A2C] h-full flex flex-col"
                                >
                                    {/* Icon */}
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E88E5] to-[#0A3C64] flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Title & Blurb */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E88E5] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                                            {item.blurb}
                                        </p>
                                    </div>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {(isExpanded || (isHovered && window.innerWidth >= 1024)) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, height: 0 }}
                                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                exit={{ opacity: 0, y: 10, height: 0 }}
                                                transition={{ duration: 0.22, ease: "easeOut" }}
                                                className="mt-4 pt-4 border-t border-white/10"
                                            >
                                                {/* Case Snippet */}
                                                {item.caseSnippet && (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.1 }}
                                                        className="text-white/80 text-sm leading-relaxed mb-4"
                                                    >
                                                        {item.caseSnippet}
                                                    </motion.p>
                                                )}


                                                {/* Learn More CTA */}
                                                <motion.button
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (onNavigate) {
                                                            onNavigate(`#service/${item.id}`);
                                                        }
                                                    }}
                                                    className="flex items-center text-[#1E88E5] text-sm font-medium group/cta hover:text-white transition-colors duration-200"
                                                >
                                                    <span>Learn more</span>
                                                    <svg
                                                        className="w-4 h-4 ml-1 group-hover/cta:translate-x-1 transition-transform duration-200"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </motion.button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesShowcase;