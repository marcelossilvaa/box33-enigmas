import { riddles } from '../../@helpers/riddles';
import { Riddle } from '../../pages/Riddles/components/Riddle';

export function RiddlesPage() {
  return (
    <div className="mt-28 flex justify-center">
      <main className="h-[calc(100vh-255px)] bg-black min-w-full flex overflow-hidden">
        {riddles.map(riddle => {
          return (
            <Riddle
              key={riddle.id}
              title={[riddle.title[0], riddle.title[1]]}
              hint={[riddle.hint[0], riddle.hint[1]]}
              image={riddle.image}
            />
          );
        })}
      </main>
    </div>
  );
}
