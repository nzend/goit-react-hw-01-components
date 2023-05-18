import PropTypes from 'prop-types';
import { ProfileContainer } from "./ProfileBoard.styled";

// import css from './ProfileBoard.module.css';
import { Description } from '../Description/Description';
import { StatsBoard } from '../StatsBoard/StatsBoard';

export const ProfileBoard = ({ user }) => {
  return (
    <ProfileContainer  user={user}>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Description>
      <StatsBoard username={user.username} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} ></StatsBoard>
    </ProfileContainer>
  );
};
ProfileBoard.propTypes = {
  user: PropTypes.object,
};
