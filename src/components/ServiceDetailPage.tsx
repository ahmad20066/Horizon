import React from 'react';
import { motion } from 'framer-motion';

interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    heroImage?: string;
    benefits: string[];
    process: {
        title: string;
        description: string;
        icon: string;
    }[];
    features: string[];
    cta: {
        headline: string;
        subheadline: string;
    };
}

const serviceDetails: Record<string, ServiceDetail> = {
    'content-creation': {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'Compelling stories that captivate your audience and drive meaningful engagement across all platforms.',
        benefits: [
            'Viral social media content that drives organic reach',
            'Engaging video content that tells your brand story',
            'Strategic content calendars aligned with business goals',
            'Multi-platform optimization for maximum impact',
            'Data-driven content strategies that convert'
        ],
        process: [
            {
                title: 'Discovery',
                description: 'We deep-dive into your brand, audience, and goals to understand what makes your story unique.',
                icon: '🔍'
            },
            {
                title: 'Strategy',
                description: 'Develop a comprehensive content plan that aligns with your marketing objectives and resonates with your audience.',
                icon: '📋'
            },
            {
                title: 'Creation',
                description: 'Our creative team brings ideas to life with stunning visuals, compelling copy, and engaging narratives.',
                icon: '✨'
            },
            {
                title: 'Distribution',
                description: 'Strategic publishing across the right channels at the right time for maximum engagement.',
                icon: '🚀'
            }
        ],
        features: [
            'Social Media Content',
            'Video Production',
            'Photography',
            'Copywriting',
            'Blog & Articles',
            'Infographics'
        ],
        cta: {
            headline: 'Ready to Create Content That Converts?',
            subheadline: 'Let\'s craft a content strategy that elevates your brand and drives real results.'
        }
    },
    'branding': {
        id: 'branding',
        title: 'Branding',
        description: 'Distinctive brand identities that stand out in competitive markets and create lasting impressions.',
        benefits: [
            'Complete brand identity systems that resonate',
            'Strategic positioning that differentiates you from competitors',
            'Cohesive visual language across all touchpoints',
            'Brand guidelines that ensure consistency',
            'Memorable brand experiences that build loyalty'
        ],
        process: [
            {
                title: 'Research',
                description: 'Market analysis, competitor research, and audience insights to inform strategy.',
                icon: '📊'
            },
            {
                title: 'Strategy',
                description: 'Define brand positioning, personality, values, and messaging framework.',
                icon: '🎯'
            },
            {
                title: 'Design',
                description: 'Create visual identity including logo, colors, typography, and brand assets.',
                icon: '🎨'
            },
            {
                title: 'Implementation',
                description: 'Roll out brand across all touchpoints with comprehensive guidelines.',
                icon: '📱'
            }
        ],
        features: [
            'Logo Design',
            'Brand Guidelines',
            'Visual Identity Systems',
            'Brand Messaging',
            'Packaging Design',
            'Brand Collateral'
        ],
        cta: {
            headline: 'Ready to Build a Brand That Stands Out?',
            subheadline: 'Let\'s create a distinctive identity that positions you for success.'
        }
    },
    'graphic-design': {
        id: 'graphic-design',
        title: 'Graphic Design',
        description: 'Visual storytelling that captures attention and communicates your message with impact.',
        benefits: [
            'Professional designs that elevate brand perception',
            'Consistent visual language across all materials',
            'Print-ready files with attention to detail',
            'Digital assets optimized for all platforms',
            'Creative solutions that solve business challenges'
        ],
        process: [
            {
                title: 'Brief',
                description: 'Understand your objectives, target audience, and design requirements.',
                icon: '📝'
            },
            {
                title: 'Concept',
                description: 'Develop creative concepts that align with your brand and goals.',
                icon: '💡'
            },
            {
                title: 'Design',
                description: 'Execute designs with precision, creativity, and attention to detail.',
                icon: '🖌️'
            },
            {
                title: 'Delivery',
                description: 'Provide final files in all required formats for print and digital use.',
                icon: '✅'
            }
        ],
        features: [
            'Marketing Materials',
            'Social Media Graphics',
            'Presentation Design',
            'Infographics',
            'Print Design',
            'Digital Banners'
        ],
        cta: {
            headline: 'Ready for Designs That Make an Impact?',
            subheadline: 'Let\'s create visuals that tell your story and drive results.'
        }
    },
    'printing': {
        id: 'printing',
        title: 'Printing',
        description: 'High-quality print solutions that bring your brand to life in the physical world.',
        benefits: [
            'Premium quality materials and finishes',
            'Fast turnaround without compromising quality',
            'Competitive pricing on all print services',
            'Expert guidance on materials and techniques',
            'End-to-end service from design to delivery'
        ],
        process: [
            {
                title: 'Consultation',
                description: 'Discuss your print needs, materials, quantities, and timeline.',
                icon: '🗣️'
            },
            {
                title: 'Preparation',
                description: 'Prepare files for print with color correction and quality checks.',
                icon: '⚙️'
            },
            {
                title: 'Production',
                description: 'Print using state-of-the-art equipment and premium materials.',
                icon: '🖨️'
            },
            {
                title: 'Delivery',
                description: 'Quality inspection and delivery to your location.',
                icon: '📦'
            }
        ],
        features: [
            'Business Cards',
            'Brochures & Flyers',
            'Banners & Signage',
            'Packaging',
            'Corporate Stationery',
            'Large Format Printing'
        ],
        cta: {
            headline: 'Ready for Premium Print Quality?',
            subheadline: 'Let\'s bring your designs to life with professional printing.'
        }
    },
    'events': {
        id: 'events',
        title: 'Events',
        description: 'Memorable experiences that create lasting impressions and drive meaningful engagement.',
        benefits: [
            'End-to-end event planning and execution',
            'Creative concepts that align with brand objectives',
            'Professional event management and coordination',
            'Vendor management and logistics',
            'Post-event analysis and reporting'
        ],
        process: [
            {
                title: 'Planning',
                description: 'Define event objectives, budget, timeline, and creative concept.',
                icon: '📅'
            },
            {
                title: 'Design',
                description: 'Develop event branding, materials, and experiential elements.',
                icon: '🎭'
            },
            {
                title: 'Execution',
                description: 'Manage all logistics, vendors, and on-site coordination.',
                icon: '🎪'
            },
            {
                title: 'Follow-up',
                description: 'Post-event analysis, reporting, and relationship nurturing.',
                icon: '📈'
            }
        ],
        features: [
            'Product Launches',
            'Corporate Events',
            'Conferences',
            'Brand Activations',
            'VIP Events',
            'Exhibitions'
        ],
        cta: {
            headline: 'Ready to Create Unforgettable Events?',
            subheadline: 'Let\'s design experiences that leave lasting impressions.'
        }
    },
    'social-media': {
        id: 'social-media',
        title: 'Social Media',
        description: 'Strategic social media management that builds communities and drives business results.',
        benefits: [
            'Comprehensive social media strategy',
            'Consistent, engaging content across platforms',
            'Community management and engagement',
            'Paid social advertising campaigns',
            'Analytics and performance reporting'
        ],
        process: [
            {
                title: 'Audit',
                description: 'Analyze current social presence, competitors, and opportunities.',
                icon: '🔍'
            },
            {
                title: 'Strategy',
                description: 'Develop platform strategy, content pillars, and posting schedule.',
                icon: '📱'
            },
            {
                title: 'Content',
                description: 'Create and schedule engaging content tailored to each platform.',
                icon: '📸'
            },
            {
                title: 'Optimize',
                description: 'Monitor performance, engage with audience, and refine strategy.',
                icon: '📊'
            }
        ],
        features: [
            'Content Strategy',
            'Content Creation',
            'Community Management',
            'Paid Advertising',
            'Influencer Partnerships',
            'Analytics & Reporting'
        ],
        cta: {
            headline: 'Ready to Dominate Social Media?',
            subheadline: 'Let\'s build a social presence that drives real business results.'
        }
    },
    'web-development': {
        id: 'web-development',
        title: 'Web Development',
        description: 'Modern, responsive websites and applications that combine stunning design with powerful functionality.',
        benefits: [
            'Custom websites built for your specific needs',
            'Responsive design that works on all devices',
            'Fast loading speeds and optimal performance',
            'SEO-optimized for better search rankings',
            'Secure, scalable, and maintainable code'
        ],
        process: [
            {
                title: 'Discovery',
                description: 'Understand your business goals, target audience, and requirements.',
                icon: '🎯'
            },
            {
                title: 'Design',
                description: 'Create wireframes, mockups, and prototypes for your approval.',
                icon: '🎨'
            },
            {
                title: 'Development',
                description: 'Build your website using modern technologies and best practices.',
                icon: '💻'
            },
            {
                title: 'Launch',
                description: 'Test, deploy, and provide ongoing support and maintenance.',
                icon: '🚀'
            }
        ],
        features: [
            'Custom Websites',
            'E-commerce Solutions',
            'Web Applications',
            'CMS Integration',
            'API Development',
            'Maintenance & Support'
        ],
        cta: {
            headline: 'Ready for a Website That Converts?',
            subheadline: 'Let\'s build a digital experience that drives business growth.'
        }
    },
    'vip-media': {
        id: 'vip-media',
        title: 'VIP Media',
        description: 'Exclusive media production and celebrity partnerships that elevate your brand to luxury status.',
        benefits: [
            'High-end media production for premium brands',
            'Celebrity and influencer partnerships',
            'Exclusive event coverage and content',
            'Premium brand positioning and storytelling',
            'Access to VIP networks and opportunities'
        ],
        process: [
            {
                title: 'Concept',
                description: 'Develop premium content concepts aligned with luxury positioning.',
                icon: '✨'
            },
            {
                title: 'Partnership',
                description: 'Identify and secure celebrity/influencer partnerships.',
                icon: '🤝'
            },
            {
                title: 'Production',
                description: 'Execute high-end production with professional crew and equipment.',
                icon: '🎬'
            },
            {
                title: 'Distribution',
                description: 'Strategic release across premium channels and platforms.',
                icon: '📺'
            }
        ],
        features: [
            'Celebrity Partnerships',
            'Premium Content Production',
            'VIP Event Coverage',
            'Luxury Brand Campaigns',
            'Influencer Collaborations',
            'Exclusive Content'
        ],
        cta: {
            headline: 'Ready for Premium Brand Elevation?',
            subheadline: 'Let\'s create exclusive content that positions you at the top.'
        }
    },
    'corporate-gifts': {
        id: 'corporate-gifts',
        title: 'Corporate Gifts',
        description: 'Thoughtful corporate gifting solutions that strengthen relationships and reinforce brand values.',
        benefits: [
            'Custom-branded gifts that make lasting impressions',
            'Wide selection of premium gift options',
            'Professional packaging and presentation',
            'Timely delivery and logistics management',
            'Scalable solutions for any size organization'
        ],
        process: [
            {
                title: 'Consultation',
                description: 'Understand your gifting objectives, budget, and recipient profiles.',
                icon: '💼'
            },
            {
                title: 'Selection',
                description: 'Choose from curated options or develop custom gift concepts.',
                icon: '🎁'
            },
            {
                title: 'Customization',
                description: 'Add branding, personalization, and premium packaging.',
                icon: '🏷️'
            },
            {
                title: 'Delivery',
                description: 'Handle logistics, packaging, and delivery to recipients.',
                icon: '🚚'
            }
        ],
        features: [
            'Custom Branded Gifts',
            'Premium Gift Sets',
            'Employee Recognition',
            'Client Appreciation',
            'Event Gifts',
            'Seasonal Campaigns'
        ],
        cta: {
            headline: 'Ready to Make a Lasting Impression?',
            subheadline: 'Let\'s create corporate gifts that strengthen your relationships.'
        }
    }
};

