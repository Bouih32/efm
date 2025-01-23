import Image from "next/image";
import placeholder from "../../../public/house.png";
import user from "../../../public/user.png";
import Container from "../Container";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Reviews() {
  return (
    <Container>
      <section className="lg:mt-[140px] mt-[100px] flex flexBetween flex-col lg:flex-row gap-[33px]">
        <div className="space-y-[30px]">
          <h3 className="lg:text-40sm w-[288px] lg:w-[635px]  font-semibold lg:leading-[52px] text-24sm leading-[31.2px]">
            What people are saying about us
          </h3>
          <div className="flex items-center gap-5">
            <Image
              src={user}
              alt="user"
              className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px]"
            />
            <div className="space-y-3">
              <h3 className="lg:text-20sm text-14sm font-semibold leading-[14px] lg:leading-[20px]">
                Josh Smith
              </h3>
              <p className="lg:text-14sm text-[10px] font-semibold leading-[10px] lg:leading-[14px] opacity-50   ">
                Manager of The New York Times
              </p>
            </div>
          </div>
          <p className="lg:text-20sm   lg:leading-[34px] text-14sm leading-[23.8px]">
            “They are have a perfect touch for make something so professional
            ,interest and useful for a lot of people .”
          </p>
          <div className="flex gap-[30px] items-center lg:text-[20px] ">
            <div className="w-[30px] h-[30px] rounded-full hover:bg-main hover:text-white grid place-content-center    ">
              <FaArrowLeft />
            </div>
            <div className="w-[30px] h-[30px] rounded-full hover:bg-main hover:text-white grid place-content-center  ">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <Image src={placeholder} alt="placeholder" />
      </section>
    </Container>
  );
}
