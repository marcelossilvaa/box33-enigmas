import { useState } from 'react';
import { box1 } from '../../@helpers/box1';
import { box2 } from '../../@helpers/box2';
import { box3 } from '../../@helpers/box3';
import { RiddleComponent } from './components/RiddleComponent';
import { useLocation } from 'react-router-dom';

interface Box {
  id: number;
  title: string[];
  hint: string[];
  image: string;
  response: string;
  isLastRiddle?: boolean;
}

export function RiddlesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();
  const dataBox = location.search;
  let selectedBox: Box[] = [];

  if (dataBox.includes('box1')) {
    selectedBox = box1;
  } else if (dataBox.includes('box2')) {
    selectedBox = box2;
  } else if (dataBox.includes('box3')) {
    selectedBox = box3;
  }

  const handleNextRiddle = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="min-h-[72vh] mt-28 flex justify-center">
      <main className="bg-black min-w-full flex overflow-hidden">
        {selectedBox.map((dataRiddle, index) => {
          if (index === currentIndex) {
            return (
              <RiddleComponent
                key={index}
                title={[dataRiddle.title[0], dataRiddle.title[1]]}
                hint={[dataRiddle.hint[0], dataRiddle.hint[1]]}
                image={dataRiddle.image}
                response={dataRiddle.response}
                onNextRiddle={handleNextRiddle}
                isLastRiddle={dataRiddle.isLastRiddle}
              />
            );
          }
        })}
      </main>
    </div>
  );
}
