import { Boxes } from '../Home/components/Boxes/boxes';
import { Sobre } from './components/About/about';
import { Banner } from './components/Banner/banner';
import { ModeC } from './components/ModeC/modec';

export function HomePage() {
  return (
    <>
      <Banner
        title={[`Bem vindo ao `, `BOX33`]}
        subTitle={`A caixa de enigmas`}
        subTitle2={`Primeiro box disponível`}
      />
      <Boxes />
      <ModeC />
      <Sobre />
    </>
  );
}
