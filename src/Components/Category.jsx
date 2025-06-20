import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Category() {
  const [slide, setSlide] = useState(0);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const [categries, setCategory] = useState([]);

  const nextSlide = () => {
    if (categries.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="flex items-center w-full - mx-auto max-w-[1200px] mt-[15px] justify-between ">
        <div className="font-bold text-[1.5em]">What's on your mind?</div>
        <div className="flex  ">
          <div className="w-[30px] h-[30px] bg-[#e2e2e7]  rounded-full m  flex items-center justify-center cursor-pointer ">
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center  cursor-pointer ">
            {" "}
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      {/* Respose to  fetch Section */}

      <div className="flex ml-[140px]  max-w-[1180px] overflow-hidden  z-20">
        {categries.map((cat, index) => {
          return (
            <div
              className="w-[150px] shrink-0 duration-500"
              key={index}
              style={{
                transform: `translateX(-${slide * 100}%)`,
                
              }}
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
        <hr className="border-[1px] text-gray-200 max-w-[1180px] ml-[160px] my-[2px]"/>
    </>
  );
}

export default Category;
