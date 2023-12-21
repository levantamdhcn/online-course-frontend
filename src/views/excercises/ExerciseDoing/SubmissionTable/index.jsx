import React from 'react';
import { SubmissionColumns } from './data';
import { Image } from '@chakra-ui/react';
import { get, sumBy } from 'lodash';
import placeholderIMG from '../../../../assets/images/placeholder.jpg';
import Tools from 'utils/Tool';
import CustomTable from 'components/CustomTable';

const SubmissionTable = ({ data, isLoading, onSort, sortState, tableRef }) => {
  console.log('tableRef 1', tableRef)
  const tableColumns = React.useMemo(() => {
    const newColumns = SubmissionColumns.map((col) => {
      return {
        Header: col.title,
        accessor: col.key,
        disableSortBy: !col.sortable,
        Cell: (info) => {
          const row = info.row.original;
          if (col.type === 'IMAGE') {
            return (
              <Image
                src={get(row, col.key, '')}
                alt=""
                height="40px"
                width="40px"
                fallbackSrc={placeholderIMG}
              />
            );
          } else if (col.type === 'ARRAY') {
            return sumBy(row[col.key], col.subkey);
          }
          return Tools.formatTableData(col, row);
        },
        ...(col.width && { width: col.width }),
        ...(col.maxWidth && { maxWidth: col.maxWidth })
      };
    });
    return newColumns;
  }, []);
  return (
    <CustomTable
      columns={tableColumns}
      data={data}
      isLoading={isLoading}
      onSort={onSort}
      sortState={sortState}
      tableRef={tableRef}
    />
  );
};

export default SubmissionTable;
