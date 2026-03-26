import type { skeletonVariants } from "@/constants/skeletonVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface SkeletonProps
  extends VariantProps<typeof skeletonVariants>,
    ComponentProps<"div"> {}
