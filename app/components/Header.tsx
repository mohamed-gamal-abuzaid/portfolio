import { FaFileDownload } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

const Header = () => {
  return (
    <>
      <nav className="hidden md:block backdrop-blur-lg rounded-full border mx-auto w-[60%] fixed top-4 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border text-white flex items-center justify-center font-bold text-sm">
              MG
            </div>
            <span className="text-gray-200 font-medium">Portfolio</span>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
            <li className="hover:text-white transition">Work</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Experience</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <button className=" flex items-center gap-2 text-sm text-gray-200 border border-gray-600 px-4 py-2 rounded-full hover:bg-white/10 transition">
              <FaFileDownload />
              Resume
            </button>
            <button className="flex items-center gap-2 text-sm text-black bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition">
              <LiaTelegram />
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
