import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = () => {
  const [showSelectLangugage, setShowSelectLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('javascript');
  const [currentCode, setCurrentCode] = useState('');

  const handleChange = (editor, data, value) => {
    setCurrentCode(value);
  };
  const handleSelect = (language) => {
    setCurrentLanguage(language);
    setShowSelectLanguage(false);
  };

  return (
    <div className="editor-container">
      <div className="editor-heading">
        <div className="reset-btn">
          <span className="icon-revert"></span>
          Reset
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
        <ControlledEditor
          onBeforeChange={handleChange}
          value={currentCode}
          className="codemirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: currentLanguage,
            theme: 'material',
            lineNumbers: true
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
