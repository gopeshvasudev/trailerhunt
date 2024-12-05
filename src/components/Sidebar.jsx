import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ isDarkMode }) => {
  const isSideBarActive = useSelector((store) => store.app.isSideBarActive);

  const linkData = [
    {
      path: "/movies/popular",
      name: "Popular",
    },
    {
      path: "/movies/now-playing",
      name: "Now Playing",
    },
    {
      path: "/movies/top-rated",
      name: "Top Rated",
    },
    {
      path: "/movies/upcoming",
      name: "Upcoming",
    },
  ];

  return (
    <aside
      className={`shrink-0 h-full w-56 py-2 px-3 border-r-2 duration-300 absolute top-0 left-0 z-10 lg:static overflow-hidden ${
        isDarkMode
          ? "border-zinc-800 bg-zinc-900"
          : "border-zinc-200 bg-zinc-50"
      } ${!isSideBarActive && "w-[0px] px-[0px] border-none"}`}
    >
      <nav>
        <ul className="w-full text-black flex flex-col gap-2">
          {linkData?.map((data) => (
            <li
              key={data.name}
              className="w-full bg-rose-400 py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <Link to={data.path} className="font-semibold text-sm">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
