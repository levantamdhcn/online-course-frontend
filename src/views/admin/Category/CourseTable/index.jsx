import React from 'react';
import { get, sumBy } from 'lodash';
import { Image } from '@chakra-ui/react';
import placeholderIMG from '../../../../assets/images/placeholder.jpg';
import { CourseColumns } from './data';
import Tools from 'utils/Tool';
import CustomTable from 'components/CustomTable';
import TableAction from 'components/TableAction';

const CourseTable = ({ data, isLoading, onSort, sortState, handleClickBtnDelete }) => {
  const tableColumns = React.useMemo(() => {
    const newColumns = CourseColumns.map((col) => {
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
    return [
        ...newColumns,
        {
            Header: "Actions",
            accessor: "action",
            Cell: (info) => {
              const row = info.row.original;
              return (
                <TableAction
                  isRenderBtnEdit={false}
                  isRenderBtnView={false}
                  isRenderBtnDeleted={true}
                  handleDeleted={() => {
                    handleClickBtnDelete({ course: row._id })
                  }}
                />
              );
            },
          },
    ];
  }, []);
  return (
    <CustomTable
      columns={tableColumns}
      data={data}
      isLoading={isLoading}
      onSort={onSort}
      sortState={sortState}
    />
  );
};

export default CourseTable;
