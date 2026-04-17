import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import BestOver40 from "./pages/BestOver40";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/best-red-lipsticks-over-40"
        element={<BestOver40 />}
      />
    </Routes>
  );
}