"use client";
import { ChangeEvent, useState } from "react";
import ProgressIndicator from "./progressIndicator";
import AddActivity from "./addActivity";
import WaveContainer from "./waveContainer";

export default function Progress() {
  const [goal, setGoal] = useState(1200);
  const [score, setScore] = useState(20);
  function AddScore(activityScore: number) {
    setScore((prev) => prev + activityScore);
  }
  function calculateFillPercentage(score: number, goal: number) {
    if (goal <= 0) return 0;
    return (score / goal) * 100;
  }
  const percentageFilled = calculateFillPercentage(score, goal);
  return (
    <div>
      <ProgressIndicator percentage={percentageFilled} />
      <WaveContainer percentage={percentageFilled} />
      <AddActivity onAdd={AddScore} />
      <input
        type="text"
        value={goal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setGoal(Number(e.target.value))
        }
        placeholder="Enter goal"
      />
    </div>
  );
}
