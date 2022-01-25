import React from 'react';
import { useLocation } from 'react-router-dom';

const Detail = props => {
  let location = useLocation();
  console.log(location);
  return <div>detail</div>;
};

export default Detail;
