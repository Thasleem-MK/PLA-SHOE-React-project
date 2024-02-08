import React from "react";
import TitleHook from "../Hook/TitleHook";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function OurStory() {
  TitleHook("Story");
  return (
    <div>
      <div className="col-12 ps-5 pe-5">
        <div className="text-black mt-5 pt-4">
          <h1 className="text-black display-1" style={{ fontWeight: "bold" }}>
            Our Story
          </h1>
          <p className="h4" style={{ letterSpacing: "1px" }}>
            Taking a stylish and sustainable footwear
          </p>
          <p className="h4" style={{ letterSpacing: "1px" }}>
            with focus on creating a positive impact
          </p>
          <p className="h4" style={{ letterSpacing: "1px" }}>
            on both the world and the pople
          </p>
        </div>
        <div className="col-10 mt-5 mx-auto">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/XHOmBV4js_E?si=oQWAn0Y9_NmnLfpW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default OurStory;
