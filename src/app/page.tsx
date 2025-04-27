"use client";
import CategoryCard, {CategoryCardProps} from "@/components/cards/CategoryCard";
import JobsCard from "@/components/cards/JobsCard";
import LatestJobsCard from "@/components/cards/LatestJobsCard";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon, MapPinIcon} from "@heroicons/react/24/outline";
import {useQuery} from "@tanstack/react-query";

function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ["jobsCategory"],
    queryFn: () =>
      fetch("https://mustafocoder.pythonanywhere.com/api/jobs/")
        .then((res) => res.json())
        .then((data) => data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <>
      <div className="mt-[82px] max-container">
        <Header />
        <div>
          <h3 className="font-semibold text-[#25324B] text-[72px] leading-[110%] tracking-[0%]">
            Discover <br /> more than <br />
            <p className="text-[#26A4FF]">5000+ Jobs</p>
          </h3>
          <img className="mt-3.5" src="./vector-line.png" alt="" />
          <p className="text-[#515B6F] text-[20px] font-normal leading-[160%] my-6">
            Great platform for the job seeker that searching for <br /> new
            career heights and passionate about startups.
          </p>
          <div className="shadow-2xl p-4 flex items-center w-fit ">
            <div className="flex gap-x-2.5 m-2.5 items-center w-full max-w-[233px]">
              <MagnifyingGlassIcon width={24} height={24} />
              <input
                placeholder="Job title or keyword"
                type="text"
                className="border-b-2 py-2.5 w-full text-[#7C8493] font-normal text-base leading-[160%] outline-none"
              />
            </div>
            <div className="flex gap-x-2.5 m-2.5 items-center max-w-[233px] w-full">
              <MapPinIcon width={24} height={24} />
              <select className="border-b-2 py-2.5 text-[#7C8493] w-full font-normal text-base leading-[160%] outline-none">
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="Florence, Italy">Florence, Italy</option>
              </select>
            </div>
            <Button className="bg-[#4640DE] font-bold px-[39.5px] text-base rounded-none">
              Search my job
            </Button>
          </div>
          <p className="text-[#202430] text-base font-medium leading-[160%] mt-4">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>

          <div className="mt-40">
            <p className="text-[#202430] mb-8 font-normal text-base ">
              Companies we helped grow
            </p>
            <div className="flex items-center justify-between">
              <img src="./company.png" alt="" />
              <img src="./company.png" alt="" />
              <img src="./company.png" alt="" />
              <img src="./company.png" alt="" />
              <img src="./company.png" alt="" />
            </div>
          </div>
          <div className="mt-28 flex items-end justify-between">
            <p className="text-[#25324B] text-5xl font-semibold">
              Explore by <span className="text-[#26A4FF]">category</span>
            </p>
            <div className="text-[#4640DE] font-semibold text-base flex items-center gap-x-4">
              <p>Show all jobs</p>
              <ArrowRightIcon width={24} height={24} />
            </div>
          </div>
          <div className="grid grid-cols-4 justify-between gap-8 mt-12">
            {data.map((item: CategoryCardProps) => (
              <CategoryCard key={item.title} props={item} />
            ))}
          </div>
          <img src="./homeimg.png" className="my-[72px]" alt="" />
          <div className="flex items-end justify-between">
            <p className="text-[#25324B] text-5xl font-semibold">
              Featured <span className="text-[#26A4FF]">jobs</span>
            </p>
            <div className="text-[#4640DE] font-semibold text-base flex items-center gap-x-4">
              <p>Show all jobs</p>
              <ArrowRightIcon width={24} height={24} />
            </div>
          </div>
          <div className="grid grid-cols-4 justify-between gap-8 mt-12">
            <JobsCard
              title="Email Marketing"
              location="Revolut - Madrid, Spain"
              img="./jobsImg.png"
              description="Revolut is looking for Email Marketing to help team ma ..."
            />
            <JobsCard
              title="Brand Designer"
              location="Dropbox - San Fransisco, US"
              img="./Dropbox.png"
              description="Dropbox is looking for Brand Designer to help the team t ..."
            />
            <JobsCard
              title="Email Marketing"
              location="Pitch - Berlin, Germany"
              img="./featureJobs/1.png"
              description="Pitch is looking for Customer Manager to join marketing t ..."
            />
            <JobsCard
              title="Visual Designer"
              location="Blinklist - Granada, Spain"
              img="./featureJobs/2.png"
              description="Blinkist is looking for Visual Designer to help team desi ..."
            />
            <JobsCard
              title="Product Designer"
              location="ClassPass - Manchester, UK"
              img="./featureJobs/3.png"
              description="ClassPass is looking for Product Designer to help us..."
            />{" "}
            <JobsCard
              title="Lead Designer"
              location="Canva - Ontario, Canada"
              img="./featureJobs/4.png"
              description="Canva is looking for Lead Engineer to help develop n ..."
            />
            <JobsCard
              title="Brand Strategist"
              location="GoDaddy - Marseille, France"
              img="./featureJobs/5.png"
              description="GoDaddy is looking for Brand Strategist to join the team..."
            />{" "}
            <JobsCard
              title="Data Analyst"
              location="Twitter - San Diego, US"
              img="./featureJobs/6.png"
              description="Twitter is looking for Data Analyst to help team desi ..."
            />
          </div>
          <div className="mt-28 flex items-end justify-between">
            <p className="text-[#25324B] text-5xl font-semibold">
              Latest <span className="text-[#26A4FF]">jobs open</span>
            </p>
            <div className="text-[#4640DE] font-semibold text-base flex items-center gap-x-4">
              <p>Show all jobs</p>
              <ArrowRightIcon width={24} height={24} />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-8 mt-12">
            <LatestJobsCard
              img="./featureJobs/1.png"
              title="Social Media Assistant"
              location="Nomad - Paris, France"
            />{" "}
            <LatestJobsCard
              img="./featureJobs/2.png"
              title="Brand Designer"
              location="Dropbox - San Fransisco, USA"
            />{" "}
            <LatestJobsCard
              img="./featureJobs/3.png"
              title="Interactive Developer"
              location="Terraform - Hamburg, Germany"
            />{" "}
            <LatestJobsCard
              img="./featureJobs/4.png"
              title="HR Manager"
              location="Packer - Lucern, Switzerland"
            />
            <LatestJobsCard
              img="./featureJobs/5.png"
              title="Social Media Assistant"
              location="Netlify - Paris, France"
            />
            <LatestJobsCard
              img="./featureJobs/6.png"
              title="Brand Designer"
              location="Maze - San Fransisco, USA"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
