import PropTypes from 'prop-types';

import css from './Description.module.css';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};
Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
