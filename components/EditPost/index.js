export const EditPost = ({ path }) => {
  return (
    <a
      href={`https://github.com/solrac97gr/carlos.lat/edit/main/data/${path}.mdx`}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#63f3ab", textDecoration: "underline" }}
    >
      ¿Ves algún error? Corregír artículo
    </a>
  );
};
