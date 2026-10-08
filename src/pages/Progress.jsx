import { useFitness } from "../context/FitnessContext";

export default function Progress() {
  const { workouts, weeklyTarget } = useFitness();

  const completedWorkouts = workouts.filter(
    (workout) => workout.completed
  ).length;

  const totalCalories = workouts.reduce(
    (total, workout) =>
      total + Number(workout.calories),
    0
  );

  const totalDuration = workouts.reduce(
    (total, workout) =>
      total + Number(workout.duration),
    0
  );

  const progress =
    weeklyTarget > 0
      ? Math.min(
          (completedWorkouts / weeklyTarget) * 100,
          100
        )
      : 0;

  return (
    <div className="max-w-6xl mx-auto">

      {/* Judul */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Progress
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Lihat perkembangan workout kamu.
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Total Workout
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
            {workouts.length}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Workout Selesai
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600 dark:text-green-400">
            {completedWorkouts}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">
            Total Kalori
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">
            {totalCalories} kcal
          </h2>
        </div>

      </div>

      {/* Progress Mingguan */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-8 border border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">
          🎯 Progress Mingguan
        </h2>

        <div className="flex justify-between mb-2">

          <span className="font-semibold text-gray-800 dark:text-white">
            Workout
          </span>

          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {completedWorkouts} / {weeklyTarget}
          </span>

        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">

          <div
            className="bg-blue-600 h-5 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

        <p className="text-gray-500 dark:text-gray-400 mt-3">
          {Math.round(progress)}% target tercapai
        </p>

        {completedWorkouts >= weeklyTarget ? (

          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg p-4 mt-5 font-semibold">
            🎉 Selamat! Target workout minggu ini tercapai.
          </div>

        ) : (

          <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg p-4 mt-5">
            Masih ada{" "}
            <span className="font-bold">
              {weeklyTarget - completedWorkouts}
            </span>{" "}
            workout untuk mencapai target.
          </div>

        )}

      </div>

      {/* Total Waktu */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ⏱️ Total Waktu Latihan
        </h2>

        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          {totalDuration}
        </p>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          menit
        </p>

      </div>

    </div>
  );
}