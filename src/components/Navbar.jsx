
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navItems = [
        { name: 'Home', isActive: true },
        { name: 'Solutions', isActive: false },
        { name: 'Analytics', isActive: false },
        { name: 'HR Solutions', isActive: false },
        { name: 'About', isActive: false },
        { name: 'Contact', isActive: false },
    ]

    const mobileMenuVariants = {
        closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.1 } },
    }

    const navItemVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    }

    return (
        <nav className="w-full bg-transparent z-50 relative mt-5">
            <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between py-4 md:py-6">
                <motion.div
                    className="flex items-center shrink-0 z-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src="./src/assets/images/icon.png"
                        alt="logo"
                        className="h-8 md:h-10 lg:h-12 object-contain"
                    />
                </motion.div>

                <ul className="hidden lg:flex items-center justify-center space-x-8 text-[#01558E] font-medium">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            className={`relative cursor-pointer text-base xl:text-lg hover:text-[#F28A1C] transition-colors ${item.isActive ? 'font-bold' : ''}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.name}
                            {item.isActive && (
                                <motion.span
                                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#F28A1C] rounded"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>

                <div className='hidden lg:block'>
                    <Button />
                </div>

                <div className="lg:hidden z-50">
                    <button onClick={toggleMobileMenu} className="text-[#01558E] focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t z-40"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <ul className="flex flex-col items-center py-6 space-y-4 text-[#01558E]">
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={navItemVariants}>
                                    {item.name}
                                </motion.li>
                            ))}
                            <motion.li variants={navItemVariants} className="pt-2">
                                <Button />
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar