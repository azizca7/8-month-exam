import {ArrowRightIcon} from "lucide-react";

export interface CategoryCardProps {
  title: string;
  user: string;
}

function CategoryCard({props}: { props: CategoryCardProps }) {
  return (
    <div className="border-[2px] border-[#D6DDEB] p-8 ">
      <img width={48} height={48} src="./cardImage.png" alt="" />
      <div className="mt-8">
        <p className="text-[#25324B] mb-3 font-semibold text-2xl">
          {props.title}
        </p>
        <p className="font-normal flex gap-x-3.5 text-base text-[#7C8493]">
          {props.user} jobs available
          <ArrowRightIcon width={24} height={24} />
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
