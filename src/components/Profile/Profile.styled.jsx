import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 1000px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 370px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;


export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #7e6f7498 solid 2px;
`;

export const Avatar = styled.img`
  width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 15px;
`;

export const StatsList = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;


export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;