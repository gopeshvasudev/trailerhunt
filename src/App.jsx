import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  return (
    <div
      className={`parent w-full ${
        isDarkMode ? "bg-zinc-900 text-white" : "bg-zinc-100 text"
      }`}
    >
      <Header />
      <main className="main w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
