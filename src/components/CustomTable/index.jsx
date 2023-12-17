import React from 'react';
import { useTable, useSortBy } from 'react-table';

import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';
import { Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import LoadingScreen from 'components/LoadingScreen';

const SortOrder = {
  DESC: 'DESC',
  ASC: 'ASC'
};

const CustomTable = (props) => {
  const { columns, data, form, onSort, sortState, isLoading } = props;
  const dataMap = React.useMemo(
    () =>
      data.map((item, idx) => ({
        ...item,
        idx: idx + 1
      })),
    [data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable(
    {
      columns: columns,
      data: dataMap,
      disableMultiSort: true,
      manualSortBy: true,
      initialState: {
        sortBy: [
          {
            id: sortState?.key || '',
            desc: sortState?.order === SortOrder.DESC
          }
        ]
      }
    },
    useSortBy
  );

  const generateSortingIndicator = (column) => {
    let iconType = TiArrowUnsorted;
    if (column.isSorted) {
      iconType = column.isSortedDesc ? TiArrowSortedDown : TiArrowSortedUp;
    }
    return <Icon as={iconType} />;
  };

  React.useEffect(() => {
    if (!!onSort) {
      let order = SortOrder.ASC;
      if (state.sortBy.length === 0 || !!state.sortBy[0].desc) {
        order = SortOrder.DESC;
      }
      onSort(state.sortBy[0]?.id || 'createdAt', order);
    }
  }, [state.sortBy]);

  return (
    <TableContainer
      bgColor="#fff"
      borderRadius="6px"
      border="1px solid"
      borderColor="neutral.200"
      mt="24px"
      boxShadow=" 0px 1px 2px rgba(16, 24, 40, 0.05)"
    >
      <Table {...getTableProps()}>
        <Thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, idx) => (
                    // Apply the header cell props
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      color="neutral.700"
                      fontSize="12px"
                      width={column.width}
                    >
                      {
                        // Render the header
                        column.render('Header')
                      }
                      {!column.disableSortBy && generateSortingIndicator(column)}
                    </Th>
                  ))
                }
              </Tr>
            ))
          }
        </Thead>
        {/* Apply the table body props */}
        <Tbody {...getTableBodyProps()}>
          {isLoading ? (
            <Tr h={'50vh'}>
              <Td colSpan={100}>
                <LoadingScreen />
              </Td>
            </Tr>
          ) : (
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <Tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <Td
                          {...cell.getCellProps()}
                          maxWidth={cell.column.maxWidth}
                          style={{
                            ...(cell.column?.textTransform && {
                              textTransform: cell.column?.textTransform
                            }),
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            backgroundColor: '#fff',
                          }}
                        >
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </Td>
                      );
                    })
                  }
                </Tr>
              );
            })
          )}
          {form}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
