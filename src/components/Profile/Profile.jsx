import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionBox,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionBox>
        <Avatar src={avatar} alt={username} width="300" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionBox>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Percentage>{stats.followers}</Percentage>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Percentage>{stats.views}</Percentage>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Percentage>{stats.likes}</Percentage>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
