import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

export const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const ColorLabel = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ColorBox = styled.div`
  margin-top: 8px;
  padding: 6px 10px;
  font-size: 0.875rem;
  background-color: #eee;
  border-radius: 4px;
  text-align: center;
`;

export const SaveButton = styled.button`
  margin-top: 2rem;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ColorInfosWrapper = styled.div``;
