import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import AddWorkout from "./pages/AddWorkout";
import Progress from "./pages/Progress";

import { FitnessProvider } from "./context/FitnessContext";

function App() {
  return (
    <FitnessProvider>
      <BrowserRouter>

        <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">

          <Navbar />

          <main className="min-h-screen p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/add-workout" element={<AddWorkout />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </main>

        </div>

      </BrowserRouter>
    </FitnessProvider>
  );
}

export default App;