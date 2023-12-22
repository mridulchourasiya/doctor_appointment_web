import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About";
import featureImg from "../assets/images/feature-img.png";
import ServiceList from "../components/Service/ServiceList";
const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patient live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Our mission is to provide high quality medical care and
                  support to patients in need of it. Whether you are looking for
                  general medical advice or specialized treatment, we have the
                  expertise to assist you. We are dedicated to improving the
                  health and wellness of our community through innovative
                  solutions that make healthcare more accessible and affordable
                  for
                </p>
                <button className="btn">Book a Appointment</button>
              </div>
              {/* Hero Counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="w-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="w-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="w-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero Content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" />
                <img src={heroImg03} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone.our health system offer unmatched
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. our health system offers
                  unmatched, expert healthcare professionals who are dedicated
                  to providing you with top-notch service.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-7 h-6" />
                </Link>
              </div>
            </div>
            {/* frist section */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Navigate Your Health Journey: Find, Book, and Experience
                  Doctor Appointments Seamlessly on Our Convenient and
                  User-Friendly Platform.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-7 h-6" />
                </Link>
              </div>
            </div>
            {/* Second Section */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. our health system offers
                  unmatched, expert healthcare professionals who are dedicated
                  to providing you with top-notch service.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto
                flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-7 h-6" />
                </Link>
              </div>
            </div>

            {/* Third section */}
          </div>
        </div>
      </section>
      <About />

      {/* service Section start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">Our Medical Service</h2>
            <p className="text__para text-center">
              Our medical services include a wide range of procedures and system
              are world class
            </p>
          </div>
          {/* list section */}

          <ServiceList />
        </div>
      </section>
      {/* service Section end */}

      {/* Feacture Section start */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Feacture content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get vritual tratement <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schdule the appoitement directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and context their office.
                </li>
                <li className="text__para">
                  3. View our physician who are accpeting now patient, use the
                  online scheduling tool to select an Appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* Feacture img */}
            <div className="relative z-10 lx:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* feacture Section end */}
    </>
  );
};

export default Home;
