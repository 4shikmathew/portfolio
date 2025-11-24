"use client";

import { useState } from "react";
import Logo from "../logo";
import toast from "react-hot-toast";

const Header = () => {
  const [loading, setLoading] = useState(false);

  const openResume = () => {
    setLoading(true);

    toast.loading("Opening Resume...", { id: "resume-toast" });

    setTimeout(() => {
      toast.success("Resume opened!", { id: "resume-toast" });
      window.open("/Ashikmathew_Resume.pdf", "_blank");
      setLoading(false);
    }, 1000);
  };

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">

            <Logo />

            {/* Old design + new animation */}
            <button
              onClick={openResume}
              className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group flex items-center gap-3"
            >
              {/* Loading spinner */}
              {loading ? (
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white transition"
                >
                  <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                  <path d="M5 19h14" />
                </svg>
              )}

              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Download PDF Resume
              </span>
            </button>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
