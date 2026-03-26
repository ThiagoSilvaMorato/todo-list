import { skeletonVariants } from "@/constants/skeletonVariants";
import type { SkeletonProps } from "./models";

export default function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return <div className={skeletonVariants({ rounded, className })} {...props} />;
}
