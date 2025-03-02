export default function ProgressIndicator({
  percentage,
}: {
  percentage: number;
}) {
  return <div>progress: {percentage.toFixed(2)}%</div>;
}
