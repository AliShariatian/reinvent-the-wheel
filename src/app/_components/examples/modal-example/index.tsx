import { FC, ReactElement } from "react";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalOverlay,
  ModalPortal,
  ModalTrigger,
} from "@/components/ui/modal";

export const ModalExample: FC = (): ReactElement => {
  return (
    <section className="flex w-full items-center justify-center rounded-3xl border border-slate-700 py-28">
      <Modal>
        <ModalTrigger>Trigger</ModalTrigger>

        <ModalPortal>
          <ModalOverlay />

          <ModalContent className="bg-slate-700">
            <ModalClose className="absolute -top-10 -left-10 shrink-0 rounded-full border border-slate-200 px-2 py-1 text-sm">
              Another Close
            </ModalClose>

            <div className="flex items-center justify-between">
              <ModalClose className="shrink-0 rounded-full border border-slate-200 px-2 py-1 text-sm">
                Close
              </ModalClose>

              <span>Modal Header</span>
            </div>

            <main className="mt-8">Modal</main>
          </ModalContent>
        </ModalPortal>
      </Modal>
    </section>
  );
};
