import React from 'react';
import { Logo } from './Logo';
import { Moon, Menu, ChevronRight, Shield, Users, Briefcase, FileText, Target, BarChart, QrCode, Facebook, Instagram, Linkedin, Star } from 'lucide-react';
import logoImage from 'figma:asset/4a40de7142e78c79ebd94d6ac70a0ea265631112.png';

export const MobileView = () => {
  return (
    <div className="w-[375px] h-[812px] bg-white overflow-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Top Bar */}
      <div className="bg-[#222222] text-white px-4 py-1.5 flex justify-between items-center text-[11px]">
        <div className="flex items-center gap-1.5">
          <Moon className="w-3 h-3 text-[#D81E2A]" />
          <span style={{ fontFamily: 'Inter, sans-serif' }}>Tunisia</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:text-[#D81E2A]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>EN</button>
          <span>|</span>
          <button className="hover:text-[#D81E2A]" style={{ fontFamily: 'Inter, sans-serif' }}>AR</button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="OpenPayTN Logo" className="w-9 h-9 object-contain" />
            <span className="text-[18px] tracking-tight leading-none" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
              OpenPayTN
            </span>
          </div>
          <button className="p-2">
            <Menu className="w-6 h-6 text-[#222222]" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#F5F5F5] px-4 py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-mobile" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="#D81E2A"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-mobile)"/>
          </svg>
        </div>
        
        <div className="relative">
          <h1 className="text-[32px] mb-3 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
            Opening Tunisia to the Global Economy
          </h1>
          <p className="text-[16px] mb-6 text-[#444444]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
            Safe, legal ways to send & receive international payments
          </p>
          
          <div className="bg-white rounded-xl p-4 mb-6 shadow-lg">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[24px] text-[#D81E2A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>200</div>
                <div className="text-[11px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Pilot Slots</div>
              </div>
              <div>
                <Briefcase className="w-8 h-8 text-[#D81E2A] mx-auto mb-1" />
                <div className="text-[11px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Bank + Fintech</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-[#D81E2A] mx-auto mb-1" />
                <div className="text-[11px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>Escrow Protected</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              className="w-full bg-[#D81E2A] text-white px-5 py-3 rounded-lg hover:bg-[#B91822] transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600 }}
            >
              Join the 200-User Pilot
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              className="w-full bg-white border-2 border-[#D81E2A] text-[#D81E2A] px-5 py-3 rounded-lg hover:bg-[#D81E2A] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600 }}
            >
              Learn how it works
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-10 bg-white">
        <h2 className="text-[28px] mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
          Who we are
        </h2>
        <p className="text-[15px] text-center mb-8 text-[#444444]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
          OpenPayTN helps Tunisians access international payments by running supervised pilots with banks and fintechs, collecting evidence, and advocating for clear, legal pathways.
        </p>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-14 h-14 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-7 h-7 text-[#D81E2A]" />
            </div>
            <h3 className="text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Safety</h3>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-7 h-7 text-[#D81E2A]" />
            </div>
            <h3 className="text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Practicality</h3>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-7 h-7 text-[#D81E2A]" />
            </div>
            <h3 className="text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>Inclusion</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-10 bg-[#F5F5F5]">
        <h2 className="text-[28px] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
          What we do
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <FileText className="w-10 h-10 text-[#D81E2A] mb-3" />
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Legal Research & Policy
            </h3>
            <p className="text-[14px] text-[#666] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              Analyzing regulations and building legal frameworks for safe payment access.
            </p>
            <a href="#" className="text-[#D81E2A] text-[13px] flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Read more <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md">
            <Briefcase className="w-10 h-10 text-[#D81E2A] mb-3" />
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Pilot Projects
            </h3>
            <p className="text-[14px] text-[#666] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              Running monitored pilots with 200 users, banks, and fintech partners.
            </p>
            <a href="#" className="text-[#D81E2A] text-[13px] flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Read more <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md">
            <Users className="w-10 h-10 text-[#D81E2A] mb-3" />
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Community & Support
            </h3>
            <p className="text-[14px] text-[#666] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              Supporting freelancers and businesses with resources and advocacy.
            </p>
            <a href="#" className="text-[#D81E2A] text-[13px] flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Read more <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-10 bg-white">
        <h2 className="text-[28px] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
          How it works
        </h2>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Design & Approve
            </h3>
            <p className="text-[13px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Legal brief + partners
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Pilot & Monitor
            </h3>
            <p className="text-[13px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Escrow + monitoring
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[18px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#222222' }}>
              Report & Scale
            </h3>
            <p className="text-[13px] text-[#666]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Present results to regulators
            </p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="px-4 py-10 bg-[#D81E2A]">
        <div className="text-center">
          <h2 className="text-[32px] text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Want to join the pilot?
          </h2>
          <p className="text-[15px] text-white opacity-90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Scan the QR or sign up now — limited to 200 participants.
          </p>
          
          <div className="bg-white p-4 rounded-xl inline-block mb-6">
            <QrCode className="w-32 h-32 text-[#222222]" />
          </div>

          <div className="space-y-3">
            <button 
              className="w-full bg-white text-[#D81E2A] px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600 }}
            >
              Join the Pilot
            </button>
            <p className="text-white text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>contact@openpaytn.org</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-10 bg-[#F5F5F5]">
        <h2 className="text-[28px] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#222222' }}>
          Why it matters
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]" />
              ))}
            </div>
            <p className="text-[14px] text-[#444] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              "As a freelancer, I've lost clients because I can't receive payments legally. This could change everything."
            </p>
            <p className="text-[12px] text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>— Freelance Designer, Tunis</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]" />
              ))}
            </div>
            <p className="text-[14px] text-[#444] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              "Having a safe, legal way to work with international clients would unlock so many opportunities for Tunisians."
            </p>
            <p className="text-[12px] text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>— Software Developer, Sfax</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]" />
              ))}
            </div>
            <p className="text-[14px] text-[#444] mb-3" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              "We need transparent solutions that work within the law. OpenPayTN is building exactly that."
            </p>
            <p className="text-[12px] text-[#999]" style={{ fontFamily: 'Inter, sans-serif' }}>— Small Business Owner</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] text-white px-4 py-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-[15px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>About</h4>
            <p className="text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
              OpenPayTN creates safe, legal access to international payments for Tunisians.
            </p>
          </div>
          
          <div>
            <h4 className="text-[15px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Home</a>
              <a href="#" className="block text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>About</a>
              <a href="#" className="block text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Our Work</a>
              <a href="#" className="block text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Get Involved</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[15px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Contact</h4>
            <div className="space-y-2 text-[13px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>contact@openpaytn.org</p>
              <p>+216 XX XXX XXX</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[15px] mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#D81E2A] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/openpaytn/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#D81E2A] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#D81E2A] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-[11px] text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 OpenPayTN — Registered as student NGO (placeholder)
          </p>
        </div>
      </footer>
    </div>
  );
};
