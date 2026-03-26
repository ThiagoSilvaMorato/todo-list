import {
  checkboxIconVariants,
  checkboxVariants,
  checkboxWrapperVariants,
} from "@/constants/checkboxVariants";
import Icon from "../Icon";
import type { CheckboxProps } from "./models";
import CheckIcon from "@/assets/icons/check.svg?react";
import Skeleton from "../Skeleton";

export default function Checkbox({
  variant,
  size,
  disabled,
  className,
  loading,
  ...props
}: CheckboxProps) {
  if (loading) {
    return <Skeleton rounded='sm' className={checkboxVariants({ variant: "none", size })} />;
  }

  return (
    <label className={checkboxWrapperVariants({ className })}>
      <input type='checkbox' {...props} className={checkboxVariants({ variant, size, disabled })} />
      <Icon svg={CheckIcon} className={checkboxIconVariants({ size })} />
    </label>
  );
}
