import PropTypes from 'prop-types';

import { Notification } from 'components/Notification/Notification';

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
      <li>
        <p>
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </li>
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
