import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../store/reducers/appSlice";

const Sidebar = ({ isDarkMode }) => {
  const isSideBarActive = useSelector((store) => store.app.isSideBarActive);

  return (
    <aside
      className={`shrink-0 sidebar h-full w-56 py-2 px-3 border-r-2 overflow-hidden duration-300 absolute top-0 left-0 z-10 lg:static ${
        isDarkMode
          ? "border-zinc-800 bg-zinc-900"
          : "border-zinc-200 bg-zinc-50"
      } ${!isSideBarActive && "w-0 px-0 border-none"}`}
    >
      <nav>
        <ul className="w-full text-black flex flex-col gap-2">
          <li className="w-full bg-rose-400 py-2 rounded-lg flex justify-center items-center gap-2 font-bold">
            Home
          </li>
          <li className="w-full bg-rose-400 py-2 rounded-lg flex justify-center items-center gap-2 font-bold">
            About
          </li>
          <li className="w-full bg-rose-400 py-2 rounded-lg flex justify-center items-center gap-2 font-bold">
            Popular
          </li>
          <li className="w-full bg-rose-400 py-2 rounded-lg flex justify-center items-center gap-2 font-bold">
            Favourite
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
