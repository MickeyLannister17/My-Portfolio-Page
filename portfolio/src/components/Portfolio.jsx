import BankPage from "../assets/bankpage.jpg";

import CinematicMob from "../assets/cinematicmob.jpg";

import InventoryMob from "../assets/inventorymob.jpg";

import MyManageMob from "../assets/mymanagepc.jpg";

import NubiaFoodMob from "../assets/nubiafood.jpg";

const Portfolio = () => {
  const portfolioPics = [
    {
      id: 1,
      src: BankPage,
      demo_link: "https://mybankpage.netlify.app",
      code_link: "https://github.com/MickeyLannister17/hoobank-landing-page",
    },
    {
      id: 2,
      src: CinematicMob,
      demo_link: "https://nubiacinematic.netlify.app/",
      code_link: "https://github.com/MickeyLannister17/cinematic",
    },
    {
      id: 3,
      src: InventoryMob,
      demo_link: "https://myinventoryapp.netlify.app/",
      code_link: "https://github.com/MickeyLannister17/My-React-Inventory-App",
    },
    {
      id: 4,
      src: MyManageMob,
      demo_link: "https://mymanage.netlify.app/",
      code_link:
        "https://github.com/MickeyLannister17/landing-page-tailwind-project",
    },
    {
      id: 5,
      src: NubiaFoodMob,
      demo_link: "https://mickeylannister17.github.io/Nubia-Food/",
      code_link: "https://github.com/MickeyLannister17/Nubia-Food",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 text-white md:h-full"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
    flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
          border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>
        {}
        <div
          className="grid sm:grid-cols-3 md:grid-col-3
        gap-8 px-12 sm:px-0"
        >
          {portfolioPics.map(({ id, src, demo_link, code_link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 hover:scale-105 duration-300
          rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md 
            duration-200"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo_link}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code_link}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
