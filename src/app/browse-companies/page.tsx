import CompaniesCard from "@/components/cards/CompaniesCard";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import {Button} from "@/components/ui/button";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function BrowseCompanies() {
  return (
    <div className="max-container">
      <Header />
      <div>
        <p className="text-[#25324B] text-5xl font-semibold text-center">
          Find your{" "}
          <span className="font-semibold text-5xl text-[#26A4FF]">
            dream companies
          </span>
          <img
            src="./vector-line.png"
            width={400}
            className="ml-[500px]"
            alt=""
          />
        </p>
        <p className="font-normal text-[18px] text-[#515B6F] text-center mt-6 mb-10">
          Find the dream companies you dream work for
        </p>
        <section className="bg-[#F8F8FD] py-10 pb-[65px] px-4 md:px-16">
          <div className="bg-white rounded-md shadow-sm flex flex-col md:flex-row items-stretch md:items-center px-6 py-4 gap-4 md:gap-6 max-w-5xl ">
            <div className="flex items-center border-b border-gray-300 flex-1 gap-2">
              <MagnifyingGlassIcon width={24} height={24} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full py-2 outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>

            <div className="flex items-center border-b border-gray-300 flex-1 gap-2">
              <MapPinIcon width={24} height={24} />
              <input
                type="text"
                defaultValue="Florence, Italy"
                className="w-full py-2 outline-none text-sm text-gray-700 bg-transparent"
              />
            </div>

            <Button className="bg-[#4640DE] font-bold px-[39.5px] text-base rounded-none">
              Search
            </Button>
          </div>
          <p className="text-[#515B6F] text-base font-medium leading-[160%] mt-4">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </section>
        <div className="mt-[72px]">
          <p className="text-[#25324B] font-semibold text-[32px] leading-[120%]">
            Recommended Companies
          </p>
          <p className="text-[#7C8493] text-base font-normal leading-[160%] mt-2">
            Based on your profile, company preferences, and recent activity
          </p>
          <div className="grid grid-cols-3 gap-x-8 mt-8">
            <CompaniesCard />
            <CompaniesCard />
            <CompaniesCard />
            <CompaniesCard />
            <CompaniesCard />
            <CompaniesCard />
          </div>
          <img className="my-[72px]" src="./homeimg.png" alt="" />
          <div className="grid grid-cols-4 gap-x-8 gap-y-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="border border-[#D6DDEB] py-6 px-[69px] grid justify-items-center"
              >
                <img
                  className="mb-[30px]"
                  width={88}
                  height={88}
                  src="./cardImage.png"
                  alt=""
                />
                <p className="mb-4 text-[#25324B] text-2xl font-semibold leading-[120%]">
                  Packer
                </p>
                <p className="py-1 h-min px-3 bg-[#F8F8FD] text-[#4640DE] text-base leading-[160%] font-normal">
                  3 Jobs
                </p>
              </div>
            ))}
          </div>
          <div className="text-[#4640DE] font-semibold mt-6 text-base flex items-center gap-x-4">
            <p>View more Design companies</p>
            <ArrowRightIcon width={24} height={24} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default BrowseCompanies;
