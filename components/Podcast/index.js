export const Podcast = ({ episode }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/episode/${episode}`}
      width="100%"
      style={{ height: '180px', borderRadius: '12px' }}
      frameBorder="0"
      allow="encrypted-media"
    />
  );
};
