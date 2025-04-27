import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import {perksBenefitsData, teamData} from "@/lib/utils";
import {ArrowRightIcon, FireIcon} from "@heroicons/react/24/outline";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

function NomadPage() {
  return (
    <div className="">
      <div className="max-container">
        <Header />
      </div>
      <div className="bg-[#F8F8FD] py-20">
        <div className="max-container flex gap-x-6">
          <img width={189} height={189} src="./cardImage.png" alt="" />
          <div className="w-full">
            <p className="text-[#25324B] font-semibold text-5xl flex gap-x-3 items-center">
              Stripe{" "}
              <span className="py-1 px-3 bg-[#F8F8FD] text-[#4640DE] text-base leading-[160%] font-normal">
                43 Jobs
              </span>
            </p>
            <p className="mt-3 text-[#4640DE] font-semibold text-base">
              https://stripe.com
            </p>
            <div className="grid grid-cols-4 gap-x-10 w-full mt-6">
              <div className="flex gap-x-4 w-full items-center">
                <FireIcon width={44} height={44} color="#26A4FF" />
                <div className="w-full">
                  <p className="text-[#515B6F] font-normal text-base">
                    Employees
                  </p>
                  <p className="text-base text-[#25324B] font-semibold">
                    4000+
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 w-full items-center">
                <FireIcon width={44} height={44} color="#26A4FF" />
                <div className="w-full">
                  <p className="text-[#515B6F] font-normal text-base">
                    Employees
                  </p>
                  <p className="text-base text-[#25324B] font-semibold">
                    20 countries
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 w-full items-center">
                <FireIcon width={44} height={44} color="#26A4FF" />
                <div className="w-full">
                  <p className="text-[#515B6F] font-normal text-base">
                    Location
                  </p>
                  <p className="text-base text-[#25324B] font-semibold">
                    20 countries
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4 w-full items-center">
                <FireIcon width={44} height={44} color="#26A4FF" />
                <div className="w-full">
                  <p className="text-[#515B6F] font-normal text-base">
                    Founded
                  </p>
                  <p className="text-base text-[#25324B] font-semibold">
                    Payment Gateway
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-container mt-[75px]">
        <div className="flex gap-x-16">
          <div className="max-w-[752px] w-full">
            <p className="text-[#25324B] font-semibold text-3xl">
              Company Profile
            </p>
            <p className="text-[#515B6F] font-normal text-base mt-4">
              Stripe is a software platform for starting and running internet
              businesses. Millions of businesses rely on Stripe’s software tools
              to accept payments, expand globally, and manage their businesses
              online. Stripe has been at the forefront of expanding internet
              commerce, powering new business models, and supporting the latest
              platforms, from marketplaces to mobile commerce sites. We believe
              that growing the GDP of the internet is a problem rooted in code
              and design, not finance. Stripe is built for developers, makers,
              and creators. We work on solving the hard technical problems
              necessary to build global economic infrastructure—from designing
              highly reliable systems to developing advanced machine learning
              algorithms to prevent fraud.
            </p>
            <p className="text-[#25324B] mt-6 font-semibold text-3xl">
              Contact
            </p>
            <div className="mt-4 gap-4 space-x-[16px] space-y-[16px]">
              <div className="flex gap-4">
                <button className="border border-[#4640DE] w-max p-2 flex items-center gap-x-2">
                  <FaTwitter color="#4640DE" />
                  <p className="text-[#4640DE] font-medium text-base">
                    twitter.com/stripe
                  </p>
                </button>
                <button className="border border-[#4640DE] w-max p-2 flex items-center gap-x-2">
                  <FaFacebook color="#4640DE" />
                  <p className="text-[#4640DE] font-medium text-base">
                    facebook.com/StripeHQ
                  </p>
                </button>
              </div>
              <button className="border border-[#4640DE] w-max p-2 flex items-center gap-x-2">
                <FaLinkedin color="#4640DE" />
                <p className="text-[#4640DE] font-medium text-base">
                  linkedin.com/company/stripe
                </p>
              </button>
            </div>
            <div className="flex gap-3 mt-10">
              <img width={478} height={606} src="./grid/1.png" alt="" />
              <div className="grid gap-3">
                <img width={262} height={194} src="./grid/2.png" alt="" />{" "}
                <img width={262} height={194} src="./grid/3.png" alt="" />{" "}
                <img width={262} height={194} src="./grid/4.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#25324B] font-semibold text-3xl">Tech stack</p>
            <p className="text-[#515B6F] font-normal text-base mt-4">
              Learn about the technology and tools that Stripe uses.{" "}
            </p>
            <div className="grid mt-7 grid-cols-3 gap-2.5">
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
              <div className="grid justify-items-center">
                <img width={74} height={74} src="./cardImage.png" alt="" />
                <p className="text-[#25324B] font-normal text-base mt-2.5">
                  HTML 5
                </p>
              </div>
            </div>
            <div className="text-[#4640DE] mt-2 font-semibold text-base flex items-center gap-x-4">
              <p>Show all jobs</p>
              <ArrowRightIcon width={24} height={24} />
            </div>
            <hr className="mt-4 mb-10" />
            <div>
              <p className="text-[#25324B] mt-6 font-semibold text-3xl">
                Office Location
              </p>
              <p className="text-[#515B6F] text-base mt-4">
                Stripe offices spread across 20 countries
              </p>
              <div className="flex gap-3 mt-4">
                <img
                  width={40}
                  height={30}
                  className="bg-red-500"
                  src="./flag/1.png"
                  alt=""
                />
                <p className="text-[#000000] font-semibold text-base">
                  United States
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <img
                  width={40}
                  height={30}
                  className="bg-red-500"
                  src="./flag/2.png"
                  alt=""
                />
                <p className="text-[#000000] font-semibold text-base">
                  United States
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <img
                  width={40}
                  height={30}
                  className="bg-red-500"
                  src="./flag/3.png"
                  alt=""
                />
                <p className="text-[#000000] font-semibold text-base">
                  United States
                </p>
              </div>
              <div className="flex gap-3 mt-4 mb-6">
                <img
                  width={40}
                  height={30}
                  className="bg-red-500"
                  src="./flag/4.png"
                  alt=""
                />
                <p className="text-[#000000] font-semibold text-base">
                  United States
                </p>
              </div>
              <div className="text-[#4640DE] font-semibold text-base flex items-center gap-x-4">
                <p>View countries</p>
                <ArrowRightIcon width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-[75px] bg-[#D6DDEB] " />
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-[#25324B] font-semibold text-[32px]">Team</p>
            <p className="text-[#4640DE] font-semibold text-base">
              See all (47)
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {teamData.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-[#D6DDEB] grid justify-items-center rounded-[4px]"
              >
                <img
                  width={80}
                  height={80}
                  className="bg-red-500 rounded-full"
                  src={item.img}
                  alt=""
                />
                <p className="text-[#25324B] font-semibold text-[18px] mt-4">
                  {item.name}
                </p>
                <p className="text-[#7C8493] font-normal text-base mt-1">
                  {item.title}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <FaInstagram color="#515B6F" />
                  <FaLinkedin color="#515B6F" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-[75px] text-[#D6DDEB]" />
        <div className="">
          <p className="text-[#25324B] font-semibold text-[32px]">
            Perks & Benefits
          </p>
          <p className="text-[#515B6F] font-normal text-base">
            This job comes with several perks and benefits
          </p>
          <div className="grid grid-cols-4 gap-6 gap-y-6 mt-6">
            {perksBenefitsData.map((item) => {
              return (
                <div key={item.title} className="rounded-[4px]">
                  <img
                    width={48}
                    height={48}
                    className="bg-amber-700"
                    src={item.img}
                    alt=""
                  />
                  <p className="text-[#25324B] font-semibold text-[20px] mt-6 mb-3">
                    {item.title}
                  </p>
                  <p className="text-[#515B6F] text-base mt-3">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    <div>
    <Footer /></div>
    </div>
  );
}
export default NomadPage;
