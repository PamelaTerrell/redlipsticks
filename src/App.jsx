import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BestOver40 from "./pages/BestOver40";
import BlueVsOrange from "./pages/BlueVsOrange";
import WarmSkinToneColors from "./pages/WarmSkinToneColors";
import CoolSkinToneColors from "./pages/CoolSkinToneColors";
import NeutralSkinToneColors from "./pages/NeutralSkinToneColors";

export default function App() {
  return (
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
    </Routes>
  );
}