// app/productos/electronicos/page.js
export default function ElectronicosPage() {
  const items = ["Televisor", "Auriculares", "Cámara"];
  return (
    <div>
      <h1>Productos &gt; Electrónicos</h1>
      <p>{items.length} productos encontrados</p>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}
