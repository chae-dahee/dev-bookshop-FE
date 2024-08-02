import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/themeContext';

const dummyBook = {
  id: 1,
  title: 'dummy Book',
  img: 5,
  category_id: 1,
  form: 'paperback',
  isbn: 'dummy isbn',
  summary: 'dummy summary',
  detail: 'dummy detail',
  author: 'dummy author',
  pages: 100,
  contents: 'dummy contents',
  price: 10000,
  likes: 1,
  pubDate: '2024-07-31',
};

describe('BookItem', () => {
  it('렌더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>,
    );
    // 제목에 화면에 잘 렌더링 되느냐
    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/600/600`,
    );
  });
});
