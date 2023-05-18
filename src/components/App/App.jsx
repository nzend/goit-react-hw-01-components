import { ProfileBoard } from 'components/ProfileBoard/ProfileBoard';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';

import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <ProfileBoard user={user}></ProfileBoard>
      <Statistics data={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <Transactions transactions={transactions}></Transactions>
    </Container>
  );
};
