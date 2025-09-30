import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Types
interface CaseStudy {
    id: string;
    title: string;
    client: string;
    clientLogo: string;
    category: string;
    idea: string;
    execution: string;
    result: string;
    testimonial: {
        quote: string;
        author: string;
        position: string;
    };
    media: {
        type: 'image' | 'video';
        src: string;
        poster?: string;
        alt: string;
    };
    tags: string[];
}

interface CaseStudiesProps {
    heading?: string;
    subheading?: string;
    cases?: CaseStudy[];
}

// Default case studies data
const defaultCases: CaseStudy[] = [
    {
        id: 'case-1',
        title: 'Digital Transformation for Luxury Retail',
        client: 'Premium Jewellery Brand',
        clientLogo: '/media/clients/logo1.png',
        category: 'E-commerce & Branding',
        idea: 'Create an immersive digital experience that combines luxury aesthetics with modern functionality, featuring AR try-on technology and personalized shopping journeys.',
        execution: 'Developed a comprehensive digital ecosystem including a premium website, social media strategy, influencer partnerships, and AR-enabled mobile app with virtual try-on features.',
        result: 'Achieved 340% increase in online sales, 85% growth in social media engagement, and successfully captured 45% more millennial customers within 6 months.',
        testimonial: {
            quote: "Horizon Top transformed our traditional business into a digital powerhouse. Their strategic approach and creative execution exceeded all our expectations.",
            author: "Sarah Al-Mansouri",
            position: "Marketing Director"
        },
        media: {
            type: 'image',
            src: '/media/cases/case1-hero.jpg',
            alt: 'Luxury jewellery digital transformation showcase'
        },
        tags: ['E-commerce', 'Luxury Branding', 'AR Technology', 'Social Media']
    },
    {
        id: 'case-2',
        title: 'Government Digital Initiative',
        client: 'Ministry of Innovation',
        clientLogo: '/media/clients/logo2.png',
        category: 'Public Sector Digital Services',
        idea: 'Design a citizen-centric digital platform that simplifies government interactions through intuitive interfaces and multilingual support.',
        execution: 'Built a comprehensive digital services portal with Arabic-English bilingual support, mobile-first design, and integrated security protocols meeting government standards.',
        result: 'Reduced service processing time by 70%, increased citizen satisfaction to 92%, and achieved 60% reduction in physical office visits.',
        testimonial: {
            quote: "The digital transformation has revolutionized how we serve our citizens. The platform is intuitive, secure, and truly serves the community's needs.",
            author: "Dr. Ahmed Al-Rashid",
            position: "Director of Digital Services"
        },
        media: {
            type: 'image',
            src: '/media/cases/case2-hero.jpg',
            alt: 'Government digital services platform interface'
        },
        tags: ['Government', 'Digital Services', 'UX Design', 'Accessibility']
    },
    {
        id: 'case-3',
        title: 'Tech Startup Brand Launch',
        client: 'G-Tab Innovation',
        clientLogo: '/media/clients/logo3.png',
        category: 'Brand Identity & Product Launch',
        idea: 'Create a disruptive brand identity that positions G-Tab as the smart choice for creative professionals and students.',
        execution: 'Developed complete brand identity, product photography, launch campaign, influencer partnerships, and performance marketing strategy across digital channels.',
        result: 'Achieved 250% of launch sales target, built 50K+ social media following, and secured partnerships with 3 major retailers within first quarter.',
        testimonial: {
            quote: "Horizon Top didn't just create our brand - they built our entire market presence. Their strategic thinking and creative execution made our launch a phenomenal success.",
            author: "Omar Hassan",
            position: "Founder & CEO"
        },
        media: {
            type: 'video',
            src: '/media/cases/case3-video.mp4',
            poster: '/media/cases/case3-poster.jpg',
            alt: 'G-Tab product launch campaign video'
        },
        tags: ['Brand Identity', 'Product Launch', 'Tech Startup', 'Performance Marketing']
    }
];

