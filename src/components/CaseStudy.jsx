import React from 'react'
import { motion } from 'framer-motion'
import { caseStudiesData } from '../data/data'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 60, damping: 10 },
    },
}

const CaseStudies = () => {
    return (
        <div className='w-full bg-white py-16 md:py-24 relative overflow-hidden'>
            <div className='container mx-auto max-w-7xl px-6 md:px-12 relative z-10'>


                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='mb-12 md:mb-16 flex flex-col items-start'
                >

                    <img
                        src="./src/assets/images/Case.png"
                        alt="Case"
                        className='h-12 md:h-20 lg:h-24 object-contain mb-2 md:mb-4'
                    />

                    <img
                        src="./src/assets/images/studies.png"
                        alt="Studies"
                        className='h-12 md:h-20 lg:h-24 object-contain'
                    />
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'
                >
                    {caseStudiesData.map((study) => (
                        <motion.div
                            key={study.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className='flex flex-col rounded-lg overflow-hidden cursor-pointer'
                        >

                            <div className='w-full h-48 bg-gray-100 overflow-hidden'>
                                <img
                                    src={study.img}
                                    alt={study.title}
                                    className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105'
                                />
                            </div>


                            <div className='flex flex-col items-start p-4 md:p-6 space-y-3'>
                                <h3 className='text-[#013C61] text-lg md:text-xl font-medium leading-snug'>
                                    {study.title}
                                </h3>
                                <p className='text-gray-500 text-sm'>
                                    {study.date}
                                </p>

                                <motion.div
                                    className='h-[3px] bg-[#F0750F] w-24'
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    )
}

export default CaseStudies