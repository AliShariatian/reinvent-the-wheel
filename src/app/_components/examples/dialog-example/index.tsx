"use client";

import { FC, ReactElement } from "react";
import dynamic from "next/dynamic";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

// This module (and everything it imports) is only fetched the first time
// the dialog opens, because DialogContent doesn't render its children
// until `open` becomes true.
const HeavyReportPanel = dynamic(
  () => import("./heavy-report-panel").then((m) => m.HeavyReportPanel),
  { ssr: false },
);

export const DialogExample: FC = (): ReactElement => {
  return (
    <section className="flex w-full items-center justify-center rounded-3xl border border-slate-700 py-28">
      <Dialog>
        <DialogTrigger className="cursor-pointer rounded-lg px-4 py-2 text-white">
          Dialog Trigger
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export report</DialogTitle>
            <DialogDescription>Choose a format and range for the export.</DialogDescription>
          </DialogHeader>

          {/* Only fetched/mounted on first open — the fallback shows until it resolves */}
          <HeavyReportPanel />

          <DialogFooter>
            <DialogClose className="cursor-pointer rounded-lg border px-4 py-2">
              Cancel
            </DialogClose>

            <button className="cursor-pointer rounded-lg border px-4 py-2">Confirm export</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
