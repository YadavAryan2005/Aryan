import React, { useState } from "react";
import "../App.css";
import services1 from "./img/services1.png";
import img1 from "./img/google-keep-clone.png";
import img2 from "./img/movie.png";
import img3 from "./img/weather.png";
import { ChromeOutlined, GithubOutlined } from "@ant-design/icons";
export default function Project() {
  const [imgno, setImgno] = useState(1);
  function setincrease() {
    if (imgno === 3) setImgno(1);
    else setImgno(imgno + 1);
  }
  function setdecresa() {
    if (imgno === 1) setImgno(3);
    else setImgno(imgno - 1);
  }
  return (
    <section id="Projects" className="p-2 ">
      <div className="rounded-2xl">
        <div className="flex flex-col md:flex-row p-5 justify-center md:p-9 lg:p-14 items-center">
          <div className="md:w-1/2 flex flex-col justify-center ">
            <div data-aos="fade-up" className="flex flex-col justify-center">
              <h1 className="text-blue-600 text-xl">__मेरा काम</h1>
              <h1 className="font-serif text-4xl font-bold md:text-5xl">
                My Projects
              </h1>
            </div>
            <img data-aos="fade-up" className="" src={services1} alt="" />
          </div>
          <div className="md:w-1/2 flex justify-center relative aryan">
            <div>
              <h2 data-aos="fade-up" className="font-serif pb-10">
                I am a full-stack developer with a passion for building
                beautiful and user-friendly web applications. I have experience
                building over 30+ projects, which include a personal portfolio
                website, a weather application, several business landing pages,
                and even a game.
              </h2>
              <div
                data-aos="fade-up"
                className="h-80 shadow-xl shadow-slate-400 items-center flex rounded-2xl hover:blur-1"
              >
                {imgno === 1 ? (
                  <>
                    <img className="hover:blur-[1px] " src={img1} alt="" />
                    <div className="flex gap-6 justify-center items-center absolute w-full sachin">
                      <a
                        className="h-32"
                        href="https://github.com/YadavAryan2005/google-keep-clone"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer ">
                          <span className="text-4xl ">
                            <GithubOutlined />
                          </span>
                          View Code
                        </button>
                      </a>
                      <a
                        className="h-32"
                        href="https://google-keep-clone-rn.netlify.app/"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer">
                          <span className="text-4xl ">
                            <ChromeOutlined />
                          </span>
                          Preview
                        </button>
                      </a>
                    </div>
                  </>
                ) : imgno === 2 ? (
                  <>
                    <img
                      className=" hover:blur-[1px] relative"
                      src={img2}
                      alt=""
                    />
                    <div className="flex gap-6 justify-center items-center absolute w-full sachin">
                      <a
                        className="h-32"
                        href="https://github.com/YadavAryan2005/Movies_React"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer">
                          <span className="text-4xl ">
                            <GithubOutlined />
                          </span>
                          View Code
                        </button>
                      </a>
                      <a
                        className="h-32"
                        href="https://aryanmovies.netlify.app/"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer">
                          <span className="text-4xl ">
                            <ChromeOutlined />
                          </span>
                          Preview
                        </button>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <img className="hover:blur-[1px]  " src={img3} alt="" />
                    <div className="flex gap-6 justify-center items-center absolute w-full sachin">
                      <a
                        className="h-32"
                        href="https://github.com/YadavAryan2005/Weather_React"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer">
                          <span className="text-4xl ">
                            <GithubOutlined />
                          </span>
                          View Code
                        </button>
                      </a>
                      <a
                        className="h-32"
                        href="https://weatheraapisearch.netlify.app/"
                      >
                        <button className="font-bold bg-yellow-400 rounded-lg px-3 pb-1 cursor-pointer">
                          <span className="text-4xl ">
                            <ChromeOutlined />
                          </span>
                          Preview
                        </button>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
            <span
              className="absolute w-full flex justify-end mt-[22rem] md:mt-[16rem] text-4xl  md:mr-10  text-yellow-500 cursor-pointer"
              onClick={() => {
                setdecresa();
              }}
            >
              &#10095;
            </span>
            <span
              className=" absolute w-full flex justify-start items-center mt-[22rem] md:mt-[16rem]  text-4xl  md:ml-10 text-yellow-500 rounded-2xl cursor-pointer"
              onClick={() => {
                setincrease();
              }}
            >
              &#10094;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
