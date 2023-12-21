import React from 'react';
import { useParams } from 'react-router-dom';
import SubmissionTable from '../SubmissionTable';
import { useFetchSubmissionByExercise } from 'views/admin/Dashboard/hook/useQuery';
import { Box, Button, Container, SimpleGrid, Stack } from '@chakra-ui/react';
import { useDownloadExcel } from 'react-export-table-to-excel';

const SubmissionReport = () => {
  const tableRef = React.useRef(null);
  const { exerciseId } = useParams();

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "SubmissionReport",
    sheet: "Submission"
  });

  const { data, isLoading } = useFetchSubmissionByExercise(exerciseId);

  console.log('tableRef', tableRef);

  return (
    <Container maxW='6xl' pt={4}>
      <Button onClick={onDownload}>Xuất file Excel</Button>
      <SimpleGrid maxH="800px" height='unset' className="scroll-wrapper" mt={4}>
        <SubmissionTable data={data || []} tableRef={tableRef} />
      </SimpleGrid>
    </Container>
  );
};

export default SubmissionReport;
