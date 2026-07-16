import { FC, ReactElement } from "react";
import { Ripple } from "@/components/ui/ripple";

export const RippleExample: FC = (): ReactElement => {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-8 rounded-3xl border border-slate-700 py-28">
      <Ripple className="bb rounded-2xl p-16">
        <div className="select-none">RippleExample 1</div>
      </Ripple>

      <Ripple className="bb cursor-pointer rounded-4xl transition-[border-radius] hover:rounded-md">
        <div className="grid size-40 place-items-center select-none">RippleExample 2</div>
      </Ripple>

      <Ripple className="bb cursor-pointer rounded-full">
        <div className="grid size-40 place-items-center select-none">RippleExample 3</div>
      </Ripple>
    </section>
  );
};
