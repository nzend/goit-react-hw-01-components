import {
  StatisticsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';
import propTypes from 'prop-types';

import { createColor } from '../../utils/createColor';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id} style={{ backgroundColor: createColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
