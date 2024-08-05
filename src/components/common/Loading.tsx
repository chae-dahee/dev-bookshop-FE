import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const Loding = () => {
  return (
    <LodingStyle>
      <FaSpinner />
    </LodingStyle>
  );
};

const LodingStyle = styled.div`
  padding: 40px 0;
  text-align: center;

  @keyframes ratate {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
    animation: ratate 1s linear infinite;
  }
`;

export default Loding;
