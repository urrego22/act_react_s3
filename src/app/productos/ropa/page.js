// app/productos/ropa/page.js
export default function RopaPage() {
  const items = ["Camiseta", "Chaqueta", "Pantalón"];
  return (
    <div>
      <h1>Productos &gt; Ropa</h1>
      <p>{items.length} productos encontrados</p>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}
