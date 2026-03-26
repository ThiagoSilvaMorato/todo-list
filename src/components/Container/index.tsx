import { createElement } from "react";
import type { ContainerProps } from "./models";
import { containerVariants } from "@/constants/containerVariants";

export default function Container({ as = "div", children, className, ...props }: ContainerProps) {
  return createElement(
    as,
    { className: containerVariants({ size: "md", className }), ...props },
    children
  );
}
