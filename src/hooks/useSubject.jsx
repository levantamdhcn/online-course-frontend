import { useContext } from 'react';
import SubjectContext from 'contexts/SubjectContext';

const useSubject = () => useContext(SubjectContext);

export default useSubject;
