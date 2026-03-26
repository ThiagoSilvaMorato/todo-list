import type { VariantProps } from "class-variance-authority";
import { type JSX, type ReactNode } from "react";
import type { textVariants } from "@/constants/textVariants";

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}
