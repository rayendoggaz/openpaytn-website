import image_89fdf76fb79da1e463efed182e4138efcf4a027d from 'figma:asset/89fdf76fb79da1e463efed182e4138efcf4a027d.png';
import image_dab86fa2b0dcaef6b3cd5fa12c5249b6d31826d8 from 'figma:asset/dab86fa2b0dcaef6b3cd5fa12c5249b6d31826d8.png';
import image_4a40de7142e78c79ebd94d6ac70a0ea265631112 from 'figma:asset/4a40de7142e78c79ebd94d6ac70a0ea265631112.png';
import image_89fdf76fb79da1e463efed182e4138efcf4a027d from 'figma:asset/89fdf76fb79da1e463efed182e4138efcf4a027d.png';
import React from 'react';
import logoImage from 'figma:asset/4a40de7142e78c79ebd94d6ac70a0ea265631112.png';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img 
        src={image_89fdf76fb79da1e463efed182e4138efcf4a027d} 
        alt="OpenPayTN Logo" 
        className="w-11 h-11 object-contain rounded-[0px]" 
      />
      <span className="text-[22px] tracking-tight leading-none" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
        OpenPayTN
      </span>
    </div>
  );
};
