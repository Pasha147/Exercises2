
import React, { useEffect, useState } from 'react';
import { dataArray } from '../../public/dataArray';

export default function News () {
  
  return (
    <div>
      Render your data here
      {dataArray.map(item => (
        <div key={item.id}>{item}</div>
      ))}
    </div>
  );
};