import { useState } from "react";
import { useFitness } from "../context/FitnessContext";

export default function AddWorkout() {
  const { addWorkout } = useFitness();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Cardio");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addWorkout({
      name,
      category,
      duration: Number(duration),
      calories: Number(calories),
      date: new Date().toLocaleDateString("id-ID"),
    });

    alert("Workout berhasil ditambahkan!");

    setName("");
    setCategory("Cardio");
    setDuration("");
    setCalories("");
  };

  return (
    <div className="max-w-2xl mx-auto">

      {/* Judul */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Add Workout
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Tambahkan aktivitas workout baru.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800"
      >

        {/* Nama Workout */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 dark:text-white mb-2">
            Nama Workout
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Running"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Kategori */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 dark:text-white mb-2">
            Kategori
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Cardio">
              Cardio
            </option>

            <option value="Strength">
              Strength
            </option>

            <option value="Flexibility">
              Flexibility
            </option>
          </select>
        </div>

        {/* Durasi */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 dark:text-white mb-2">
            Durasi (menit)
          </label>

          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Contoh: 30"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="1"
          />
        </div>

        {/* Kalori */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-800 dark:text-white mb-2">
            Kalori (kcal)
          </label>

          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Contoh: 250"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="1"
          />
        </div>

        {/* Tombol */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          + Tambah Workout
        </button>

      </form>

    </div>
  );
}