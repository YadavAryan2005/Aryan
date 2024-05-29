import React from "react";
import Html from "./img/1 Html.svg";
import Css from "./img/2 Css.svg";
import Tailwind from "./img/3 Tailwind Css.svg";
import JavaScript from "./img/6 JavaScript.svg";
import git from "./img/git-icon-fd611ca1.png";
import github from "./img/github_octocat-4c000ece.png";
import react from "./img/8 React JS.svg";
import Node from "./img/11 Node JS.svg";
import MongoDB from "./img/14 MongoDB.svg";
import MySQL from "./img/15 MySQL.svg";
import Express from "./img/12 Express JS.svg";
import antd from "./img/4 Ant Design.svg";
import Php from "./img/php123-removebg-preview.png";
export default function Skill() {
  return (
    <div className="p-2">
      <div className="bg-yellow-300 w-full flex flex-wrap justify-center rounded-2xl md:p-9 lg:p-14">
        <div className="w-full flex md:justify-center">
          <div data-aos="flip-down" className="flex flex-col p-5">
            <span className="text-blue-600 text-xl">__कौशल</span>
            <span className="font-serif text-4xl font-bold md:text-5xl">
              Skills
            </span>
            <span className="text-md font-serif text-slate-600">
              Languages,Technologies and tools that I have learned and applied
              to my projects
            </span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={Html} alt="" />
            <span className=" flex justify-center">HTML5</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={Css} alt="" />
            <span className=" flex justify-center">CSS3</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img
              className=" w-28 h-28 md:w-32 md:h-32"
              src={JavaScript}
              alt=""
            />
            <span className=" flex justify-center">JavaScript</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className="w-28 h-28 md:w-32 md:h-32" src={Tailwind} alt="" />
            <span className=" flex justify-center">Tailwind-CSS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={git} alt="" />
            <span className=" flex justify-center">Git</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={github} alt="" />
            <span className=" flex justify-center">Github</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={react} alt="" />
            <span className=" flex justify-center">React JS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={antd} alt="" />
            <span className=" flex justify-center">Ant Design</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={Node} alt="" />
            <span className=" flex justify-center">Node JS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={Php} alt="" />
            <span className=" flex justify-center">PHP</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className="w-28 h-28 md:w-32 md:h-32" src={Express} alt="" />
            <span className=" flex justify-center">Express JS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={MongoDB} alt="" />
            <span className=" flex justify-center">MongoDB</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-5 md:w-1/4 flex justify-center">
          <div>
            <img className=" w-28 h-28 md:w-32 md:h-32" src={MySQL} alt="" />
            <span className=" flex justify-center">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
