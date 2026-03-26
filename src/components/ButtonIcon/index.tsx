import Icon from "../Icon";
import Skeleton from "../Skeleton";
import type { ButtonIconProps } from "./models";
import { buttonIconIconVariants, buttonIconVariants } from "@/constants/buttonIconVariants";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  loading,
  handling,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded='sm'
        className={buttonIconVariants({ variant: "none", size, handling, className })}
      />
    );
  }

  return (
    <button className={buttonIconVariants({ variant, size, disabled, className })} {...props}>
      <Icon
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
}
