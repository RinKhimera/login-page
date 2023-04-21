import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="px-5 lg:px-20 py-2">
        <div className="flex flex-col-reverse lg:flex-row lg:flex lg:justify-between gap-4">
          <div className="grid grid-cols-3 justify-items-center gap-5">
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="text-2xl font-bold mb-5 text-blue-600">
                Navigation
              </h1>
              <a href="#">Find a job</a>
              <a href="#">Post a job</a>
              <a href="#">Find companies</a>
              <a href="#">Carrer advice</a>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="text-2xl font-bold mb-5 text-blue-600">Company</h1>
              <a href="#">The Team</a>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="text-2xl font-bold mb-5 text-blue-600">
                Resources
              </h1>
              <a href="#">Support</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Helpful Resource</a>
            </div>
          </div>
          <div
            className="grid justify-items-center lg:justify-items-end
                       mx-auto lg:m-0 max-w-xl lg:max-w-md w-full"
          >
            <h1 className="text-2xl font-bold">Join Our Newsletter</h1>
            <p>Sign up for secrets, news and specials</p>
            <div className="flex items-center justify-center lg:justify-end w-full pt-2 lg:pt-0">
              <input
                type="text"
                placeholder="Email"
                className="bg-slate-200 rounded-l-2xl py-2.5 px-3 text-sm w-1/2"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition rounded-r-2xl p-2.5 text-sm text-white font-semibold">
                Subscribe
              </button>
            </div>
            <div className="flex mt-5 text-lg gap-3 ">
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaDribbble />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-4 border-t-1 border-gray-300" />
        <div className="mt-2 text-center">
          <p>© 2023 Bolo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
