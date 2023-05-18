import PropTypes from 'prop-types';

import { TitleStyles } from './Title.styled';

export const Title = ({ text }) => {
  return <TitleStyles>{text}</TitleStyles>;
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
};
