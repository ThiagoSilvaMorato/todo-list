import type Icon from "@/components/Icon";
import type { buttonIconVariants } from "@/constants/buttonIconVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export interface ButtonIconProps
  extends Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  handling?: boolean;
}
