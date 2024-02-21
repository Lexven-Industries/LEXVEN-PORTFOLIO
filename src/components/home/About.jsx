import React, { useEffect } from "react";
import resume from "../../assets/docs/osorachukwu-ezewi-cv.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section
      className="text-center flex justify-center py-20 md:py-28 bg-altBg dark:bg-yellow-100 z-10 relative"
      id="about"
    >
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-60 -left-14 rotate-90 text-7xl font-semibold italic opacity-5 dark:text-yellow-500">
        About
      </p>
      {/* Floating text ☝*/}

      <div className=" bg-white dark:bg-darkBgLight shadow-lg px-2 xl:px-20 rounded-md max-w-[93%] sm:w-[90%] md:max-w-[85%] lg:max-w-[80%] 2xl:max-w-[68%]">
        <div className="px-3 pt-12 sm:px-9 md:px-16">
          <div>
            <p className="text-xl text-yellow-500 dark:text-yellow-500 font-semibold underline">
              {" "}
              ABOUT MYSELF
            </p>
            <p
              className="py-5 text-2xl font-normal md:text-3xl lg:5xl text-yellow-500 dark:text-yellow-500"
              data-aos="fade-up"
            >
              Hello! Thank you once again for making out time to visit my
              personal portfolio. My name is Nnatuanya Ugochukwu, I&#39;m a very
              dedicated and astute software engineer with the ambition for
              mental and moral distinction.
            </p>
            <a
              href={resume}
              download={resume}
              className="text-xl btn btn-lg border-yellow-500 btn-wide rounded-none bg-inherit text-yellow-500 hover:bg-yellow-400 hover:text-white hover:border-black"
              data-aos="fade-up"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="h-[1px] bg-altBgMedium my-10"></div>
        {/* ☝Dividing line */}

        {/* <div className="bg-gray-400">
          <p className="text-3xl italic font-semibold text-altBgMedium py-5 border-2 inline-block">
            Skills
          </p>
        </div> */}

        <div
          className="text-xl font-normal px-5 pb-12 grid grid-cols-1 gap-8 sm:px-9 md:px-10 md:grid-cols-2"
          data-aos="fade-up"
        >
          <div>
            <p className="text-start font-medium dark:text-white">Figma</p>
            <div className="rounded-xl bg-altBgMedium mt-3">
              <div className="bg-textLight w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">HTML</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[96%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">CSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[96%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">Tailwind</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[90%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">SCSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">Javascript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">Typscript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[86%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium dark:text-white">React.js</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[85%] py-1 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// h-[80%] w-[60%]

export default About;
