import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #7e6f7449;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
