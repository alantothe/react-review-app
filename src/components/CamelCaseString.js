import React from 'react';

const CamelCaseString = ({ inputString, setInputString }) => {
  const camelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  };

  const camelCaseIt = () => {
    setInputString(camelCase(inputString));
  };

  return (
    <button onClick={camelCaseIt}>camelCase It!</button>
  );
};

export default CamelCaseString;
