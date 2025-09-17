// app/productos/page.js
import Link from 'next/link';

const productos = [
  { id: "1", nombre: "Laptop" },
  { id: "2", nombre: "Smartphone" },
  { id: "3", nombre: "Tablet" },
];

export default function ProductosPage() {
  return (
    <section>
      <h1>Productos</h1>
      <p>Listado simple de productos:</p>
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>

      <p>Categorías:</p>
      <ul>
        <li><Link href="/productos/electronicos">Electrónicos</Link></li>
        <li><Link href="/productos/ropa">Ropa</Link></li>
      </ul>
    </section>
  );
}
