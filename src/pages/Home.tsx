import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeStyle>

      <h1>Home</h1>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export default Home;
