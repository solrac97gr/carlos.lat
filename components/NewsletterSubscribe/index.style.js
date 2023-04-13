import styled from "styled-components";

export const NewsletterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  color: #000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const NewsletterFormTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const NewsletterFormSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

export const NewsletterFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NewsLetterFormButton = styled.button`
  margin-left: 0.5rem;
  background-color: #000;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const NewsletterFormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 1rem;
  color: #000;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: 1px solid #000;
  }
`;
