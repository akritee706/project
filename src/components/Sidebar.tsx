import React from "react";
import { Link } from "react-router-dom";
import { TiContacts } from "react-icons/ti";
import { AiOutlineLineChart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#75A47F] px-[60px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-black-500/[0.3]">
        
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-black-500/[0.3]">
        <TiContacts color="white" />
        <p className="text-[30px] leading-[60px] font-bold text-white">
          <Link to="/">Contacts</Link>
        </p>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]">
        <AiOutlineLineChart color="white" />
        <p className="text-[30px] leading-180px] font-bold text-white">
          <Link to="/charts">Charts and Maps</Link>
        </p>
        </div>
        <div>
        <h1 className=" flex text-white text-[30px] leading-[60px] font-bold cursor-pointer">
          <Link to="/">Sidebar</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
        <div>
        <h1 className=" flex text-[#75A47F] text-[30px] leading-[60px] font-extrabold cursor-pointer">
          <Link to="/">si</Link>
        </h1>
        </div>
      
    </div>
  );
};

export default Sidebar;
