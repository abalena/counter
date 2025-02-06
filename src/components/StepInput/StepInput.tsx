import { ChangeEvent } from "react";

import "./StepInput.css";

interface StepInputProps {
  setStep: (step: number) => void;
}

export function StepInput({ setStep }: StepInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const step = Number(event.target.value);
    setStep(step);
  };

  return (
    <>
      <h3 className="Title">Set step</h3>
      <input className="Input" type="number" onChange={handleChange} />
    </>
  );
}

export default StepInput;
