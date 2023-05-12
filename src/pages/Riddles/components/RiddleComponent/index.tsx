import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface RiddleProps {
  title: string[];
  hint: string[];
  image: string;
  response: string;
  onNextRiddle: () => void;
}

export function RiddleComponent({
  title,
  hint,
  image,
  response,
  onNextRiddle,
}: RiddleProps) {
  const [userResponse, setUserResponse] = useState('');
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleResponseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userResponse.toLowerCase() === response.toLowerCase()) {
      setShowCorrectMessage(true);

      setTimeout(() => {
        onNextRiddle();
        setShowCorrectMessage(false);
        setUserResponse('');
      }, 2000);
    } else {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000); 
    }
  };

  const correctMessageAnimation = useSpring({
    opacity: showCorrectMessage ? 1 : 0,
    color: 'green',
    transform: showCorrectMessage ? 'scale(1)' : 'scale(0.5)',
  });

  const errorMessageAnimation = useSpring({
    opacity: showErrorMessage ? 1 : 0,
    color: 'red',
    transform: showErrorMessage ? 'scale(1)' : 'scale(0.5)',
  });

  return (
    <div className="animate-content">
      <h1 className="text-center font-bold bg-zinc-950 p-1 rounded-r-sm w-screen">
        <span className="text-yellow-100">{title[0]}</span> {title[1]}
      </h1>
      <div className="flex justify-center flex-col items-center gap-4">
        <p className="mt-6 text-center px-4">{hint[0]}</p>
        <img src={image} alt="" className="max-h-72 rounded-md max-w-[90%]" />
        <p className="text-center px-4">{hint[1]}</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <input
            type="text"
            value={userResponse}
            onChange={handleResponseChange}
            required
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
        {showCorrectMessage && (
          <animated.div style={correctMessageAnimation}>
            Resposta correta!
          </animated.div>
        )}
        {showErrorMessage && (
          <animated.div style={errorMessageAnimation}>
            Resposta incorreta. Tente novamente!
          </animated.div>
        )}
      </div>
      <div className="p-4 flex items-center justify-center">
        <div className="temperatureBar"></div>
      </div>
    </div>
  );
}
