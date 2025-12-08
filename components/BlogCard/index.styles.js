import Image from "next/image";
import styled from "styled-components";
import { theme, media } from "../../lib/theme";

export const ImageStyled = styled(Image)`
  border-top-left-radius: ${theme.borderRadius.lg};
  border-top-right-radius: ${theme.borderRadius.lg};
  object-fit: cover;
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.cardBackground};
  text-decoration: none;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.slow};
  overflow: hidden;
  height: 100%;
  box-shadow: ${theme.shadows.sm};

  &:hover {
    box-shadow: ${theme.shadows.xl};
    transform: translateY(-8px);
  }

  cursor: pointer;

  ${media.mobile} {
    margin-bottom: ${theme.spacing.lg};

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const Content = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.4;

  ${media.mobile} {
    font-size: ${theme.fontSize.lg};
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const Tag = styled.span`
  background: ${theme.colors.tagBackground};
  color: ${theme.colors.tagText};
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.semibold};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  border: none;
`;

export const Date = styled.small`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSize.sm};
  margin-top: auto;
  display: flex;
  align-items: center;
`;

export const ReadingTime = styled.span`
  color: ${theme.colors.textLight};
`;
