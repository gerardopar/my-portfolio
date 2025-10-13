import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="relative h-[100vh] bg-primary-black px-12">
      <div className="px-12 pt-[100px]">
        <p className="text-[120px] text-primary-gray font-semibold leading-8">
          Let's{" "}
          <span className="text-[120px] text-primary-white font-semibold">
            Connect
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
