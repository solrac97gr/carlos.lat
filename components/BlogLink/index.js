import {logEvent} from "../../lib/analytics";

export const BlogLink = ({url, content}) => {
    return (
        <a
            onClick={() => {
              logEvent("Button", "Click_Blog", content ? content : url, url);
              }
            }
            href={url}
            target="_blank"
            rel="noreferrer"
            style={{color: "#3b82f6", textDecoration: "underline"}}
        >
            {content ? content : url}
        </a>
    );
};
