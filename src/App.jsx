import { Routes, Route, useLocation } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import AskPage from "./pages/AskPage";
import LoveLetter from "./pages/LoveLetter";
import PhotoGallery from "./pages/PhotoGallery";
import Memories from "./pages/Memories";
import Reasons from "./pages/Reasons";
import FuturePromises from "./pages/FuturePromises";
import FinalPage from "./pages/FinalPage";
import { useEffect, useState } from "react";
import BackgroundMusic from "./pages/BackgroundMusic";

const App = () => {
  const { pathname } = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // Runs every time the route changes
  return (
    <div className="min-h-screen bg-pink-50">
      <BackgroundMusic isPlaying={isPlaying} />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route
          path="/ask"
          element={
            <AskPage setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
          }
        />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/photos" element={<PhotoGallery />} />

        <Route path="/memories" element={<Memories />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/promises" element={<FuturePromises />} />

        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </div>
  );
};

export default App;
