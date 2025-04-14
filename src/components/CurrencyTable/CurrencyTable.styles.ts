import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background};
`;

type TableHeaderCellProps = {
  isActive?: boolean;
};

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};


  &:hover {
    text-decoration: underline;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
`;
