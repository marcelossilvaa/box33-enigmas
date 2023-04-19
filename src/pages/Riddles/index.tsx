import { useRef } from 'react';
import { riddles } from '../../@helpers/riddles';
import { Riddle } from '../../pages/Riddles/components/Riddle';

export function RiddlesPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  function onChangeSlider(task: string) {
    const [{ response }] = riddles;
    if (task === response) {
      sliderRef.current?.scrollTo({
        left: (sliderRef.current.scrollLeft += sliderRef.current.offsetWidth),
        behavior: 'smooth',
      });
    }

    return alert('Resposta errada! Tente novamente.');
  }

  return (
    <div className="mt-28 flex justify-center">
      <main
        className="bg-black min-w-full flex overflow-hidden"
        ref={sliderRef}
      >
        {riddles.map(riddle => {
          return (
            <Riddle
              key={riddle.id}
              title={[riddle.title[0], riddle.title[1]]}
              hint={[riddle.hint[0], riddle.hint[1]]}
              image={riddle.image}
              onChangeSlider={onChangeSlider}
            />
          );
        })}
      </main>
    </div>
  );
}
