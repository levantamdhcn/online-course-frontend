import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { validationUpdateCategorySchema } from './form.validation';
import FormCard from 'components/FormCard';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import FormInput from 'components/FormInput';

const CategoryForm = ({ onSubmit, handleClickCancelBtn, onDelete, defaultValues }) => {
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
    defaultValues
  });

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
                error={errors.name}
                maxW="100%"
              />
            )}
          />
        </Stack>
      </SimpleGrid>
    </FormCard>
  );
};

export default CategoryForm;
