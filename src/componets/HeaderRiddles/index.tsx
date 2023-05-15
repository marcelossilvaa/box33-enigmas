import { NavLink } from 'react-router-dom';
import Logo from '../../assets/homepage/logo.png';

export function HeaderRiddles() {
  return (
    <div className="h-[100px] absolute top-0 flex items-center justify-center w-full">
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
