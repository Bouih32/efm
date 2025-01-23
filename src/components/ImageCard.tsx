import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ImageCard({
  placeholder,
}: {
  placeholder: StaticImageData;
}) {
  return (
    <div className="lg:min-w-[265px] lg:h-[400px] min-w-[198px] h-[299px] relative rounded-[5px] overflow-hidden">
      <Image src={placeholder} alt="placeholder" className="h-full w-full" />
      <div className="absolute bottom-0 pb-5 text-center w-full left-0">
        <h3 className="font-semibold lg:text-24sm text-18sm text-white">
          Chair
        </h3>
      </div>
    </div>
  );
}
