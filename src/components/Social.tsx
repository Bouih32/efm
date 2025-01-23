import { ReactElement } from "react";

export default function Social({ icon }: { icon: ReactElement }) {
  return (
    <div className="h-[48px] w-[48px] rounded-full bg-white/10 grid place-content-center">
      {icon}
    </div>
  );
}
