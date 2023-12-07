import { array, object, string } from "yup";

export const validationNewExerciseSchema = object().shape({
    title: string().required("Tiêu đề là trường bắt buộc"),
    questionName: string().required("Tên bài tập là trường bắt buộc"),
    description: string().required("Mô tả là trường bắt buộc"),
    mainFunction: string().required("Mã Javascript là trường bắt buộc"),
    demand: array().required("Yêu cầu là trường bắt buộc"),
    subject_id: string().required("Bài giảng là trường bắt buộc"),
});