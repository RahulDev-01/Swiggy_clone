import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function ExploreRes() {
    const places =[
           {name:"Explore Restaurants Near Me"},
           {name:"Explore Top Rated Restaurants Near Me"},
       ]
     return (
       <>
       <div className='m-10 max-w-[1200px] mx-auto px-4 mt-[15px]'>
       <h2 className="font-bold text-[1.5em] mb-[10px]">
         Explore Every Restaurants Near Me
           </h2>
           <div className='mt-10 grid grid-cols-4  max-w-[1200px] gap-5 text-[17px]  font-semibold '>
               {
                   places.map((place,i)=>{
                       return(
                           <>
                           <button className={`border border-gray-300 rounded-2xl p-3 w-[250px] cursor-pointer hover:text-orange-500 ${place.name === "Show More" ? " text-orange-500" : ""} `}> {place.name} {place.icon}</button>
                           </>
                           
                       )
                   })
               }
           </div>
           </div>
           <hr className='border  max-w-[1200px]  ml-[160px]'/>
       </>
     )
   }
   