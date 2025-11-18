import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (

        <div className="w-full min-h-auto bg-white flex items-center justify-end overflow-hidden relative lg:py-20">

            <div className="relative w-full lg:w-[85%] bg-[#7DA5C0] min-h-auto lg:min-h-0 lg:h-[85vh] shadow-none lg:shadow-2xl flex flex-col lg:flex-row items-center lg:mr-10 rounded-none">

                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    src="./src/assets/images/About.png"
                    alt="About"
                    className="hidden lg:block absolute lg:-top-20 lg:-left-[15%] lg:w-[35%] z-10 object-contain select-none pointer-events-none"
                />

                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src="./src/assets/images/dataxsolutions.png"
                    alt="Data X Solutions"
                    className="hidden lg:block absolute lg:top-[10%] lg:-left-[15%] lg:w-[55%] z-10 object-contain select-none pointer-events-none"
                />

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}

                    className="hidden md:flex absolute -bottom-2.5 md:right-20 lg:left-0 z-30 h-[80%] items-end pointer-events-none"
                >
                    <img
                        src="./src/assets/images/watch.png"
                        alt="Stopwatch"
                        className="h-full w-auto object-contain drop-shadow-2xl"
                    />
                </motion.div>

                <div className="w-full h-full flex flex-col justify-center xl:mt-40 z-20 px-8 py-20 lg:py-0 lg:pl-[30%] lg:pr-20 text-white">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col space-y-8 text-left"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl sm:text-3xl md:text-5xl xl:text-7xl font-semibold leading-[1.1]"
                        >
                            Listing Millions <br /> Of Records In <br /> Milliseconds
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base sm:text-lg lg:text-2xl text-blue-50 md:max-w-lg lg:max-w-xl leading-relaxed"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elitr, sed diam, amet, consetetur.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="pt-8 flex items-center gap-8"
                        >
                            <div className="flex space-x-3">
                                <div className="w-10 h-1.5 bg-white/40 rounded-full"></div>
                                <div className="w-10 h-1.5 bg-white rounded-full"></div>
                                <div className="w-10 h-1.5 bg-white/40 rounded-full"></div>
                            </div>

                            <div className="flex space-x-4">
                                <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white text-[#7DA5C0] flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
                                    &lt;
                                </button>
                                <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white text-[#7DA5C0] flex items-center justify-center text-xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
                                    &gt;
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;