import { InfiniteSlider } from "@/components/ui/infinite-slider";

const SaleCarousel: React.FC = () => {
  return (
    <div className="">
      <InfiniteSlider
        gap={108}
        reverse={false}
        className="mt-[49px] bg-[#242323] py-5 chegirma__qora"
      >
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
        <p className="text-white">CHEGIRMA</p>
      </InfiniteSlider>
      <InfiniteSlider
        gap={108}
        reverse={false}
        className="mt-[49px] bg-[#ADFF00] py-5 chegirma"
      >
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
        <p>CHEGIRMA</p>
      </InfiniteSlider>
    </div>
  );
};

export default SaleCarousel;
