// app/docs/[[...slug]]/page.js
export default function DocsPage({ params }) {
  const slugArray = params.slug ?? []; // si no hay slug, queda [] (página principal)
  const title = slugArray.length ? slugArray.join(' > ') : 'Índice de documentación';

  return (
    <div>
      <h1>Documentación: {slugArray.length ? slugArray.join(' / ') : 'Inicio'}</h1>

      <p><strong>Breadcrumbs:</strong> Docs {slugArray.map((s, i) => (
        <span key={i}>{" > "}{s}</span>
      ))}</p>

      {slugArray.length === 0 ? (
        <div>
          <p>Bienvenido a la documentación. Ejemplos de rutas:</p>
          <ul>
            <li>/docs/guia/instalacion</li>
            <li>/docs/api/componentes</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>Contenido básico para la sección: {slugArray.join('/')}</p>
        </div>
      )}
    </div>
  );
}
