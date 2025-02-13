import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FuturePromises = () => {
  const navigate = useNavigate();

  const promises = [
    {
      title: "Forever Love",
      description: "I promise to love you more and more each day",
      icon: "❤️",
    },
    {
      title: "Support",
      description: "I'll always be there to support your dreams",
      icon: "🌟",
    },
    {
      title: "Adventure",
      description: "Let's create amazing memories together",
      icon: "🌎",
    },
    {
      title: "Loyalty",
      description: "I promise to be faithful and true",
      icon: "🤝",
    },
    {
      title: "Happiness",
      description: "I'll do my best to make you smile every day",
      icon: "😊",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
        My Promises To You 💝
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{promise.icon}</div>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              {promise.title}
            </h3>
            <p className="text-gray-600">{promise.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/final")}
        className="mt-12 bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default FuturePromises;
