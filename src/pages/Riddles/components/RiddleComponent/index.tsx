import { ArrowFatDown, Crosshair } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

interface RiddleProps {
  title: string[];
  hint: string[];
  image: string;
  response: string;
  isLastRiddle?: boolean;
  onNextRiddle: () => void;
}

export function RiddleComponent({
  title,
  hint,
  image,
  response,
  onNextRiddle,
  isLastRiddle,
}: RiddleProps) {
  const [userResponse, setUserResponse] = useState('');
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [ballPosition, setBallPosition] = useState(0);

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
    const newBallPosition = calculateBallPosition(userResponse, response);
    setBallPosition(newBallPosition);
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

  function calculateBallPosition(str1: string, str2: string): number {
    const maxLength = Math.max(str1.length, str2.length);
    const difference = calculateStringDifference(str1, str2);
    const percentage = (difference / maxLength) * 100;
    let ballPosition = Math.round(Math.min(Math.max(percentage)));
    if (ballPosition > 400) {
      ballPosition = 0;
    } else if (ballPosition < 400 && ballPosition > 350) {
      ballPosition = 20;
    } else if (ballPosition < 350 && ballPosition > 300) {
      ballPosition = 40;
    } else if (ballPosition < 300 && ballPosition > 250) {
      ballPosition = 60;
    } else if (ballPosition < 250 && ballPosition > 200) {
      ballPosition = 80;
    } else if (ballPosition < 200 && ballPosition > 100) {
      ballPosition = 90;
    }
    console.log(ballPosition);
    return ballPosition;
  }

  function calculateStringDifference(str1: string, str2: string): number {
    function removerAcentosEspacos(str: string): string {
      return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s/g, '');
    }

    const cleanStr1 = removerAcentosEspacos(str1).replace(/[^\w\s]/gi, '');
    const cleanStr2 = removerAcentosEspacos(str2).replace(/[^\w\s]/gi, '');

    const distance = levenshteinDistance(cleanStr1, cleanStr2);
    const maxLength = Math.max(cleanStr1.length, cleanStr2.length);
    const differencePercent = (distance / maxLength) * 100;

    // Limita o valor de retorno entre 0 e 100
    return Math.min(Math.max(differencePercent, 0), 100);
  }

  function levenshteinDistance(str1: string, str2: string): number {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] =
            Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) +
            1;
        }
      }
    }
    return matrix[str2.length][str1.length];
  }

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
          {isLastRiddle ? (
            <Link to={'/'}>
              <button className="py-1 px-10 w-60 h-10 bg-yellow-400 text-black-500 rounded-md font-bold hover:bg-yellow-500 mb-3">
                Voltar a Homepage
              </button>
            </Link>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <input
                type="text"
                value={userResponse}
                onChange={handleResponseChange}
                required
                className="w-72 py-3 px-3 text-white rounded-md border-none bg-black-100 hover:border-b-2 hover:border-yellow-100 font-bold"
                placeholder="Digite sua resposta"
                id="inputRiddle"
              />
              <button
                className="py-1 px-10 w-52 h-10 bg-yellow-400 text-black-500 rounded-md font-bold hover:bg-yellow-500"
                type="submit"
              >
                Responder
              </button>
              <div className="py-4 flex items-center justify-center">
                <div className="temperatureBar">
                  <div id="ball" style={{ left: `${ballPosition}%` }}>
                    <Crosshair size={25} color="#f7f7f7" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
        {showCorrectMessage && (
          <animated.div className="font-bold" style={correctMessageAnimation}>
            Resposta correta!
          </animated.div>
        )}
        {showErrorMessage && (
          <animated.div className="font-bold" style={errorMessageAnimation}>
            Resposta incorreta. Tente novamente!
          </animated.div>
        )}
      </div>
    </div>
  );
}
