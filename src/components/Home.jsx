import React from "react";
import BackGround from "../assets/videos/worksite4.mp4";

const Home = () => {
  return (
    <>
      <div>
        <video src={BackGround} type="video/mp4" autoPlay muted className="w-full" />
      </div>
      <div className="absolute top-10">
        <h1 className="standingFor">Standing For excellence...</h1>
        <h1 className="excellence">since 2001</h1>
      </div>
    </>
  );
};

export default Home;
