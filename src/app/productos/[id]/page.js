// app/productos/[id]/page.js
import Link from 'next/link';

const detalles = {
  "1": { nombre: "Laptop", descripcion: "Laptop potente para desarrollo." },
  "2": { nombre: "Smartphone", descripcion: "Smartphone con gran cámara." },
  "3": { nombre: "Tablet", descripcion: "Tablet ligera para multimedia." },
};

export default function ProductoPage({ params }) {
  const { id } = params;
  const producto = detalles[id];

  return (
    <div>
      <h1>Producto: {id} {producto ? `- ${producto.nombre}` : ''}</h1>
      <p>{producto ? producto.descripcion : "Descripción genérica del producto."}</p>
      <p><Link href="/productos">Volver a la lista de productos</Link></p>
    </div>
  );
}
