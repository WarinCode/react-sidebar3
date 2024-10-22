import { FC, ReactElement } from "react";
import { DropdownItemProps } from "../types";

const DropdownItem: FC<DropdownItemProps> = ({ item }): ReactElement => {
  return (
    <li className="text-slate-50 h-14 ps-7 flex items-center cursor-pointer dropdown-item transition-all delay-[180] hover:bg-black-alpha rounded-lg select-none">
      <div className="h-[7px] w-[7px] rounded-full bg-white-alpha"></div>
      <h5 className="capitalize ms-7">{item}</h5>
    </li>
  );
};

export default DropdownItem;
