import { FaFileDownload } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="backdrop-blur-lg border mx-auto fixed top-2 left-2 right-2 z-50 rounded-full w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 text-white gap-3 sm:gap-0">
          <div className="flex flex-wrap items-center justify-between w-full sm:w-auto gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center font-bold text-xs sm:text-sm">
                MG
              </div>
              <span className="text-gray-200 font-medium text-sm sm:text-base">
                Portfolio
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href="cv/cv.pdf" download="Mohamed_Gamal_Resume">
                <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-200 border border-gray-600 px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-white/10 transition">
                  <FaFileDownload className="text-sm sm:text-base" />
                  Resume
                </button>
              </a>
              <a
                href="https://wa.me/201122503776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-black bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-gray-200 transition"
              >
                <FaWhatsapp className="text-sm sm:text-base text-green-500" />
                Get in touch
              </a>
            </div>
          </div>

          {/* 🔹 Nav Links (سطر ثاني في الموبايل) */}
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 text-gray-300 text-xs sm:text-sm">
            <li className="hover:text-white transition cursor-pointer">Work</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Experience
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
