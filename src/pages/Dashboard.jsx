import { useFitness } from "../context/FitnessContext";
import WorkoutCard from "../components/WorkoutCard";
import WeeklyTarget from "../components/WeeklyTarget";
import workoutBg from "../assets/workout-bg.jpg";
import caloriesBg from "../assets/calories-bg.jpg";
import durationBg from "../assets/duration-bg.jpg";
import completedBg from "../assets/completed-bg.jpg";

export default function Dashboard() {
  const { workouts } = useFitness();

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

  const completedWorkouts = workouts.filter(
    (workout) => workout.completed
  ).length;

  return (
    <div className="max-w-6xl mx-auto">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 text-white rounded-2xl p-8 mb-8 shadow-lg">

        <p className="text-blue-100 mb-2">
          Selamat datang kembali 
        </p>

        <h1 className="text-4xl font-bold mb-3">
          FitTrack 
        </h1>

        <p className="text-blue-100 max-w-xl">
          Pantau aktivitas olahraga kamu,
          capai target mingguan, dan tetap
          konsisten menjaga kesehatan.
        </p>

      </div>

      {/* Statistik */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">

  {/* Total Workout */}
  <div
    className="relative overflow-hidden rounded-xl shadow-lg min-h-[180px] bg-cover bg-center"
    style={{ backgroundImage: `url(${workoutBg})` }}
  >
    <div className="absolute inset-0 bg-black/55"></div>

    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
      <p className="text-lg font-medium">
        Total Workout
      </p>

      <h2 className="text-5xl font-bold">
        {workouts.length}
      </h2>
    </div>
  </div>


  {/* Total Calories */}
  <div
    className="relative overflow-hidden rounded-xl shadow-lg min-h-[180px] bg-cover bg-center"
    style={{ backgroundImage: `url(${caloriesBg})` }}
  >
    <div className="absolute inset-0 bg-black/55"></div>

    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
      <p className="text-lg font-medium">
        Total Calories
      </p>

      <div>
        <h2 className="text-5xl font-bold">
          {totalCalories}
        </h2>

        <p className="text-sm mt-1">
          kcal
        </p>
      </div>
    </div>
  </div>


  {/* Total Duration */}
  <div
    className="relative overflow-hidden rounded-xl shadow-lg min-h-[180px] bg-cover bg-center"
    style={{ backgroundImage: `url(${durationBg})` }}
  >
    <div className="absolute inset-0 bg-black/55"></div>

    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
      <p className="text-lg font-medium">
        Total Duration
      </p>

      <div>
        <h2 className="text-5xl font-bold">
          {totalDuration}
        </h2>

        <p className="text-sm mt-1">
          menit
        </p>
      </div>
    </div>
  </div>


  {/* Selesai */}
  <div
    className="relative overflow-hidden rounded-xl shadow-lg min-h-[180px] bg-cover bg-center"
    style={{ backgroundImage: `url(${completedBg})` }}
  >
    <div className="absolute inset-0 bg-black/55"></div>

    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
      <p className="text-lg font-medium">
        Selesai
      </p>

      <div>
        <h2 className="text-5xl font-bold">
          {completedWorkouts}
        </h2>

        <p className="text-sm mt-1">
          workout
        </p>
      </div>
    </div>
  </div>

</div>

      {/* Target */}
      <WeeklyTarget />

      {/* Workout Terbaru */}
      <div className="flex items-center justify-between mb-4">

        <div>
          <h2 className="text-2xl font-bold">
            Workout Terbaru
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Aktivitas latihan kamu.
          </p>
        </div>

      </div>

      {workouts.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 text-center">

          <p className="text-gray-500 dark:text-gray-400">
            Belum ada workout.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {workouts.slice(-4).reverse().map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}

        </div>
      )}

    </div>
  );
}