import { useTheme } from "../hooks";
import { ETheme } from "../interfaces";

type ButtonVariant = "primary" | "secondary" | "warn" | "error";

interface IButtonProps {
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  outlined?: boolean;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const {
    children,
    variant = "primary",
    disabled = false,
    outlined = false,
    onClick,
    type = "button",
  } = props;

  const [theme] = useTheme();

  const buttonStyles =
    theme === ETheme.Light
      ? { background: "white", color: "black" }
      : { background: "black", color: "white" };

  return (
    <button
      type={type}
      className={`button button--${variant} ${
        outlined ? "button--outlined" : ""
      }`}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