const CaseStudies: React.FC<CaseStudiesProps> = ({
    heading = "Success Stories",
    subheading = "Discover how we've helped brands achieve remarkable growth through strategic marketing and creative excellence",
    cases = defaultCases
}) => {
    const [currentCase, setCurrentCase] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const shouldReduceMotion = useReducedMotion();
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying && !shouldReduceMotion && cases.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentCase((prev) => (prev + 1) % cases.length);
            }, 8000); // Change every 8 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying, shouldReduceMotion, cases.length]);

    const nextCase = () => {
        setCurrentCase((prev) => (prev + 1) % cases.length);
        setIsAutoPlaying(false);
    };

    const prevCase = () => {
        setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
        setIsAutoPlaying(false);
    };


    if (cases.length === 0) {
        return null;
    }

    const currentCaseData = cases[currentCase];

    // Stacked layout for reduced motion preference
    if (shouldReduceMotion) {
        return (
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            {heading}
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            {subheading}
                        </p>
                    </div>

                    {/* Stacked Cases */}
                    <div className="space-y-16">
                        {cases.map((caseStudy) => (
                            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#081A2C] via-[#0A1B2E] to-[#081A2C] overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {heading}
                    </h2>
                    <p className="text-lg text-white/70 max-w-3xl mx-auto">
                        {subheading}
                    </p>
                </motion.div>

                {/* Swipe Indicator - Mobile Only */}
                {cases.length > 1 && (
                    <div className="lg:hidden flex items-center justify-center mb-8 text-white/60 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                            <path d="M13 17l5-5-5-5"></path>
                            <path d="M6 17l5-5-5-5"></path>
                        </svg>
                        Swipe to explore
                    </div>
                )}

                {/* Slider Container */}
                <div className="relative">
                    {/* Desktop: Animated slider */}
                    <div className="hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentCase}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <CaseStudyCard caseStudy={currentCaseData} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile: Horizontal scroll */}
                    <div className="lg:hidden overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 pb-4">
                            {cases.map((caseStudy) => (
                                <div key={caseStudy.id} className="flex-shrink-0 w-[85vw] sm:w-[75vw]">
                                    <CaseStudyCard caseStudy={caseStudy} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    {cases.length > 1 && (
                        <>
                            {/* Previous/Next Buttons - Desktop Only */}
                            <button
                                onClick={prevCase}
                                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1E88E5] hover:bg-[#1976D2] rounded-full items-center justify-center text-white transition-colors duration-300 z-10"
                                aria-label="Previous case study"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <button
                                onClick={nextCase}
                                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1E88E5] hover:bg-[#1976D2] rounded-full items-center justify-center text-white transition-colors duration-300 z-10"
                                aria-label="Next case study"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>


                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

// Individual Case Study Card Component
const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 lg:min-h-[70vh]">
            <div className="grid gap-0 lg:grid-cols-2">
                {/* Media Section */}
                <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                    {caseStudy.media.type === 'video' ? (
                        <video
                            className="w-full h-full object-cover"
                            poster={caseStudy.media.poster}
                            controls
                            preload="metadata"
                        >
                            <source src={caseStudy.media.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={caseStudy.media.src}
                            alt={caseStudy.media.alt}
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A2C]/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-[#1E88E5] text-white text-sm font-medium rounded-full">
                            {caseStudy.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 py-8 lg:px-10 lg:py-10 flex flex-col gap-6 justify-between">
                    {/* Header */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={caseStudy.clientLogo}
                                alt={`${caseStudy.client} logo`}
                                className="h-8 w-auto opacity-80"
                            />
                            <span className="text-white/60 text-xs uppercase tracking-[0.25em]">{caseStudy.client}</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug">
                            {caseStudy.title}
                        </h3>
                    </div>

                    {/* Story Sections */}
                    <div className="space-y-5 text-sm lg:text-base">
                        <StorySection title="Idea" content={caseStudy.idea} />
                        <StorySection title="Execution" content={caseStudy.execution} />
                        <StorySection title="Result" content={caseStudy.result} />
                    </div>


                </div>

                {/* Testimonial spanning full width */}
                <div className="lg:col-span-2">
                    <div className="bg-gradient-to-r from-[#1E88E5]/10 to-[#0A3C64]/10 px-6 py-7 lg:px-10 lg:py-8 border-t border-[#1E88E5]/20">
                        <div className="max-w-4xl mx-auto">
                            <blockquote className="text-white/90 text-base lg:text-lg italic mb-4">
                                "{caseStudy.testimonial.quote}"
                            </blockquote>
                            <div className="text-xs lg:text-sm">
                                <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                                <div className="text-white/60">{caseStudy.testimonial.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Story Section Component
const StorySection: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    return (
        <div>
            <h4 className="text-[#1E88E5] font-semibold text-sm uppercase tracking-wide mb-2">
                {title}
            </h4>
            <p className="text-white/80 text-sm leading-relaxed">
                {content}
            </p>
        </div>
    );
};

export default CaseStudies;
