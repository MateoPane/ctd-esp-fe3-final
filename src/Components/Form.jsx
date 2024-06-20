import { useState } from "react";
import Contact from "../Routes/Contact";
import ErrorMessage from "./ErrorMessage";
import Enviado from "./Enviado";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [doctor, setDoctor] = useState({
    nombreCompleto: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      if(doctor.nombreCompleto.trim().length > 5 && regex.test(doctor.email)){
          setShow(true);
          setError(false);
          console.log("Form Subido: ", doctor);
      }else{
          setError(true);
          setShow(false);
      }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={doctor.nombreCompleto} onChange={(e) => setDoctor({... doctor, nombreCompleto: e.target.value})} placeholder="Full name"/>
        <input type="text" value={doctor.email} onChange={(e) => setDoctor({...doctor, email: e.target.value})} placeholder="Email"/>
        <button>Send</button>
      </form>
      {show && <Enviado doctor={doctor}/>}
      {error && <ErrorMessage/>}
    </>
  );
};

export default Form;
