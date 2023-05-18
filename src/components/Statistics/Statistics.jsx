import PropTypes from 'prop-types';

import css from './Statistics.module.css';
import { Title } from '../Title/Title';
import { StatList } from 'components/StatList/StatList';

export const Statistics = ({ data }) => {
  return (
    <div className={css.statistics}>
      <Title text="Upload Stats"></Title>
      <StatList data={data}></StatList>
    </div>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
