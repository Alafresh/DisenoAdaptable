import Conejos from '/images/conejoides.jpg';

const SobreProyecto = () => {
  return (
    <section
      id='about'
      className='pt-20 '
    >
      <h1 className='text-8xl flex items-center justify-center text-info'>
        Bunny War Blood
      </h1>
      <div className='divider divider-info'></div>
      <div className='hero '>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src={Conejos}
            className='rounded-lg shadow-2xl w-xs sm:w-xl'
          />
          <div>
            <h1 className='text-6xl font-bold mx-10 my-10 text-warning'>
              Sobre
            </h1>
            <p className='mx-10'>
              Mover la camara: Usa las teclas W, A, S, D. Rotar la camara: Usa
              las teclas Q Y E Zoom: Usa la rueda del raton para acercarte y
              alejarte Juego por turnos: Controla a tus conejos activando
              contenedores y enfretandote a los humanos
            </p>
          </div>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-content flex-col mx-10'>
          <h1 className='text-6xl my-10 font-bold text-warning'>
            Informacion Proyecto
          </h1>
          <p className='text-2xl'>
            Rol: Investigacion y programacion de escena <br /> Equipo: 5 <br />
            Motor: Unity C#
          </p>
        </div>
      </div>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row'>
          <div>
            <h1 className='text-6xl font-bold mx-10 my-2 text-warning'>
              Cartografia
            </h1>
            <p className='py-6 text-xl mx-6.5'>
              Ingeniero en diseño de entretenimiento digital, programador y
              diseñador de experiencias de usuario y videojuegos. Experiencia en
              los lenguajes C#, python y Javascript. Y experiencia en los
              motores graficos de Unity y Unreal.
            </p>
          </div>
          <img
            src={Conejos}
            className=' rounded-lg shadow-2xl w-xs sm:w-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default SobreProyecto;
