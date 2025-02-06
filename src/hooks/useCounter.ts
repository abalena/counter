import { useState } from "react";
import { MAX_COUNTER, MIN_COUNTER } from "../constants/common";

export function useCounter(initialCount = 0, initialStep = 1) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () =>
    setCount((prev) => (prev + step > MAX_COUNTER ? MAX_COUNTER : prev + step));

  const decrement = () =>
    setCount((prev) => (prev - step < MIN_COUNTER ? MIN_COUNTER : prev - step));

  const reset = () => setCount(initialCount);

  return { count, increment, decrement, reset, step, setStep };
}
