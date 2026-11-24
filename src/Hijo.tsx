interface HijoProps {
  mensaje: string; // padre -> hijo
  function: () => void; // hijo -> padre (esta funciona esta escrita en el padre)
}


export default function Hijo(props: HijoProps) {
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      Hola, soy el componente Hijo
      <div>{props.mensaje}</div>
      <button onClick={props.function}>Clic aquí</button>
    </div>
  );
}