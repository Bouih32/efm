import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="md:w-[1240px] w-[340px] mx-auto ">{children}</div>;
}
