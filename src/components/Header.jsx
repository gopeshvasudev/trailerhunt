import { MdLightMode, MdNightlightRound, MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSideBar } from "../store/reducers/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <header className="sticky top-0 w-full h-[10vh] flex items-center justify-between px-5 bg-zinc-950 text-white">
      <div className="flex items-center gap-5">
        <span
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(toggleSideBar())}
        >
          <MdOutlineMenu />
        </span>

        <h1 className="font-semibold text-2xl">
          Trailer | <span className="text-rose-400 font-semibold">Hunt</span>
        </h1>
      </div>

      <div className="buttons flex items-center gap-2">
        <button className="rounded-lg px-2 py-[7px] bg-rose-400 text-sm">
          Ask to A.I
        </button>

        <button
          className="rounded-xl p-2 bg-rose-400 text-xl"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {isDarkMode ? (
            <MdLightMode className="text-rose-100" />
          ) : (
            <MdNightlightRound className="-rotate-45 text-rose-800" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
