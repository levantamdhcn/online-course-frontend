import { object, string } from "yup";

export const validationNewCategorySchema = object().shape({
    name: string().required("Tên danh mục là trường bắt buộc"),
    slug: string().required("Tên viết tắt là trường bắt buộc"),
});

export const validationAddCourseSchema = object().shape({
    course: string().required("Khóa học là trường bắt buộc"),
});