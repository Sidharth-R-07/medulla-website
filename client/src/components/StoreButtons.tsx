
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <motion.a
        href="https://apps.apple.com/in/app/medulla-medicos-learning-app/id1641116064"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 shadow-md hover:shadow-lg transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaApple className="w-5 h-5 mr-3" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Download on the</span>
          <span className="text-base font-semibold -mt-0.5">App Store</span>
        </div>
      </motion.a>
      <motion.a
        href="https://apps.apple.com/in/app/medulla-medicos-learning-app/id1641116064"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 shadow-md hover:shadow-lg transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGooglePlay className="w-5 h-5 mr-3" />
        <div className="flex flex-col items-start">
          <span className="text-xs">Get it on</span>
          <span className="text-base font-semibold -mt-0.5">Google Play</span>
        </div>
      </motion.a>
    </div>
  );
}
