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
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { SocialShareContainer } from "./index.style";
import { logEvent } from "../../lib/analytics";

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
        onClick={() => {
          logEvent("Button", "Share on Facebook");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <TwitterShareButton
        onClick={() => {
          logEvent("Button", "Share on Twitter");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <TelegramShareButton
        onClick={() => {
          logEvent("Button", "Share on Telegram");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>
      <WhatsappShareButton
        onClick={() => {
          logEvent("Button", "Share on Whatsapp");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        onClick={() => {
          logEvent("Button", "Share on Linkedin");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
      <EmailShareButton
        onClick={() => {
          logEvent("Button", "Share on Email");
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <EmailIcon size={iconSize} round />
      </EmailShareButton>
    </SocialShareContainer>
  );
};
