export default function useButtonMotionEffects() {
  const scale = { scale: 1.1 };
  const transition = { type: "spring", stiffness: 200, damping: 6 } as const;

  return { scale, transition };
}
