import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.alec}
          alt="Header Background"
          className="rounded-full w-42 h-42 object-cover"
        />
      </div>
      <p className="cursor typewriter-animation">Hi there, I'm Tushar Patil</p>
      <h1 className="text-2xl md:text-3xl">Software Developer</h1>
      <p className="max-w-2xl mx-auto">
        I'm a passionate software developer specializing in building exceptional
        digital experiences. Currently, I'm focused on developing responsive web
        applications.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white  bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Contact Icon"
            className="w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border  border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
}
