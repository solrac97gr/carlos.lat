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
          logEvent("button", "share_on_facebook", post.title);
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <TwitterShareButton
        onClick={() => {
          logEvent("button", "share_on_twitter", post.title);
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <TelegramShareButton
        onClick={() => {
          logEvent("button", "share_on_telegram", post.title);
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <TelegramIcon size={iconSize} round />
      </TelegramShareButton>
      <WhatsappShareButton
        onClick={() => {
          logEvent("button", "share_on_whatsapp", post.title);
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <WhatsappIcon size={iconSize} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        onClick={() => {
          logEvent("button", "share_on_linkedin", post.title);
        }}
        url={shareUrl}
        quote={post.abstract}
        hashtag={formatHashTags(post.tag)}
      >
        <LinkedinIcon size={iconSize} round />
      </LinkedinShareButton>
      <EmailShareButton
        onClick={() => {
          logEvent("button", "share_on_email", post.title);
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
