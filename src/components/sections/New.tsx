import Container from "../Container";
import { FaArrowRightLong } from "react-icons/fa6";

export default function New() {
  return (
    <Container>
      <section>
        <div className="">
          <h3 className="lg:text-40sm font-semibold lg:leading-[52px] text-24sm leading-[31.2px]">
            New In Store Now
          </h3>
          <p className="lg:text-16sm lg:leading-[28px] leading-[28px] text-14sm w-[283px] lg:w-[504px]">
            Get the latest items immediately with promo prices
          </p>
        </div>
        <div className="">
          <p>Check All </p>
          <FaArrowRightLong />
        </div>
      </section>
    </Container>
  );
}
