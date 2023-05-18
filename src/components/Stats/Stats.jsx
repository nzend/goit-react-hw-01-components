import PropTypes from 'prop-types';

import { StatsItem, Label, Percentage } from './Stats.styled';

export const Stats = ({ label, percentage }) => {
  return (
    <StatsItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatsItem>
  );
};
Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
