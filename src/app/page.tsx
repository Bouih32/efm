import Header from "@/components/Header";
import New from "@/components/sections/New";
import Reviews from "@/components/sections/Reviews";
import Who from "@/components/sections/Who";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <section className="bg-hero h-screen bg-cover bg-right text-center">
        <Header />
        <div className="text-white flex items-center flex-col lg:mt-[156px] mt-[122px]">
          <h2 className="lg:text-64lg font-semibold lg:w-[888px] w-[290px] text-24sm lg:leading-[76.8px] leading-[28.8px]">
            Creative Home Simpify your Furniture
          </h2>
          <p className="lg:text-20sm lg:w-[627px] mt-[30px] w-[293px] text-14sm lg:leading-[30px] leading-[21px]">
            Do i have consent to record this meeting gain locaion,
            root-and-branch, review, nor game plan who’s the goto
          </p>
          <button className="mt-[30px] lg:mt-[65px] px-[35px] rounded-[5px] lg:leading-[30px] leading-[21px] text-14sm font-semibold lg:text-20sm  lg:rounded-[10px] py-[9px] lg:px-20 lg:py-4  bg-gray-100/40 backdrop-filter backdrop-blur-md">
            Shop Now
          </button>
        </div>
        <div className="section">
          <Stats />
        </div>
      </section>

      <Who />
      <New />
      <Reviews />
    </main>
  );
}
