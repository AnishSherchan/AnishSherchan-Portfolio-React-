import { React, useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

const index = ({ navClasses }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar">
      <div className={`fixed  h-24 w-full px-4 sm:px-20 ${navClasses}`}>
        <div className=" w-full">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src={logo} alt="Anish Sherchan" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-16">
                <Link to="Stories" smooth={true}>
                  <p className="flex items-center cursor-pointer text-white text-xl">
                    Stories{" "}
                    <span className="flex mb-4 items-center text-5xl text-blue-dot">
                      .
                    </span>
                  </p>
                </Link>
                <Link to="Work" smooth={true}>
                  <p className="flex items-center cursor-pointer text-white text-xl">
                    Works{" "}
                    <span className="flex mb-4 items-center text-5xl text-blue-dot">
                      .
                    </span>
                  </p>
                </Link>
                <Link to="Contact" smooth={true}>
                  <p className="flex items-center cursor-pointer text-white text-xl">
                    Contacts{" "}
                    <span className="flex items-center mb-4 text-5xl text-blue-dot">
                      .
                    </span>
                  </p>
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        id="navbar_res"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden w-full h-screen top-16" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 gap-4 flex flex-col w-full items-center justify-evenly sm:px-3"
            >
              <Link to="Stories" smooth={true}>
                <p className="flex items-center cursor-pointer text-white text-xl">
                  Stories{" "}
                  <span className="flex mb-4 items-center text-5xl text-blue-dot">
                    .
                  </span>
                </p>
              </Link>
              <Link to="Work" smooth={true}>
                <p className="flex items-center cursor-pointer text-white text-xl">
                  Works{" "}
                  <span className="flex mb-4 items-center text-5xl text-blue-dot">
                    .
                  </span>
                </p>
              </Link>
              <Link to="Contact" smooth={true}>
                <p className="flex items-center cursor-pointer text-white text-xl">
                  Contacts{" "}
                  <span className="flex items-center mb-4 text-5xl text-blue-dot">
                    .
                  </span>
                </p>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default index;
