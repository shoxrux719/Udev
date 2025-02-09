import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <div className="flex flex-col items-center mt-[148px]">
      <p className="font-bold text-[40px] leading-[48px]">
        Bitiruvchilarimiz ish joylari{" "}
      </p>

      <InfiniteSlider gap={108} reverse={false} className="mt-[49px]">
        <img
          src="/public/assets/images/sliderLogos/image 313 (1).png"
          alt="Strava logo"
          className="h-[64px] w-[318px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image.png"
          alt="Chrome logo"
          className="h-[62px] w-[122px]"
        />
        <img
          src="/public/assets/images/sliderLogos/uzummarket.png"
          alt="Nintendo logo"
          className="h-[64px] w-[205px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image 317.png"
          alt="Nintendo logo"
          className="h-[93px] w-[189px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image 318.png"
          alt="Nintendo logo"
          className="h-[76px] w-[132px]"
        />
      </InfiniteSlider>
      <InfiniteSlider gap={108} reverse className="mt-[49px]">
        <img
          src="/public/assets/images/sliderLogos/image 313 (1).png"
          alt="Strava logo"
          className="h-[64px] w-[318px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image.png"
          alt="Chrome logo"
          className="h-[62px] w-[122px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image 317.png"
          alt="Nintendo logo"
          className="h-[93px] w-[189px]"
        />
        <img
          src="/public/assets/images/sliderLogos/image 318.png"
          alt="Nintendo logo"
          className="h-[76px] w-[132px]"
        />
      </InfiniteSlider>
    </div>
  );
}

export default InfiniteSliderBasic;
