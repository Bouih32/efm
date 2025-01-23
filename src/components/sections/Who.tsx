import React from "react";
import Container from "../Container";
import Image from "next/image";
import who from "../../../public/peng.png";
import WhoCheck from "../WhoCheck";

export default function Who() {
  return (
    <Container>
      <section className="flex flexBetween  lg:flex-row flex-col-reverse   gap-[50px]  mt-[300px] lg:mt-[200px] text-second">
        <Image src={who} alt="placeholder" className="rounded-[5px]" />
        <div className="">
          <div className="space-y-[15px]">
            <h3 className="lg:text-40sm font-semibold lg:w-[406px] w-[319px] lg:leading-[52px] text-24sm leading-[31.2px]">
              We Create your home more aestetic
            </h3>
            <p className="lg:text-20sm lg:w-[525px] w-[297px]  lg:leading-[34px] text-14sm leading-[23.8px]">
              Furnitre power is a software as services for multiperpose business
              management system,
            </p>
          </div>
          <div className="lg:mt-[39px] mt-5 space-y-[22px]">
            <WhoCheck title="Valuation Services" />
            <WhoCheck title="Development of Furniture Modelss" />
          </div>
        </div>
      </section>
    </Container>
  );
}
