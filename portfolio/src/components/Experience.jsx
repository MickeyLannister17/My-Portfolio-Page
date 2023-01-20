import React from "react";
import JavascriptLogo from "../assets/javascript.png";
import PythonLogo from "../assets/python.png";
import MongoLogo from "../assets/mongodb.png";
import DjangoLogo from "../assets/django.png";
import DjangoLogo2 from "../assets/drf.png";
import ReactLogo from "../assets/react.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import TailwindLogo from "../assets/tailwind.png";
import GitLogo from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HtmlLogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CssLogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavascriptLogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactLogo,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: TailwindLogo,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: PythonLogo,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: DjangoLogo,
      title: "Django",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: DjangoLogo2,
      title: "DRF",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: MongoLogo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: GitLogo,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black
    w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4 border-gray-500
          p-2 inline"
          >
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
        text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105duration-500 py-2
              rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
