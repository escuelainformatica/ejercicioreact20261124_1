import Hijo from "./Hijo";

export default function Padre() {

  function enviarHijo() {
    alert('Función del Hijo');
  }
  function enviarPadre() {
    alert('Función del Padre');
  }


  return (
    <div  style={{backgroundColor: 'orange'}}>
      Hola, soy el componente Padre
      <Hijo mensaje="Hola desde el Padre" function={enviarHijo} />

      <button onClick={enviarPadre}>
        Clic aquí
      </button>

    </div>
  );
}