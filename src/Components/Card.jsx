import { Link } from "react-router-dom"

const Card = ({ id, name, username, children }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = {id, name, username };
    localStorage.setItem("favs", JSON.stringify([...favs, newFavs]));
    alert("Dentist added successfully")
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/details/" + id}>
      <img src="/images/doctor.jpg" alt="doctor" />
      <h5>{name}</h5>
      <p className="username">{username}</p>
      </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
