import { cn } from "@/lib/utils";

type StatsProps = {
  title: string;
  para: string;
  classname?: string;
};

export default function StatElement({ title, para, classname }: StatsProps) {
  return (
    <div
      className={cn(
        "text-white lg:px-[95px] px-[30px] flex flex-col items-center justify-center",
        classname
      )}
    >
      <h3 className="lg:text-40sm   text-24sm font-semibold leading-[28.8px] lg:leading-[48px]">
        {title}
      </h3>
      <p className="lg:text-20sm text-14sm  leading-[18.2px] lg:leading-[26px] ">
        {para}
      </p>
    </div>
  );
}
