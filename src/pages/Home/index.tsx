import { Boxes } from './boxes';
import { CaretDown } from 'phosphor-react';
import { Sobre } from './sobre';

export function HomePage() {
  return (
    <>
      <section className="banner">
        <div className="mx-auto max-w-[72rem] w-full max-xl:w-[90%]">
          <div className="flex flex-col justify-center h-[90vh]">
            <h1 className="text-xl drop-shadow-md sm:text-xxl" id="item">
              Bem vindo ao <strong className="text-yellow">BOX33</strong>
            </h1>
            <h4 className="text-xl sm:text-xl" id="item">
              A caixa de enigmas
            </h4>
            <h5 className="text-2xl" id="item">
              Primeiro box disponível
            </h5>
          </div>
          <div className="flex justify-center h-[10vh]">
            <a href="#boxes">
              <CaretDown size={80} className="btnScroll" />
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[72rem] w-full max-xl:w-[90%]"></section>
      <Boxes />
      <Sobre />
    </>
  );
}
