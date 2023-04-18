import { WhatsappLogo, InstagramLogo, ArrowUp } from 'phosphor-react';

export function Sobre() {
  return (
    <div className="mx-auto max-w-[72rem] w-full max-xl:w-[90%]">
      <h1 className="flex justify-center text-xl pt-8 ">Sobre</h1>

      <div className="flex justify-center text-justify flex-col gap-4  col-span-3">
        <p>
          Bem-vindos ao <strong className="text-yellow">BOX33</strong>, o site
          de enigmas que há mais de uma década combina diversão e conhecimento!
          Anteriormente conhecidos como Enigmáticos e Só Enigmas, estamos de
          volta com uma nova plataforma e apresentação, mas a mesma missão de
          proporcionar um passatempo significativo para nossos usuários.
        </p>
        <p>
          Desde 2008, estamos nos divertindo e criando enigmas desafiadores para
          aqueles que buscam um desafio mental e uma dose de entretenimento
          inteligente. Nosso objetivo é oferecer uma experiência de jogo única e
          inesquecível, sempre com um toque de mistério.
        </p>
        <p>
          Nossos enigmas são projetados para desafiar sua mente e ajudá-lo a
          desenvolver suas habilidades de pensamento crítico.
        </p>
        <p>
          Estamos animados em compartilhar nossa paixão por enigmas com vocês, e
          esperamos que gostem e se divirtam com o Box33. Então, venha se juntar
          a nós e comece a decifrar nossos mistérios e enigmas!
        </p>
      </div>
      <div className="flex justify-center items-center flex-col py-6">
        <h1 className="text-lg">Faça parte da nossa comunidade</h1>
        <div className="flex flex-col gap-3 py-4">
          <a href="" className="btn-sobre">
            <WhatsappLogo size={35} /> Grupo WhatsApp
          </a>
          <a href="" className="btn-sobre">
            <InstagramLogo size={35} /> Comunidade Instagram
          </a>
        </div>
      </div>
      <div className="flex justify-end">
        <ArrowUp size={36} />
      </div>
    </div>
  );
}
