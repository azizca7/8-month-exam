import Link from "next/link";
import {Button} from "../ui/button";

function Header() {
  return (
    <header className="flex justify-between items-center my-[21px]">
      <div className="flex gap-x-12 items-center">
        <div className="flex gap-x-2 items-center">
          <img width={32} height={32} src="./logo.png" alt="" />
          <Link href="/" className="font-bold text-2xl text-[#25324B]">
            JobHuntly
          </Link>
        </div>
        <div className="flex items-center gap-x-4 font-medium text-base text-[#515B6F]">
          <Link href="/find-jobs">Find Jobs</Link>
          <Link href="/browse-companies">Browse Companies</Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/login">
          <Button
            className="text-[#4640DE] font-bold text-base"
            variant="ghost"
          >
            Login
          </Button>
        </Link>
        <div className="border-l-[2px] border-[#D6DDEB] h-12"></div>
        <Link href="/sign-up">
          <Button className="bg-[#4640DE] font-bold text-base rounded-none">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
