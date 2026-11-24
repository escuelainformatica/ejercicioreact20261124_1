import { useState } from "react";
export default function Hook() {
  // esto es un hook (estado reactivo)
  const [count, setCount] = useState(0); // el valor actual, como modificar, y un valor inicial

  return (
    <div>
      Hola, soy el componente Hook
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}