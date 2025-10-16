import { FC, ReactElement } from "react";
import { Ripple } from "@/components/ui/ripple";

export const RippleExample: FC = (): ReactElement => {
  return (
    <section className="flex w-full items-center justify-center rounded-3xl border border-slate-700 py-28">
      <Ripple className="bb p-20">
        <div className="bb p-4 select-none">RippleExample</div>
      </Ripple>
    </section>
  );
};
