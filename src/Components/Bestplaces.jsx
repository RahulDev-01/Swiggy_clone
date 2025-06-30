import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function Bestplaces() {
    const places =[
        {name:"Best Restaurants in Bangalore"},
        {name:"Best Restaurants in Pune"},
        {name:"Best Restaurants in Mumbai"},
        {name:"Best Restaurants in Delhi"},
        {name:"Best Restaurants in Hyderabad"},
        {name:"Best Restaurants in Kolkata"},
        {name:"Best Restaurants in Chennai"},
        {name:"Best Restaurants in Chandigarh"},
        {name:"Best Restaurants in Ahmedabad"},
        {name:"Best Restaurants in jaipur"},
        {name:"Best Restaurants in Nagpur"},
        {name:"Show More", icon :<FaAngleDown className='inline'/>},
    ]
return (
<>
    <div className='m-10 max-w-[1200px] mx-auto px-4 mt-[15px]'>
    <h2 className="font-bold text-[1.5em] mb-[10px]">
          Restaurants with online food delivery in Hyderabad
        </h2>
        <div className='mt-10 grid grid-cols-4  max-w-[1200px] gap-5 text-[17px]  font-semibold '>
            {
                places.map((place,i)=>{
                    return(
                        <>
                        <button className={`border border-gray-300 rounded-2xl p-3 w-[250px] cursor-pointer hover:text-orange-500  ${place.name === "Show More" ? " text-orange-500" : ""} `}> {place.name} {place.icon}</button>
                        </>
                        
                    )
                })
            }
        </div>
</div>
</>
  )
}