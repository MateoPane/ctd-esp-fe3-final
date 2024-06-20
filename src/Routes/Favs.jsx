import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {theme} = useContext(ContextGlobal)
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsStorage = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favsStorage);
  }, []);

  return (
    <main className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length > 0 ? (
          favs.map((user) => (
            <Card key={user.id} name={user.name} username={user.username} id={user.id} />
          ))
        ) : (
          <p>No tienes ningun doctor marcado en favoritos</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
