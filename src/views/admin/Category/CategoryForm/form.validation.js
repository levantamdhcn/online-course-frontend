import { object, string } from 'yup';

export const validationUpdateCategorySchema = object().shape({
  name: string().required('Tên danh mục là trường bắt buộc'),
  slug: string().required('Tên rút gọn là trường bắt buộc'),
});
