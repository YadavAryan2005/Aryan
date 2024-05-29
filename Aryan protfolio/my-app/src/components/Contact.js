import React from "react";
import download from "./img/Download.svg";
import Resume from "./img/Resume Aryan.pdf";
import Message from "./img/Message.svg";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
export default function Contact() {
  return (
    <section id="Contact-form" className="p-2">
      <div className="bg-yellow-300 rounded-2xl md:h-[98vh]">
        <div
          data-aos="fade-down"
          className="font-serif text-4xl font-bold w-full flex justify-center md:text-5xl p-5 md:pt-6"
        >
          Let’s Work Together
        </div>
        <div className="flex flex-col md:flex-row p-5 md:px-10  ">
          <div className="md:w-1/2 md:p-6">
            <h1 data-aos="flip-down" className="text-blue-600 text-xl">
              __मुझसे संपर्क करें
            </h1>
            <h1 data-aos="flip-down" className="font-serif text-4xl font-bold">
              Let’s make something amazing together Start By{" "}
              <span className="text-slate-500">Saying Hi</span>
            </h1>
            <p data-aos="flip-down" className="text-slate-500 pt-2">
              I invite you to contact me if you have any questions, inquiries,
              or would like to discuss collaborating on a project. I am always
              happy to connect with others and share my passion for Web
              Development.
            </p>
            <p data-aos="flip-down" className="text-slate-500 pt-2">
              Feel free to contact me for business services,web development and
              other professional inquiries!
            </p>
            <a download={Resume} href={Resume}>
              <button
                data-aos="flip-up"
                className="mt-4 p-4 my-3 bg-blue-700 rounded-2xl text-white  hover:mt-2 hover:mb-5 flex"
              >
                Resume &nbsp;
                <img className="h-6" src={download} alt="" />
              </button>
            </a>
            <div className="contacts flex justify-evenly flex-col gap-3  text-slate-500 ">
              <a
                data-aos="flip-up"
                href="mailto: aryanyadav7822900241@gmail.com"
                className="  "
              >
                <span>
                  <MailOutlined />
                  &nbsp;&nbsp;aryanyadav7822900241@gmail.com
                </span>
              </a>
              <a data-aos="flip-up" href="tel:+917822900241" className="  ">
                <span>
                  <PhoneOutlined />
                  &nbsp; +91 7822900241
                </span>
              </a>
              <a
                data-aos="flip-up"
                href="https://www.linkedin.com/in/aryan-yadav-240140267/"
                className="  "
              >
                <span>
                  <LinkedinOutlined />
                  &nbsp; Yadav Aryan
                </span>
              </a>
              <a
                data-aos="flip-up"
                href="https://github.com/YadavAryan2005"
                className="  "
              >
                <span>
                  <GithubOutlined />
                  &nbsp; YadavAryan2005
                </span>
              </a>
            </div>
          </div>
          <form
            data-aos="fade-up"
            action="https://formsubmit.co/2bdeb5e61a50b97bb1b683b45cdb6cb1"
            method="POST"
            className="flex flex-col gap-5 my-5 md:w-1/2"
          >
            <input
              className="p-3 rounded-xl hover:border hover:border-blue-400"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required="required"
            />
            <input
              className="p-3 rounded-xl hover:border hover:border-blue-400"
              type="text"
              name="email"
              id=""
              placeholder="Email"
              required="required"
            />
            <textarea
              className="p-3 rounded-xl hover:border hover:border-blue-400"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required="required"
            ></textarea>
            <button
              className="mt-4 p-4 my-3 bg-blue-700 rounded-2xl text-white w-28 hover:mt-2 hover:mb-5 flex"
              type="submit"
            >
              Submit&nbsp;
              <img className="h-6" src={Message} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
