import React from 'react';
import {
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
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import FormCard from 'components/FormCard';
import FormInput from 'components/FormInput';
import { validationNewExerciseSchema } from '../AddPage/form.validator';
import FormRichText from 'components/FormRichText';
import FormScript from 'components/FormScript';
import FormSelect from 'components/FormSelect';
import axios from 'axios';
import config from '../../../../config';

const defaultValues = {
  title: '',
  description: '',
  questionName: '',
  mainFunction: '',
  solution: '',
  solutionTester: '',
  demands: [],
  subject_id: null
};

const ExerciseForm = ({ onSubmit, handleClickCancelBtn, onDelete }) => {
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
    <FormCard>
      <SimpleGrid>
        <Stack spacing="24px">
          <HStack>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <FormInput
                  isRequired
                  value={field.value}
                  onChange={field.onChange}
                  type="text"
                  label="Tiêu đề"
                  error={errors.title}
                  maxW="100%"
                />
              )}
            />

            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <FormInput
                  isRequired
                  value={field.value}
                  onChange={field.onChange}
                  type="text"
                  label="Tên file trong máy chủ"
                  error={errors.title}
                  maxW="100%"
                />
              )}
            />
          </HStack>

          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <FormRichText
                isRequired
                height="293px"
                value={field.value}
                onChange={field.onChange}
                label="Mô tả"
                placeholder="Description"
                error={errors.description}
                maxW="100%"
              />
            )}
          />

          <Controller
            control={control}
            name="mainFunction"
            render={({ field }) => (
              <FormScript
                isRequired
                value={field.value}
                onChange={field.onChange}
                label="Chương trình"
                maxW="100%"
                error={errors.mainFunction}
              />
            )}
          />

          <Controller
            control={control}
            name="solution"
            render={({ field }) => (
              <FormScript
                isRequired
                value={field.value}
                onChange={field.onChange}
                label="Đáp án"
                maxW="100%"
                error={errors.solution}
              />
            )}
          />

          <Controller
            control={control}
            name="solutionTester"
            render={({ field }) => (
              <FormScript
                isRequired
                value={field.value}
                onChange={field.onChange}
                label="Chương trình kiểm tra đáp án"
                maxW="100%"
                error={errors.solutionTester}
              />
            )}
          />

          <Controller
            control={control}
            name="subject_id"
            render={({ field }) => (
              <FormSelect
                isRequired
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  // selectItemClassNameCallback(e, control._fields);
                }}
                label="Chọn bài giảng"
                error={errors.subject_id}
                data={subjects || []}
                keyValue="_id"
                keyDisplay="name"
                placeholder={'Chọn bài giảng'}
              />
            )}
          />

          <FormControl isRequired isInvalid={Boolean(errors.size)}>
            <FormLabel>Yêu cầu bài tập</FormLabel>
            {fields.length === 0 ? (
              <>
                <Stack direction="row">
                  <Input
                    id={`demands[${0}]`}
                    placeholder="Yêu cầu"
                    {...register(`demands[${0}].value`)}
                  />
                </Stack>
                <Spacer h="6" />
              </>
            ) : (
              fields.map((field, index) => (
                <>
                  <Stack direction="row" key={field.id}>
                    <Input
                      id={`size[${index}]`}
                      placeholder="Yêu cầu"
                      {...register(`demands[${index}].value`)}
                    />
                    {index !== 0 && (
                      <Button
                        paddingX="1.5rem"
                        leftIcon={<DeleteIcon />}
                        onClick={() => remove(index)}
                        colorScheme="red"
                      >
                        Xóa
                      </Button>
                    )}
                  </Stack>
                  <Spacer h="6" />
                </>
              ))
            )}
            {fields.length < 5 && (
              <Button
                leftIcon={<SmallAddIcon />}
                colorScheme="blue"
                variant="outline"
                maxW="150px"
                onClick={() => append({ name: 'name' })}
              >
                Thêm yêu cầu
              </Button>
            )}
          </FormControl>
        </Stack>
      </SimpleGrid>

      <HStack spacing="32px" mt="32px">
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Lưu &amp; Tiếp tục
        </Button>
        {!!onDelete && (
          <Button variant="outline" onClick={() => setIsConfirm(true)}>
            Xóa bài tập
          </Button>
        )}
        <Button variant="primary-alpha" onClick={handleClickCancelBtn}>
          Hủy
        </Button>
      </HStack>
    </FormCard>
  );
};

export default ExerciseForm;
