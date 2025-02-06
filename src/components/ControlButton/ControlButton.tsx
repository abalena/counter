import "./ControlButton.css";

export enum ControlButtonType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface ControlButtonProps {
  type: ControlButtonType;
  onClick: () => void;
}

const BUTTON_TITLE_BY_TYPE: Record<string, string> = {
  [ControlButtonType.INCREMENT]: "+",
  [ControlButtonType.DECREMENT]: "-",
};

export function ControlButton({ type, onClick }: ControlButtonProps) {
  return (
    <button className="Control-btn" onClick={onClick}>
      {BUTTON_TITLE_BY_TYPE[type]}
    </button>
  );
}

export default ControlButton;
