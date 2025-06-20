"use client";
import { useEffect, useState } from "react";
import Banner from "@/app/components/Banner";
import { usePathname } from "next/navigation";
import Logo from "@/app/components/Logo";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClass = isHome
    ? scroll
      ? "transition-all duration-300 bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]"
      : ""
    : "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_#0000000A]";

  return (
    <>
      <header className="header h-screen w-full">
        <div className="h-[600px]">
          <section className="hero_layout relative ">
            {/* Image background */}
            <Banner
              src="/assets/img/Banner-Web.webp"
              alt="Hero Image"
              className="object-cover h-[600px] relative z-1"
            />
            {/* Header Menu */}
            <div
              className={`header_menu w-full fixed top-0 z-99999 px-[16px] h-[80px] flex justify-between items-center transition-all duration-300 ${headerClass}`}
            >
              <Logo
                src="/assets/img/Amor Logo.png"
                alt="Logo Amor"
                clasName=""
              />

              <ul className="flex justify-center space-x-[60px] items-center max-md:hidden">
                <li>
                  <a href="/" className="text-white font-semibold text-[16px]">
                    TRANG CHỦ
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white text-[16px]">
                    VỀ AMOR
                  </a>
                </li>
                <li>
                  <a href="/menu" className="text-white text-[16px]">
                    MENU
                  </a>
                </li>
                <li>
                  <a href="/khoi-nghiep" className="text-white text-[16px]">
                    KHỞI NGHIỆP
                  </a>
                </li>
              </ul>

              <div className="phone_contact flex items-center gap-5">
                <div className="phone_number flex items-center max-md:hidden">
                  <img src="/assets/img/mobile-color.png" alt="Mobile icon" />
                  <a
                    href="tel:0902328586"
                    className="text-white font-bold font-[Montserrat] text-[18px] ml-[10px]"
                  >
                    090 232 8586
                  </a>
                </div>

                <div className="contact py-[12px] px-[32px] max-md:px-[24px] bg-[#824435] rounded-full">
                  <a href="#" className="flex items-center">
                    <img src="/assets/img/contact-now.png" alt="Icon liên hệ" />
                    <span className="ml-[10px] text-white font-semibold text-[17px]">
                      Liên hệ ngay
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="icon_bars max-md:block hidden"
                onClick={() => setMenuOpen(true)}
              >
                <i className="fa-solid fa-bars-staggered cursor-pointer text-white text-xl"></i>
              </div>
            </div>

            {/* Title Banner Hero */}
            <div className="absolute max-md:w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99 text-center px-4">
              <h2 className="text-xl md:text-[48px] max-md:text-[30px] max-md:leading-[48px] max-md:!font-[300]  text-white font-[trajan]">
                AMOR THẢO MỘC <br /> NƠI LƯU GIỮ BÌNH YÊN
              </h2>
            </div>
          </section>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 z-[999999] bg-[#00000099] backdrop-blur-sm flex w-full">
            <div className="h-full p-6 relative rounded-l-xl w-full">
              {/* Close button */}
              <div className="flex justify-between items-center">
                <button
                  className="absolute top-6 right-5 text-white text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  &times;
                </button>

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src="/assets/img/Amor Logo.png"
                    alt="Logo"
                    className="w-[120px]"
                  />
                </div>
              </div>

              {/* Menu Items */}
              <ul className="space-y-6 mt-10 text-center">
                <li>
                  <a
                    href="/"
                    className="text-white text-lg font-medium block cursor-pointer"
                  >
                    TRANG CHỦ
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-white text-lg font-medium block cursor-pointer"
                  >
                    VỀ AMOR
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="text-white text-lg font-medium block cursor-pointer"
                  >
                    MENU
                  </a>
                </li>
                <li>
                  <a
                    href="/khoi-nghiep"
                    className="text-white text-lg font-medium block cursor-pointer"
                  >
                    KHỞI NGHIỆP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <main className="h-[100vh] bg-[#ffeee2]"></main>
      </header>
    </>
  );
}
