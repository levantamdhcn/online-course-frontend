import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import FormScript from 'components/FormScript';

const Editor = ({ currentCode, setCurrentCode }) => {
  const [showSelectLangugage, setShowSelectLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('javascript');

  const handleChange = (editor, data, value) => {
    setCurrentCode(value);
  };
  const handleSelect = (language) => {
    setCurrentLanguage(language);
    setShowSelectLanguage(false);
  };

  const resetCurrentCode = () => {
    setCurrentCode('');
  };

  return (
    <div className="editor-container no-border">
      <div className="editor-heading">
        <div className="reset-btn" onClick={resetCurrentCode}>
          <span className="icon-revert"></span>
          Khôi phục
        </div>
        <div className="language-selector">
          <div className="current-language" onClick={() => setShowSelectLanguage((prev) => !prev)}>
            {currentLanguage === 'javascript'
              ? 'JS'
              : currentLanguage === 'xml'
              ? 'HTML'
              : currentLanguage.toUpperCase()}
            <span className="icon-arrow-down"></span>
          </div>
          <div className={`selection-wrapper ${showSelectLangugage && 'active'}`}>
            <div className="selection" onClick={() => handleSelect('xml')}>
              HTML
            </div>
            <div className="selection" onClick={() => handleSelect('css')}>
              CSS
            </div>
            <div className="selection" onClick={() => handleSelect('javascript')}>
              JS
            </div>
          </div>
        </div>
      </div>
      <div>
        <FormScript
          value={currentCode}
          className="editor-container no-border"
          height="100vh"
          maxW="100%"
          theme="vs-dark"
        />
      </div>
    </div>
  );
};

export default Editor;
