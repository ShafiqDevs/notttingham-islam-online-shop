import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import ProfileLogo from "./ProfileLogo";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Cart from "./Cart";

export default function NavBar({ scrollAt, cartCount }) {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY >= (scrollAt || 70)) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleNavColor);
  }, []);

  const defaultNav =
    "fixed w-full h-fit  left-0 right-0 top-0 bottom-0 flex items-start justify-end p-4 bg-transparent z-10";
  const scrolledNav =
    "fixed w-full h-fit  left-0 right-0 top-0 bottom-0 flex items-start justify-end p-4  bg-white text-black z-10";

  return (
    <div className={scroll ? scrolledNav : defaultNav}>
      <div className="mr-auto md:w-fit w-[120px]   md:ml-12 self-center ">
        <Link href={"/"}>
          <a>
            <ProfileLogo image={`/../public/niic.png`} />
          </a>
        </Link>
      </div>
      <div className={`md:hidden flex flex-row ${nav? "items-start" : "items-center"}`}>
        <div><Cart count ={cartCount} /></div>
        {/* mobile nav button */}
        <div className=" flex flex-col gap-3 items-end">
          <button className="text-2xl p-4" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {/* mobile nav */}
          <div className={nav ? "text-center font-semibold text-xl" : "hidden"}>
            <NavItem _text={"Home"} _link={"/"} />
            <NavItem _text={"Socials"} _link={"/"} />
            <div></div>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="hidden text-2xl md:flex items-start p-6 gap-3">
        <Cart count ={cartCount}/>
        <NavItem _text={"Home"} _link={"/"} />
        <NavItem _text={"Socials"} _link={"/"} />
      </div>
    </div>
  );
}
