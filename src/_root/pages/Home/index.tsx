import React, { useState, useEffect, } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeCard from "./components/HomeCard";
import Autoplay from "embla-carousel-autoplay";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowUpRight } from "lucide-react";

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);



  return (
    <>

      {/* Content */}
      <div className="text-center max-w-[1272px]  text-white pt-[130px] mx-auto relative z-10 mb-[66px]">
        <div className="max-w-[1090px] relative">
          <TextEffect
            className=" text-3xl text-left md:text-5xl font-bold mb-4"
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
          >
            Qanday qilib biz jahon darajasidagi IT-mutaxassislarni
            tayyorlashimizni bilib oling!
          </TextEffect>
          <div className="absolute w-[257px] h-[80px] bg-[url('/public/assets/images/Star.png')] left-[928.35px] top-[90px]"></div>
         
          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            className="text-lg mb-6 text-left max-w-[600px]"
          >
            Akademiyamizga bepul sayohatga keling va zamonaviy texnologiyalar
            olamiga sho’ng’ing!
          </TextEffect>
        </div>
        <div className="flex  md:flex-row items-center justify-between gap-4">
          <div className="relative w-[389px] h-[77px] hover:rounded-[20px] hover:bg-[#ADFF0038] hover:border-[1px] hover:border-[#ADFF00] flex items-center justify-center cursor-pointer">
            <div className="absolute bottom-[px] w-[365px] h-[57px] rounded-[20px] bg-[#ADFF00] flex items-center justify-center">
              <button className="text-[#000] text-lg font-semibold flex items-center gap-5">
                ESKKURSIYA GA YOZILISH
                <ArrowUpRight className="w-5 h-5 text-[#000]" />
              </button>
            </div>
          </div>
          <Card
            className="relative bg-white w-[215px] h-[100px] text-[#1F2E47] rounded-[20px] px-4 py-2 mr-[60px]">
            <CardContent>
              <div className="flex-col items-center pt-2">
                <p className="text-4xl font-bold  text-left flex ">125 <span className="text-2xl font-bold text-left">k+</span></p>
                <p className="text-base font-normal leading-6 text-left">O‘quvchilar soni</p>
                <Button className=" absolute top-[-.5px] right-[-52px] bg-[#ADFF00] text-black hover:bg-lime-600 w-[83px] h-[100px] rounded-[20px] px-4 font-semibold text-base  ">
                  KIRISH
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative">
        <div className="w-[243px] h-[243px] mb-[30px] absolute top-[-125px] left-[43%] z-10 bg-[url('/assets/images/T-Rex.png')] bg-cover bg-no-repeat">
        </div>


      </div>
      <div className="min-h-screen bg-[#fff] rounded-tl-[92px] rounded-tr-[92px]">
        <div>
          <div className="flex relative items-center justify-center">
            <div className="absolute bg-[url('/public/assets/images/Cactus.png')] w-12 h-[99px] bg-no-repeat left-[33%] top-[100px]"></div>
            <p className="text-5xl font-bold leading-[57.6px] text-center pt-[150px]">KURSLARIMIZ</p>
          </div>
        </div>
        <div className="min-h-screen flex gap-3 items-center justify-center p-4">
        <Carousel className="relative w-[1290px]">

          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-3/ lg:basis-1/3 relative"
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative">
                  <HomeCard isActive={index === activeIndex} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

      
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            <button onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}>
              <CarouselPrevious />
            </button>
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
              {Array.from({ length: 10 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full ${activeIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
            <button onClick={() => setActiveIndex((prev) => Math.min(9, prev + 1))}>
              <CarouselNext />
            </button>
          </div>

        </Carousel>
      </div>
      </div>
    </>
  );
};

export default Home;
