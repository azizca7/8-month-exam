import {Badge} from "../ui/badge";

type CompaniesCardProps = {
  title: string;
  desc: string;
  img: string;
};

function CompaniesCard(props: CompaniesCardProps) {
  return (
    <div className="p-6 border border-[#D6DDEB] grid gap-x-4">
      <div className="flex justify-between">
        <img width={88} height={88} src={props.img} alt="" />
        <p className="py-1 h-min px-3 bg-[#F8F8FD] text-[#4640DE] text-base leading-[160%] font-normal">
          3 Jobs
        </p>
      </div>
      <p className="text-[#25324B] font-semibold text-2xl mt-4 leading-[120%]">
        {props.title}
      </p>
      <p className="text-[#515B6F] font-normal text-base leading-[160%] mt-4">
        {props.desc}
      </p>
      <Badge className="text-[#FFB836] cursor-pointer hover:opacity-70 mt-4 font-normal text-[14px] leading-[160%] p-1.5 px-2.5 border border-[#FFB836] bg-white rounded-[80px]">
        Business Service
      </Badge>
    </div>
  );
}
export default CompaniesCard;
