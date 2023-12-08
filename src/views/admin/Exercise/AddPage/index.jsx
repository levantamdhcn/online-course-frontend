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
  demand: [],
  subject_id: null
};

const AddPage = () => {
  const history = useHistory();

  const { mutate, isLoading } = useAddExercises(() => {
    toast("Update product successfully", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });

    history.push('/admin/exercise');
  });

  const handleSubmit = (values) => {
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key]);
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
      <ExerciseForm onSubmit={handleSubmit} handleClickCancelBtn={handleClickCancelBtn} />
    </Container>
  );
};

export default AddPage;
