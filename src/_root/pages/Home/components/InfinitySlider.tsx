import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={108} reverse>
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
        src="/public/assets/images/sliderLogos/uzumMarket.png"
        alt="Nintendo logo"
        className="h-[64px] w-[205px]"
      />
      <img
        src="/public/assets/images/sliderLogos/image 317.png"
        alt="Nintendo logo"
        className="h-[64px] w-[205px]"
      />{" "}
      <img
        src="/public/assets/images/sliderLogos/uzumMarket.png"
        alt="Nintendo logo"
        className="h-[64px] w-[205px]"
      />
    </InfiniteSlider>
  );
}

export default InfiniteSliderBasic;
