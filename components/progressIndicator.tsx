export default function ProgressIndicator({
  score,
  goal,
}: {
  score: number;
  goal: number;
}) {
  function calculateFillPercentage(score: number, goal: number) {
    if (goal <= 0) return 0;
    return (score / goal) * 100;
  }
  const percentageFilled = calculateFillPercentage(score, goal);
  return <div>progress: {percentageFilled.toFixed(2)}%</div>;
}
