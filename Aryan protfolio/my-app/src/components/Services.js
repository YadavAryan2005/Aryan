import React from "react";
// import services from "./img/services.svg";
import services2 from "./img/services2.png";
// import services1 from "./img/services1.png";
export default function Services() {
  return (
    <div className="p-2">
      <div className="rounded-2xl md:h-[98vh]">
        <div className="flex flex-col md:flex-row p-5 md:p-10 ">
          <div className="w-full">
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center md:justify-start"
            >
              <h1 className="text-blue-600 text-xl">__मेरी सेवाएं</h1>
              <h1 className="font-serif text-4xl font-bold md:text-5xl">
                Services I Offer
              </h1>
            </div>
            <div
              data-aos="fade-up"
              className="flex justify-center md:justify-start"
            >
              <img src={services2} alt="" />
            </div>
          </div>
          <div className="w-full md:p-5">
            <hr data-aos="fade-up" className="Border border-slate-500" />
            <div data-aos="fade-up" className="py-5">
              <h1 className="font-serif text-4xl font-bold  md:text-5xl lg:text-6xl">
                1.Full Stack Web <br />
                Development
              </h1>
              <h2 className="float-end pt-3 text-slate-400 font-serif">
                Proficiency
              </h2>
              <h2 className="float-start pt-3 text-blue-500 font-serif font-bold">
                Advanced
              </h2>
            </div>
            <br />
            <hr data-aos="fade-up" className="Border border-slate-500" />
            <div data-aos="fade-up" className="py-5">
              <h1 className="font-serif text-4xl  font-bold md:text-5xl lg:text-6xl">
                2.Website UI <br />
                Development
              </h1>
              <h2 className="float-end pt-3 text-slate-400 font-serif">
                Proficiency
              </h2>
              <h2 className="float-start pt-3 text-blue-500 font-serif font-bold">
                Advanced
              </h2>
            </div>
            <br />
            <hr data-aos="fade-up" className="Border border-slate-500" />
            <div data-aos="fade-up" className="py-5">
              <h1 className="font-serif text-4xl lg:Text-5xl font-bold lg:text-6xl">
                3.Website UI/UX <br />
                Design
              </h1>
              <h2 className="float-end pt-3 text-slate-400 font-serif">
                Proficiency
              </h2>
              <h2 className="float-start pt-3 text-blue-500 font-serif font-bold">
                Advanced
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
