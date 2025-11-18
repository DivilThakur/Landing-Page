import React from 'react'
import { motion } from 'framer-motion'
import { clientsData } from '../data/data'
import Our from '../assets/images/our.png'
import ClientsImg from '../assets/images/clients.png'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const OurClients = () => {
    return (

        <div className='w-full py-16 md:py-24 relative overflow-hidden'>

            <div className='container mx-auto max-w-7xl px-6 md:px-12 relative z-10'>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='mb-12 md:mb-16 flex flex-col items-start'
                >
                    <img
                        src={Our}
                        alt="Our"
                        className='h-12 md:h-20 lg:h-24 object-contain mb-2 md:mb-4'
                    />

                    <img
                        src={ClientsImg}
                        alt="Clients"
                        className='h-12 md:h-20 lg:h-24 object-contain'
                    />
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:mt-20'
                >
                    {clientsData.map((client) => (
                        <motion.div
                            key={client.id}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}

                            className='group bg-white h-32 md:h-40 flex items-center justify-center p-6 md:p-8 shadow-sm rounded-sm transition-all duration-300 border border-transparent hover:border-gray-100
 grayscale hover:grayscale-0'
                        >
                            <img
                                src={client.img}
                                alt={client.alt}

                                className='max-h-full max-w-full object-contain transition-all duration-300 opacity-80 hover:opacity-100'
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    )
}

export default OurClients