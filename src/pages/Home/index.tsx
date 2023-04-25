import { Boxes } from '../Home/components/Boxes/boxes';
import { Sobre } from '../Home/components/Sobre/sobre';
import { Banner } from './components/Banner/banner';

export function HomePage() {
  return (
    <>
      <Banner
        title={[`Bem vindo ao `, `BOX33`]}
        subTitle={`A caixa de enigmas`}
        subTitle2={`Primeiro box disponível`}
      />
      <Boxes />
      <Boxes />
      <Sobre />
    </>
  );
}
