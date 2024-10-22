import { ReactElement, FC } from "react";
import { DropdownProps } from "../types";

const Dropdown: FC<DropdownProps> = ({
  children,
  active,
  toggle,
  title,
}): ReactElement => {
  return (
    <ul className={`${active === title && toggle ? "block" : "hidden"}`}>
      {children}
    </ul>
  );
};

export default Dropdown;
