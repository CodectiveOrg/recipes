type Result = {
  message: string;
  icon: string;
};

export function useGreetingsHook(): Result {
  const hours = new Date().getHours();
  if (hours < 4) return results.night;
  if (hours < 11) return results.morning;
  if (hours < 16) return results.afternoon;
  if (hours < 20) return results.evening;
  return results.night;
}

const results = {
  night: { icon: "moon-linear", message: "Good Night" },
  morning: { icon: "sun-fog-linear", message: "Good Morning" },
  afternoon: { icon: "sun-2-linear", message: "Good Afternoon" },
  evening: { icon: "cloud-sun-2-linear", message: "Good Evening" },
} satisfies Record<string, Result>;
