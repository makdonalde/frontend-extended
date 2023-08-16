import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";
interface ButtonProps {
  className?: string;
}
export const Button: FC<ButtonProps> = ({ className }: ButtonProps) => {
  return <div className={classNames(cls.button, {}, [className])}></div>;
};
