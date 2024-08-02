import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { BookDetail } from '../../models/book.model';
import { FaHeart } from 'react-icons/fa';

interface Props {
  book: BookDetail;
  onClick: () => void;
}

const LikeButton = ({ book, onClick }: Props) => {
  return (
    <LikeButtonStyle
      size="medium"
      scheme={book.liked ? 'like' : 'normal'}
      onClick={onClick}
    >
      <FaHeart style={{ marginRight: '8px' }} />
      {book.likes}
    </LikeButtonStyle>
  );
};

const LikeButtonStyle = styled(Button)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

export default LikeButton;
