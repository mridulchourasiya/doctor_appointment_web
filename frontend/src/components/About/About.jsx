import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        {/* About Img */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be the best in City</h2>
          <p className="text__para">
            Effortlessly schedule doctor appointments with our user-friendly
            application. Streamlined interface, real-time availability, and
            instant confirmations make managing your health convenient and
            stress-free.
          </p>
          <p className="text__para mt-[30px]">
            Seamlessly book doctor appointments via our intuitive app. Simplify
            healthcare with easy navigation, real-time scheduling, and prompt
            confirmations, ensuring efficient and stress-free appointment
            management
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
