import { object, string } from 'yup';

export const validationSchema = object().shape({
  questionName: string().required('Question name is required'),
  title: string().required('Title id is required'),
  description: string().required('Description is required'),
  sampleCode: string().required('Sample code is required'),
  mainFunction: string().required('Main function is required'),
  demand: string().required('Demand is required'),
  subject_id: string().required('Subject id is required')
});

export const defaultForm = {
  questionName: '',
  title: '',
  description: '',
  sampleCode: '',
  mainFunction: '',
  demand: [],
  subject_id: null
};
