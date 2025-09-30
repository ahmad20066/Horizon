import React from 'react';
import { motion } from 'framer-motion';

interface DividerProps {
    className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
    return (
        <div className={`w-full py-12 sm:py-16 overflow-hidden bg-[#081A2C] ${className}`}>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="max-w-4xl mx-auto px-4 md:px-6"
            >
                <div className="relative flex items-center">
                    {/* Left Line */}
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1E88E5]/40 to-[#1E88E5]/60" />

                    {/* Center Dots */}
                    <div className="flex items-center gap-2 px-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="w-2 h-2 rounded-full bg-[#1E88E5]/60"
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                            className="w-3 h-3 rounded-full bg-[#1E88E5]"
                        />
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="w-2 h-2 rounded-full bg-[#1E88E5]/60"
                        />
                    </div>

                    {/* Right Line */}
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#1E88E5]/40 to-[#1E88E5]/60" />
                </div>
            </motion.div>
        </div>
    );
};

export default Divider;
