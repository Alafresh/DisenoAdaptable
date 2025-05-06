import Burbugedon from '/images/Burbugedon.png';
import TLM from '/images/thelastmeow.png';
import Ocaso from '/images/ElOcaso.jpg';
import Bunny from '/images/Bunny.jpg';
const proyectos = [
  { item: 'item1', title: 'Burbugedon', img: Burbugedon },
  { item: 'item2', title: 'The Last Meow', img: TLM },
  { item: 'item3', title: 'El Ocaso De La Tierra', img: Ocaso },
  { item: 'item4', title: 'Bunny Blood War', img: Bunny },
];

const Carousel = () => {
  return (
    <section className='flex flex-col items-center justify-center py-10 bg-amber-200'>
      <h1 className='text-6xl font-bold m-10'>Proyectos</h1>
      <div className='carousel rounded-box w-full max-w-7xl'>
        {proyectos.map((item) => (
          <div id={item.item} className='carousel-item w-full'>
            <div className='card bg-blue-100 w-full shadow-sm'>
              <figure className='px-10 pt-10'>
                <img
                  src={item.img}
                  alt='Shoes'
                  className='rounded-xl w-full h-full'
                />
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title text-5xl'>{item.title}</h2>
                <div className='card-actions'>
                  <button className='btn btn-primary'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center gap-2 py-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </section>
  );
};

export default Carousel;
