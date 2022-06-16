import React from "react";
import Social from "../social/Social";
import Headshot from '../../assets/headshot_picture1.png'

const Home = () => {
  return (
    <>
      <div className="homepage__home">
        <div className="homepage__content">
          {/* Start of Image */}
          <div className="homepage__content-picture">
            <img src={Headshot} alt="Headshot"/>
          </div>
          {/* End of Image */}

          {/* Start of Details Section */}
          <div className="homepage__content-details">
            <h3 className="homepage__content-details-name"> RJ Kirk </h3>
            <p className="homepage__content-details-job"> Creative photographer based out of Europe </p>
          </div>
          <Social />
          {/* End of Details Section */}
        </div>
      </div>

    </>
  );
};

export default Home;
