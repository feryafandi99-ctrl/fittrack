import { useFitness } from "../context/FitnessContext";

export default function WeeklyTarget() {
  const {
    workouts,
    weeklyTarget,
    setWeeklyTarget
  } = useFitness();

  const completedWorkouts = workouts.filter(
    (workout) => workout.completed
  ).length;

  const progress =
    weeklyTarget > 0
      ? Math.min(
          (completedWorkouts / weeklyTarget) * 100,
          100
        )
      : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-8 border border-gray-200 dark:border-gray-800">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            🎯 Target Workout Mingguan
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Pantau target latihan kamu minggu ini.
          </p>
        </div>

        <span className="text-3xl">
        </span>

      </div>

      {/* Target */}
      <div className="flex items-center justify-between mb-5">

        <span className="font-semibold text-gray-800 dark:text-white">
          Target Workout
        </span>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setWeeklyTarget(
                Math.max(1, weeklyTarget - 1)
              )
            }
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            −
          </button>

          <span className="font-bold text-xl text-gray-800 dark:text-white">
            {weeklyTarget}
          </span>

          <button
            onClick={() =>
              setWeeklyTarget(
                weeklyTarget + 1
              )
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            +
          </button>

        </div>

      </div>

      {/* Progress */}
      <div className="flex justify-between mb-2">

        <span className="font-semibold text-gray-800 dark:text-white">
          Progress
        </span>

        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {completedWorkouts} / {weeklyTarget} workout
        </span>

      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`
          }}
        ></div>

      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
        {Math.round(progress)}% target tercapai
      </p>

      {/* Conditional Rendering */}
      {completedWorkouts >= weeklyTarget ? (

        <div className="mt-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-lg font-semibold">
          🎉 Target workout minggu ini sudah tercapai!
        </div>

      ) : (

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-3 rounded-lg">
          Tetap semangat! Masih ada{" "}
          <span className="font-bold">
            {weeklyTarget - completedWorkouts}
          </span>{" "}
          workout lagi.
        </div>

      )}

    </div>
  );
}