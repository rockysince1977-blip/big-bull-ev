import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: String;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-0.5xl px-2.5 md:px-15",
        className
      )}
    >{children}</div>
  );
};

export default MaxWidthWrapper;
