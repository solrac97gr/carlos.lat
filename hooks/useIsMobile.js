import { useEffect, useState } from "react";
import { CheckIsMobile } from "../lib/helpers";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(CheckIsMobile);
  }, []);

  return isMobile;
};
