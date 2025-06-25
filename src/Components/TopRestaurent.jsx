import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';

function TopRestaurant() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching top restaurants:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const nextSlide = () => {
    if (slide >= data.length - 3) return;
    setSlide(slide + 3);
  };

  
  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="flex items-center w-full mx-auto max-w-[1200px] mt-[15px] justify-between">
        <div className="font-bold text-[1.5em]">
          Top restaurant chains in Hyderabad
        </div>
        <div className="flex">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex max-w-[1200px] ml-[170px] mt-[20px] shrink-0 overflow-hidden gap-[30px] cursor-pointer">
        {data.map((d, i) => (
          <div
            key={i}
            className="duration-500"
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            <Card {...d} />
          </div>
        ))}
      </div>
      <hr className="border-[1px] text-gray-200 max-w-[1180px] ml-[160px] my-[2px] mt-[20px]"/>
    </>
  );
}

export default TopRestaurant;
