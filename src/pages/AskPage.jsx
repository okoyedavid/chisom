import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const AskPage = ({ isPlaying, setIsPlaying }) => {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const getNoButtonSize = () => {
    return Math.max(0.8 - noCount * 0.1, 0.5);
  };

  const getYesButtonSize = () => {
    return 1 + noCount * 0.1;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-6xl font-bold text-pink-600 text-center mb-12"
      >
        Will you be my Valentine?
      </motion.h1>

      <div className="flex gap-8">
        <motion.button
          style={{ scale: getYesButtonSize() }}
          whileHover={{ scale: getYesButtonSize() * 1.1 }}
          whileTap={{ scale: getYesButtonSize() * 0.9 }}
          onClick={() => {
            setYesPressed(true);
            setTimeout(() => {
              setIsPlaying(!isPlaying);
              navigate("/love-letter");
            }, 1000);
          }}
          className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
        >
          Yes 🥰
        </motion.button>

        <motion.button
          style={{ scale: getNoButtonSize() }}
          whileHover={{ scale: getNoButtonSize() * 1.1 }}
          whileTap={{ scale: getNoButtonSize() * 0.9 }}
          onClick={() => setNoCount((prev) => prev + 1)}
          className="bg-gray-400 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-500 transition-colors"
        >
          {noCount === 0 ? "No 😢" : "Please? 🥺"}
        </motion.button>
      </div>

      {yesPressed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-pink-100 bg-opacity-90"
        >
          <div className="text-6xl">❤️</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AskPage;
