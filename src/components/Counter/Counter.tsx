import { MAX_COUNTER, MIN_COUNTER } from "../../constants/common";
import { useCounter } from "../../hooks/useCounter";
import ControlButton, {
  ControlButtonType,
} from "../ControlButton/ControlButton";
import StepInput from "../StepInput/StepInput";

import "./Counter.css";

export default function Counter() {
  const { count, increment, decrement, reset, setStep } = useCounter();

  return (
    <div className="Counter-wrapper">
      <div className="Btn-wrapper">
        {count > MIN_COUNTER && (
          <ControlButton
            type={ControlButtonType.DECREMENT}
            onClick={decrement}
          />
        )}
      </div>
      <div className="Counter-main">
        <span className="Count">{count}</span>

        <StepInput setStep={setStep} />

        <button className="Reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="Btn-wrapper">
        {count < MAX_COUNTER && (
          <ControlButton
            type={ControlButtonType.INCREMENT}
            onClick={increment}
          />
        )}
      </div>
    </div>
  );
}
