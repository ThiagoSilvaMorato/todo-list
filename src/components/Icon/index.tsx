import { iconVariants } from "@/constants/iconVariants";
import type { IconProps } from "./models";

export default function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
  return <SvgComponent className={iconVariants({ animate, className })} {...props} />;
}
