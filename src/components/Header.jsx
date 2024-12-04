import { MdLightMode, MdNightlightRound, MdOutlineMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSideBar } from "../store/reducers/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <header className="sticky top-0 w-full h-[10vh] flex items-center justify-between px-5 bg-zinc-950">
      <div className="flex items-center gap-5">
        <span
          className="text-2xl cursor-pointer text-white"
          onClick={() => dispatch(toggleSideBar())}
        >
          <MdOutlineMenu />
        </span>

        <h1 className="font-semibold text-2xl  text-white">
          Trailer | <span className="text-rose-400 font-semibold">Hunt</span>
        </h1>
      </div>

      <div className="buttons flex items-center gap-2">
        <div
          className="duration-300 rounded-xl p-2 bg-rose-400 text-xl"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {isDarkMode ? (
            <MdLightMode />
          ) : (
            <MdNightlightRound className="-rotate-45" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
