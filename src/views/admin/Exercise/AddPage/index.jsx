import React from 'react';
import {
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Button,
  FormControl,
  Input,
  Spacer,
  FormLabel
} from '@chakra-ui/react';
import { DeleteIcon, SmallAddIcon } from '@chakra-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import FormCard from 'components/FormCard';
import FormInput from 'components/FormInput';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { validationNewExerciseSchema } from './form.validator';
import FormRichText from 'components/FormRichText';
import FormScript from 'components/FormScript';
import FormSelect from 'components/FormSelect';
import config from '../../../../config';
import axios from 'axios';
import ExerciseForm from '../ExerciseForm';
import { PageHeader } from 'components/PageHeader';

const defaultValues = {
  title: '',
  description: '',
  questionName: '',
  mainFunction: '',
  demand: [],
  subject_id: null
};

const AddPage = () => {
  const [subjects, setSubjects] = React.useState([]);
  const [isConfirm, setIsConfirm] = React.useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    register,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationNewExerciseSchema),
    defaultValues
  });

  const { append, fields, remove } = useFieldArray({
    name: 'demands',
    control
  });

  React.useEffect(() => {
    const getSubjects = async () => {
      try {
        const res = await axios.get(`${config.url}/subject`);
        if (res.data) {
          setSubjects(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSubjects();
  }, []);

  return (
    <Container maxW="7xl" minH="calc(100vh - 230px)" pt="24px">
      <PageHeader
        title="Thêm bài tập"
        isRenderBtn={false}
        breadcrumbs={[{ label: "Quản lý bài tập", link: "/admin/exercise" }]}
      />
      <ExerciseForm />
    </Container>
  );
};

export default AddPage;
