import React, { useEffect, useState } from "react";
import Card from "./Card";

function OnlineDelivery() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/top-restaurant-chains"
      );
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching top restaurants:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <>
      <div className="flex items-center w-full mx-auto max-w-[1200px] mt-[15px] justify-between">
        <div className="font-bold text-[1.5em]">
          Restaurants with online food delivery in Hyderabad
        </div>
      </div>
        <div className="grid grid-cols-4 gap-3 w-[1200px] ml-[170px] mt-[40px]">
            {
                data.map(
                    (d,i)=>{
                        return <Card {...d}  />
                    }
                )
            }
        </div>
    </>
  );
}

export default OnlineDelivery;
