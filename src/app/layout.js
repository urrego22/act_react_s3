// app/layout.js
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 20 }}>
        <header>
          <nav style={{ marginBottom: 16 }}>
            <Link href="/">Inicio</Link> {" | "}
            <Link href="/productos">Productos</Link> {" | "}
            <Link href="/blog">Blog</Link> {" | "}
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: 32, borderTop: '1px solid #eee', paddingTop: 12 }}>
          2025 © by JFVG
        </footer>
      </body>
    </html>
  );
}
