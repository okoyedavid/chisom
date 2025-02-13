import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PhotoGallery = () => {
  const navigate = useNavigate();

  // Replace these with actual photo URLs
  const photos = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",

    "/img6.jpg",

    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",

    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img15.jpg",

    "/img16.jpg",
    "/img17.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 p-8"
    >
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-12">
        Thank You for being my girl 💘💘
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2, ease: "easeInOut" }}
            className="relative group"
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/memories")}
          className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
        >
          continue ✨
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PhotoGallery;
