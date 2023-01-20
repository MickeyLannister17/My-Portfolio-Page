import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am an Innovative Software Engineer, Frontend Web, Backend Web
          Engineer, Web Designer, blogger with a wealth of experience within the
          IT/programming world. I also possess a collaborative attribute in
          retrospect to working closely with strategic and creative teams to
          develop software and IT related endeavours.
        </p>
        <br />
        <p className="text-xl">
          Though, barely 2 years into Tech/web development, I have been able to
          surmount some of my expectations and limits, as demonstrated recently
          by my inclusion into the list of 250 finalists, out of over 14
          thousand Software developers, Mobile Application Developers, UI/UX
          Designers, DevOps, Frontend Developers and, Backend Web Engineers
          across the globe, at the HNGi8 Internship.
        </p>
      </div>
    </div>
  );
};

export default About;
