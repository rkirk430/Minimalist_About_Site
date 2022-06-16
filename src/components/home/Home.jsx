import React from "react";
import Social from "../Social";
import Headshot from '../../assets/headshot_picture1.png'

const Home = () => {
  return (
    <>
      <div className="homepage__home">
        <img src={Headshot} alt="Headshot"/>
        <h3> Hello </h3>
      </div>

    </>
  );
};

export default Home;
