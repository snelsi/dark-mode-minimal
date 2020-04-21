import React from 'react';
import styled from 'styled-components';

import ThemeSelection from './ThemeSelection';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      {siteTitle}
      <ThemeSelection />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export default Header;
