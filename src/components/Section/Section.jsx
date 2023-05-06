import PropTypes from 'prop-types';

import { SiteSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SiteSection>
      <h2>{title}</h2>
      {children}
    </SiteSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
