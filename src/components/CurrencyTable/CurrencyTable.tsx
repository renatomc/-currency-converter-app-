'use client';

import { useState, useMemo, useEffect } from 'react';
import { SortKey, SortOrder } from './CurrencyTable.types';
import { Pagination } from '../Pagination';
import { fetchCurrencies, CurrencyRate } from '@/services/currencyServices';

import {
  TableWrapper,
  StyledTable,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  PaginationWrapper,
} from './CurrencyTable.styles';

export function CurrencyTable() {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>('currency');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = useMemo(() => {
    return [...rates].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (sortKey === 'valueInBRL') {
        return sortOrder === 'asc'
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      if (sortKey === 'timestamp') {
        return sortOrder === 'asc'
          ? new Date(aValue).getTime() - new Date(bValue).getTime()
          : new Date(bValue).getTime() - new Date(aValue).getTime();
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [sortKey, sortOrder, rates]);

  const getSortIndicator = (key: SortKey) => {
    if (sortKey !== key) return '';
    return sortOrder === 'asc' ? '▲' : '▼';
  };

  useEffect(() => {
    const loadRates = async () => {
      const response = await fetchCurrencies(); 
      if (response.length > 0) {
        setRates(response);
      }
    };

    loadRates();
  }, []);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  return (
    <>
      <TableWrapper>
        <StyledTable>
          <TableHead>
            <tr>
              <TableHeaderCell isActive={sortKey === 'currency'} onClick={() => toggleSort('currency')}>
                Moeda {getSortIndicator('currency')}
              </TableHeaderCell>
              <TableHeaderCell  isActive={sortKey === 'valueInBRL'} onClick={() => toggleSort('valueInBRL')}>
                Valor (em BRL) {getSortIndicator('valueInBRL')}
              </TableHeaderCell>
              <TableHeaderCell isActive={sortKey === 'timestamp'} onClick={() => toggleSort('timestamp')}>
                Horário {getSortIndicator('timestamp')}
              </TableHeaderCell>
            </tr>
          </TableHead>
          <TableBody>
            {paginatedData?.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate?.currency}</TableCell>
                <TableCell>R$ {rate?.valueInBRL.toFixed(2)}</TableCell>
                <TableCell>
                  {rate?.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableWrapper>
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortedData.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </PaginationWrapper>
    </>
  );
};
