import React from 'react';
import styled from 'styled-components';
import MainReview from '../components/main/MainReview';
import { useMain } from '../hooks/useMain';
import Title from '../components/common/Title';
import MainNewBooks from '../components/main/MainNewBooks';
import MainBest from '../components/main/MainBest';

const Home = () => {
  const { reviews, newBooks, bestBooks } = useMain();
  return (
    <HomeStyle>
      {/* 배너 */}

      {/* 베스트셀러 */}
      <section className="section">
        <Title size="large">베스트 셀러</Title>
        <MainBest books={bestBooks} />
      </section>
      {/* 신간 */}
      <section className="section">
        <Title size="large">신간</Title>
        <MainNewBooks books={newBooks} />
      </section>

      {/* 리뷰 */}
      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
