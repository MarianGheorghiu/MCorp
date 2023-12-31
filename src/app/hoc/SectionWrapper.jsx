import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const StarWrapper = ({ id, children }) => (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={id}>
            &nbsp;
        </span>

        {children}
    </motion.section>
);

export default StarWrapper;
