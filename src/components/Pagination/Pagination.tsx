'use client';

import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';
import { NavButton, PageButton, PaginationContainer } from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const getVisiblePages = (current: number, total: number): (number | '...')[] => {
    const pages: (number | '...')[] = [];
  
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
  
    pages.push(1);
  
    if (current > 4) pages.push('...');
  
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
  
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  
    if (current < total - 3) pages.push('...');
  
    pages.push(total);
  
    return pages;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <PaginationContainer>
      <NavButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <ChevronLeft size={16} />
      </NavButton>

      {visiblePages.map((page, index) =>
        page === '...' ? (
          <Ellipsis key={index}>...</Ellipsis>
        ) : (
          <PageButton
            key={page}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        )
      )}
      <NavButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRight size={16} />
      </NavButton>
    </PaginationContainer>
  );
};