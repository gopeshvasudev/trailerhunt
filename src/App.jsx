import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <div
      className={`parent w-full ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-zinc-50 text"
      }`}
    >
      <Header />

      <div className="flex gap-3 w-full h-[90vh] relative">
        <Sidebar isDarkMode={isDarkMode} />

        <main className="main w-full h-full py-2 px-5 lg:px-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
