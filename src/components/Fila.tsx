import type Post from "../modelos/Post";
export default function Fila({ post }: { post: Post }) {
  return (
    <tr>
      <td>{post.titulo}</td>
      <td><img width="100" src={post.urlImagen} alt={post.titulo} /></td>
    </tr>
  );
}