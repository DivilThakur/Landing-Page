import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 right-0 left-0 z-50'>
                <Navbar />
            </div>

            <div className='relative xl:min-h-screen flex lg:justify-between  '>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className=' hidden xl:block absolute bottom-10 left-1/3 z-50 '
                >
                    <img src="./src/assets/images/levels.png" alt="" className='w-40' />
                </motion.div>


                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='hidden xl:block absolute bottom-1/2 left-2 z-50'
                >
                    <img src="./src/assets/images/left.png" alt="" className='w-8' />
                </motion.div>


                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className='hidden xl:block absolute bottom-1/2 right-30 z-50'
                >
                    <img src="./src/assets/images/right.png" alt="" className='w-8' />
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className='hidden md:block absolute bottom-1/3 right-8  xl:right-1/7 z-50'
                >
                    <img src="./src/assets/images/barchart.png" alt="" className=' w-20 lg:w-30 xl:w-35' />
                </motion.div>


                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className='hidden md:block absolute bottom-[28%] right-[23%] lg:bottom-[30%] lg:right-[23%] xl:bottom-1/4 xl:right-[36%] z-50'
                >
                    <img src="./src/assets/images/graph.png" alt="" className=' w-10 lg:w-15 xl:w-30' />
                </motion.div>



                {/* left  */}
                <div className='w-full lg:w-[70%] xl:p-4 flex flex-col space-y-3 lg:space-y-6 justify-center mt-30 ml-7 md:mt-40 xl:ml-20 xl:mt-10 sm:mx-8 '>
                    <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-medium '>Leading Provider Of <br />
                        Open Data Solution</h1>
                    <p className='text-xl sm:text-2xl md:text-xl lg:text-3xl w-full md:w-[50%] lg:w-[70%] mr-10 md:mr-0'>Supporting clients through digital transformation allowing to maximize

                        investments from data assets.</p>
                    <button>
                        <img className='w-32 xl:w-40' src="./src/assets/learnMore.png" alt="" />
                    </button>
                </div>
                {/* right  */}
                <div className='hidden xl:flex justify-end '>
                    <img src="./src/assets/images/XDark.png" alt="Hero" />
                </div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='absolute hidden md:flex items-center justify-end bottom-0 right-0 lg:right-0 xl:-bottom-15 xl:right-20  w-full '
                >
                    <img src="./src/assets/images/homePic.png" alt="" className='w-100 lg:w-130 xl:w-2/3 ' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero