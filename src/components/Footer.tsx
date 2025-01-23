import Container from "./Container";
import { FaFacebookSquare } from "react-icons/fa";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-second text-white lg:py-[65px] py-10">
      <Container>
        <section className="flex lg:flexBetween flex-col lg:flex-row">
          <h2>FurniShop</h2>
          <div className="">
            <Social icon={<FaFacebookSquare />} />
          </div>
        </section>
        <section className=""></section>
      </Container>
    </footer>
  );
}
