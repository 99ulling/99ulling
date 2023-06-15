import styled from "@emotion/styled";
import { forwardRef, PropsWithChildren } from "react";

import { color, SIZES, typography } from "./shared/styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof SIZES;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-weight: ${typography.weight.medium};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: ${({ size = "MEDIUM" }) =>
    `${size === "SMALL" ? typography.size.s3 : typography.size.m1}px`};
  padding: ${({ size = "MEDIUM" }) =>
    `${size === "SMALL" ? typography.size.s3 : typography.size.m1}px`};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${(props) =>
    props.variant === "primary" &&
    `
      color: ${color.lightest};
      background: ${color.primary};
    `}

  ${(props) =>
    props.variant === "secondary" &&
    `
      color: ${color.primary};
      background: ${color.lightest};
      border: 2px solid ${color.primary};
    `}
`;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      size = "SMALL",
      variant = "primary",
      fullWidth = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
