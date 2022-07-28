import React from "react";

const AboutCourse = () => {
  return (
    <div className="bg-indigo-900">
      <div className="lg:container mx-auto">
        <div className="text-center pt-10 mb-10 text-white">
          <h2 className="text-4xl font-bold mb-2">
            Why learn with our courses?
          </h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="grid  lg:grid-cols-3 gap-10 px-20 lg:mt-16 mt-8 lg:pb-16 pb-8 ">
          <div className="text-center text-white hover:text-indigo-900 hover:bg-white border rounded-lg border-slate-500 transition ease-in-out duration-500">
            <span className="mt-7 inline-block">
              <i class="fa-solid fa-laptop-code text-5xl "></i>
            </span>
            <h4 className="mt-5 text-3xl font-bold">01. Learn</h4>
            <p className="px-2 mt-4 mb-7">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
          <div className="text-center text-white hover:text-indigo-900 hover:bg-white border rounded-lg border-slate-500 transition ease-in-out duration-500">
            <span className="mt-7 inline-block">
              <i class="fa-solid fa-graduation-cap text-5xl "></i>
            </span>
            <h4 className="mt-5 text-3xl font-bold">02. Graduate</h4>
            <p className="px-2 mt-4 mb-7">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
          <div className="text-center text-white hover:text-indigo-900 hover:bg-white border rounded-lg border-slate-500 transition ease-in-out duration-500">
            <span className="mt-7 inline-block">
              <i class="fa-solid fa-code text-5xl"></i>
            </span>
            <h4 className="mt-5 text-3xl font-bold">03. Work</h4>
            <p className="px-2 mt-4 mb-7">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
