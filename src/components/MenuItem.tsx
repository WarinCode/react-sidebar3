import { useEffect, ReactElement, FC } from "react";
import Dropdown from "../containers/Dropdown";
import DropdownItem from "./DropdownItem";
import { MenuItemProps } from "../types";
import { IoIosArrowDown } from "react-icons/io";

const MenuItem: FC<MenuItemProps> = ({
  icon,
  title,
  isDropdown,
  dropdownItems,
  active,
  setActive,
  toggle,
  setToggle,
}): ReactElement => {
  useEffect((): void => {
    if (active === title) {
      setToggle(true);
    }
  }, [active]);

  const handleActive = (): void => {
    setActive(title);
  };

  const handleToggle = (): void => {
    handleActive();
    setToggle((t: boolean): boolean => !t);
  };

  if (isDropdown) {
    dropdownItems = dropdownItems as string[];

    return (
      <>
        <li
          className={`menu-item text-slate-50 h-14 ps-5 flex items-center cursor-pointer ${
            active === title ? "bg-primary" : "bg-inherit"
          } rounded-lg hover:${
            active !== title ? "bg-black-alpha" : "bg-primary"
          } select-none`}
          onClick={handleToggle}
        >
          <span className="text-2xl">{icon}</span>
          <span>
            <h5 className="capitalize ms-5 tracking-wide">{title}</h5>
          </span>
          <span
            className={`absolute right-12 transition-transform ease-in-out delay-[50] ${
              toggle && active === title ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </li>
        <Dropdown toggle={toggle} active={active} title={title}>
          {dropdownItems.map(
            (item: string): ReactElement => (
              <DropdownItem item={item} />
            )
          )}
        </Dropdown>
      </>
    );
  } else {
    return (
      <li
        className={`menu-item text-slate-50 h-14 ps-5 flex items-center cursor-pointer ${
          active === title ? "bg-primary" : "bg-inherit"
        } rounded-lg hover:${
          active !== title ? "bg-black-alpha" : "bg-primary"
        } select-none`}
        onClick={handleActive}
      >
        <span className="text-2xl">{icon}</span>
        <span>
          <h5 className="capitalize ms-5 tracking-wide">{title}</h5>
        </span>
      </li>
    );
  }
};

export default MenuItem;
