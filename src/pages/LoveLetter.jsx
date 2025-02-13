import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-2xl bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          My Dearest Chisom ❤️
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          From the moment I first saw you, my heart knew you were special. Your
          smile lights up every room you enter, and your laugh is the sweetest
          melody I&apos;ve ever heard. Every moment spent with you feels like a
          beautiful dream I never want to wake up from.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Your kindness, intelligence, and beautiful soul make every day
          brighter. You&apos;ve brought so much joy and love into my life, and
          I&apos;m incredibly grateful to have you by my side.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Thank you for being you, and for making my life complete. ❤️ words
          can&apos;t completely describe how much it means to me
        </p>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/photos")}
            className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-colors"
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoveLetter;
