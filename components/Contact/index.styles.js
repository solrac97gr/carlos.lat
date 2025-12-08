import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 2.5rem;
  background-color: #f3f4f6;

  @media (min-width: 768px) {
    padding: 7rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 7rem 5rem;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;
`;

export const SuccessMessage = styled.div`
  margin-bottom: 1.5rem;
  background-color: #d1fae5;
  border: 1px solid #34d399;
  color: #065f46;
  padding: 1rem;
  border-radius: 0.5rem;

  strong {
    font-weight: 700;
  }

  span {
    display: block;
    margin-top: 0.25rem;

    @media (min-width: 640px) {
      display: inline;
      margin-top: 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #111827;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #111827;
  outline: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #111827;
  outline: none;
  transition: all 0.2s ease;
  resize: vertical;
  font-family: inherit;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SubmitButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  align-self: center;

  &:hover {
    background-color: #1d4ed8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