interface ServiceDetailPageProps {
    serviceId: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
    const service = serviceDetails[serviceId];

    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <p className="text-white/70 mb-8">The service you're looking for doesn't exist.</p>
                    <a
                        href="#home"
                        className="px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold rounded-lg transition-all duration-300"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        );
    }

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

    return (
        <div className="bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#081A2C]/80 via-[#0A3C64]/40 to-[#081A2C]/80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <div className="text-[20rem] font-bold text-white">
                            {service.title.charAt(0)}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center py-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mb-6 px-4 py-2 bg-[#1E88E5]/20 border border-[#1E88E5]/30 rounded-full"
                    >
                        <span className="text-[#1E88E5] font-semibold">Our Services</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {service.title}
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                        {service.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="#home"
                            className="px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/10 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            View All Services
                        </a>
                    </div>
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

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why Choose Our {service.title}?
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            We deliver excellence through proven processes and expert execution.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {service.benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1E88E5]/30 transition-all duration-300"
                            >
                                <div className="w-6 h-6 bg-[#1E88E5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="text-white/90 leading-relaxed">{benefit}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0A3C64]/20 to-[#1E88E5]/10">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            A proven methodology that delivers results every time.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {service.process.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1E88E5]/30 transition-all duration-300 h-full">
                                    <div className="text-5xl mb-4">{step.icon}</div>
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < service.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            What We Deliver
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Comprehensive solutions tailored to your specific needs.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {service.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#1E88E5]/30 hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                <p className="text-white font-semibold">{feature}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#0A3C64]/30 to-[#1E88E5]/20">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {service.cta.headline}
                        </h2>
                        <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                            {service.cta.subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-[#1E88E5] hover:bg-[#1976D2] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="https://wa.me/971554195656"
                                className="px-8 py-4 border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5]/10 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
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

export default ServiceDetailPage;
