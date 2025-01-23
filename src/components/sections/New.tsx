import { FaArrowRightLong } from "react-icons/fa6";
import ImageCard from "../ImageCard";
import Container from "../Container";

export default function New() {
  return (
    <section className="lg:mt-[143px] overflow-hidden lg:pl-[100px]  pl-[25px] mt-[100px] flex flexBetween gap-[25px] flex-col lg:flex-row">
      <Container>
        <div className="">
          <div className="flex flexBetween lg:block">
            <h3 className="lg:text-40sm lg:mb-[89px] font-semibold lg:leading-[52px] text-24sm leading-[31.2px]">
              New In Store Now
            </h3>
            <p className="lg:text-16sm lg:leading-[28px] leading-[28px] text-14sm w-[283px] lg:w-[504px]">
              Get the latest items immediately <br />
              with promo prices
            </p>
          </div>
          <div className="hidden lg:flex mt-[48px] items-center gap-2.5">
            <p>Check All </p>
            <FaArrowRightLong />
          </div>
        </div>
      </Container>
      <section className="flex  gap-5 pl-[50px]">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </section>
    </section>
  );
}
