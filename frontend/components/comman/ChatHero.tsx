import React from "react";
import InputSection from "./InputSection";
import PhotoGallery from "./PhotoGallery";
import Footer from "./Footer";

export const ChatHero = () => {
  return (
    <div
      className="w-full overflow-y-auto bg-black "    >
      <div className="h-[80%] flex  flex-col  justify-center items-center ">
        <div className="flex flex-col items-center justify-center py-7 ">
          <div className="text-center ">
            <h1 className="text-5xl font-instrument text-gray-200">
              Nuvaria AI-powered visuals
            </h1>
            <p className="mt-4 mb-5 text-[12px] font-inter text-gray-300 ">
              Unleashing AI-powered creativity for seamless image and video
              generation , <br /> Transform ideas into stunning visuals instantly
            </p>
          </div>
        </div>
        <InputSection />
      </div>

      <div className="">
        <PhotoGallery />
        <Footer />

      </div>
    </div>
  );
};
