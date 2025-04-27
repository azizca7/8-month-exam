"use client";
import {Button} from "@/components/ui/button";
import {MagnifyingGlassIcon, MapPinIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Progress} from "@/components/ui/progress";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@/components/ui/loading";
import Link from "next/link";
import {allJobsData} from "@/lib/utils";

export default function FindJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(allJobsData);
 
  

  const [showEmployment, setShowEmployment] = useState(true);

  const employmentTypes = [
    {label: "Full-time", count: 3},
    {label: "Part-Time", count: 5},
    {label: "Remote", count: 2},
    {label: "Internship", count: 24},
    {label: "Contract", count: 3},
  ];

  const {isLoading} = useQuery({
    queryKey: ["jobsCategory"],
    queryFn: () =>
      fetch("https://mustafocoder.pythonanywhere.com/api/jobs/")
        .then((res) => res.json())
        .then((data) => data),
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-container">
        <Header />
        <div>
          <p className="text-[#25324B] text-5xl font-semibold text-center">
            Find your{" "}
            <span className="font-semibold text-5xl text-[#26A4FF]">
              dream job
            </span>
            <img
              src="./vector-line.png"
              width={241}
              className="ml-[590px]"
              alt=""
            />
          </p>
          <p className="font-normal text-[18px] text-[#515B6F] text-center mt-6 mb-10">
            Find your next career at companies like HubSpot, Nike, and Dropbox
          </p>
          <section className="bg-[#F8F8FD] py-10 pb-[65px] px-4 md:px-16">
            <div className="bg-white rounded-md shadow-sm flex flex-col md:flex-row items-stretch md:items-center px-6 py-4 gap-4 md:gap-6 max-w-5xl ">
              <div className="flex items-center border-b border-gray-300 flex-1 gap-2">
                <MagnifyingGlassIcon width={24} height={24} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full py-2 outline-none text-sm text-gray-700 bg-transparent"
                  value={searchTerm}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchTerm(value);
                    const filtered = allJobsData.filter((job) =>
                      job.title.toLowerCase().includes(value.toLowerCase())
                    );
                    setFilteredJobs(filtered);
                  }}
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
          <div className="flex mt-[72px]">
            <aside className="w-full max-w-xs p-4 space-y-6 space-x-10">
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => setShowEmployment(!showEmployment)}
                >
                  <h4 className="font-bold text-base text-[#25324B]">
                    Type of Employment
                  </h4>
                  {showEmployment ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
                {showEmployment && (
                  <ul className="space-y-2">
                    {employmentTypes.map((type) => (
                      <li
                        key={type.label}
                        className="flex items-center gap-2 b text-[#515B6F] font-normal text-base"
                      >
                        <input
                          type="checkbox"
                          className="border-[2px] accent-indigo-500 border-[#D6DDEB] w-4 h-4"
                          id={`employment-${type.label}`}
                        />
                        <label htmlFor={`employment-${type.label}`}>
                          {type.label}{" "}
                          <span className="text-[#515B6F] font-normal text-base">
                            ({type.count})
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>{" "}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => setShowEmployment(!showEmployment)}
                >
                  <h4 className="font-bold text-base text-[#25324B]">
                    Type of Employment
                  </h4>
                  {showEmployment ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
                {showEmployment && (
                  <ul className="space-y-2">
                    {employmentTypes.map((type) => (
                      <li
                        key={type.label}
                        className="flex items-center gap-2 b text-[#515B6F] font-normal text-base"
                      >
                        <input
                          type="checkbox"
                          className="border-[2px] accent-indigo-500 border-[#D6DDEB] w-4 h-4"
                          id={`employment-${type.label}`}
                        />
                        <label htmlFor={`employment-${type.label}`}>
                          {type.label}{" "}
                          <span className="text-[#515B6F] font-normal text-base">
                            ({type.count})
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>
            <div className="w-full">
              <div className="flex  mb-8 items-center justify-between w-full">
                <div className="flex justify-between w-full items-center h-max">
                  <div>
                    <p className="text-[#25324B] font-semibold text-[32px]">
                      All Jobs
                    </p>
                    <p className="text-[#7C8493] font-normal text-base">
                      Showing 73 results
                    </p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <p className="text-[#7C8493] font-normal text-base">
                      Sort by:
                    </p>
                    <select
                      className="text-[#25324B] font-medium text-base"
                      name=""
                      id=""
                    >
                      <option value="">Most relevant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid gap-y-4">
                {filteredJobs.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[#D6DDEB] p-6 flex justify-between"
                  >
                    <div className="flex items-start gap-x-6">
                      <img src={item.img} alt="" />
                      <div>
                        <p className="text-[#25324B] font-semibold text-[20px] leading-[120%]">
                          {item.title}
                        </p>
                        <p className="text-[#7C8493] text-base leading-[160%] mt-2">
                          {item.location}
                        </p>
                        <div className="flex gap-x-2 mt-2">
                          <Badge className="bg-[#56CDAD1A] cursor-pointer hover:opacity-70 text-[#56CDAD] rounded-[80px] py-1.5 px-2.5 text-[14px] font-semibold">
                            Full-Time
                          </Badge>
                          <div className="border-l-[2px] border-[#D6DDEB] h-8"></div>
                          <Badge className="border-[#FFB836] cursor-pointer hover:opacity-70 text-[#FFB836] rounded-[80px] bg-white py-1.5 px-2.5 text-[14px] font-semibold">
                            Marketing
                          </Badge>
                          <Badge className="border-[#4640DE] cursor-pointer hover:opacity-70 text-[#4640DE] rounded-[80px] bg-white py-1.5 px-2.5 text-[14px] font-semibold">
                            Full-Time
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link href="/browse-companies/nomad">
                        <Button className="bg-[#4640DE] w-full font-bold px-[39.5px] text-base rounded-none">
                          Apply
                        </Button>
                      </Link>
                      <Progress className="mt-[15px]" value={33} />
                      <p className="font-semibold mt-2 text-[14px] leading-[160%] text-[#25324B]">
                        5 applied{" "}
                        <span className="text-[#7C8493] font-normal text-[14px] leading-[160%]">
                          of 10 capacity
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
