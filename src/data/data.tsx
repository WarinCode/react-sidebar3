import { Menu } from "../types";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoCartOutline,
  IoSettingsOutline,
  IoCreateOutline,
} from "react-icons/io5";
import { GoLock } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

const menuList: Menu[] = [
  {
    title: "dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "settings",
    icon: <IoSettingsOutline />,
    isDropdown: true,
    dropdownItems: ["display", "appearance", "preferences"],
  },
  {
    title: "create",
    icon: <IoCreateOutline />,
    isDropdown: true,
    dropdownItems: ["article", "document", "video", "presentation"],
  },
  {
    title: "profile",
    icon: <AiOutlineUser />,
    isDropdown: true,
    dropdownItems: ["avatar", "theme"],
  },
  {
    title: "notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "products",
    icon: <IoCartOutline />,
  },
  {
    title: "account",
    icon: <GoLock />,
  },
];

export default menuList;
