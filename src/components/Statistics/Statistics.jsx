import PropTypes from 'prop-types';

import { StatisticsContainer } from './Statistics.styled';
import { Title } from '../Title/Title';
import { StatList } from 'components/StatList/StatList';
console.log(Title.length);

export const Statistics = ({ data }) => {
  return (
    <StatisticsContainer>
      {Title.length > 0 && <Title text="Upload Stats"></Title>}

      <StatList data={data}></StatList>
    </StatisticsContainer>
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
