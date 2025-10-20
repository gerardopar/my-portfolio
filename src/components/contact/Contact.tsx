import React from "react";

import { GithubIcon } from "../svgs/GithubIcon";

export const Contact: React.FC = () => {
  return (
    <section
      className="relative h-[90vh] bg-primary-black px-24 max-mobile-768:px-12 max-mobile-640:px-4"
      id="contact"
    >
      <div className="flex flex-col h-full items-start justify-between py-[50px]">
        <p className="text-[120px] text-primary-gray font-semibold leading-[100px] max-mobile-640:leading-[60px] max-mobile-768:text-[90px] max-mobile-640:text-[60px]">
          Let's{" "}
          <span className="text-[120px] text-primary-white font-semibold max-mobile-768:text-[90px] max-mobile-640:text-[60px]">
            Connect
          </span>
        </p>

        <div className="flex flex-col items-start w-full gap-4">
          <h3 className="text-2xl text-left text-primary-white font-inter font-semibold leading-8">
            Drop me a line — I’m always happy to connect.
          </h3>
          <div className="flex items-center w-full max-mobile-640:flex-col">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gerardo-paredes-562474168",
                  "_blank"
                )
              }
              className="flex-1 bg-gray-shade-light py-6 px-4 font-inter text-primary-white text-xl cursor-pointer max-mobile-768:text-lg max-mobile-640:w-full"
            >
              LinkedIn
            </button>
            <button
              onClick={() => {
                window.location.href = "mailto:gerardparedes23@gmail.com";
              }}
              className="flex-1 bg-gray-shade-medium py-6 px-4 font-inter text-primary-white text-xl cursor-pointer max-mobile-768:text-lg max-mobile-640:w-full"
            >
              Send Email
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/gerardopar", "_blank")
              }
              className="flex-1 items-center justify-center text-center bg-gray-shade-dark gap-2 py-6 px-4 font-inter text-primary-white text-xl cursor-pointer max-mobile-768:text-lg max-mobile-640:w-full"
            >
              <GithubIcon className="w-[24px] h-[24px] inline-block" /> Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
