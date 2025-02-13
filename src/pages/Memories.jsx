import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Memories = () => {
  const navigate = useNavigate();

  const memories = [
    {
      date: "First Meeting",
      description:
        "The first day i met you i knew you were special and my heart raced at the sight of you",
      emoji: "👀",
    },
    {
      date: "First Date",
      description:
        "It will be forever etched in the strings of my heart, a day i will never forget",
      emoji: "🌟",
    },
    {
      date: "First Laugh Together",
      description:
        "Every moment with you takes away my worries and sorrows you fill my life with laughter and love",
      emoji: "😊",
    },
    {
      date: "First Adventure",
      description:
        "One day i pray we get to explore the world together one step at a time, i wish for nothing else but to spend my life with you",
      emoji: "🌎",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
        Memories 💝
      </h1>

      <div className="max-w-4xl w-full">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
          >
            <div className="flex items-center">
              <span className="text-4xl mr-4">{memory.emoji}</span>
              <div>
                <h3 className="text-xl font-semibold text-pink-500">
                  {memory.date}
                </h3>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/reasons")}
        className="mt-8 bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
      >
        continue ❤️
      </motion.button>
    </motion.div>
  );
};

export default Memories;
