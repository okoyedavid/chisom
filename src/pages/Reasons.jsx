import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Reasons = () => {
  const navigate = useNavigate();

  const reasons = [
    "Your smile brightens even the darkest days 😊",
    "Your kindness shown to me knows no bounds ❤️",
    "You make me want to be a better person each single day  🌟",
    "Your laugh is my favorite sound in the world 🎵",
    "You understand me like no one else does 🤝",
    "Your presence makes everything better 💫",
    "You inspire me every single day ✨",
    "I love you with all my heart chisom and i hope it remains the same till death do us part",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
        Why I Love You 💖
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <p className="text-xl text-gray-700">{reason}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/promises")}
        className="mt-12 bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
      >
        continue 🤝
      </motion.button>
    </motion.div>
  );
};

export default Reasons;
