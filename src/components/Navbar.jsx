import { useState } from "react";
import { Link } from "react-router-dom";
import { useFitness } from "../context/FitnessContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, setDarkMode } = useFitness();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold"
          >
            FitTrack
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="hover:text-blue-200 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/workout"
              className="hover:text-blue-200 transition"
            >
              Workout
            </Link>

            <Link
              to="/add-workout"
              className="hover:text-blue-200 transition"
            >
              Add Workout
            </Link>

            <Link
              to="/progress"
              className="hover:text-blue-200 transition"
            >
              Progress
            </Link>

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white/20 px-3 py-2 rounded-lg"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white/20 px-3 py-2 rounded-lg text-xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                onClick={closeMenu}
                className="hover:bg-white/10 p-2 rounded-lg"
              >
                🏠 Dashboard
              </Link>

              <Link
                to="/workout"
                onClick={closeMenu}
                className="hover:bg-white/10 p-2 rounded-lg"
              >
                🏋️ Workout
              </Link>

              <Link
                to="/add-workout"
                onClick={closeMenu}
                className="hover:bg-white/10 p-2 rounded-lg"
              >
                ➕ Add Workout
              </Link>

              <Link
                to="/progress"
                onClick={closeMenu}
                className="hover:bg-white/10 p-2 rounded-lg"
              >
                📊 Progress
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}