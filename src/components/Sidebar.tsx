import { useState, useEffect, ReactElement } from "react";
import SidebarHeader from "../containers/SidebarHeader";
import SidebarMenu from "../containers/SidebarMenu";
import MenuItem from "./MenuItem";
import Line from "./Line";
import reactIcon from "../assets/react.svg";
import menuList from "../data/data";
import { Menu } from "../types";

const Sidebar = (): ReactElement => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect((): (() => void) => {
    setMenu(menuList);

    return (): void => {
      setMenu([]);
      setActive("");
      setToggle(false);
    };
  }, []);

  return (
    <section
      id="sidebar"
      className="relative top-8 w-[330px] h-[750px] overflow-hidden backdrop-blur-lg z-10 drop-shadow-md text-slate-50 rounded-2xl px-6 py-8 bg-secondary shadow-2xl"
    >
      <SidebarHeader>
        <img src={reactIcon} alt="react-icon" className="w-12 h-12" />
        <h2 className="ms-4 text-xl tracking-wide">React Sidebar</h2>
      </SidebarHeader>
      <Line />
      <SidebarMenu>
        {menu.map(
          (menuItem: Menu): ReactElement => (
            <MenuItem
              {...menuItem}
              active={active}
              setActive={setActive}
              toggle={toggle}
              setToggle={setToggle}
            />
          )
        )}
      </SidebarMenu>
    </section>
  );
};

export default Sidebar;
