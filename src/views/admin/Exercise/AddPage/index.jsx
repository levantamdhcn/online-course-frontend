import React from 'react';
import {
  Container,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import ExerciseForm from '../ExerciseForm';
import { PageHeader } from 'components/PageHeader';
import { useAddExercises } from '../hooks/useQuery';
import { toast } from 'react-toastify';
import LoadingScreen from 'components/LoadingScreen';

const defaultValues = {
  title: '',
  description: '',
  questionName: '',
  mainFunction: '',
  solution: '',
  solutionTester: '',
  demands: [],
  mappedTitle: '',
  subject_id: null,
  testCaseFile: null,
};

const requireFields = {
  title: true,
  description: true,
  questionName: true,
  mainFunction: true,
  solution: true,
  solutionTester: true,
  demands: [],
  mappedTitle: true,
  subject_id: true,
}

const AddPage = () => {
  const history = useHistory();

  const { mutate, isLoading } = useAddExercises(() => {
    toast("Thêm bài tập thành công", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });

    history.push('/admin/exercise');
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    console.log('values', values)
    for (const key in values) {
      if(key === 'demands') {
        for (var i = 0; i < values.demands.length; i++) {
          formData.append('demands[]', values.demands[i].value);
        }
      } else {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }
    }

    mutate(formData);
  }

  const handleClickCancelBtn = () => {
    history.push('/admin/exercise');
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <Container maxW="7xl" minH="calc(100vh - 230px)" pt="24px">
      <PageHeader
        title="Thêm bài tập"
        isRenderBtn={false}
        breadcrumbs={[{ label: 'Quản lý bài tập', link: '/admin/exercise' }]}
      />
      <ExerciseForm onSubmit={handleSubmit} handleClickCancelBtn={handleClickCancelBtn} defaultValues={defaultValues} />
    </Container>
  );
};

export default AddPage;
