import React from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

import FormInput from 'components/FormInput';
import { validationAddCourseSchema } from '../form.validator';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingScreen from 'components/LoadingScreen';
import { useAddCategory, useAddCourse } from '../hooks/useQuery';
import FormSelect from 'components/FormSelect';
import axiosClient from 'utils/axios';
import { useParams } from 'react-router-dom';

const AddCourseModal = ({ show, handleCancel }) => {
  const { id } = useParams();
  const [courses, setCourses] = React.useState([]);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationAddCourseSchema),
    defaultValues: {
      course: undefined
    }
  });

  React.useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axiosClient.get(`/category/course/${id}`);
        console.log('res', res);
        if (res) {
          setCourses(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCourses();
  }, []);

  const { mutate, isLoading } = useAddCourse(id, (res) => {
    toast('Thêm khóa học thành công', {
      position: 'top-right',
      type: 'success',
      hideProgressBar: true
    });
    reset();
    handleCancel(res._id);
  });

  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <Modal isOpen={show} onClose={handleCancel}>
      <ModalOverlay />
      <ModalContent m="auto">
        <ModalBody p="8">
          <Controller
            control={control}
            name="course"
            render={({ field }) => (
              <FormSelect
                isRequired
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  // selectItemClassNameCallback(e, control._fields);
                }}
                label="Chọn khóa học"
                error={errors.course}
                data={courses || []}
                keyValue="_id"
                keyDisplay="name"
                placeholder={'Chọn khóa học'}
              />
            )}
          />
          <Spacer h="6" />
          <Flex justifyItems="flex-end" gap="8">
            <Button variant="outline" onClick={() => handleCancel()} flex="1">
              Hủy
            </Button>
            <Button flex="1" onClick={handleSubmit(onSubmit)}>
              {' '}
              Lưu
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddCourseModal;
