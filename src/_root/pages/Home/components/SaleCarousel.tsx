import { Link } from "react-router-dom";

const SaleCarousel: React.FC = () => {
  return (
    <>
      {/* Black Background Slider */}
      <div className="slider bg-black z-0 transform -rotate-6">
        <div className="slides-track">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={`black-slide-${index}`}
              className="slide flex items-center justify-center"
            >
              <p className="text-white font-normal text-xl leading-[30px] tracking-[0%]">
                Chegirma
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Green Background Slider */}
      <div className="slider bg-[#ADFF00] text-black z-10 transform rotate-6">
        <div className="slides-track2 text-black">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={`green-slide-${index}`}
              className="slide flex items-center justify-center"
            >
              <p className="text-black font-normal text-xl leading-[30px] tracking-[0%]">
                Chegirma
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SaleCarousel;
