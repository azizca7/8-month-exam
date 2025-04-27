function JobsCard() {
  return (
    <div className="border-[2px] border-[#D6DDEB] p-6">
      <div className="flex items-center justify-between">
        <img src="./jobsImg.png" alt="" />
        <div className="border border-[#4640DE] py-2 px-3 text-[#4640DE]">
          Full Time
        </div>
      </div>
      <div>
        <p className="font-semibold text-base text-[#25324B]">
          Email Marketing
        </p>
        <p className="text-[#515B6F] text-base">Revolut - Madrid, Spain</p>
        <p className="mt-4 text-[#7C8493] text-base font-normal line-clamp-2">
          Revolut is looking for Email Marketing to help team ma ...
        </p>
      </div>
    </div>
  );
}

export default JobsCard;
