import { Container } from '@chakra-ui/react';
import { PageHeader } from 'components/PageHeader';
import React from 'react'
import { useParams } from 'react-router-dom';
import CategoryForm from '../CategoryForm';

const EditPage = () => {
    const { id } = useParams();
  return (
    <Container maxW="7xl" minH="calc(100vh - 230px)" pt="24px">
      <PageHeader
        title="Cập nhật danh mục"
        isRenderBtn={false}
        breadcrumbs={[{ label: 'Quản lý bài tập', link: '/admin/exercise' }]}
      />
      <CategoryForm
        onSubmit={() => {}}
        handleClickCancelBtn={() => {}}
        defaultValues={{}}
        onDelete={() => {}}
      />
    </Container>
  )
}

export default EditPage