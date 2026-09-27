import { useEffect, useState } from "react";
import WINDOW_CONST from "../constants/windowConst";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isDesktop: width >= WINDOW_CONST.desktop,
  };
};

export default useWindowSize;
