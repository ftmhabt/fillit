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
  return (
    <div>
      <ProgressIndicator goal={goal} score={score} />
      <WaveContainer goal={goal} score={score} />
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
