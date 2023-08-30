import React, { useState } from 'react';
import cn from 'classnames';
import { SliderButton } from '../SliderButton';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageNums = [1, 2, 3, 4];

  return (
    <nav className="pagination" aria-label="Pagination">
      <SliderButton
        className={cn({ disabled: currentPage === 0 })}
        onClick={() => setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('page-link__logo', { disabled: currentPage === 0 })}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M10.4712 3.52861C10.2109 3.26826 9.78878 3.26826 9.52843 3.52861L5.52843 7.52861C5.26808 7.78896 5.26808 8.21107 5.52843 8.47141L9.52843 12.4714C9.78878 12.7318 10.2109 12.7318 10.4712 12.4714C10.7316 12.2111 10.7316 11.789 10.4712 11.5286L6.94265 8.00001L10.4712 4.47141C10.7316 4.21107 10.7316 3.78896 10.4712 3.52861Z"
            fill="#B4BDC4"
          />
        </svg>
      </SliderButton>
      {pageNums.map((pageNum) => (
        <SliderButton
          key={pageNum}
          className={cn({ active: pageNum === currentPage })}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </SliderButton>
      ))}
      <SliderButton
        className={cn({ disabled: currentPage === 4 })}
        onClick={() => setCurrentPage(currentPage < 4 ? currentPage + 1 : 4)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('page-link__logo', { disabled: currentPage === 4 })}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
            fill="#B4BDC4"
          />
        </svg>
      </SliderButton>
    </nav>
  );
};
