import Github from "./github";
import { motion } from "framer-motion";

const GithubSection = () => {
  return (
    <div className="bg-gray-100 py-36 font-contact rounded">
      <motion.div
        className="py-8 mx-3 mb-6 px-2 flex flex-col items-center text-center md:px-16 md:py-24 bg-white rounded-md sm:mx-6 xl:w-7/12 xl:mx-auto xl:mb-8 hover:shadow-2xl duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Github />
      </motion.div>
      <motion.div
        className="py-8 mx-3 px-2 flex flex-col items-center text-center md:px-16 md:py-24 bg-white rounded-md p-4 sm:mx-6 xl:w-7/12 xl:mx-auto hover:shadow-2xl duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-2xl text-neutral-800 pb-8 font-extrabold">
          GITHUB STATS
        </h2>
        <div className="border-2 border-neutral-800 m-2 rounded-sm">
          <img
            src="https://github-readme-stats-nu-brown.vercel.app/api?username=SalmanAjani&show_icons=true"
            alt="Salman-Github-Stats"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubSection;
