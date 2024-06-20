import { useContext } from 'react'
import { ContextGlobal } from '../Context/Context'
import '../index.css';
import { routes } from './utils/routes';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, setTheme } = useContext(ContextGlobal);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(`Cambio de tema a: ${theme === 'light' ? 'dark' : 'light'}`);
  };

  return (
    <nav className={theme}>
      <h2><span>D</span>H Odonto</h2>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='navLinks'>
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} className="theme-button">
        <span className="theme-icon"></span>
      </button>
      </div>
      </nav>
  )
}

export default Navbar