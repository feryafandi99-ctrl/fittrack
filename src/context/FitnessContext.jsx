import { createContext, useContext, useEffect, useState } from "react";
import initialWorkouts from "../utils/data";

const FitnessContext = createContext();

export function FitnessProvider({ children }) {

  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem("fittrack-workouts");

    if (savedWorkouts) {
      return JSON.parse(savedWorkouts);
    }

    return initialWorkouts;
  });

  const [weeklyTarget, setWeeklyTarget] = useState(() => {
    const savedTarget = localStorage.getItem("fittrack-target");

    if (savedTarget) {
      return Number(savedTarget);
    }

    return 5;
  });
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("fittrack-dark-mode");

  return savedMode === "true";
  });

  useEffect(() => {
  localStorage.setItem(
    "fittrack-dark-mode",
    darkMode
  );

  document.documentElement.classList.toggle(
    "dark",
    darkMode
  );
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(
      "fittrack-workouts",
      JSON.stringify(workouts)
    );
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem(
      "fittrack-target",
      weeklyTarget
    );
  }, [weeklyTarget]);

  const addWorkout = (workout) => {
    setWorkouts((currentWorkouts) => [
      ...currentWorkouts,
      {
        ...workout,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const deleteWorkout = (id) => {
    setWorkouts((currentWorkouts) =>
      currentWorkouts.filter(
        (workout) => workout.id !== id
      )
    );
  };

  const toggleWorkout = (id) => {
  setWorkouts((currentWorkouts) =>
    currentWorkouts.map((workout) =>
      workout.id === id
        ? {
            ...workout,
            completed: !workout.completed,
          }
        : workout
    )
  );
};

  return (
    <FitnessContext.Provider
      value={{
        workouts,
        addWorkout,
        deleteWorkout,
        toggleWorkout,
        weeklyTarget,
        setWeeklyTarget,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
}

export function useFitness() {
  return useContext(FitnessContext);
}