import React, { useState } from 'react';
import { fetchRiddles } from './riddlesService'; // Importe a função fetchRiddles do serviço de enigmas
import { RiddleComponent } from '../Riddles/components/RiddleComponent';
import { Riddle } from './types';

export function IAMode() {
  const [riddles, setRiddles] = useState<Riddle[]>([]); // Remova o tipo de estado para evitar erros de tipo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleGenerateRiddles = async () => {
    try {
      setLoading(true);
      const newRiddles = await fetchRiddles(category); // Chame a função fetchRiddles para obter os enigmas do back-end
      if (newRiddles) {
        setRiddles(newRiddles); // Atualize o estado riddles com os enigmas obtidos do back-end
      } else {
        throw new Error('Erro ao obter os enigmas.');
      }
      setLoading(false);
    } catch (error) {
      setError('Erro ao obter os enigmas.');
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Digite a categoria desejada"
      />
      <button onClick={handleGenerateRiddles}>
        Gerar Enigmas
      </button>

      {loading && <p>Carregando enigmas...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && riddles.length > 0 && (
        <div>
          {/* Renderize os enigmas aqui */}
          {riddles.map((riddle, index) => (
            <RiddleComponent
              key={index}
              title={riddle.title}
              hint={riddle.hints}
              image={riddle.image}
              response={riddle.response}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default IAMode;
