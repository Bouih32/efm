import React from "react";

import StatElement from "./StatElement";

export default function Stats() {
  return (
    <section className="py-[38px] w-[340px]  grid lg:w-[1240px] lg:grid-cols-4 grid-cols-2  gap-y-[62px] flex-wrap  bg-main rounded-[20px] absolute left-[50%]  -translate-x-[50%] lg:translate-y-[50%] translate-y-[80%] bottom-0 ">
      <StatElement title="7" para="Year Experience" />
      <StatElement
        title="2"
        para="Opened in the country"
        classname="border-l border-white"
      />
      <StatElement
        title="10k+"
        para="Furniture sold"
        classname="lg:border-l border-white"
      />
      <StatElement
        title="260+"
        para="Variant Furniture"
        classname="border-l border-white"
      />
    </section>
  );
}
