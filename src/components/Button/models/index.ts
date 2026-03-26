import type Icon from "@/components/Icon";
import type { buttonVariants } from "@/constants/buttonVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface ButtonProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}
