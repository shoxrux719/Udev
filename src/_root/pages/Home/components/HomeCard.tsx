import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  isActive: boolean;
}

const HomeCard: React.FC<CardProps> = ({ isActive }) => {
  return (
    <>
      <div
        className={`w-[411px] h-[498px] rounded-[30px] px-5 pt-5 transition-all duration-500 ${
          isActive ? "bg-[#1E1E1E]" : "bg-[#EEF2F9] "
        }`}
      >
        <div
          className={`w-[371px] h-[350px] rounded-[10px] bg-[#C4C4C4] mb-8 ${
            isActive ? "" : "blur-[5px] opacity-75"
          } `}
        >
          <img
            className=""
            src={
              isActive
                ? "/public/assets/images/nodirDesign.png"
                : "/public/assets/images/nodirDesign.png"
            }
            alt="T-Rex"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`text-xl font-semibold leading-[30px] text-left ${
                isActive ? "text-[#ADFF00]" : "text-black"
              }`}
            >
              NODIR JORAEV
            </h2>
            <p
              className={`text-base font-normal leading-6 text-left ${
                isActive ? "text-[#ADFF00]" : "text-black"
              }`}
            >
              GRAFIK DESIGN
            </p>
          </div>

          <div className="relative w-[42px] h-[42px] rounded-full bg-[#ADFF0038] border-[1px] border-[#ADFF00] flex items-center justify-center">
            <div className="absolute bottom-[4px] w-8 h-8 rounded-full bg-[#ADFF00] flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-[#0039C7]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
