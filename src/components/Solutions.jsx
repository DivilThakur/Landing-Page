import React from 'react'
import { motion } from 'framer-motion'
import { DataAnalysis, Technology, techStack } from '../data/data'


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}


const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 50, damping: 20 }
    },
}

const SolutionSection = ({ title, data }) => {
    return (
        <div className='flex flex-col space-y-10 lg:space-y-15'>


            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-3xl md:text-5xl lg:text-7xl'
            >
                {title}
            </motion.h2>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 gap-y-10'
            >
                {data.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className='flex flex-col items-start space-y-2'
                    >

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className='h-12 lg:h-24 mb-2'
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className='h-full object-contain'
                            />
                        </motion.div>

                        <h3 className='text-[#F58220] md:text-2xl lg:text-3xl font-semibold'>
                            {item.title}
                        </h3>

                        <p className='text-xl leading-relaxed w-full lg:w-[90%]'>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

const Solutions = () => {
    return (
        <div className='w-full py-16 md:py-24 relative'>
            <div className='container mx-auto max-w-7xl px-6 md:px-12 relative z-10'>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='mb-16 md:mb-20'
                >
                    <img
                        src="./src/assets/images/solutions.png"
                        alt="Solutions"
                        className='w-full max-w-lg mb-4 h-auto object-contain object-left'
                    />
                    <p className='text-[#002B49] text-lg md:text-3xl max-w-2xl lg:max-w-4xl leading-relaxed'>
                        We provide the best solutions and tools for all your data needs to ensure you achieve maximum productivity and returns.
                    </p>
                </motion.div>

                <div className='space-y-12 md:space-y-16'>
                    <SolutionSection title="Open Source" data={techStack} />


                    <motion.hr
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className='border-t border-gray-200'
                    />

                    <SolutionSection title="Data Analytics" data={DataAnalysis} />

                    <motion.hr
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className='border-t border-gray-200'
                    />

                    <SolutionSection title="Technology" data={Technology} />
                </div>

            </div>
        </div>
    )
}

export default Solutions