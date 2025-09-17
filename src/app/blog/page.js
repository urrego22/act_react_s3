// app/blog/page.js
import Link from 'next/link';

const articulos = [
  { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
  { slug: "react-server-components", titulo: "React Server Components" },
  { slug: "app-router-guia", titulo: "Guía App Router" },
];

export default function BlogPage() {
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {articulos.map(a => (
          <li key={a.slug}>
            <Link href={`/blog/${a.slug}`}>{a.titulo}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
