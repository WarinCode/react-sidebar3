import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Menu {
  icon: JSX.Element;
  title: string;
  isDropdown?: boolean;
  dropdownItems?: string[];
}

export interface MenuItemProps extends Menu {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
  }

interface ContainerProps {
  children: ReactNode;
}
export interface WrapperProps extends ContainerProps {}
export interface SidebarHeaderProps extends ContainerProps {}
export interface SidebarMenuProps extends ContainerProps {}
export interface DropdownProps
  extends ContainerProps,
    Pick<MenuItemProps, "active" | "toggle">,
    Pick<Menu, "title"> {}
export interface DropdownItemProps {
  item: string;
}
