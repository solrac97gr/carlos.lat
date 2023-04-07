import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { SocialShareContainer } from "./index.style";

const iconSize = 40;

export const SocialShareButtons = ({ post }) => {
  const [shareUrl] = useState("https://carlos.lat/blog/" + post.slug);

  const formatHashTags = (tags) => {
    const tagsArray = tags.split(",");
    const hashtagArrays = tagsArray.map((tag) => {
      return "#" + tag.replace(" ", "");
    });
    return hashtagArrays.join(" ");
  };

  return (
    <SocialShareContainer>
      <FacebookShareButton
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <TelegramShareButton
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TelegramIcon size={iconSize} />
      </TelegramShareButton>
      <WhatsappShareButton
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <WhatsappIcon size={iconSize} />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <LinkedinIcon size={iconSize} />
      </LinkedinShareButton>
    </SocialShareContainer>
  );
};
