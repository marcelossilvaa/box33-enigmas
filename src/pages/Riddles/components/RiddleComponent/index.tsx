import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const RiddleFormSchema = z.object({
  task: z.string(),
});

type RiddleFormInput = z.infer<typeof RiddleFormSchema>;

interface RiddleProps {
  title: string[];
  hint: string[];
  image: string;
  onChangeSlider: (task: string) => void;
}

export function RiddleComponent({
  title,
  hint,
  image,
  onChangeSlider,
}: RiddleProps) {
  const { register, handleSubmit } = useForm<RiddleFormInput>({
    resolver: zodResolver(RiddleFormSchema),
  });

  function handleSubmitRiddle(data: RiddleFormInput) {
    console.log(data.task);
    onChangeSlider(data.task);
  }

  return (
    <div>
      <h1 className="text-center font-bold bg-zinc-950 p-1 rounded-r-sm w-screen">
        <span className="text-yellow-100">{title[0]}</span> {title[1]}
      </h1>
      <div className="flex justify-center flex-col items-center gap-4">
        <p className="mt-6 text-center px-4">{hint[0]}</p>
        <img src={image} alt="" className="max-h-72 rounded-md max-w-[90%]" />
        <p className="text-center px-4">{hint[1]}</p>
        <form
          onSubmit={handleSubmit(handleSubmitRiddle)}
          className="flex flex-col gap-3 items-center"
        >
          <input
            {...register('task')}
            required
            type="text"
            className="w-72 mt-4 py-3 px-3 text-white rounded-md border-none bg-black-100 hover:border-b-2 hover:border-yellow-100 font-bold"
            placeholder="Digite sua resposta"
            id="inputRiddle"
          />
          <button
            className="py-1 px-10 w-52 h-10 bg-yellow-400 text-black-500 rounded-md font-bold hover:bg-yellow-500"
            type="submit"
          >
            Responder
          </button>
        </form>
      </div>
    </div>
  );
}
