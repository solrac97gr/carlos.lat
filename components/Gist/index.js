import Script from "next/script";

export const Gist = ({ url }) => {
  return <Script async src={url}></Script>;
};
