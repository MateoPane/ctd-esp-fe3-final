import "../index.css"

const Enviado = ({ doctor }) => {
  return (
    <>
      <p className="env">Gracias {doctor.nombreCompleto}, te contactaremos cuanto antes vía email.</p>
    </>
  );
};

export default Enviado;