import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ExerciseInfo = ({ exercise }) => {
  return (
    <>
      <div className="exercise-info">
        <h1 className="question-title">Câu hỏi</h1>
        <p className="exercise-demand">{exercise?.question}</p>
        {
          exercise?.sampleCode && (
            <div className="sipsppet">
              <SyntaxHighlighter
                language="jsx"
                style={materialDark}
                customStyle={{ borderRadius: '6px', marginBottom: '20px' }}
              >
                {exercise?.sampleCode}
              </SyntaxHighlighter>
            </div>
          )
        }
        <h1>Yêu cầu</h1>
        <p className="exercise-demand">Nội dung yêu cầu: </p>
        {
          exercise?.demand && exercise?.demand?.map && (
            <ul>
              {
                exercise?.demand.map(el => <li>- <strong>{el}</strong></li>)
              }
            </ul>
          )
        }
      </div>
    </>
  );
};

export default ExerciseInfo;
