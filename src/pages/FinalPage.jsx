import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const FinalPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="text-pink-600 mb-8"
      >
        <HeartIcon className="h-24 w-24" />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
          Thank You for Being My Girl chisom! ❤️
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          You&apos;ve made me the happiest person in the world. I promise to
          cherish every moment with you and make each day more special than the
          last. You&apos;re not just my Valentine, you&apos;re my everything.
        </p>

        <div className="text-4xl mb-8">💖 💝 💕</div>

        <p className="text-2xl font-semibold text-pink-500">
          With all my love,
          <br />
          Your Valentine, obinna okoye
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalPage;
