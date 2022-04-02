import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const ExerciseInfo = () => {
  const codeString = `<h1>Test</h1>`;
  return (
    <>
      <div className="exercise-info">
        <h1 className="question-title">Câu hỏi</h1>
        <p className="exercise-demand">Phát biểu nào sau đây là đúng cho đoạn mã HTML sau:</p>
        <div className="sipsppet">
          <SyntaxHighlighter
            language="jsx"
            style={materialDark}
            customStyle={{ borderRadius: '6px', marginBottom: '20px' }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <h1>Yêu cầu</h1>
        <p className="exercise-demand">Nội dung yêu cầu: </p>
      </div>
    </>
  );
};

export default ExerciseInfo;
