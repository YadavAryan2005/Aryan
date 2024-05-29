import React from "react";
import aphoto from "./img/snapedit_1708932400544 (1).png";
import Message from "./img/Message.svg";
export default function Profile() {
  return (
    <div className="p-2">
      <div className="rounded-2xl md:h-[98vh] bg-yellow-300 overflow-hidden">
        <div className="flex flex-col md:flex-row px-5 pt-5 justify-center md:p-9 lg:p-14 items-center  ">
          <div className="md:w-1/2 w-full">
            <h1 data-aos="flip-up" className="text-blue-600 text-xl">
              __मेरा परिचय
            </h1>
            <h2
              data-aos="flip-down"
              className="font-serif text-4xl font-bold w-full flex  md:text-5xl py-3 md:pt-6"
            >
              Hey There,
              <br /> I’m Aryan
            </h2>
            <div data-aos="flip-down" className="font-serif">
              Current capabilities as a <b>Full Stack Developer</b> include the
              ability to create consistent and natural client experiences. I
              have extensive experience in responsive design, ensuring
              compatibility across various devices and screen sizes.
              Additionally, I possess a solid understanding of{" "}
              <b>React JS, Ant Design, and Tailwind CSS,</b>
              enabling me to build interactive and dynamic web applications. My
              proficiency extends to server-side development using{" "}
              <b>Node.js, Express.js, MongoDB,</b> and <b>MySQL</b>, where I
              excel in integrating backend functionalities such as <b>CRUD</b>{" "}
              operations and handling complex queries and operations with
              databases. Furthermore, I have knowledge of database management to
              effectively handle and organize information.
            </div>
            <br />
            <br />
            <div className="w-full flex flex-row gap-8 sm:gap-12">
              <a href="#Contact-form">
                <button
                  data-aos="flip-down"
                  offset="100"
                  className="mt-4 p-4 my-3 bg-blue-700 rounded-2xl text-white hover:mt-2 hover:mb-5 flex"
                >
                  Say Hello
                  <img className="h-6" src={Message} alt="" />
                </button>
              </a>
              <a href="#Projects">
                <button
                  data-aos="flip-down"
                  className="mt-4 p-4 my-3 bg-blue-700 rounded-2xl text-white hover:mt-2 hover:mb-5 flex "
                >
                  Explore Project
                  <img className="h-6" src={Message} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div
            className="md:w-1/2 flex justify-center md:h-[93vh]"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img className="md:p-" src={aphoto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
