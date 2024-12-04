import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/reducers/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <header className="sticky top-0 w-full h-[12vh] flex items-center justify-between px-5">
      <h1 className="font-semibold text-2xl">
        Trailer | <span className="text-rose-400 font-semibold">Hunt</span>
      </h1>

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
