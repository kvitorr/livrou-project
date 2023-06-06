import { styled } from "styled-components";
import { theme } from "../../../styles/theme";

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: .7rem;
  border-bottom: 2px dashed #d3d3d3;
  padding: .5rem 1rem;

  img {
    height: 70px;
    width: 70px;

  }

  @media (max-width: 360px) {
    flex-direction: column;
    padding-block: 1rem;
  }
`;

export const ReviewContentWrapper = styled.div`
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const BookTitle = styled.p`
  font-size: 1.2rem;
  color: #1A2B88;
  font-weight: ${theme.font.weight.bold};
`;

export const ReviewContent = styled.p`
  text-align: justify;
  font-size: .9rem;
`;
