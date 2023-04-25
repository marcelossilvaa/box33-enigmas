import { useRef } from 'react';
import { dataRiddles } from '../../@helpers/dataRiddles';
import { RiddleComponent } from './components/RiddleComponent';

export function RiddlesPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  function onChangeSlider(task: string) {
    const [{ response }] = dataRiddles;
    if (task === response) {
      sliderRef.current?.scrollTo({
        left: (sliderRef.current.scrollLeft += sliderRef.current.offsetWidth),
        behavior: 'smooth',
      });
    }

    return alert('Resposta errada! Tente novamente.');
  }

  return (
    <div className="min-h-[72vh] mt-28 flex justify-center">
      <main
        className="bg-black min-w-full flex overflow-hidden"
        ref={sliderRef}
      >
        {dataRiddles.map(dataRiddles => {
          return (
            <RiddleComponent
              key={dataRiddles.id}
              title={[dataRiddles.title[0], dataRiddles.title[1]]}
              hint={[dataRiddles.hint[0], dataRiddles.hint[1]]}
              image={dataRiddles.image}
              onChangeSlider={onChangeSlider}
            />
          );
        })}
      </main>
    </div>
  );
}
