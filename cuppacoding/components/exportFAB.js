import React, { useContext } from 'react';
import IdContext from './IdContext';
import fabStyles from '@/styles/exportFAB.module.css';
import { motion } from 'framer-motion';

export default function ExportFab(){
    const context = useContext(IdContext);
    return (
      <motion.div whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                     }}
                    whileTap={{ scale: 0.9 }} className={fabStyles.container}>
        {context.ids.length > 0 && (<p>export {context.ids.length} items  </p>)}

        <svg
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.3362 11.9043C33.3362 11.2891 33.1192 10.6934 32.7285 10.2539L24.2295 0.683594C23.8389 0.244141 23.3093 0 22.7537 0H22.2242V12.5H33.3362V11.9043ZM49.5703 30.0781L41.2623 20.6641C40.3854 19.6777 38.8836 20.3711 38.8836 21.7676V28.125H33.3275V34.375H38.8836V40.7422C38.8836 42.1387 40.3854 42.832 41.2623 41.8457L49.5703 32.4219C50.1432 31.7773 50.1432 30.7227 49.5703 30.0781ZM16.6681 32.8125V29.6875C16.6681 28.8281 17.2932 28.125 18.0571 28.125H33.3362V15.625H21.5296C20.3837 15.625 19.4461 14.5703 19.4461 13.2812V0H2.08351C0.9289 0 0 1.04492 0 2.34375V47.6562C0 48.9551 0.9289 50 2.08351 50H31.2527C32.4073 50 33.3362 48.9551 33.3362 47.6562V34.375H18.0571C17.2932 34.375 16.6681 33.6719 16.6681 32.8125Z"
            fill="#113428"
          />
        </svg>
      </motion.div>
    );
}