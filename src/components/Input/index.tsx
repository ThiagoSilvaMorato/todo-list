import { inputVariants } from "@/constants/inputVariants";
import type { InputTextProps } from "./models";
import { cx } from "class-variance-authority";
import { textVariants } from "@/constants/textVariants";

export default function Input({ size, disabled, className, ...props }: InputTextProps) {
  return (
    <input
      className={cx(inputVariants({ size, disabled }), textVariants(), className)}
      {...props}
    />
  );
}
