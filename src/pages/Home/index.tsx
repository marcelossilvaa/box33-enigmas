import { Boxes } from './boxes';
import { CaretDown } from 'phosphor-react';

export function HomePage() {
  function eventScroll() {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <section className="banner">
        <div className="mx-auto max-w-[72rem] w-full max-xl:w-[90%]">
          <div className="flex flex-col justify-center h-[90vh]">
            <h1 className="text-xxl drop-shadow-md">
              Bem vindo ao <strong className="text-yellow">BOX33</strong>
            </h1>
            <h4 className="text-xl">A caixa de enigmas...</h4>
            <h5 className="text-2xl">Primeiro box disponível</h5>
          </div>
          <div className="flex justify-center h-[10vh]">
            <button onClick={eventScroll}>
              <CaretDown size={80} className="btnScroll" />
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[72rem] w-full max-xl:w-[90%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
        adipisci neque perferendis consequatur fugit consectetur, assumenda iure
        dignissimos ipsum tenetur eos ab nesciunt aspernatur minima accusantium
        magnam maxime repellendus. Unde totam corporis quod temporibus?
        Distinctio et nam laboriosam totam dolores, quibusdam eos eum
        consectetur, eaque, ullam nisi sed minima assumenda veritatis expedita
        praesentium? Voluptates exercitationem provident corrupti voluptatum
        distinctio dolore sunt laudantium quasi, facere nam cupiditate ratione
        maiores maxime corporis aliquam numquam voluptas inventore officiis
        ipsum dignissimos ipsa vitae recusandae commodi doloremque. Harum
        voluptatem iusto aliquid ullam est at dolore repellat a provident
        recusandae, odit in. Totam, <br /> dolore eos. Atque rem, expedita dolor
        velit eum quis eius quod sint? Architecto praesentium eum eligendi quae
        quod eaque inventore eius, quia excepturi amet repellendus, aut, alias
        voluptates ratione aliquid neque <br /> ea culpa. Voluptatum ratione
        impedit non doloremque. In, consectetur laudantium veniam, ipsam quasi
        assumenda omnis aperiam dicta, ut ipsum distinctio <br /> <br /> <br />{' '}
        voluptatem accusamus fuga eligendi dignissimos. Ullam tempora delectus
        eum dolor labore libero neque hic quas, nostrum optio, dolorum sint vel
        repellendus facere! Iusto doloribus officiis laboriosam fuga deserunt
        perferendis odio culpa, optio similique, vero obcaecati, vel magni
        molestiae magnam dignissimos quo voluptas exercitationem voluptatibus
        minima. Quod odit facilis reiciendis. Quae, quis!
      </section>
      <Boxes></Boxes>
    </>
  );
}
