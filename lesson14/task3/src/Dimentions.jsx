import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const { innerWidth, innerHeight } = window;
  const [dimensions, setDimensions] = useState({ width: innerWidth, height: innerHeight });

  useEffect(() => {
    const resizeHandler = event => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [dimensions]);

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
