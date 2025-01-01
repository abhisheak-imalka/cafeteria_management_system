import { Footer as FlowbiteFooter } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "../assets/LOGO/footer logo.png";
import logo2 from "../assets/LOGO/pepsi.png";
import logo3 from "../assets/LOGO/redbull.png";
import logo4 from "../assets/LOGO/nestle.png";


export default function Footer() {
  return (
    <FlowbiteFooter container className="border-b-2 border-b-black shadow-md relative bg-gradient-to-r from-[#FFB200] to-[#640D5F]">
  <div className="w-full max-w-screen-xl mx-auto px-0 py-0 lg:py-0">
    <div className="md:flex md:justify-between">
      <div className="mb-6">
        <Link to="/">
          <img src={logo} alt="logo" className="w-60 m-0 p-0" />
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <img src={logo2} alt="logo2" className="w-20 m-0 p-0" />
        <img src={logo3} alt="logo3" className="w-25 m-0 p-0" />
        <img src={logo4} alt="logo4" className="w-25 m-0 p-0" />
      </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">About</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.100jsprojects.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    Food and Restaurant
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow Us</h2>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:text-white">
                    <BsFacebook className="w-4 h-4" />
                    <span className="sr-only">Facebook page</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <BsInstagram className="w-4 h-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <BsTwitter className="w-4 h-4" />
                    <span className="sr-only">Twitter page</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <span className="text-sm">
            © {new Date().getFullYear()} Food and Restaurant. All Rights Reserved.
          </span>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
