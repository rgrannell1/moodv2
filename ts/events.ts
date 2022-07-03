import { CloudEvent, EnergyData, MoodData } from "./types.ts";

export function AddMood(data: MoodData): CloudEvent<MoodData> {
  const timestamp = new Date().toISOString();

  return new CustomEvent("register-mood", {
    detail: {
      _id: `mood.${timestamp}`,
      timestamp,
      type: "xyz.rgrannell.mood.mood",
      data,
    },
  });
}

export function AddEnergy(data: EnergyData): CloudEvent<MoodData> {
  const timestamp = new Date().toISOString();

  return new CustomEvent("register-energy", {
    detail: {
      _id: `event.${timestamp}`,
      timestamp,
      type: "xyz.rgrannell.mood.energy",
      data,
    },
  });
}
