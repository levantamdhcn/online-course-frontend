import React from 'react'
import { Box, Container } from '@chakra-ui/react';
import { toast } from "react-toastify";
import { PageHeader } from 'components/PageHeader';
import { useParams } from 'react-router-dom';
import CategoryForm from '../CategoryForm';
import { useFetchCategoryDetail, useRemoveCategory, useRemoveCourse, useUpdateCategory } from '../hooks/useQuery';
import CourseTable from '../CourseTable';
import { useHistory } from 'react-router-dom';
import AddCourseModal from '../AddCourseModal';

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [addingCourse, setAddingCourse] = React.useState(false);

  const { data, isLoading, refetch } = useFetchCategoryDetail(id);

  const { mutate, isLoading: updating } = useUpdateCategory(id, () => {
    toast("Cập nhật danh mục thành công", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });

    refetch();
    history.push("/admin/category");
  });

  const { mutateAsync, isLoading: deleting } = useRemoveCategory(() => {
    toast("Xóa danh mục thành công", {
      position: "top-right",
      type: "success",
      hideProgressBar: true,
    });
    history.push("/admin/category");
  });

  const { mutateAsync: mutateRemoveCourse, isLoading: deletingCourse } = useRemoveCourse(id, (res) => {
    toast('Gỡ khóa học thành công', {
      position: 'top-right',
      type: 'success',
      hideProgressBar: true
    });
    
    if(res._id) {
      refetch();
    }
  });

  const onSubmit = (values) => {
    mutate(values);
  };

  const handleClickCancelBtn = () => {
    history.push("/admin/category");
  }

  const handleDeleteCategory = async (id) => {
    !!id && await mutateAsync(id);
  };

  const handleShowModalAddCourse = React.useCallback(() => {
    setAddingCourse(true);
  }, []);

  const handleCloseAddCourse = React.useCallback((id) => {
    setAddingCourse(false);
    if (id) {
      refetch();
    }
  }, [refetch]);

  const handleRemoveCourse = async (payload) => {
    !!payload && await mutateRemoveCourse(payload);
  };

  return (
    <Container maxW="7xl" minH="calc(100vh - 230px)" pt="24px">
      <AddCourseModal
        show={addingCourse}
        handleCancel={handleCloseAddCourse}
      />
      <PageHeader
        title="Cập nhật danh mục"
        isRenderBtn={false}
        breadcrumbs={[{ label: 'Quản lý bài tập', link: '/admin/exercise' }]}
      />
      <CategoryForm
        onSubmit={onSubmit}
        handleClickCancelBtn={handleClickCancelBtn}
        defaultValues={data}
        onDelete={handleDeleteCategory}
      />

      <Box mt="24px">
        <PageHeader
          title="Khóa học trong danh mục"
          handleClickBtn={handleShowModalAddCourse}
          isRenderBtn
          btnTitle="Thêm"
        />
        <CourseTable
          data={data?.courses || []}
          handleClickBtnDelete={handleRemoveCourse}
        />
      </Box>
    </Container>
  )
}

export default EditPage