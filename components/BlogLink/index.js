export const BlogLink = ({ url, content }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#63f3ab", textDecoration: "underline" }}
    >
      {content?content:url}
    </a>
  );
};
