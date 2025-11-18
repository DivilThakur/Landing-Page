import React from 'react'
import { motion } from 'framer-motion'
import XWhite from '../assets/images/XWhite.png'
import facebook from '../assets/images/facebook.png';
import linkedIn from '../assets/images/linkedIn.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
const socialIcons = [
    { name: 'facebook', src: facebook },
    { name: 'linkedIn', src: linkedIn },
    { name: 'twitter', src: twitter },
    { name: 'instagram', src: instagram },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const ContactFooter = () => {
    return (

        <div className='relative w-full bg-linear-to-r from-[#001829] via-[#002B49] to-[#002B49] overflow-hidden min-h-[600px] flex items-center px-6 py-12 lg:p-20'>


            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}

                className='absolute inset-y-0 right-0 w-[80%] lg:w-[70%] z-0 hidden lg:block pointer-events-none'
            >
                <img
                    src={XWhite}
                    alt="Pattern"

                    className='w-full h-full object-cover object-center'
                />
            </motion.div>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='container mx-auto relative z-10'
            >

                <div className='w-full lg:w-1/2 flex flex-col space-y-10 text-white'>


                    <motion.h1
                        variants={itemVariants}
                        className='text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight'
                    >
                        Ready To <br /> Evolve?
                    </motion.h1>



                    <motion.div variants={itemVariants} className='flex flex-col space-y-4 text-lg md:text-2xl font-light tracking-wide'>


                        <div className='flex items-center space-x-4 group cursor-pointer w-fit'>
                            <div className='p-2 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className='group-hover:translate-x-1 transition-transform duration-300'>+971 06 521 1720</span>
                        </div>


                        <div className='flex items-center space-x-4 group cursor-pointer w-fit'>
                            <div className='p-2 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className='group-hover:translate-x-1 transition-transform duration-300'>contact@dataxsolution.net</span>
                        </div>
                    </motion.div>



                    <motion.div variants={itemVariants} className='pt-8 space-y-10'>


                        <div className='space-y-3'>
                            <h3 className='text-[#5C7C93] text-xs md:text-sm font-bold tracking-[0.2em] uppercase'>
                                Quick Links
                            </h3>
                            <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base font-light text-gray-300'>
                                <a href="#" className='hover:text-white transition-colors'>Home</a> <span className='text-white/20'>|</span>
                                <a href="#" className='hover:text-white transition-colors'>Solutions</a> <span className='text-white/20'>|</span>
                                <a href="#" className='hover:text-white transition-colors'>Analytics</a> <span className='text-white/20'>|</span>
                                <a href="#" className='hover:text-white transition-colors'>HR Solution</a> <span className='text-white/20'>|</span>
                                <a href="#" className='hover:text-white transition-colors'>About</a> <span className='text-white/20'>|</span>
                                <a href="#" className='hover:text-white transition-colors'>Contact</a>
                            </div>
                        </div>


                        <div className='space-y-4'>
                            <h3 className='text-[#5C7C93] text-xs md:text-sm font-bold tracking-[0.2em] uppercase'>
                                Get Connected
                            </h3>
                            <div className='flex space-x-3'>
                                {socialIcons.map((social) => (
                                    <motion.div
                                        key={social.name}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className=" rounded-sm p-1 cursor-pointer hover:bg-gray-600 transition-colors"
                                    >
                                        <img
                                            src={social.src}
                                            alt={social.name}
                                            className='w-6 h-6 md:w-8 md:h-8 object-contain'
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}

export default ContactFooter