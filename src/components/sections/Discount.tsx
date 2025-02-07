export default function Discount() {
  return (
    <section className="bg-discount bg-cover bg-no-repeat mt-[50px] lg:mt-[70px]  lg:h-[490px] h-[250px] flex justify-center lg:justify-end items-center text-center lg:text-start">
      <div className="text-white space-y-5 ">
        <h3 className="lg:text-40sm w-[288px] mx-auto lg:w-[635px]  font-semibold lg:leading-[52px] text-24sm leading-[31.2px]">
          Get more discount <br /> Off your order
        </h3>
        <p className="lg:text-20sm text-14sm  leading-[14px] lg:leading-[20px] ">
          Join our mailing list
        </p>
        <div className="lg:space-x-[22px] space-x-[15px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your email address"
            className="lg:p-[22px] rounded-[8px] py-[14px] px-[20px] lg:w-[384px] w-[220px] outline-none"
          />
          <button className="bg-second rounded-[8px] px-6 py-[14px] lg:px-[28px] lg:py-5">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
