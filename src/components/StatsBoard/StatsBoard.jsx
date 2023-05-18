import css from './StatsBoard.module.css';
import PropTypes from 'prop-types';

export const StatsBoard = ({  username, followers, views, likes }) => {
  return (
    <ul className={css.stats} key={username}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};
StatsBoard.propTypes = {
username: PropTypes.string.isRequired,
followers: PropTypes.number.isRequired,
views: PropTypes.number.isRequired,
likes: PropTypes.number.isRequired,
};
