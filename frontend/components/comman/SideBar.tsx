"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bookmark,
  Download,
  History,
  Image,
  Plus,
  Video,
  ArrowLeftToLine,
  ArrowRightToLine,
  SquarePen,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={` transition-all duration-200 bg-[#0c0c0c] text-[#D4D4D4]  ${
        isOpen ? "w-64" : "w-16 "
      }`}
    >
      <div className="flex flex-col justify-between   h-full ">
        <div>
          <div className="flex items-center justify-between  border-b border-[#2E2E2E]">
            {isOpen && (
              <div className="flex gap-2 px-4 ">
                <img className="w-7" src="./images/fevicon.svg" alt="" />
                <h1 className="text-2xl font-medium font-instrument  text-[#D4D4D4]">
                  Nuvaria
                </h1>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="  m-4 cursor-pointer text-[#D1D1D1] "
            >
              {isOpen ? (
                <div className="p-1 border border-[#302f2f]  text-[#797777]  rounded-sx hover:bg-[#FD532F] duration-700">
                  <ArrowLeftToLine size={18} />
                </div>
              ) : (
                <div className="p-1 border border-[#302f2f]  text-[#797777]  rounded-sx hover:bg-[#FD532F] duration-700">
                  <ArrowRightToLine size={18} />
                </div>
              )}
            </button>
          </div>

          <div className="mt-4  px-4 font-inter ">
            <ul className="flex flex-col gap-y-1 cursor-pointer text-[15px] text-[#e8e8e8] font-[300] ">
              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <SquarePen size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  New Chat
                </span>
              </li>

              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <Bookmark size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  Save data
                </span>
              </li>

              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <History size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  History
                </span>
              </li>

              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <Download size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  Downloads
                </span>
              </li>

              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <Image size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  Images
                </span>
              </li>

              <li className="relative flex items-center px-2 py-2 hover:bg-[#FD532F] rounded-sx">
                <Video size={18} />
                <span
                  className={`absolute left-8 whitespace-nowrap transition-all duration-300
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-5px]"}
      `}
                >
                  Video
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
      <div className="px-4 py-8">
        
      
        <div className=" flex justify-between items-center ">
          <div className="w-10 h-10 ">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://avatars.githubusercontent.com/u/113900393?v=4"
              alt=""
            />
          </div>
          {isOpen ? (
            <div className="flex items-center justify-between font-inter text-[13px]">
              <div className="text-[12px]">
                <p className="">Vikas Pal</p>
                <p className="">vikaspal12@gmail.com</p>
              </div>
            </div>
          ) : (
            <div className="">
         
              </div>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}
