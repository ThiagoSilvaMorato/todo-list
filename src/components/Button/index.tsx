import { buttonIconVariants, buttonTextVariants, buttonVariants } from "@/constants/buttonVariants";
import type { ButtonProps } from "./models";
import Icon from "../Icon";
import Text from "../Text";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  handling,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, disabled, handling, className })} {...props}>
      {icon && (
        <Icon
          svg={handling ? SpinnerIcon : icon}
          animate={handling}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant='body-md-bold' className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
