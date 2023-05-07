import PropTypes from 'prop-types';
import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from 'react-icons/ci';

import { Notification } from 'components/Notification/Notification';

import { StatItem, StatItemData } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <ul>
      <StatItem>
        <StatItemData>
          Good
          <CiFaceSmile size="28" />: {good}
        </StatItemData>
      </StatItem>
      <StatItem>
        <StatItemData>
          Neutral
          <CiFaceMeh size="28" />: {neutral}
        </StatItemData>
      </StatItem>
      <StatItem>
        <StatItemData>
          Bad
          <CiFaceFrown size="28" />: {bad}
        </StatItemData>
      </StatItem>
      <StatItem>
        <StatItemData>Total: {total}</StatItemData>
      </StatItem>
      <StatItem>
        <StatItemData>Positive feedback: {positivePercentage}%</StatItemData>
      </StatItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
