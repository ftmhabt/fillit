import { useState } from "react";

export default function AddActivity({
  onAdd,
}: {
  onAdd: (activityScore: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [activity, setActivity] = useState("");
  return (
    <>
      <button className=" bg-red-400" onClick={() => setIsOpen(true)}>
        Add
      </button>
      <div
        className={
          isOpen
            ? "flex flex-col fixed bg-slate-400 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            : "hidden"
        }
      >
        <button onClick={() => setIsOpen(false)}>close</button>
        <div className="flex">
          <input
            type="text"
            value={activity}
            placeholder="activity"
            onChange={(e) => setActivity(e.target.value)}
          />
          <input
            type="text"
            value={score}
            placeholder="score"
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        <button
          onClick={() => {
            onAdd(score);
            setActivity("");
            setScore(0);
            setIsOpen(false);
          }}
        >
          add
        </button>
      </div>
    </>
  );
}
