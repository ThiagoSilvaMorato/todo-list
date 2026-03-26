import type { badgeVariants } from "@/constants/badgeVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}
