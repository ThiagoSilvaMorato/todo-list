import { createElement } from "react";
import type { TextProps } from "./models";
import { textVariants } from "@/constants/textVariants";

export default function Text({ className, children, as = "span", variant, ...props }: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  );
}
