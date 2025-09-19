import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { apiUrl } from "../config";

function OnlineDelivery() {

  
    const elementRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      // If the top of the element touches the top of the viewport
      if (rect.top <= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch(apiUrl("/top-restaurant-chains"));
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching top restaurants:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const filter = [
    { name: "Filter" },
    { name: "Sort By" },
    { name: "Food in 10 mins" },
    { name: "Offers" },
    { name: "Rating 4.0+" },
    { name: "Rs.300-Rs.600" },
    { name: "Less than Rs.300" },
    { name: "Pure Veg" },
    { name: "Non Veg" },
  ];

  return (
    <>
      

      <main className="max-w-[1200px] mx-auto px-4 mt-[15px]">
        {/* Title */}
        <h2 className="font-bold text-[1.5em] mb-[10px]">
          Restaurants with online food delivery in Hyderabad
        </h2>

        {/* ✅ Sticky Filter Bar */}
        <div className={`flex gap-[20px] mt-[20px] text-[14px] ml-[5px] font-medium text-gray-500 content-center items-center max-w-[1200px] w-full  box ${isAtTop ? '"p-3  sticky top-0 z-[101] bg-white h-[70px] w-screen' : ''}`}ref={elementRef}>
          {filter.map((f, i) => (
            <button
              key={i}
              className="flex justify-center items-center rounded-xl px-[12px] py-[7px] border border-gray-300 cursor-pointer whitespace-nowrap"
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-3 mt-[40px] cursor-pointer ">
          {data.map((d, i) => (
            <Card key={i} {...d} />
          ))}
        </div>
      </main>
    </>
  );
}

export default OnlineDelivery;