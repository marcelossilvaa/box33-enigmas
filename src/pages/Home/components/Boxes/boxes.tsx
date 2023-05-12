import { motion } from 'framer-motion';
import img2 from '../../../../assets/homepage/boxes/img2.jpg';
import img3 from '../../../../assets/homepage/boxes/img3.jpg';
import img4 from '../../../../assets/homepage/boxes/img4.jpg';
import literatura from '../../../../assets/homepage/boxes/literatura.jpg';
import { useState, useEffect, useRef } from 'react';
import { Play } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

const boxes = [
  {
    image: literatura,
    category: 'Nomes da Literatura',
    description: '7 riddles',
    dataBox: 'box1',
  },
  {
    image: img2,
    category: 'História',
    description: '7 riddles',
    dataBox: 'box2',
  },
  {
    image: img3,
    category: 'Tecnologia',
    description: '7 riddles',
    dataBox: 'box3',
  },
  {
    image: img4,
    category: 'Universo',
    description: '7 riddles',
    dataBox: 'box4',
  },
];

export function Boxes() {
  const carousel = useRef(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      //@ts-ignore
      const scrollWidth = carousel.current.scrollWidth;
      //@ts-ignore
      const offsetWidth = carousel.current.offsetWidth;
      // console.log(scrollWidth, offsetWidth);
      setWidth(scrollWidth - offsetWidth);
    }
  }, [carousel]);

  return (
    <div id="boxes">
      <h1 className="flex justify-center text-xl pt-8">Boxes</h1>
      <div className="mx-auto max-w-[72rem] w-full max-xl:w-[95%] flex items-center justify-center">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {boxes.map((item, index) => (
              <motion.div
                className="min-h-[200px] max-h-[500px] min-w-[350px] p-4"
                key={index}
                id="cardsBoxes"
              >
                <img
                  src={item.image}
                  alt="Texto alt"
                  className="w-full h-full rounded-xl pointer-events-none"
                  id="img"
                />
                <div className="flex flex-col justify-start relative bottom-[150px] pl-4">
                  <h1 className="text-2xl" id="item">
                    {item.category}
                  </h1>
                  <h2 className="text-lg" id="item">
                    {item.description}
                  </h2>

                  <NavLink
                    to={{
                      pathname: './riddlespage',
                      search: item.dataBox,
                    }}
                  >
                    <button
                      className="flex justify-center items-center text-base border-[1px] rounded-md w-36 p-1 gap-1 bg-transparent "
                      id="button"
                    >
                      START <Play size={24} />
                    </button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
