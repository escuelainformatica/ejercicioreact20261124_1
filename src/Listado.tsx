import {useState} from "react";
export default function Listado() {
  const [elementos, setElementos] = useState(["Elemento 1", "Elemento 2", "Elemento 3"]);
  
  const elementosListos = elementos.map((elemento, index) => (
    <li key={index}>{elemento}</li>
  ));

  function agregarElemento() {
    setElementos([...elementos, `Elemento ${elementos.length + 1}`]);
  }

  return (
    <div>
      Listado de elementos
      <ul>
        {elementosListos}
      </ul>
      <button onClick={agregarElemento}>Agregar elemento</button>
    </div>
  );
}