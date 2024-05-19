import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ Loading }) => {
  return (
    <ClipLoader
      color="red"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
