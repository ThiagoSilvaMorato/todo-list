import type { inputVariants } from "@/constants/inputVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface InputTextProps
  extends VariantProps<typeof inputVariants>,
    Omit<ComponentProps<"input">, "size" | "disabled"> {}
