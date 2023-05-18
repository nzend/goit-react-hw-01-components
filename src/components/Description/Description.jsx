import PropTypes from 'prop-types';

// import css from './Description.module.css';
import {
  DescriptionBox,
  Avatar,
  Name,
  Tag,
  Location,
} from './Description.styled';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <DescriptionBox>
      <Avatar src={avatar} alt={username} />
      <Name className="name">{username}</Name>
      <Tag className="tag">@{tag}</Tag>
      <Location className="location">{location}</Location>
    </DescriptionBox>
  );
};
Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
