import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <button className='btn btn-outline btn-warning'>
          <Link to='/'>Portafolio</Link>
        </button>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <button className='btn btn-outline mx-2'>
              <a>Sobre Mi</a>
            </button>
          </li>
          <li>
            <button className='btn btn-outline mx-2'>
              <a>Proyectos</a>
            </button>
          </li>
          <li>
            <button className='btn btn-outline mx-2'>
              <a>Contacto</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
