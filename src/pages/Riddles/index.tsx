import { Riddle } from './components/Riddle/riddle';

export function RiddlesPage() {
  return (
    <div className="mt-28 flex justify-center">
      <main className="h-[calc(100vh-300px)] bg-black">
        <Riddle
          title={['Box 1 | Riddle 1', 'Categoria: Personalidades']}
          hint={[
            'Um gênio que viveu há muitos séculos, mas suas obras ainda são celebradas.',
            'Seu legado influenciou o teatro, a literatura e a cultura popular por séculos.',
          ]}
          image="https://conteudo.imguol.com.br/c/entretenimento/ab/2019/12/09/batman-1575900915630_v2_3x4.jpg"
        />
      </main>
    </div>
  );
}
