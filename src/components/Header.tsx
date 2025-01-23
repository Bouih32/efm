import Container from "./Container";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  return (
    <Container>
      <header className="flex flexBetween lg:pt-[28px] pt-[30px] text-white">
        <h1 className="text-24sm lg:text-36sm font-semibold">FurniShop</h1>
        <nav>
          <ul className="lg:flex lg:w-[400px] hidden flexBetween">
            <li className="text-16sm font-semibold">Home</li>
            <li className="text-16sm">About</li>
            <li className="text-16sm">Features</li>
            <li className="text-16sm">Contact</li>
          </ul>
          <RiMenu3Line className="lg:hidden text-24sm" />
        </nav>
      </header>
    </Container>
  );
}
