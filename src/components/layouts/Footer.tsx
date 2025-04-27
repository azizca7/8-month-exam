import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1E25] text-white px-6 md:px-16 py-12 mt-14">
      <div className="grid grid-cols-1 max-container md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
            <span className="text-xl font-semibold">JobHuntly</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Advice</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Help Docs</a>
            </li>
            <li>
              <a href="#">Guide</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get job notifications</h4>
          <p className="text-sm text-gray-400 mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 text-sm  bg-white text-black w-full focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white text-sm  hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-container md:flex-row justify-between items-center mt-6 gap-4 text-sm text-gray-500">
        <p>2021 @ JobHuntly. All rights reserved.</p>
        <div className="flex gap-4">
          <a target="_blank" href="https://www.facebook.com/" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.instagram.com/" className="hover:text-white">
            <FaInstagram />
          </a>
          <a target="_blank" href="https://dribbble.com/" className="hover:text-white">
            <FaDribbble />
          </a>
          <a target="_blank" href="https://www.linkedin.com/" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a target="_blank" href="https://twitter.com/" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
