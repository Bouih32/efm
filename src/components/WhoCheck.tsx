import { FaCheckCircle } from "react-icons/fa";

type StatsProps = {
  title: string;
};

export default function WhoCheck({ title }: StatsProps) {
  return (
    <div className="flex gap-2 ">
      <FaCheckCircle className="lg:text-24sm" />
      <div className="space-y-2">
        <h3 className="lg:text-20sm font-semibold text-16sm">{title}</h3>
        <p className="lg:text-16sm lg:leading-[28px] leading-[28px] text-14sm w-[283px] lg:w-[504px]">
          Sometimes features require a short description. This can be detailed
          description
        </p>
      </div>
    </div>
  );
}
