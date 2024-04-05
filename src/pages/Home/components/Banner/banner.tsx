import { CaretDown } from 'phosphor-react';
interface BannerProps {
  title: string[];
  subTitle: string;
  subTitle2: string;
}

export function Banner({ title, subTitle, subTitle2 }: BannerProps) {
  return (
    <>
      <section className="banner" id="home">
        <div className="mx-auto max-w-[72rem] w-full max-xl:w-[95%]">
          <div className="flex flex-col justify-center h-[90vh]">
            <h1 className="text-xl drop-shadow-md sm:text-xxl" id="item-banner">
              {title[0]}
              <strong className="text-yellow">{title[1]}</strong>
            </h1>
            <h2 className="text-xl sm:text-xl" id="item-banner">
              {subTitle}
            </h2>
            <h2 className="text-xl sm:text-xl" id="item-banner">
              {subTitle2}
            </h2>
          </div>
          <div className="flex justify-center h-[10vh]">
            <a href="#boxes">
              <CaretDown size={80} className="btnScroll" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
