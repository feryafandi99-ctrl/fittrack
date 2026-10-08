import { useFitness } from "../context/FitnessContext";

import pushupBg from "../assets/pushup-bg.jpg";
import swimmingBg from "../assets/swimming-bg.jpg";
import yogaBg from "../assets/yoga-bg.jpg";
import runningBg from "../assets/running-bg.jpg";

export default function WorkoutCard({ workout }) {
  const {
    deleteWorkout,
    toggleWorkout
  } = useFitness();

  const backgroundImage =
    workout.name === "Push UP"
      ? pushupBg
      : workout.name === "Swimming"
      ? swimmingBg
      : workout.name === "Yoga"
      ? yogaBg
      : workout.name === "Running"
      ? runningBg
      : null;

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Apakah kamu yakin ingin menghapus ${workout.name}?`
    );

    if (confirmDelete) {
      deleteWorkout(workout.id);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg min-h-[340px] bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >

      {/* Overlay supaya tulisan mudah dibaca */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Isi Card */}
      <div className="relative z-10 p-5 text-white">

        {/* Nama Workout */}
        <div>
          <h3 className="text-xl font-bold text-white">
            {workout.name}
          </h3>

          <p className="text-sm text-blue-300 mt-1">
            {workout.category}
          </p>
        </div>

        {/* Durasi dan Kalori */}
        <div className="grid grid-cols-2 gap-4 mt-5">

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm text-white/80">
              Durasi
            </p>

            <p className="font-bold text-white">
              {workout.duration} menit
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm text-white/80">
              Kalori
            </p>

            <p className="font-bold text-white">
              {workout.calories} kcal
            </p>
          </div>

        </div>

        {/* Tanggal dan Status */}
        <div className="flex justify-between items-center mt-5">

          <p className="text-sm text-white/80">
            {workout.date}
          </p>

          {workout.completed ? (
            <span className="text-green-400 font-semibold">
              Selesai
            </span>
          ) : (
            <span className="text-orange-400 font-semibold">
              Belum selesai
            </span>
          )}

        </div>

        {/* Tombol Selesai */}
        <button
          onClick={() => toggleWorkout(workout.id)}
          className={`w-full mt-5 py-2 rounded-lg font-semibold ${
            workout.completed
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {workout.completed
            ? "Tandai Belum Selesai"
            : "Tandai Selesai"}
        </button>

        {/* Tombol Hapus */}
        <button
          onClick={handleDelete}
          className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600"
        >
          Hapus Workout
        </button>

      </div>
    </div>
  );
}