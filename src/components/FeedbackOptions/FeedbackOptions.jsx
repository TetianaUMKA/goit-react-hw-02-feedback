import PropTypes from 'prop-types';

import { FeedbackItem, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <FeedbackItem key={option}>
          <FeedbackBtn
            type="button"
            aria-label="Leave feedback"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        </FeedbackItem>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
