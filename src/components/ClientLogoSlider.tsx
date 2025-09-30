import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Interface for client logo objects
interface ClientLogo {
    id: number;
    src: string;
    alt: string;
}

const ClientLogoSlider: React.FC = () => {
    const [width, setWidth] = useState(0);
    const [logos, setLogos] = useState<ClientLogo[]>([]);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to dynamically import all images from the clients folder
        const importAllImages = async () => {
            try {
                // This uses Vite's import.meta.glob to dynamically import all images
                const imageFiles = import.meta.glob('/public/media/clients/*');
                const importedLogos: ClientLogo[] = [];
                let index = 0;

                // Process each image file
                for (const path in imageFiles) {
                    // Extract the filename from the path
                    const filename = path.split('/').pop() || '';

                    // Create a client logo object
                    importedLogos.push({
                        id: index++,
                        src: path.replace('/public', ''),
                        alt: `Client Logo - ${filename.split('.')[0]}`
                    });
                }

                setLogos(importedLogos);
            } catch (error) {
                console.error('Error loading client logos:', error);

                // Fallback to default logos if there's an error
                const fallbackLogos = Array.from({ length: 5 }, (_, i) => ({
                    id: i,
                    src: `/media/clients/logo${i + 1}.png`,
                    alt: `Client Logo ${i + 1}`
                }));

                setLogos(fallbackLogos);
            }
        };

        importAllImages();
    }, []);

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current && logos.length > 0) {
                // Calculate the width of all logos combined
                const totalWidth = carousel.current.scrollWidth;
                setWidth(totalWidth / 2); // Divide by 2 because we have duplicated logos
            }
        };

        // Initial calculation
        updateWidth();

        // Update on window resize
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [logos]);

    // If no logos are loaded yet, show a loading placeholder
    if (logos.length === 0) {
        return (
            <div className="py-6 bg-[#081A2C] border-t border-b border-[#1E88E5]/10">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 border-4 border-[#1E88E5]/30 border-t-[#1E88E5] rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-6 bg-[#081A2C] border-t border-b border-[#1E88E5]/10 overflow-hidden">
            <div className="relative max-w-full mx-auto">
                <motion.div className="cursor-grab overflow-hidden">
                    <motion.div
                        ref={carousel}
                        className="flex"
                        animate={{
                            x: [-width, 0]
                        }}
                        transition={{
                            x: {
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear"
                            }
                        }}
                    >
                        {/* First set of logos */}
                        {logos.map((logo) => (
                            <motion.div
                                key={`logo-${logo.id}`}
                                className="flex-shrink-0 mx-6 h-14 opacity-70 hover:opacity-100 transition-opacity duration-300 px-4"
                                style={{ minWidth: '120px' }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-full object-contain filter brightness-100"
                                />
                            </motion.div>
                        ))}

                        {/* Duplicate logos to create seamless loop */}
                        {logos.map((logo) => (
                            <motion.div
                                key={`logo-dup-${logo.id}`}
                                className="flex-shrink-0 mx-6 h-14 opacity-70 hover:opacity-100 transition-opacity duration-300 px-4"
                                style={{ minWidth: '120px' }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-full object-contain filter brightness-100"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ClientLogoSlider;
