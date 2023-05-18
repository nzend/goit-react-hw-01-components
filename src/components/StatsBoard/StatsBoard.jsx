// import css from './StatsBoard.module.css';
import { StatsList, StatsItem, Label, Quantity } from './StatsBoard.styled';

import PropTypes from 'prop-types';

export const StatsBoard = ({ username, followers, views, likes }) => {
  return (
    <StatsList key={username}>
      <StatsItem>
        <Label className="label">Followers</Label>
        <Quantity className="quantity">{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label className="label">Views</Label>
        <Quantity className="quantity">{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label className="label">Likes</Label>
        <Quantity className="quantity">{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};
StatsBoard.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
