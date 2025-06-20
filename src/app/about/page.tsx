"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Banner from "@/app/components/Banner";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import Image from "next/image";
const About = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!isAbout) return;
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAbout]);

  const headerClass = isAbout
    ? scroll
      ? "bg-[#FFFFFF33] backdrop-blur-[75px] shadow-[0px_4px_4px_#0000000A]"
      : ""
    : "transition-all duration-300 bg-[#00000033] backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A]";

  return (
    <header className="header h-screen w-full">
      <div className="h-[600px]">
        <section className="hero_layout relative">
          {/* Image background */}
          <Banner
            src="/assets/img/Amor-spa-about-new.webp"
            alt="Hero Image"
            className="object-cover relative z-1 bg-[#ffeee2] w-full mx-auto h-[100vh] pt-[80px]"
          />
          {/* Header Menu */}
          <div
            className={`header_menu w-full fixed top-0 z-99999 px-[16px] h-[80px] flex justify-between items-center transition-all duration-300 ${headerClass}`}
          >
            <Logo
              src="/assets/img/Amor-Logo-about.png"
              alt="Logo Amor"
              clasName=""
            />

            <ul className="flex justify-center space-x-[60px] items-center max-md:hidden">
              <li>
                <Link href="/" className="text-black font-semibold text-[16px]">
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black text-[16px]">
                  VỀ AMOR
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-black text-[16px]">
                  MENU
                </Link>
              </li>
              <li>
                <Link href="/khoi-nghiep" className="text-black text-[16px]">
                  KHỞI NGHIỆP
                </Link>
              </li>
            </ul>

            <div className="phone_contact flex items-center gap-5 max-md:hidden">
              <div className="phone_number flex items-center">
                <Image src="/assets/img/mobile-black.png" alt="Mobile icon" />
                <a
                  href="tel:0902328586"
                  className="text-black font-bold font-[Montserrat] text-[18px] ml-[10px]"
                >
                  090 232 8586
                </a>
              </div>

              <div className="contact py-[12px] px-[32px] bg-[#824435] rounded-full">
                <Link href="#" className="flex items-center">
                  <Image src="/assets/img/contact-now.png" alt="Icon liên hệ" />
                  <span className="ml-[10px] text-white font-semibold text-[17px]">
                    Liên hệ ngay
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="icon_bars max-md:block hidden"
              onClick={() => setMenuOpen(true)}
            >
              <i className="fa-solid fa-bars-staggered cursor-pointer text-[#824435] text-xl"></i>
            </div>
          </div>

          {/* Title Banner Hero */}
          <div className="absolute max-md:w-full top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99 text-center px-4">
            <h2 className="md:text-[48px] max-md:text-[30px] text-[#824435] font-[trajan]">
              Mến chào quý khách, <br /> tôi là Ty Anh Nguyễn
            </h2>
          </div>
        </section>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-[999999] bg-[#d4d4d47e] backdrop-blur-sm flex w-full">
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
                <Image
                  src="/assets/img/Amor-Logo-about.png"
                  alt="Logo"
                  className="w-[120px]"
                />
              </div>
            </div>

            {/* Menu Items */}
            <ul className="space-y-6 mt-10 text-center">
              <li>
                <Link
                  href="/"
                  className="text-black text-lg font-medium block cursor-pointer"
                >
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black text-lg font-bold block cursor-pointer"
                >
                  VỀ AMOR
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-black text-lg font-medium block cursor-pointer"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  href="/khoi-nghiep"
                  className="text-black text-lg font-medium block cursor-pointer"
                >
                  KHỞI NGHIỆP
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <main className="h-[100vh] bg-[#ffeee2]"></main>
    </header>
  );
};

export default About;
