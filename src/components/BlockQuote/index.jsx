import React from 'react';

const BlockQuote = ({ quote }) => {
  const style = {
    borderLeft: '3px solid #d70040',
    color: '#757575',
    marginLeft: 0,
    padding: '4px 0 4px 20px',
    fontSize: '16px',
  };
  return <blockquote style={style}>{quote}</blockquote>;
};

export default BlockQuote;
