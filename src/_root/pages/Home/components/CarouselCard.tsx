import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CarouselCard: React.FC = () => {
  return (
    <div className="w-[411px] h-[498px] rounded-[30px] bg-[#1E1E1E] px-5 pt-5">
      <div className="w-[371px] h-[350px] rounded-[10px] bg-[#C4C4C4] mb-8">
        <img className="p-10" src="/public/assets/images/T-Rex.png" alt="" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#ADFF00] text-xl font-semibold leading-[30px] text-left">
            DJDNF FHFNFJS
          </h2>
          <p className="text-[#ADFF00] text-base font-normal leading-6 text-left">
            FRONT EDN
          </p>
        </div>

        <div className="relative w-[42px] h-[42px] rounded-full bg-[#ADFF0038] border-[1px] border-[#ADFF00] flex items-center justify-center">
          <div className="absolute bottom-[4px] w-8 h-8 rounded-full bg-[#ADFF00] flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-[#0039C7]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;