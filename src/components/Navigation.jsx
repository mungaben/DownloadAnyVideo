import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { BiListUl } from "react-icons/bi";

const Navigation = () => {
    
   
   
  return (
   
        <>
        <li className=" m-2  text-white hover:bg-slate-400 text-xl p-2 rounded-md">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" m-2  text-white hover:bg-slate-400  text-xl p-2 rounded-md">
                <Link to={"/courses"}> All Courses</Link>
              </li>
              <li className=" m-2  text-white  hover:bg-slate-400  text-xl p-2 rounded-md">
                <Link to={"/about"}> About</Link>
              </li>
              <li className=" m-2  text-white  hover:bg-slate-400 text-xl p-2 rounded-md">
                <Link to={"/contact"}> Contact</Link>
              </li>
              <li className=" m-2   text-white  hover:bg-slate-400  text-xl p-2 rounded-md">
                <Link to={"/account"}>My account</Link>
              </li>
        
     
              </>

     
  );
};

export default Navigation;