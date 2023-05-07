import styled from 'styled-components';

export const StatItem = styled.li`
  :nth-child(-n + 2) {
    margin-bottom: 8px;
  }

  :nth-child(3) {
    margin-bottom: 14px;
  }

  :nth-child(4) {
    margin-bottom: 20px;
  }
`;

export const StatItemData = styled.p`
  display: flex;
  align-items: flex-start;
  font-size: 26px;
`;
