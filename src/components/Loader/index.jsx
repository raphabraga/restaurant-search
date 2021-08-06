import React from 'react';
import Lottie from 'react-lottie';

import loading from '../../assets/loading.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserverAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} />;
};
