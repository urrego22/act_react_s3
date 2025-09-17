// app/blog/[slug]/page.js
import Link from 'next/link';

const contenidos = {
  "introduccion-nextjs": "Contenido introductorio sobre Next.js.",
  "react-server-components": "Explicación sobre React Server Components.",
  "app-router-guia": "Guía práctica del App Router."
};

export default function ArticuloPage({ params }) {
  const { slug } = params;
  return (
    <div>
      <h1>Artículo: {slug}</h1>
      <p>{contenidos[slug] ?? "Contenido del artículo."}</p>
      <p><Link href="/blog">Volver al blog</Link></p>
    </div>
  );
}
