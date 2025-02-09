import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeCard from "./components/HomeCard";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import InfiniteSlider from "./components/InfinitySlider";
=======
import SaleCarousel from "./components/SaleCarousel";
>>>>>>> ab1e29d14971f9ded8ad935402740f4a94a1762d

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const { t } = useTranslation();

  return (
    <>
      {/* Header Section */}
      <div className="text-center max-w-[1272px] text-black pt-[130px] mx-auto relative z-10 mb-[66px]">
        <div className="max-w-[1090px] relative">
          <TextEffect
            className="@apply text-[152px] font-semibold leading-[55px] text-left pb-[60px]"
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
          >
            UQIUE DEVS
          </TextEffect>

          <div className="relative">
            <div
              className="absolute w-[750px] h-[700px] bg-[url('/assets/images/Line.png')] bg-no-repeat bg-center left-[1000px] top-[-300px]">
            </div>
          </div>
          <TextEffect
            className="text-5xl font-semibold leading-[55px] text-left mb-[20px]"
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
          >
            {t("cta_text")}
          </TextEffect>

          <TextEffect
            preset="fade-in-blur"
            speedReveal={1.1}
            speedSegment={0.3}
            className="text-lg mb-6 text-left max-w-[600px]"
          >
            {t("cta_text")}
          </TextEffect>



        </div>


      </div>


    <SaleCarousel />

      {/* Carousel Section */}
      <div className="min-h-screen bg-white rounded-tl-[92px] rounded-tr-[92px]">
        <div className="flex relative items-center justify-center">
          <div className="absolute bg-[url('/public/assets/images/Cactus.png')] w-12 h-[99px] bg-no-repeat left-[33%] top-[100px]"></div>
          <p className="text-5xl font-bold leading-[57.6px] text-center pt-[150px]">
            {t("carousel_title")}
          </p>
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
              <button
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                className="carousel-control"
              >
                <CarouselPrevious />
              </button>

              <button
                onClick={() => setActiveIndex((prev) => Math.min(9, prev + 1))}
                className="carousel-control"
              >
                <CarouselNext />
              </button>
            </div>
          </Carousel>
        </div>
        <InfiniteSlider />
      </div>
    </>
  );
};

export default Home;
