import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center items-center z-[100] gap-[2px] min-h-[50px] bottom-0 w-full mt-28">
      <p className="text-[#777777] text-base">
        © All rights reserved by Ahmed Wagih - {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
