import React, { useEffect } from 'react';
import { renderMap } from '../../utils';
const Map = () => {
  useEffect(() => {
    renderMap();
    const m = document.getElementById('root');
    m.style.width = '100vw';
    m.style.height = '100vh';
  }, []);
  return <div></div>;
};

export default Map;
