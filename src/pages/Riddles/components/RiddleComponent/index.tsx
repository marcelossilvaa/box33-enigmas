import { ArrowFatDown, Crosshair } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

interface RiddleProps {
  title: string[];
  hint: string[];
  image: string | undefined;
  response: string;
  isLastRiddle?: boolean;
  onNextRiddle?: () => void;
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
  const [ballPosition, setBallPosition] = useState(0);

  const handleResponseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userResponse.toLowerCase() === response.toLowerCase()) {
      setShowCorrectMessage(true);
      setTimeout(() => {
        if (onNextRiddle) {
          onNextRiddle();
        }
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

  function calculateStringSimilarity(str1: string, str2: string): number {
    function normalizeString(str: string): string {
      return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/gi, '')
        .toLowerCase();
    }

    const normalized1 = normalizeString(str1);
    const normalized2 = normalizeString(str2);

    if (normalized1 === normalized2) return 1; // Resposta exata
    if (normalized1.length === 0 || normalized2.length === 0) return 0;

    // Divide as strings em palavras
    const words1 = normalized1.split(/\s+/);
    const words2 = normalized2.split(/\s+/);

    // Calcula a similaridade para cada palavra da resposta do usuário
    const wordSimilarities = words1.map(word1 => {
      // Para cada palavra do usuário, encontra a maior similaridade com qualquer palavra da resposta correta
      const wordScores = words2.map(word2 => {
        if (word1 === word2) return 1; // Palavra exatamente igual
        
        // Calcula similaridade por substring
        const isSubstring = word2.includes(word1) || word1.includes(word2);
        if (isSubstring) {
          const lengthRatio = Math.min(word1.length, word2.length) / Math.max(word1.length, word2.length);
          return 0.8 * lengthRatio; // Peso alto para substrings
        }

        // Calcula distância de Levenshtein para palavras similares
        const distance = levenshteinDistance(word1, word2);
        const maxLength = Math.max(word1.length, word2.length);
        const similarity = 1 - distance / maxLength;

        // Retorna similaridade apenas se for significativa
        return similarity > 0.5 ? similarity : 0;
      });

      return Math.max(...wordScores);
    });

    // Calcula a média ponderada das similaridades
    const totalWords = words2.length; // número de palavras na resposta correta
    const matchedWords = wordSimilarities.filter(score => score > 0).length;
    const averageSimilarity = wordSimilarities.reduce((sum, score) => sum + score, 0) / totalWords;
    
    // Penaliza por diferença no número de palavras
    const lengthPenalty = Math.min(matchedWords / totalWords, 1);
    
    // Combina os fatores
    const finalSimilarity = averageSimilarity * lengthPenalty;

    return Math.max(0, Math.min(1, finalSimilarity));
  }

  function calculateBallPosition(str1: string, str2: string): number {
    const similarity = calculateStringSimilarity(str1, str2);
    return Math.round(similarity * 100);
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
