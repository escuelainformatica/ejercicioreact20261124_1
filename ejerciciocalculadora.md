# calculadora

Vamos a crear una calculadora simple en React que sume dos números.

* Crear el modelo:

```tsx
interface CalculadoraProps {
  a: number;
  b: number;
}
```

* Crear el componente:

```tsx
export default function Calculadora({ a, b }: CalculadoraProps) {
  return (
    <div>
      {a + b}
    </div>
  );
}
``` 
