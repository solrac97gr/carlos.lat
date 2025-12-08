export const EditPost = ({ path }) => {
  return (
    <a
      href={`https://github.com/solrac97gr/carlos.lat/edit/main/data/${path}.mdx`}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#3b82f6", textDecoration: "underline" }}
    >
      ¿Ves algún error? Corregir artículo
    </a>
  );
};
