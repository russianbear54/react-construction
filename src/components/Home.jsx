import React from "react";
import BackGround from "../assets/videos/worksite4.mp4";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <video src={BackGround} type="video/mp4" autoPlay muted className="w-full" />
      </div>
    </>
  );
};

export default Home;
