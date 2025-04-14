'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageButton, PaginationContainer } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <PaginationContainer>
      <PageButton isActive={false} onClick={handlePrevious} disabled={currentPage === 1}>
        <ChevronLeft size={16} />
      </PageButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      <PageButton isActive={false} onClick={handleNext} disabled={currentPage === totalPages}>
        <ChevronRight size={16} />
      </PageButton>
    </PaginationContainer>
  );
};
