import { ComponentProps, FC, ReactElement } from "react";
import { PiSpinner } from "react-icons/pi";

import { cn } from "@/utils";

type Props = ComponentProps<typeof PiSpinner>;

export const Spinner: FC<Props> = ({ className, ...props }): ReactElement => {
  return <PiSpinner className={cn("animate-spin", className)} {...props} />;
};
