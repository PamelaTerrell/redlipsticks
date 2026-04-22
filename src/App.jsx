import { Routes, Route } from "react-router";

import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import BestOver40 from "./pages/BestOver40";
import BlueVsOrange from "./pages/BlueVsOrange";
import WarmSkinToneColors from "./pages/WarmSkinToneColors";
import CoolSkinToneColors from "./pages/CoolSkinToneColors";
import NeutralSkinToneColors from "./pages/NeutralSkinToneColors";
import TeethWhiterReds from "./pages/TeethWhiterReds";
import LipstickMatchQuiz from "./pages/LipstickMatchQuiz";
import MatureLips from "./pages/MatureLips";
import BestRedsUnder15 from "./pages/BestRedsUnder15";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/best-red-lipsticks-over-40"
          element={<BestOver40 />}
        />
        <Route
          path="/blue-red-vs-orange-red"
          element={<BlueVsOrange />}
        />
        <Route
          path="/warm-skin-tone-colors"
          element={<WarmSkinToneColors />}
        />
        <Route
          path="/cool-skin-tone-colors"
          element={<CoolSkinToneColors />}
        />
        <Route
          path="/neutral-skin-tone-colors"
          element={<NeutralSkinToneColors />}
        />
        <Route
          path="/red-lipsticks-that-make-teeth-look-whiter"
          element={<TeethWhiterReds />}
        />

        <Route path="/lipstick-match-quiz" element={<LipstickMatchQuiz />} />

        <Route
  path="/best-red-lipsticks-for-mature-lips"
  element={<MatureLips />}
/>

        <Route
  path="/best-red-lipsticks-under-15"
  element={<BestRedsUnder15 />}
/>

      </Routes>
    </>
  );
}