import { ComponentProps, FC, ReactElement } from "react";
import { cn } from "@/utils";

type Props = ComponentProps<"div">;

export const ModalContent: FC<Props> = ({
  children,
  className,
  ...props
}): ReactElement | null => {
  return (
    <div
      className={cn(
        "relative w-full max-w-[calc(100%-2rem)] translate-y-0 rounded-xl p-4 opacity-100 transition-all sm:max-w-lg starting:-translate-y-4 starting:opacity-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
