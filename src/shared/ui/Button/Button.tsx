import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ThemeButton.CLEAR, ...other } = props;
  return (
    <button
      {...other}
      className={classNames(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
