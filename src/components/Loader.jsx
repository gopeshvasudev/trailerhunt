import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
      <video className="w-48" autoPlay loop muted>
        <source src="../assets/loading_animation.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Loader;
