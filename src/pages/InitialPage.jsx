import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const InitialPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/ask"); // Change this to your target route
    }, 2000); // Delay in milliseconds (3 seconds)

    return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="text-pink-600 mb-8"
      >
        <HeartIcon className="h-24 w-24" />
      </motion.div>

      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-6xl font-bold text-pink-600 text-center mb-8"
      >
        Hey Beautiful...
      </motion.h1>
    </motion.div>
  );
};

export default InitialPage;
