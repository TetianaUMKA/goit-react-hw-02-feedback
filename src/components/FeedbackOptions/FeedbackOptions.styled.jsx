import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const FeedbackBtn = styled.button`
  width: 120px;
  padding: 10px;
  font-size: 20px;
  border-radius: 4px;
  border: transparent;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);

  :hover {
    box-shadow: 1px 5px 4px 1px rgba(7, 20, 56, 0.53);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
