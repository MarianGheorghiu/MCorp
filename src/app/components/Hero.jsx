'use client';
import Image from 'next/image';
import img from '../../../public/assets/digital.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { styles } from '../styles';

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex container  mx-auto md:flex-row flex-col ${styles.paddingY}`}
        >
            <motion.div
                className={`flex-1 pb-[15%] mt-[10%] ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        <span className="text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            We Are{' '}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'MCorp',
                                1000,
                                'Digital Solutions',
                                1000,
                                'Copywriting',
                                1000,
                                'SEO Analysts',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Unleashing Your Brand's Potential: Elevate Your Message with
                    Expert Copywriting & Tech-Infused Solutions.
                </p>
                <div className="container mt-10 text-center lg:flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#0096FF]  hover:bg-[#7DF9FF] text-white"
                    >
                        Contract Us
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-[#1F51FF]  hover:bg-[#0000FF] text-white"
                    >
                        LinkedIn
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <Image
                    src={img}
                    alt="hero"
                    className="w-[100%] lg:ml-10 rounded-2xl h-[70%] relative z-[5]"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
