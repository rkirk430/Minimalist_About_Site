import React from "react";
import Social from "../social/Social";
import Headshot from '../../assets/headshot_picture1.png'
import './home.css'



const Home = () => {
  return (
    <>
      <div className="homepage__home">
        <div className="homepage__content">
          {/* Start of Image */}
          <div className="homepage__content-picture">
            <div className="homepage__content-picture-image">
              <img src={Headshot} alt="Headshot"/>
            </div>
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
