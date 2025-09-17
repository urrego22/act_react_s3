// app/productos/layout.js
import Link from 'next/link';

export default function ProductosLayout({ children }) {
  return (
    <div>
      <h2>Sección de Productos</h2>
      <nav style={{ marginBottom: 12 }}>
        <Link href="/productos">Todos</Link> {" | "}
        <Link href="/productos/electronicos">Electrónicos</Link> {" | "}
        <Link href="/productos/ropa">Ropa</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
