

import React from 'react';

const Card = ({ title, titleColor, children }) => {
  return (
    <div className={`border-1  rounded-xl shadow-md cursor-pointer bg-slate-300`}>
      <h1 className={`text-2xl font-bold ${titleColor} text-center p-2`}>{title}</h1>
      <div className='rounded-md'>
        {children}
      </div>
    </div>
  );
};

export default Card;
