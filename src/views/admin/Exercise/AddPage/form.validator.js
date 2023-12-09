import { array, object, string, mixed } from 'yup';

export const validationNewExerciseSchema = object().shape({
  title: string().required('Tiêu đề là trường bắt buộc'),
  questionName: string().required('Tên bài tập là trường bắt buộc'),
  description: string().required('Mô tả là trường bắt buộc'),
  mainFunction: string().required('Mã Javascript là trường bắt buộc'),
  solution: string().required('Đáp án là trường bắt buộc'),
  solutionTester: string().required('Mã kiểm tra đáp án là trường bắt buộc'),
  demands: array().required('Yêu cầu là trường bắt buộc'),
  subject_id: string().required('Bài giảng là trường bắt buộc'),
  testCaseFile: mixed()
    .test('required', 'You need to provide a file', (file) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (file) return true;
      return false;
    })
    .test('fileSize', 'The file is too large', (file) => {
      //if u want to allow only certain file sizes
      return file && file.size <= 2000000;
    })
});

export const validationUpdateExerciseSchema = object().shape({
  title: string().required('Tiêu đề là trường bắt buộc'),
  questionName: string().required('Tên bài tập là trường bắt buộc'),
  description: string().required('Mô tả là trường bắt buộc'),
  mainFunction: string().required('Mã Javascript là trường bắt buộc'),
  solution: string().required('Đáp án là trường bắt buộc'),
  solutionTester: string().required('Mã kiểm tra đáp án là trường bắt buộc'),
  demands: array().required('Yêu cầu là trường bắt buộc'),
  subject_id: string().required('Bài giảng là trường bắt buộc'),
});
