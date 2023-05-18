import PropTypes from 'prop-types';
import { StatsList } from './StatList.styled';
import { Stats } from 'components/Stats/Stats';

export const StatList = ({ data }) => {
  return (
    <StatsList >
      {data.map(({ id, label, percentage }) => (
        <Stats key={id} label={label} percentage={percentage}></Stats>
      ))}
    </StatsList>
  );
};
StatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
