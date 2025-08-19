import { useEffect } from "react";

type Params = {
  scroll?: boolean;
};

export const useBodyScroll = ({ scroll = false }: Params) => {
  useEffect(() => {
    if (scroll) {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0";
    } else {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "1rem";
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [scroll]);
};
