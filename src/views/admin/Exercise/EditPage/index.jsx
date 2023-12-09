import React from 'react';
import { Container } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import ExerciseForm from '../ExerciseForm';
import { PageHeader } from 'components/PageHeader';
import { useAddExercises, useDeleteExercise, useFetchExercise, useUpdateExercise } from '../hooks/useQuery';
import { toast } from 'react-toastify';
import { defaults } from 'lodash';
import LoadingScreen from 'components/LoadingScreen';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

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
  testCaseFile: null
};

const EditPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const { isLoading, data, refetch } = useFetchExercise(id);

  const formValues = React.useMemo(
    () =>
      defaults(
        {
          ...data,
          mappedTitle: data?.title,
          demands: data?.demands.map(demand => ({ value: demand }))
        },
        defaultValues
      ),
    [data]
  );

  const { mutate, isLoading: updating } = useUpdateExercise(id, () => {
    refetch();
    toast('Cập nhật dữ liệu bài tập thành công', {
      position: 'top-right',
      type: 'success',
      hideProgressBar: true
    });

    history.push('/admin/exercise');
  });

  const { mutateAsync, isLoading: deleting } = useDeleteExercise(id, () => {
    toast("Xóa bài tập thành công", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });
    history.push('/admin/exercise');
  })

  const handleSubmit = (values) => {
    const formData = new FormData();
    for (const key in values) {
      if (key === 'demands') {
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
  };

  const handleClickCancelBtn = () => {
    history.push('/admin/exercise');
  };

  
  const handleDeleteExercise = async (id) => {
    !!id && await mutateAsync(id);
  };
  
  if (updating || isLoading || deleting) return <LoadingScreen />;
  
  return (
    <Container maxW="7xl" minH="calc(100vh - 230px)" pt="24px">
      <PageHeader
        title="Cập nhật bài tập"
        isRenderBtn={false}
        breadcrumbs={[{ label: 'Quản lý bài tập', link: '/admin/exercise' }]}
      />
      <ExerciseForm
        onSubmit={handleSubmit}
        handleClickCancelBtn={handleClickCancelBtn}
        defaultValues={formValues}
        onDelete={handleDeleteExercise}
      />
    </Container>
  );
};

export default EditPage;
