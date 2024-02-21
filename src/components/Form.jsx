import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import tele from "../assets/tele.svg";

function Form() {
  return (
    <div className="container mx-auto px-4 lg:flex lg:gap-40">
      <form action="" className="flex flex-col mb-8 lg:w-[60%]">
        <label htmlFor="" className="text-xl font-medium mb-6">
          DROP A LINE
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="h-16 bg-inherit border-b-[1px] font-medium outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-16 bg-inherit border-b-[1px] font-medium"
        />
        <input
          type="text"
          placeholder="Subject"
          className="h-16 bg-inherit border-b-[1px] font-medium mb-6"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="border-b-[1px] font-medium bg-inherit h-20 mb-10"
        ></textarea>
        <div className="flex justify-end">
          <input
            type="btn"
            value="Send Message"
            className="btn btn-lg rounded-none"
          />
        </div>
      </form>

      <div className="lg:w-[40%] ">
        <div>
          <p className="text-xl font-medium mb-3">Contact Me</p>
          <p className="mb-1">234-80-3985-9145</p>
          <p className="mb-1">ugos7958@gmail.com</p>
        </div>
        <button className="btn btn-lg rounded-none my-5">Donwload Resume</button>
        <div className="flex gap-5 items-center mb-5">
          <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-300">
            <img src={linkedin} alt="-logo" className="w-7" />
          </div>

          <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-300">
            <img src={github} alt="-logo" className="w-7" />
          </div>

          <div className="h-12 w-12 flex justify-center items-center rounded-full bg-gray-300">
            <img src={whatsapp} alt="-logo" className="w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
