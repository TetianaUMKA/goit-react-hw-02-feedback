import PropTypes from 'prop-types';

import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn
            type="button"
            aria-label="Leave feedback"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
