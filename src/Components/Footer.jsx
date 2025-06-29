import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





export default function Footer() {
  const Company = [
    {name: "About Us",},
    {name: "Swiggy Corporate",},
    {name: "Careers",},
    {name: "Team",},
    {name: "Swiggy One",},
    {name: "Swiggy Instamart",},
    {name: "Swiggy Dineout",},
    { name: "Swiggy Genie",},
    {name: "Minis",},
    {name: "Pyng",},
  ];
  const contactUs= [
    {name: "Help & Support",},
    {name: "Partner with us",},
    {name: "Ride with us",},
  ];
  const legal= [
    {name: "Terms & Conditions",},
    {name: "Cookie Policy",},
    {name: "Privacy Policy",},
    {name: "Investor Relations",},
  ];
  const availableIn= [
    {name: "Bangalore",},
    {name: "Gurgaon",},
    {name: "Hyderabad",},
    {name: "Delhi",},
    {name: "Pune",},
  ];
  const atSwiggy= [
    {name: "Explore with Swiggy",},
    {name: "Swiggy News",},
    {name: "Snackables",},
  ];
  return (
    <footer className="h-[660px] w-  bg-[#f0f0f5] ">
      <div className="text-[#02060cbf] flex items-center justify-center gap-[10px] ">
        <h1 className="mt-10 font-bold text-[25px] mr-3">
          For better experience,download the Swiggy app now
        </h1>
        <img
          src="public/Images/play_store.avif"
          alt="Googgle Play"
          className="h-[64px] mt-10 cursor-pointer"
        />
        <img
          src="public/Images/app_store.avif"
          alt="App Store"
          className="h-[64px] mt-10 cursor-pointer"
        />
      </div>
      {/* Footer li Element Starts */}
      <div className="bmt-[80px] flex justify-center gap-[200px] mt-[80px] mr-[100px]">
        <div className="flex flex-col text-[#02060c99] font-semibold ">
          <Logo />
          <p className="">
            <FaRegCopyright className="inline text-[15px] mb-[3.4px]" /> 2025
            Swiggy Limited
          </p>
        </div>
        <div>
            {/* Flex */}
            <div className="flex gap-10">
          <div>
            <h1 className="flex font-semibold text-[18px]">Company</h1>
            
                <ul className="flex flex-col gap-[10px] text-[#02060c99] font-semibold mt-[10px] ">{
                Company.map((n,i)=>{
                   return( <li className="list-none cursor-pointer ">{n.name}</li>)
                })
             } </ul>
            
            
          </div >

          <div>
            <h1 className="flex font-semibold text-[18px]">Contact us</h1>
            
                <ul className="flex flex-col gap-[10px] text-[#02060c99] font-semibold mt-[10px] ">{
                contactUs.map((n,i)=>{
                   return( <li className="list-none cursor-pointer ">{n.name}</li>)
                })
             } </ul>
            <h1 className="flex font-semibold text-[18px] mt-[145px]">Legal</h1>
            
                <ul className="flex flex-col gap-[10px] text-[#02060c99] font-semibold mt-[10px] ">{
                legal.map((n,i)=>{
                   return( <li className="list-none cursor-pointer ">{n.name}</li>)
                })
             } </ul>
            
          </div>
          <div><h1 className="flex font-semibold text-[18px]">Available in:</h1>
            
                <ul className="flex flex-col gap-[10px] text-[#02060c99] font-semibold mt-[10px]  ">{
                availableIn.map((n,i)=>{
                   return( <li className="list-none cursor-pointer">{n.name}</li>)
                })
             } 
             </ul>
             <button className="mt-[10px] text-[#02060c99] font-semibold border rounded-[10px] pr-[4px] pl-[5px] p-[2px] cursor-pointer ">679 cities <FaAngleDown className="inline cursor-pointer " /></button>
             </div>
          <div><h1 className="flex font-semibold text-[18px]">Life at Swiggy </h1>
            
                <ul className="flex flex-col gap-[10px] text-[#02060c99] font-semibold mt-[10px] ">{
                atSwiggy.map((n,i)=>{
                   return( <li className="list-none cursor-pointer ">{n.name}</li>)
                })
             } 
             </ul>
             <h1 className="flex font-semibold text-[18px] mt-[170px]">Social Links </h1>
             <span className=" flex gap-[10px] mt-[10px] text-[#02060c] cursor-pointer"><FaLinkedinIn /> <FaInstagram /><FaFacebookF /><FaPinterest/> <FaTwitter /></span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={160} height={49} fill="none">
      <g filter="url(#filter0_b_674_19294)">
        <path
          fill="#FE5005"
          d="M69.097 35.543c-2.126 0-3.916-.456-5.376-1.368-1.459-.932-2.5-2.228-3.13-3.888l4.191-2.43c.85 1.964 2.338 2.948 4.464 2.948 1.925 0 2.885-.576 2.885-1.733 0-.648-.312-1.133-.94-1.459-.649-.384-1.8-.802-3.462-1.243-1.699-.466-3.139-1.133-4.31-2.002-1.296-1.051-1.944-2.539-1.944-4.464 0-1.925.696-3.533 2.093-4.704 1.416-1.176 3.096-1.761 5.04-1.761 1.742 0 3.278.412 4.613 1.243 1.334.811 2.39 1.992 3.158 3.552l-4.1 2.4c-.767-1.642-1.991-2.458-3.671-2.458-.71 0-1.267.154-1.67.456-.404.303-.61.687-.61 1.152 0 .504.245.96.73 1.368.527.403 1.56.83 3.095 1.277l1.973.638c.504.164 1.095.437 1.762.821.73.365 1.277.759 1.641 1.186.97 1.051 1.46 2.366 1.46 3.945 0 2.002-.73 3.605-2.184 4.796-1.46 1.152-3.36 1.732-5.708 1.732v-.004Zm23.482-7.47 2.184-8.135h4.858L94.763 35.12H90.51l-2.429-8.107-2.428 8.107H81.4l-4.858-15.182H81.4l2.184 8.136 2.366-8.136h4.253l2.366 8.136h.01Zm12.432-10.262a2.594 2.594 0 0 1-1.91.788 2.72 2.72 0 0 1-1.944-.788 2.702 2.702 0 0 1-.788-1.944c0-.748.264-1.387.788-1.91.547-.547 1.195-.82 1.944-.82.748 0 1.387.273 1.91.82.547.528.821 1.162.821 1.91 0 .75-.274 1.397-.821 1.944Zm.365 17.304h-4.555V19.933h4.555v15.182Zm13.867-13.632v-1.55h4.43v14.42c0 2.39-.777 4.19-2.337 5.404-1.536 1.234-3.432 1.853-5.679 1.853-3.441 0-5.841-1.224-7.195-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.094 0 1.934-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.908-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.051 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.589-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm24.624-8.29v-1.55h4.431v14.42c0 2.39-.778 4.19-2.338 5.404-1.536 1.234-3.432 1.853-5.678 1.853-3.442 0-5.842-1.224-7.196-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.095 0 1.935-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.907-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.052 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.588-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm20.194-.547 2.856-9.293h4.858l-5.194 14.726c-.85 2.367-1.973 4.07-3.37 5.103-1.377 1.051-3.139 1.526-5.284 1.425v-4.252c1.051 0 1.862-.192 2.428-.576.567-.365 1.023-1.013 1.368-1.944l-6.043-14.482h5.011l3.37 9.293ZM.5 24.94C.5 14.566.5 9.382 3.298 5.845a12.87 12.87 0 0 1 2.108-2.107C8.938.939 14.127.939 24.5.939c10.373 0 15.557 0 19.094 2.799a12.87 12.87 0 0 1 2.108 2.107C48.5 9.378 48.5 14.567 48.5 24.94c0 10.373 0 15.557-2.798 19.095a12.873 12.873 0 0 1-2.108 2.107C40.062 48.94 34.873 48.94 24.5 48.94c-10.373 0-15.557 0-19.094-2.799a12.873 12.873 0 0 1-2.108-2.107C.5 40.5.5 35.312.5 24.939Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M26.314 19.967v-4.973a.588.588 0 0 0-.586-.586.588.588 0 0 0-.585.586v5.841c0 .332.268.596.595.596h.571c8.3 0 9.163.432 8.645 2.184-.024.086-.053.168-.082.259a.788.788 0 0 1-.014.053c-2.18 6.57-8.074 14.793-9.816 17.145a.611.611 0 0 1-.984 0c-1.051-1.42-3.624-4.992-5.971-9.043-.159-.37-.235-1.234 2.37-1.234h3.188c.178 0 .322.144.322.322v2.573c0 .307.225.59.533.614a.584.584 0 0 0 .465-.173.561.561 0 0 0 .173-.412v-3.49a.608.608 0 0 0-.605-.605h-6.442c-1.123 0-1.804-.96-2.25-1.833-1.402-2.938-2.405-5.837-2.405-8.122 0-5.851 4.665-11.117 11.107-11.117 5.736 0 10.08 4.171 10.963 9.216.005.043.038.235.043.274.23 2.477-6.23 2.193-8.947 2.208a.286.286 0 0 1-.288-.288v.005Z"
          clipRule="evenodd"
        />
      </g>
      <defs />
    </svg>
  );
};
const Demo1 =()=>{
    return(
        <div className="sc-ixPHmS laztsU">
  <ul className="sc-cGqLCR hDwImk">
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kolkata"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kolkata</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/chennai"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Chennai</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/ahmedabad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Ahmedabad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/chandigarh"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Chandigarh</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/jaipur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Jaipur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kochi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kochi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/coimbatore"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Coimbatore</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/lucknow"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Lucknow</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/nagpur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Nagpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/vadodara"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Vadodara</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/indore" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Indore</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/guwahati"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Guwahati</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/vizag" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Vizag</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/surat" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Surat</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/dehradun"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Dehradun</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/noida" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Noida</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/ludhiana"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Ludhiana</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/trichy" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Trichy</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/vijayawada"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Vijayawada</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kanpur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kanpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/mysore" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Mysore</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/nashik" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Nashik</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/udaipur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Udaipur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/pondicherry"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Pondicherry</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/agra" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Agra</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/aurangabad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Aurangabad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/jalandhar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Jalandhar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kota" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kota</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/madurai"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Madurai</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/allahabad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Allahabad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/manipal"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Manipal</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/amritsar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Amritsar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bareilly"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bareilly</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/meerut" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Meerut</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/bhopal" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Bhopal</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/ooty" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Ooty</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bhubaneswar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bhubaneswar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/raipur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Raipur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bikaner"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bikaner</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/rajkot" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Rajkot</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kozhikode"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kozhikode</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/central-goa"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Central Goa</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/sirsa" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Sirsa</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/gwalior"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Gwalior</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/thrissur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Thrissur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kharagpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kharagpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/tirupati"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Tirupati</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/tirupur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Tirupur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/vellore"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Vellore</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/thiruvananthapuram"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Thiruvananthapuram</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/warangal"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Warangal</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/varanasi"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Varanasi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/mangaluru"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Mangaluru</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/patna" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Patna</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/ranchi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Ranchi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/faridabad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Faridabad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/guntur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Guntur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/ujjain" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Ujjain</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/patiala"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Patiala</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/karnal" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Karnal</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kakinada"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kakinada</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/rajahmundry"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Rajahmundry</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bilaspur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bilaspur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/bhilai" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Bhilai</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/anand" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Anand</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bhavnagar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bhavnagar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/jammu" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Jammu</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/muktsar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Muktsar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/panipat"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Panipat</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/jamshedpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Jamshedpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/dhanbad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Dhanbad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/bokaro" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Bokaro</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/hubli" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Hubli</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/belgaum"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Belgaum</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/jabalpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Jabalpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kolhapur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kolhapur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/solapur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Solapur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/shillong"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Shillong</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/cuttack"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Cuttack</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/aligarh"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Aligarh</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/salem" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Salem</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/agartala"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Agartala</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/jodhpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Jodhpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/ajmer" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Ajmer</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/jhansi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Jhansi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/gorakhpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Gorakhpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/thanjavur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Thanjavur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/erode" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Erode</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/nellore"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Nellore</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/rourkela"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Rourkela</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/anantapur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Anantapur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kurnool"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kurnool</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/ahmednagar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Ahmednagar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/phagwara"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Phagwara</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/ambala" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Ambala</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/ballari"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Ballari</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/saharanpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Saharanpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/tirunelveli"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Tirunelveli</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bathinda"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bathinda</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/mathura"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Mathura</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/haridwar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Haridwar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/ratnagiri"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Ratnagiri</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/sangli" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Sangli</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/amravati"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Amravati</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/rishikesh"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Rishikesh</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/nagercoil"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Nagercoil</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kanyakumari"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">KanyaKumari</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kadapa" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kadapa</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/nizamabad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Nizamabad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/shivamogga"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Shivamogga</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/davanagere"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Davanagere</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/roorkee"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Roorkee</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/nanded" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Nanded</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/rewa" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Rewa</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/satna" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Satna</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/shimla" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Shimla</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/muzaffarpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Muzaffarpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/valsad" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Valsad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/vapi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Vapi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/chhapra"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Chhapra</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/dharamshala"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Dharamshala</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kollam" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kollam</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/silchar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Silchar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/alappuzha"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Alappuzha</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/sonipat"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Sonipat</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/rohtak" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Rohtak</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/mehsana"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Mehsana</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kullu" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kullu</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/dhule" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Dhule</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/dharwad"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Dharwad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/latur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Latur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/vizianagaram"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Vizianagaram</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/khammam"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Khammam</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/hampi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Hampi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/nainital"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Nainital</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/akola" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Akola</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/kalaburagi"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Kalaburagi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/gaya" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Gaya</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/muzaffarnagar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Muzaffarnagar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/dewas" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Dewas</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/korba" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Korba</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/mussoorie"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Mussoorie</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/jalgaon"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Jalgaon</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/yamuna-nagar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Yamuna Nagar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/bhagalpur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Bhagalpur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/hapur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Hapur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/morena" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Morena</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/hassan" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Hassan</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/hisar" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Hisar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/godhra" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Godhra</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/kolar" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Kolar </div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/rampur" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Rampur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/sitapur"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Sitapur</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/etawah" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Etawah</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/porbandar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Porbandar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/nadiad" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Nadiad</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/sagar" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Sagar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/morbi" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Morbi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/chhindwara"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Chhindwara</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/tumakuru"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Tumakuru</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/singrauli"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Singrauli</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/thoothukudi"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Thoothukudi</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/katni" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Katni</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/khandwa"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Khandwa</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/eluru" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Eluru</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/malappuram"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Malappuram</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/dibrugarh"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Dibrugarh</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a
        href="https://www.swiggy.com/city/deoghar"
        className="sc-eCzpMH cVCaGx"
      >
        <div className="sc-aXZVg gCijQr">Deoghar</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/khanna" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Khanna</div>
      </a>
    </li>
    <li className="sc-hciKdo gjGdP">
      <a href="https://www.swiggy.com/city/bidar" className="sc-eCzpMH cVCaGx">
        <div className="sc-aXZVg gCijQr">Bidar</div>
      </a>
    </li>
  </ul>
</div>

    )
}