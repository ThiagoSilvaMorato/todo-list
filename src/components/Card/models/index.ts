import type { cardVariants } from "@/constants/cardVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, JSX } from "react";

export interface CardProps extends VariantProps<typeof cardVariants>, ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements;
}
