import { FC  } from "react";
import { WrapperProps } from "../types";

const Wrapper:FC<WrapperProps> = ({ children }) => {
  return (
    <div className="z-0 bg-[url('../assets/imgs/bg2.jpg')] w-full h-[1000px] bg-center bg-no-repeat object-cover flex flex-col items-center">
        {children}
    </div>
  )
}

export default Wrapper;