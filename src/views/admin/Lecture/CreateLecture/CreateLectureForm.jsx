import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { defaultForm, validationSchema } from './form.validator';
import FormCard from 'components/FormCard';
import { HStack } from '@chakra-ui/react';
import FormInput from 'components/FormInput';

export const CreateLectureForm = () => {
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultForm
  });
  return (
    <FormCard>
      <HStack>
        <Controller
          control={control}
          name="score"
          render={({ field }) => (
            <FormInput
              value={field.value}
              onChange={field.onChange}
              type="number"
              label="Overall Score"
              error={errors.score}
            />
          )}
        />
      </HStack>
    </FormCard>
  );
};
