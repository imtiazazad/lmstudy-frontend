import React from "react";

const AboutWelcome = () => {
  return (
    <div className="lg:container mx-auto mb-8">
      {/* Intro part */}
      <div className="text-center text-indigo-900">
        <h2 className="text-4xl font-bold ">About Us</h2>
        <p className="text-indigo-400 text-lg my-3">
          We're on a mission to deliver engaging, curated courses at a
          reasonable price.
        </p>
      </div>
      {/* Grid tow section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
        <div className="flex justify-center items-center gap-10 content-center  py-10 px-10">
          <div>
            <img
              src="https://creativelayers.net/themes/educrat-html/img/about-1/1.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div>
              <img
                src="https://creativelayers.net/themes/educrat-html/img/about-1/2.png "
                alt=""
              />
            </div>
            <div>
              <img
                src="https://creativelayers.net/themes/educrat-html/img/about-1/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col px-12 ">
          <h3 className="text-4xl font-semibold mb-8 text-indigo-900">
            Welcome to Educrat Enhance your skills with best Online courses
          </h3>
          <p className="text-justify text-lg text-indigo-900 font-semibold  mb-8">
            You can start and finish one of these popular courses in under a day
            for free! Check out the list below.. Take the course for free
          </p>
          <p className="pr-20 text-slate-500 mb-8 text-lg">
            Neque convallis a cras semper auctor. Libero id faucibus nisl
            tincidunt egetnvallis a cras semper auctonvallis a cras semper
            aucto. Neque convallis a cras semper auctor. Liberoe convallis a
            cras semper atincidunt egetnval
          </p>
          <div>
            <button className="bg-indigo-900 border-2 py-3 px-10 text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-indigo-800   hover:border-2 border-indigo-700 transition ease-out duration-300">
              Start Learnig For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWelcome;
