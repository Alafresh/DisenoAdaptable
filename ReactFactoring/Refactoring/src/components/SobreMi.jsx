import Avatar from '/images/juanito.jpg';
import Conejos from '/images/conejoides.jpg';

const SobreMi = () => {
  return (
    <section id='about' className='bg-blue-200'>
      <div className='hero '>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='avatar'>
            <div className='w-46 rounded-full m-10'>
              <img src={Avatar} />
            </div>
          </div>
          <div>
            <h1 className='text-6xl font-bold mx-10'>Juan Guillermo Caicedo</h1>
          </div>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row'>
          <p className='py-6 text-xl mx-6.5'>
            Ingeniero en diseño de entretenimiento digital, programador y
            diseñador de experiencias de usuario y videojuegos. Experiencia en
            los lenguajes C#, python y Javascript. Y experiencia en los motores
            graficos de Unity y Unreal.
          </p>
          <img src={Conejos} className=' rounded-lg shadow-2xl sm:w-120' />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
