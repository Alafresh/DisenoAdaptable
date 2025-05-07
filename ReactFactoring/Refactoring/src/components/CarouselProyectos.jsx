import Burbugedon from '/images/Burbugedon.png';
import TLM from '/images/thelastmeow.png';
import Ocaso from '/images/ElOcaso.jpg';
import Bunny from '/images/Bunny.jpg';

const CarouselProyectos = () => {
  return (
    <section className='flex flex-col items-center justify-center py-10'>
      <h1 className='mb-10 text-6xl text-warning'>Imagenes</h1>
      <div className='carousel rounded-box w-xs sm:w-xl'>
        <div
          id='slide1'
          className='carousel-item relative w-full'
        >
          <img
            src={Ocaso}
            className='w-full '
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a
              href='#slide4'
              className='btn btn-circle'
            >
              ❮
            </a>
            <a
              href='#slide2'
              className='btn btn-circle'
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide2'
          className='carousel-item relative w-full'
        >
          <img
            src={Burbugedon}
            className='w-full'
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a
              href='#slide1'
              className='btn btn-circle'
            >
              ❮
            </a>
            <a
              href='#slide3'
              className='btn btn-circle'
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide3'
          className='carousel-item relative w-full'
        >
          <img
            src={TLM}
            className='w-full'
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a
              href='#slide2'
              className='btn btn-circle'
            >
              ❮
            </a>
            <a
              href='#slide4'
              className='btn btn-circle'
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide4'
          className='carousel-item relative w-full'
        >
          <img
            src={Bunny}
            className='w-full'
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a
              href='#slide3'
              className='btn btn-circle'
            >
              ❮
            </a>
            <a
              href='#slide1'
              className='btn btn-circle'
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselProyectos;
