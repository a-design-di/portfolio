import { useEffect } from "react";
import initScroll from "../vendors/scroll.min.js";
export default ({children}) => {
  useEffect(() => {
    initScroll();
  }, []);
  return (
    <div data-scroll="fade-up 1s hide">
      {children}
    </div>
  );
};
