import { NavLink } from 'react-router-dom';
import Logo from '../../assets/homepage/logo.png';
import React, { useEffect, useState } from 'react';

export function Header() {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <header className="mx-auto max-w-[72rem] w-full max-xl:w-[95%] flex items-center justify-between h-28 ">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="" className="w-[10rem] sm:w-[12rem]" />
          </NavLink>
        </div>

        <div className=" text-white text-[20px] flex gap-2 sm:text-lg sm:gap-4">
          <a href="#home" className="hover:text-yellow" translate="no">
            Home
          </a>
          <a href="#boxes" className="hover:text-yellow" translate="no">
            Boxes
          </a>
          <a href="#sobre" className="hover:text-yellow">
            Sobre
          </a>
        </div>
      </header>
    </div>
  );
}
