import { NavLink } from 'react-router-dom';
import Logo from '../../assets/homepage/logo.png';
import { useEffect, useState } from 'react';

export function HeaderRiddles() {
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
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
      <header className="mx-auto max-w-[72rem] w-full max-xl:w-[95%] flex items-center justify-center h-28 ">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="" className="w-[10rem] sm:w-[12rem]" />
          </NavLink>
        </div>
      </header>
    </div>
  );
}
