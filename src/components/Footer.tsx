import Container from "./Container";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";
import Social from "./Social";
import Ul from "./Ul";

export default function Footer() {
  return (
    <footer className="bg-second text-white lg:py-[65px] py-10">
      <Container>
        <section className="flex gap-5 lg:flexBetween flex-col lg:flex-row lg:pb-[60px] lg:border-b border-white">
          <h2 className="font-bold text-24sm ">FurniShop</h2>
          <div className="flex gap-4 justify-between lg:justify-center">
            <Social icon={<FaFacebookSquare />} />
            <Social icon={<FaInstagram />} />
            <Social icon={<FaTwitter />} />
            <Social icon={<FaReddit />} />
            <Social icon={<FaFacebookSquare />} />
          </div>
        </section>
        <section className="lg:pt-[64px] pt-[45px] grid lg:flex flexBetween grid-cols-2 gap-y-[65px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <Ul key={index} />
          ))}
        </section>
      </Container>
    </footer>
  );
}
