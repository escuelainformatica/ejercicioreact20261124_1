import { useState } from "react";
import { calcularSuma } from "./CalculadoraSrv";
interface CalculadoraModelo {
  a: number;
  b: number;
}

export default function Calculadora() {
  const [valores, setValores] = useState<CalculadoraModelo>({ a: 0, b: 0 });
  function manejarCambios(e: React.ChangeEvent<HTMLInputElement>) {
    setValores({ ...valores, a: Number(e.target.value) });
  }


  return (
    <>
      Número #1:<input type="number" value={valores.a} onChange={manejarCambios} /><br/>
      Número #2:<input type="number" value={valores.b} onChange={manejarCambios} /><br/>
      <div>
        Resultado: {calcularSuma(valores.a, valores.b)}
      </div>
    </>
  );
}