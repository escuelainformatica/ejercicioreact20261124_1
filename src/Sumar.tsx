interface SumarProps {
  a: number;
  b: number;
}

export default function Sumar({ a, b }: SumarProps) {
  return (
    <div>
      {a + b}
    </div>
  );
}