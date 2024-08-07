import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBook } from '../hooks/useBook';
import { getImgSrc } from '../utils/image';
import Title from '../components/common/Title';
import { BookDetail as IBookDetail } from '../models/book.model';
import { formatDate, formatNumber } from '../utils/foramt';
import { Link } from 'react-router-dom';
import EllipsisBox from '../components/common/EllipsisBox';
import LikeButton from '../components/book/LikeButton';
import AddToCart from '../components/book/AddToCart';
import BookReview from '../components/book/BookReview';
import { Tabs, Tab } from '../components/common/Tabs';
import Modal from '../components/common/Modal';

const BookInfoList = [
  {
    label: '카테고리',
    key: 'category_name',
    filter: (book: IBookDetail) => (
      <Link to={`/books?category_id=${book.category_id}`}>
        {book.category_name}
      </Link>
    ),
  },
  {
    label: '포맷',
    key: 'form',
  },
  {
    label: '페이지',
    key: 'pages',
  },
  {
    label: 'ISBN',
    key: 'isbn',
  },
  {
    label: '출간일',
    key: 'pubDate',
    filter: (book: IBookDetail) => {
      return `${formatDate(book.pubDate)}`;
    },
  },
  {
    label: '가격',
    key: 'price',
    filter: (book: IBookDetail) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle, reviews, addReview } = useBook(bookId);
  const [isImgOpen, setIsImgOpen] = useState(false);

  console.log(book);
  if (!book) return null;
  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img" onClick={() => setIsImgOpen(true)}>
          <img src={getImgSrc(book.img)} alt={book.title} />
        </div>
        <Modal isOpen={isImgOpen} onClose={() => setIsImgOpen(false)}>
          <img src={getImgSrc(book.img)} alt={book.title} />
        </Modal>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {BookInfoList.map((item) => (
            <dl>
              <dt>{item.label} </dt>
              <dd>
                {item.filter
                  ? item.filter(book)
                  : book[item.key as keyof IBookDetail]}
              </dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>
          <div className="like">
            <LikeButton book={book} onClick={likeToggle} />
          </div>
          <div className="add-cart">
            <AddToCart book={book} />
          </div>
        </div>
      </header>

      <div className="content">
        <Tabs>
          <Tab title="상세설명">
            <Title size="medium">상세 설명</Title>
            <EllipsisBox linelimit={4}>{book.detail}</EllipsisBox>
          </Tab>

          <Tab title="목차">
            <Title size="medium">목차</Title>
            <p className="index">{book.contents}</p>
          </Tab>

          <Tab title="리뷰">
            <Title size="medium">리뷰</Title>
            <BookReview reviews={reviews} onAdd={addReview} />
          </Tab>
        </Tabs>
      </div>
    </BookDetailStyle>
  );
};

const BookDetailStyle = styled.div`
  .header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;
  }

  .img {
    flex: 0.5;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }

  .info {
    felx: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    dl {
      display: flex;
      margin: 0;
      dt {
        width: 80px;
        color: ${({ theme }) => theme.color.secondary};
      }
      a {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }

  .content {
    // .detail {
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    //   display: -webkit-box;
    //   -webkit-line-clamp: 4;
    //   -webkit-box-orient: vertical;
    // }
  }
`;

export default BookDetail;
