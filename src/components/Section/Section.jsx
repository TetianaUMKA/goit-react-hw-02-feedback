import PropTypes from 'prop-types';

import { SiteSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SiteSection>
      <Title>{title}</Title>
      {children}
    </SiteSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
