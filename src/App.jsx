import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <div
      className={`parent w-full duration-300 ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-zinc-50 text-black"
      }`}
    >
      <Header />

      <div className="flex w-full h-[90vh] relative">
        <Sidebar isDarkMode={isDarkMode} />

        <main className="main w-full h-full py-2 px-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
