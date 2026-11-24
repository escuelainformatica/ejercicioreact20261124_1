import {useState} from "react";
import type Post from "./modelos/Post";
import { postIniciales } from "./servicios/PostSrv";
import Fila from "./components/Fila";

export default function Tabla() {
  const [posts,setPosts] = useState<Post[]>(postIniciales());

  const filas = posts.map((post, index) => <Fila key={index} post={post} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {filas}
      </tbody>
    </table>
  );
}