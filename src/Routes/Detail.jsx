import { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Context/Context'
import axios from 'axios';
import {useParams} from "react-router-dom"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { theme } = useContext(ContextGlobal);
  const params = useParams();
  const [user, setUser] = useState(null)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => setUser(res.data))
    .catch(error => console.log("Error", error));
  }, [params.id]);
  
  return (
    <div className={theme}>
      {user ? (
        <>
        <h1>Detail Dentist {params.id}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        </table>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail