import { createElement } from "react";
import type { CardProps } from "./models";
import { cardVariants } from "@/constants/cardVariants";

export default function Card({ as = "div", size, children, className, ...props }: CardProps) {
  return createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
