import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Actividad enrutamiento",
  description: "Práctica Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* 🔹 Barra de navegación superior */}
        <header className="bg-gray-900 text-white p-4">
          <nav className="container mx-auto flex gap-6">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/productos" className="hover:underline">
              Productos
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
          </nav>
        </header>

        {/* 🔹 Contenido dinámico de cada página */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
