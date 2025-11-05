import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Map of Tunisia with payment node motif */}
        <rect width="40" height="40" rx="8" fill="#D81E2A"/>
        <path d="M20 8C18 8 16 10 16 14C16 18 20 22 20 26C20 22 24 18 24 14C24 10 22 8 20 8Z" fill="white" opacity="0.9"/>
        <circle cx="20" cy="14" r="2.5" fill="white"/>
        {/* Connection lines */}
        <path d="M12 20L16 18M24 18L28 20M20 26L20 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        {/* Network nodes */}
        <circle cx="12" cy="20" r="2" fill="white"/>
        <circle cx="28" cy="20" r="2" fill="white"/>
        <circle cx="20" cy="30" r="2" fill="white"/>
      </svg>
      <span className="text-[22px] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
        OpenPayTN
      </span>
    </div>
  );
};
