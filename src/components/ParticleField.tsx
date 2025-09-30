import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticleFieldProps {
    count?: number;
    color?: string;
    minSize?: number;
    maxSize?: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    blur: boolean;
    xOffset: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
    count = 80,
    color = 'rgba(255,255,255,0.2)',
    minSize = 3,
    maxSize = 6
}) => {
    // Generate particles with random properties
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // 0-100% of viewport width
            y: Math.random() * 100, // 0-100% of viewport height
            size: Math.random() * (maxSize - minSize) + minSize,
            duration: Math.random() * 10 + 15, // 15-25 seconds
            delay: Math.random() * 5, // 0-5 second delay (reduced for faster visibility)
            blur: Math.random() > 0.8, // 20% chance of blur for depth
            xOffset: (Math.random() - 0.5) * 20 // -10 to +10px wiggle
        }));
    }, [count, minSize, maxSize]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 10 }}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${particle.blur ? 'blur-[2px]' : ''}`}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: color,
                        boxShadow: particle.blur
                            ? `0 0 ${particle.size * 5}px ${color}`
                            : `0 0 ${particle.size * 2}px ${color}`
                    }}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        y: [0, 100], // Move 100px down from initial position
                        x: [0, particle.xOffset], // Slight horizontal wiggle
                        opacity: [0, 0.8, 0.8, 0] // Fade in, stay visible, fade out
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleField;
