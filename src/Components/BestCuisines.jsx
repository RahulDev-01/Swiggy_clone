import React from 'react'
import { FaAngleDown } from "react-icons/fa";
export default function BestCuisines() {
   const places =[
          {name:"Chinese Restaurant Near Me"},
          {name:"South Indian  Restaurant Near Me"},
          {name:"Indian  Restaurant Near Me"},
          {name:"Kerala  Restaurant Near Me"},
          {name:"Korean  Restaurant Near Me"},
          {name:"North Indian  Restaurant Near Me"},
          {name:"Sea food  Restaurant Near Me"},
          {name:"Bengali  Restaurant Near Me"},
          {name:"Punjabi  Restaurant Near Me"},
          {name:"Italian  Restaurant Near Me"},
          {name:"Andhra  Restaurant Near Me"},
          {name:"Show More", icon :<FaAngleDown className='inline'/>},
      ]
    return (
      <>
      <div className='m-10 max-w-[1200px] mx-auto px-4 mt-[15px]'>
      <h2 className="font-bold text-[1.5em] mb-[10px]">
        Best Cuisines Near Me
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
      </>
    )
  }
  