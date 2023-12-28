import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { validationUpdateCategorySchema } from './form.validation';
import FormCard from 'components/FormCard';
import { Button, HStack, SimpleGrid, Stack } from '@chakra-ui/react';
import FormInput from 'components/FormInput';
import ModalConFirmDelete from 'components/ModalConfirmDelete';
import { useParams } from 'react-router-dom';

const CategoryForm = ({ onSubmit, handleClickCancelBtn, onDelete, defaultValues }) => {
  const { id } = useParams();
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
    resolver: yupResolver(validationUpdateCategorySchema),
    defaultValues: {
      name: defaultValues?.name,
      slug: defaultValues?.slug
    }
  });

  React.useEffect(() => {
    reset({
      name: defaultValues?.name,
      slug: defaultValues?.slug
    });
  }, [defaultValues, reset]);

  const onDeleteCategory = async (id) => {
    if (id && onDelete && isConfirm) {
      onDelete(id);
      setIsConfirm(false);
    }
  };

  return (
    <FormCard>
      <SimpleGrid>
        <Stack spacing="24px">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <FormInput
                isRequired
                value={field.value}
                onChange={field.onChange}
                type="text"
                label="Tên danh mục"
                error={errors.name}
                maxW="100%"
              />
            )}
          />
          <Controller
            control={control}
            name="slug"
            render={({ field }) => (
              <FormInput
                isRequired
                value={field.value}
                onChange={field.onChange}
                type="text"
                label="Tên rút gọn"
                error={errors.slug}
                maxW="100%"
              />
            )}
          />
        </Stack>
      </SimpleGrid>

      <HStack spacing="32px" mt="32px">
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Lưu &amp; Tiếp tục
        </Button>
        {!!onDelete && (
          <Button variant="outline" onClick={() => setIsConfirm(true)}>
            Xóa danh mục
          </Button>
        )}
        <Button variant="primary-alpha" onClick={handleClickCancelBtn}>
          Hủy
        </Button>
      </HStack>
      <ModalConFirmDelete
        show={!!isConfirm}
        handleDeleted={() => onDeleteCategory(id)}
        handleCancel={() => setIsConfirm(false)}
      />
    </FormCard>
  );
};

export default CategoryForm;
