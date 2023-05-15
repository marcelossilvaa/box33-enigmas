import { NavLink } from 'react-router-dom';

export function ModeC() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className=" text-xl pt-8">Modo Campanha</h1>
      <NavLink to="/campaignmode">
        <a href="">Em breve...</a>
      </NavLink>
    </div>
  );
}
