import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import DaysExcercise from "../pages/DaysExcercise";

function App() {
  return (
    <div className="bg-backgroundColor text-textColor h-[100vh] w-[100vw] m-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/days/:dayname" element={<DaysExcercise />} />
      </Routes>
    </div>
  );
}

export default App;
