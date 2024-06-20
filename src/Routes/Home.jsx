import { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Context/Context';
import '../index.css';

// Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, data } = useContext(ContextGlobal);

  return (
    <main className={theme}>
      <h1>Home</h1>
        {/* Aqui deberias renderizar las cards */}
      <div className='card-grid'>
        {data.map(user => (
          <Card key={user.id} id={user.id} name={user.name} username={user.username} />
        ))}
      </div>
    </main>
  )
}

export default Home;