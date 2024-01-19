import React from 'react';

import {  MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#f7f587"
        color="#4fa94d"
      />
    </div>
  );
};

export default Loader;
