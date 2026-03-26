import type { iconVariants } from "@/constants/iconVariants";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react";

export interface IconProps extends ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: FC<ComponentProps<"svg">>;
}
