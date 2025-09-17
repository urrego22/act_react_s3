// app/blog/layout.js
import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div>
      <h2>Sección de Blog</h2>
      <nav style={{ marginBottom: 12 }}>
        <Link href="/blog">Artículos</Link> {" | "}
        <Link href="/blog">Categorías</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
