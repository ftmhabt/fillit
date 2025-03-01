"use client";
import { ChangeEvent, useState } from "react";
import ProgressIndicator from "./progressIndicator";
import AddActivity from "./addActivity";

export default function Progress() {
  const [goal, setGoal] = useState(1200);
  const [score, setScore] = useState(20);
  function AddScore(activityScore: number) {
    setScore((prev) => prev + activityScore);
  }
  return (
    <div>
      <ProgressIndicator goal={goal} score={score} />
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
