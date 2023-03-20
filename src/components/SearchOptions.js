import React from "react";

const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/";
const SEARCH_OPTIONS = [
  {
    text: "Biryani",
    imageID: "lbtzwnwla1pam1np4jtg",
  },
  {
    text: "Pizzas",
    imageID: "kmvbd3hyswd147u4qdn1",
  },
  {
    text: "Burger",
    imageID: "hvc4l0r0bgrtl6vdbbzv",
  },
  {
    text: "Cake & Dessert",
    imageID: "ee5ynhqgyhwdoukilzfu",
  },
  {
    text: "North Indian",
    imageID: "iwvt76wvh3a7dxmkljxd",
  },
  {
    text: "South Indian",
    imageID: "vntl1lutut9bqsxjninx",
  },
  {
    text: "Rolls & SandWiches",
    imageID: "wfzaxacltlxyi4shmm2u",
  },
  {
    text: "Ice cream & Shakes",
    imageID: "hk7gdfeiwmy5nx6prv97",
  },
  {
    text: "Indian Snacks",
    imageID: "pa6ydsixfemhr7r9rjzc",
  },
];

const SearchOptions = ({ onSelect }) => {
  return (
    <div>
      <div className="text-base font-extrabold text-[#3d4152] ml-10">
        <span>{"Popular Cuisines"}</span>
      </div>
      <div className="flex justify-center my-5">
        {SEARCH_OPTIONS.map((opt) => {
          return (
            <div onClick={() => onSelect(opt.text)} role="button">
              <img
                className="h-[100px] w-[70px] mr-[10px]"
                src={IMG_URL + opt.imageID}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchOptions;
