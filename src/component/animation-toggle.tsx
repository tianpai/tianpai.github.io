interface AnimationToggleProps {
  isAnimating: boolean;
  onToggle: () => void;
}

export function AnimationToggle({
  isAnimating,
  onToggle,
}: AnimationToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 cursor-pointer text-sm"
    >
      {isAnimating ? "stop" : "start"}
    </button>
  );
}
