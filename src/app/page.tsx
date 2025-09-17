import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Página de Inicio</h1>
      <p className="mb-4">
        Bienvenido a la actividad de enrutamiento con Next.js (App Router).
      </p>

      <nav className="flex flex-col gap-2">
        <Link href="/productos" className="text-blue-600 hover:underline">
          Ir a Productos
        </Link>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Ir al Blog
        </Link>
        <Link href="/contacto" className="text-blue-600 hover:underline">
          Contacto
        </Link>
        <Link
          href="/docs/guia/instalacion"
          className="text-blue-600 hover:underline"
        >
        </Link>
      </nav>
    </main>
  );
}

