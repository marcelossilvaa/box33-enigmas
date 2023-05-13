import { NavLink } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className="h-[65vh] flex flex-row justify-center">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1541/1541739.png"
          alt=""
          className="h-[30vh]"
        />
      </div>
      <div className="flex justify-center flex-col h-full gap-2">
        <h1 className="text-4xl font-semibold text-yellow-500">Erro 404</h1>
        <h2 className="text-xl">Página não encontrada.</h2>
        <p>
          Tem certeza que era isso que você estava procurando?
          <br />
          Aguarde uns instantes e recarregue a página, ou volte para a{' '}
          <a href="" className="text-yellow-500 font-semibold">
            <NavLink to="/">página inicial.</NavLink>
          </a>
        </p>
      </div>
    </div>
  );
}
