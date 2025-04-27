import React from "react";
import {Badge} from "../ui/badge";

type ThisProps = {
  img: string;
  title: string;
  location: string;
};

function LatestJobsCard(props: ThisProps) {
  return (
    <div className="border border-black flex items-center gap-x-6 w-[580px] py-6 px-10">
      <img width={64} height={64} src={props.img} alt="" />
      <div>
        <p className="text-[#25324B] font-semibold text-[20px]">
          {props.title}
        </p>
        <p className="text-[#515B6F] font-normal text-base">{props.location}</p>
        <div className="flex gap-x-2 mt-2">
          <Badge className="bg-[#56CDAD1A] text-[#56CDAD] rounded-[80px] py-1.5 px-2.5 text-[14px] font-semibold">
            Full-Time
          </Badge>
          <div className="border-l-[2px] border-[#D6DDEB] h-8"></div>
          <Badge className="border-[#FFB836] text-[#FFB836] rounded-[80px] bg-white py-1.5 px-2.5 text-[14px] font-semibold">
            Marketing
          </Badge>
          <Badge className="border-[#4640DE] text-[#4640DE] rounded-[80px] bg-white py-1.5 px-2.5 text-[14px] font-semibold">
            Full-Time
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default LatestJobsCard;
