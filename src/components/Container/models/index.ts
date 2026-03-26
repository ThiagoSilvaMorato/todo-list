import type { containerVariants } from "@/constants/containerVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, JSX } from "react";

export interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements;
}
