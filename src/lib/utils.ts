import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const perksBenefitsData = [
  {
    title: "Full Healthcare",
    img: "./benefits/1.png",
    desc: "We believe in thriving communities and that starts with our team being happy and healthy.",
  },
  {
    title: "Unlimited Vacation",
    img: "./benefits/2.png",
    desc: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
  },
  {
    title: "Skill Development",
    img: "./benefits/3.png",
    desc: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
  },
  {
    title: "Team Summits",
    img: "./benefits/7.png",
    desc: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
  },
  {
    title: "Remote Working",
    img: "./benefits/4.png",
    desc: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
  },
  {
    title: "Commuter Benefits",
    img: "./benefits/5.png",
    desc: "We’re grateful for all the time and energy each team member puts into getting to work every day.",
  },
  {
    title: "We give back.",
    img: "./benefits/6.png",
    desc: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
  },
];

export const teamData = [
  {
    name: "Célestin Gardinier",
    title: "CEO & Co-Founder",
    img: "./team/1.png",
  },
  {
    name: "Reynaud Colbert",
    title: "Co-Founder",
    img: "./team/2.png",
  },
  {
    name: "Arienne Lyon",
    title: "Managing Director",
    img: "./team/3.png",
  },
  {
    name: "Bernard Alexander",
    title: "Managing Director",
    img: "./team/4.png",
  },
  {
    name: "Christine Jhonson",
    title: "Managing Director",
    img: "./team/5.png",
  },
];

export const techStackData = [
  {
    img: "./techStack/1.png",
    title: "HTML 5",
  },
  {
    img: "./techStack/2.png",
    title: "CSS 3",
  },
  {
    img: "./techStack/3.png",
    title: "JavaScript",
  },
  {
    img: "./techStack/4.png",
    title: "Ruby",
  },
  {
    img: "./techStack/5.png",
    title: "Mixpanel",
  },
  {
    img: "./techStack/6.png",
    title: "Framer",
  },
];

export const allJobsData = [
  {
    title: "Social Media Assistant",
    location: "Nomad - Paris, France",
    img: "./jobs/1.png",
  },
  {
    title: "Brand Designer",
    location: "Dropbox - San Fransisco, USA",
    img: "./jobs/2.png",
  },
  {
    title: "Interactive Developer",
    location: "Terraform - Hamburg, Germany",
    img: "./jobs/3.png",
  },
  {
    title: "Email Marketing",
    location: "Revolut - Madrid, Spain",
    img: "./jobs/4.png",
  },
  {
    title: "Lead Engineer",
    location: "Canva - Ankara, Turkey",
    img: "./jobs/5.png",
  },
  {
    title: "Product Designer",
    location: "ClassPass - Berlin, Germany",
    img: "./jobs/6.png",
  },
  {
    title: "Customer Manager",
    location: "Pitch - Berlin, Germany",
    img: "./jobs/7.png",
  },
];

export const recommendedCompaniesData = [
  {
    title: "Nomad",
    desc: "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    img: "./rCompanies/1.png",
  },
  {
    title: "Discord",
    desc: "We'd love to work with someone like you. We care about creating a delightful experience.",
    img: "./rCompanies/2.png",
  },
  {
    title: "Maze",
    desc: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    img: "./rCompanies/3.png",
  },
  {
    title: "Udacity",
    desc: "Udacity is a new type of online university that teaches the actual programming skills.",
    img: "./rCompanies/4.png",
  },
  {
    title: "Webflow",
    desc: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    img: "./rCompanies/5.png",
  },
  {
    title: "Foundation",
    desc: "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    img: "./rCompanies/6.png",
  },
];
