import { badgeSkeletonVariants, badgeTextVariants, badgeVariants } from "@/constants/badgeVariants";
import Text from "../Text";
import type { BadgeProps } from "./models";
import Skeleton from "../Skeleton";
import { cx } from "class-variance-authority";

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded='full'
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant='body-sm-bold' className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
