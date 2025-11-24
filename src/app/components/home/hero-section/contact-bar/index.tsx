"use client";
import { getDataPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">

            {/* LEFT SIDE — EMAIL LABEL WITH ICON */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
              <a 
                href="mailto:ashikmathew937@gmail.com"
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition text-sm md:text-base"
              >
                <img 
                  src="/images/icon/mail-icon.svg" 
                  alt="Email" 
                  width={24} 
                  height={24}
                />
                <span>ashikmathew937@gmail.com</span>
              </a>
              <a 
                href="tel:+919037497044"
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition text-sm md:text-base"
              >
                <img 
                  src="/images/icon/call-icon.svg" 
                  alt="Phn" 
                  width={24} 
                  height={24}
                />
                <span>+91 9037497044</span>
              </a>
            
            </div>

            {/* OLD CONTACT ITEMS  */}
            {/*
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center gap-2 lg:gap-4 text-sm md:text-base"
                >
                  <Image
                    src={value.icon}
                    alt={value.type}
                    width={24}
                    height={24}
                    className="min-w-[24px] min-h-[24px]"
                  />
                  <h6 className="hover:text-primary">{value.label}</h6>
                </Link>
              ))}
            </div>
            */}

            {/* RIGHT SIDE — SOCIAL ICONS WITH LABELS */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6">

              {/* GitHub */}
              <a 
                href="https://github.com/4shikmathew" 
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition text-sm md:text-base"
              >
                <img 
                  src="/images/icon/image2.png" 
                  alt="GitHub" 
                  width={26} 
                  height={26} 
                />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ashik-mathew-varughese-319981303/"
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition text-sm md:text-base"
              >
                <img 
                  src="/images/icon/image.png" 
                  alt="LinkedIn" 
                  width={26} 
                  height={26}
                />
                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/_ashikmathew_/" 
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition text-sm md:text-base"
              >
                <img 
                  src="/images/icon/image1.png" 
                  alt="Instagram" 
                  width={26} 
                  height={26}
                />
                <span>Instagram</span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
