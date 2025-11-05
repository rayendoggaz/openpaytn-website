import React from 'react';

export const StyleGuide = () => {
  return (
    <div className="w-full bg-white p-8 border border-gray-300 rounded-xl">
      <h2 className="text-[28px] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
        OpenPayTN Style Guide
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo */}
        <div>
          <h3 className="text-[18px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Logo</h3>
          <div className="bg-[#F5F5F5] p-6 rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#D81E2A"/>
                <path d="M20 8C18 8 16 10 16 14C16 18 20 22 20 26C20 22 24 18 24 14C24 10 22 8 20 8Z" fill="white" opacity="0.9"/>
                <circle cx="20" cy="14" r="2.5" fill="white"/>
                <path d="M12 20L16 18M24 18L28 20M20 26L20 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                <circle cx="12" cy="20" r="2" fill="white"/>
                <circle cx="28" cy="20" r="2" fill="white"/>
                <circle cx="20" cy="30" r="2" fill="white"/>
              </svg>
              <span className="text-[22px] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
                OpenPayTN
              </span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="text-[18px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Color Palette</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#D81E2A] rounded-lg border border-gray-200"></div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px' }}>Primary Red</div>
                <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>#D81E2A</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFFFFF] rounded-lg border border-gray-200"></div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px' }}>White</div>
                <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>#FFFFFF</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#222222] rounded-lg border border-gray-200"></div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px' }}>Dark Text</div>
                <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>#222222</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg border border-gray-200"></div>
              <div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px' }}>Light Gray</div>
                <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>#F5F5F5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-[18px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Typography</h3>
          <div className="space-y-3">
            <div>
              <div className="text-[24px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Montserrat Bold</div>
              <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>For headings and titles</div>
            </div>
            <div>
              <div className="text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>Inter Regular</div>
              <div className="text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>For body text and paragraphs</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <h3 className="text-[18px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Buttons</h3>
          <div className="space-y-3">
            <button 
              className="bg-[#D81E2A] text-white px-5 py-2.5 rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600 }}
            >
              Primary Button
            </button>
            <button 
              className="bg-white border-2 border-[#D81E2A] text-[#D81E2A] px-5 py-2.5 rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600 }}
            >
              Secondary Button
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-[16px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Design Specifications</h3>
        <div className="grid grid-cols-2 gap-4 text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div>
            <span className="text-gray-600">Desktop Size:</span>
            <span className="ml-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>1366 × 768px</span>
          </div>
          <div>
            <span className="text-gray-600">Mobile Size:</span>
            <span className="ml-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>375 × 812px</span>
          </div>
          <div>
            <span className="text-gray-600">Border Radius:</span>
            <span className="ml-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>8-12px</span>
          </div>
          <div>
            <span className="text-gray-600">Button Padding:</span>
            <span className="ml-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>12px × 20px</span>
          </div>
        </div>
      </div>
    </div>
  );
};
