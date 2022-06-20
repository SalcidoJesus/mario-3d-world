
import React from "react";
import activity_img3 from "../assets/activity_img3.png";

const CatTastic = () => {
  return (
    <>
      <section className="bg-yellow-pink">
        <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>
        <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
          <div className="left xl:w-1/3 lg:w-1/2 p-5">
            <h3 className="text-yellow-900 font-black xsm:text-3xl sm:text-4xl">
              Cat <br /> Transformation <br /> Center
            </h3>

            <p className="py-4 text-xl">
              We're not kitten-transform into a cat-tastic new you!
            </p>

            <p>
              <a href="#" className="boton group">
                Meow! <span className="arrow arrow-group"></span>
              </a>
            </p>
          </div>
          <div className="right xl:w-2/3 lg:w-1/2">
            <img
              src={ activity_img3 }
              alt="hola :D"
              className="md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CatTastic;
