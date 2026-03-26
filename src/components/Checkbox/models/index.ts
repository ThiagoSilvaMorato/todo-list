import type { checkboxVariants } from "@/constants/checkboxVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface CheckboxProps
  extends VariantProps<typeof checkboxVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}
