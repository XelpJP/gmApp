

import React from 'react';

const Card = ({ title, titleColor, children }) => {
  return (
    <div className="border rounded-xl shadow-md cursor-pointer bg-muted dark:bg-gray-800">
      <h1 className={`text-2xl font-bold text-center p-2 ${titleColor} dark:text-white`}>
        {title}
      </h1>
      <div className="rounded-md">
        {children}
      </div>
    </div>

  );
};

export default Card;
