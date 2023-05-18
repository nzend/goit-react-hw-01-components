import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { Stats } from 'components/Stats/Stats';

export const StatList = ({ data }) => {
  return (
    <ul className={css.statlist}>
      {data.map(({ id, label, percentage }) => (
        <Stats key={id} label={label} percentage={percentage}></Stats>
      ))}
    </ul>
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
