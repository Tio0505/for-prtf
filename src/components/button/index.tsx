import React, { ButtonHTMLAttributes } from "react";

import "./styles.scss";
import classNames from "classnames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "default";
  variant?: "outlined" | "contained";
  rounded?:
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl";
}

export const Button: React.FC<IProps> = ({
  size = "size-sm",
  color = "primary",
  variant = "contained",
  rounded = "rounded-none",
  children,
  ...restProps
}) => {
  return (
    <button
      className={classNames("button", size, color, variant, rounded)}
      {...restProps}
    >
      {children}
    </button>
  );
};
