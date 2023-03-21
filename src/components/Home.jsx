import React from "react";
import homeIntroImg from "../images/intro-img.png";
import homeIntroImgNow from "../images/nowadaysStarWars_1200.jpg";

export default function Home() {
  return (
    <>
      <div className="intro">
        <h2>
          A long time ago... in a galaxy far,
          <br />
          far away...
        </h2>
        <img className="intro-img" src={homeIntroImg} alt="intro" />
        <div className="intro"></div>
        <h2 className="intro-last">... and now in our time :-)</h2>
        <div className="box">
        <img className="img-now box" src={homeIntroImgNow} alt="intro" />
        </div>
      </div>
      <div className="intro intro-last">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </>
  );
}
