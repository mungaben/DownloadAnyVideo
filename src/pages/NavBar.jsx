import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Toogle from "../components/Toogle";

const NavBar = () => {
  const [toggle, settoggle] = useState(true);
  console.log(toggle);

  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handletoogle = () => {
    settoggle(!toggle);
  };

  return (
    <div className={` m-2 bg-slate-300  hover:bg-slate-400 lg:fixed  lg:top-2  md:mr-2 lg:ml-0 md:rounded-sm shadow-sm`}>
      {width <= 777 && (
        <div onClick={handletoogle} >
          
          <Toogle />
        </div>
      )}
      <div className={`list-none  lg:w-screen  md:flex  md:justify-between  md:items-start`}>
        <div className={``}>
          <li className={`text-white  md:m-4 md:mt-6   p-2   text-xl hover:bg-slate-500 rounded-md ${toggle && ' shadow-md ml-4 mt-3'} `}>
            <Link to={"/"}> Logo</Link>
          </li>
        </div>
        <div className={` md:flex md:space-x-8 md:m-2 ${toggle && 'mt-3 p-2  '}`}>
             {
              toggle && <Navigation/>
             }
          
           </div>
              
          
        </div>
        </div>
    
    
  );
};

export default NavBar;