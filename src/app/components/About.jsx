'use client';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Image from 'next/image';

const ServiceCard = ({ index, title, icon }) => (
    <div className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <Image
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <SectionWrapper id="about">
            <motion.div className="text-center" variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-center text-[17px]  leading-[30px]"
            >
                We are a team of skilled software developers proficient in
                TypeScript and JavaScript, specializing in frameworks such as
                React, Node.js, and Angular. With a strong ability to adapt and
                collaborate closely with our clients, we craft efficient,
                scalable, and user-centric solutions that effectively address
                real-world challenges. Let us partner with you to transform your
                concepts into reality!
            </motion.p>

            <div className="mt-20 flex justify-center flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default About;
