import {Badge} from "../ui/badge";

type ThisProps = {
  img: string;
  title: string;
  location: string;
  description: string;
};
function JobsCard(props: ThisProps) {
  return (
    <div className="border-[2px] border-[#D6DDEB] p-6">
      <div className="flex items-center justify-between">
        <img src={props.img} alt="" />
        <div className="border border-[#4640DE] py-2 px-3 text-[#4640DE]">
          Full Time
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-base text-[#25324B]">{props.title}</p>
        <p className="text-[#515B6F] text-base">{props.location}</p>
        <p className="mt-4 text-[#7C8493] text-base font-normal line-clamp-2">
          {props.description}
        </p>
        <div className="flex gap-x-2 mt-4">
          <Badge className="bg-[#EB85331A] text-[#FFB836] rounded-[80px] py-1.5 px-2.5 text-[14px] font-semibold">
            Marketing
          </Badge>
          <Badge className="bg-[#56CDAD1A] text-[#56CDAD] rounded-[80px] py-1.5 px-2.5 text-[14px] font-semibold">
            Design
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;
