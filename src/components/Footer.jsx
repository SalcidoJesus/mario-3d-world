import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="bg-wave-pattern bg-repeat-x h-6 relative -top-4"></div>

        <div className="container mx-auto text-center py-10 w-2/3">
          <div className="pb-5">
            <a href="#" className="boton group">
              Customer Support
              <span className="arrow arrow-group"></span>
            </a>
          </div>

          <div className="text-white">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              dolor facilis nihil exercitationem.
            </p>

            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              dolor facilis nihil exercitationem tempora natus blanditiis at
              maxime doloremque consectetur est voluptates, error soluta, amet
              dignissimos! Natus nulla quae quos.
            </p>

            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              dolor facilis nihil exercitationem tempora natus blanditiis at
              maxime.
            </p>

            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>

            <p className="py-2">hola :D</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
