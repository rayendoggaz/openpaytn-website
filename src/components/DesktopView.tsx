import image_dd75335d40754963801e86533eaf3bcf149ddbbb from "figma:asset/dd75335d40754963801e86533eaf3bcf149ddbbb.png";
import React from "react";
import { Logo } from "./Logo";
import {
  Globe,
  Menu,
  ChevronRight,
  Shield,
  Users,
  Briefcase,
  FileText,
  Target,
  BarChart,
  QrCode,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  Moon,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const DesktopView = () => {
  return (
    <div
      className="w-full min-h-screen bg-white overflow-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top Bar */}
      <div className="bg-[#222222] text-white px-8 py-1.5 flex justify-between items-center text-[12px]">
        <div className="flex items-center gap-2">
          <Moon className="w-3.5 h-3.5 text-[#D81E2A]" />
          <span style={{ fontFamily: "Inter, sans-serif" }}>
            Tunisia
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "Inter, sans-serif" }}>
            Language:
          </span>
          <button
            className="hover:text-[#D81E2A] transition-colors"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
            }}
          >
            EN
          </button>
          <span>|</span>
          <button
            className="hover:text-[#D81E2A] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            AR
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="flex items-center gap-8">
            <a
              href="#home"
              className="text-[#222222] hover:text-[#D81E2A] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#222222] hover:text-[#D81E2A] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              About
            </a>
            <a
              href="#work"
              className="text-[#222222] hover:text-[#D81E2A] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              Our Work
            </a>
            <a
              href="#involved"
              className="text-[#222222] hover:text-[#D81E2A] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              Get Involved
            </a>
            <a
              href="#contact"
              className="text-[#222222] hover:text-[#D81E2A] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              Contact
            </a>
            <button
              className="bg-[#D81E2A] text-white px-5 py-2.5 rounded-lg hover:bg-[#B91822] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Join the Pilot
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#F5F5F5] px-8 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#D81E2A" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
            />
          </svg>
        </div>

        <div className="relative max-w-[1280px] mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-[52px] mb-4 leading-tight"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#222222",
              }}
            >
              Opening Tunisia to the Global Economy
            </h1>
            <p
              className="text-[20px] mb-8 text-[#444444]"
              style={{
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Safe, legal ways to send & receive international
              payments
            </p>
            <div className="flex gap-4">
              <button
                className="bg-[#D81E2A] text-white px-6 py-3 rounded-lg hover:bg-[#B91822] transition-colors flex items-center gap-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Join the 200-User Pilot
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                className="bg-white border-2 border-[#D81E2A] text-[#D81E2A] px-6 py-3 rounded-lg hover:bg-[#D81E2A] hover:text-white transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Learn how it works
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div
                  className="text-[32px] text-[#D81E2A] mb-1"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  200
                </div>
                <div
                  className="text-[13px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Pilot Slots
                </div>
              </div>
              <div>
                <Briefcase className="w-10 h-10 text-[#D81E2A] mx-auto mb-1" />
                <div
                  className="text-[13px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Bank + Fintech
                </div>
              </div>
              <div>
                <Shield className="w-10 h-10 text-[#D81E2A] mx-auto mb-1" />
                <div
                  className="text-[13px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Escrow Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="text-[36px] mb-6 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#222222",
            }}
          >
            Who we are
          </h2>
          <p
            className="text-[18px] text-center max-w-[900px] mx-auto mb-10 text-[#444444]"
            style={{
              fontFamily: "Inter, sans-serif",
              lineHeight: "1.7",
            }}
          >
            OpenPayTN helps Tunisians access international
            payments by running supervised pilots with banks and
            fintechs, collecting evidence, and advocating for
            clear, legal pathways.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#D81E2A]" />
              </div>
              <h3
                className="text-[18px] mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Safety
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#D81E2A]" />
              </div>
              <h3
                className="text-[18px] mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Practicality
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D81E2A] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#D81E2A]" />
              </div>
              <h3
                className="text-[18px] mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Inclusion
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-12 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="text-[36px] mb-10 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#222222",
            }}
          >
            What we do
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 text-[#D81E2A] mb-4" />
              <h3
                className="text-[20px] mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Legal Research & Policy
              </h3>
              <p
                className="text-[15px] text-[#666] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                Analyzing regulations and building legal
                frameworks for safe payment access.
              </p>
              <a
                href="#"
                className="text-[#D81E2A] text-[14px] flex items-center gap-1 hover:gap-2 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-[#D81E2A] mb-4" />
              <h3
                className="text-[20px] mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Pilot Projects
              </h3>
              <p
                className="text-[15px] text-[#666] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                Running monitored pilots with 200 users, banks,
                and fintech partners.
              </p>
              <a
                href="#"
                className="text-[#D81E2A] text-[14px] flex items-center gap-1 hover:gap-2 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-[#D81E2A] mb-4" />
              <h3
                className="text-[20px] mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Community & Support
              </h3>
              <p
                className="text-[15px] text-[#666] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                Supporting freelancers and businesses with
                resources and advocacy.
              </p>
              <a
                href="#"
                className="text-[#D81E2A] text-[14px] flex items-center gap-1 hover:gap-2 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                Read more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="text-[36px] mb-12 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#222222",
            }}
          >
            How it works
          </h2>

          <div className="relative">
            <div
              className="absolute top-12 left-0 right-0 h-0.5 bg-[#D81E2A] opacity-20"
              style={{
                width: "calc(100% - 200px)",
                marginLeft: "100px",
              }}
            ></div>

            <div className="grid grid-cols-3 gap-8 relative">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <h3
                  className="text-[20px] mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    color: "#222222",
                  }}
                >
                  Design & Approve
                </h3>
                <p
                  className="text-[14px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Legal brief + partners
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3
                  className="text-[20px] mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    color: "#222222",
                  }}
                >
                  Pilot & Monitor
                </h3>
                <p
                  className="text-[14px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Escrow + monitoring
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-[#D81E2A] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <BarChart className="w-12 h-12 text-white" />
                </div>
                <h3
                  className="text-[20px] mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    color: "#222222",
                  }}
                >
                  Report & Scale
                </h3>
                <p
                  className="text-[14px] text-[#666]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Present results to regulators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="px-8 py-12 bg-[#D81E2A]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[40px] text-white mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                }}
              >
                Want to join the pilot?
              </h2>
              <p
                className="text-[18px] text-white opacity-90"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Scan the QR or sign up now — limited to 200
                participants.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  className="bg-white text-[#D81E2A] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Join the Pilot
                </button>
                <span
                  className="text-white text-[14px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  contact@openpaytn.org
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl">
                <img
                  src={
                    image_dd75335d40754963801e86533eaf3bcf149ddbbb
                  }
                  alt="OpenPayTN QR Code"
                  className="w-40 h-40 object-contain p-[0px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-12 bg-[#F5F5F5]">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="text-[32px] mb-8 text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              color: "#222222",
            }}
          >
            Why it matters
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]"
                  />
                ))}
              </div>
              <p
                className="text-[15px] text-[#444] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                "As a freelancer, I've lost clients because I
                can't receive payments legally. This could
                change everything."
              </p>
              <p
                className="text-[13px] text-[#999]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                — Freelance Designer, Tunis
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]"
                  />
                ))}
              </div>
              <p
                className="text-[15px] text-[#444] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                "Having a safe, legal way to work with
                international clients would unlock so many
                opportunities for Tunisians."
              </p>
              <p
                className="text-[13px] text-[#999]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                — Software Developer, Sfax
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D81E2A] text-[#D81E2A]"
                  />
                ))}
              </div>
              <p
                className="text-[15px] text-[#444] mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                "We need transparent solutions that work within
                the law. OpenPayTN is building exactly that."
              </p>
              <p
                className="text-[13px] text-[#999]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                — Small Business Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] text-white px-8 py-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4
                className="text-[16px] mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                About
              </h4>
              <p
                className="text-[14px] text-gray-400"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                OpenPayTN creates safe, legal access to
                international payments for Tunisians.
              </p>
            </div>

            <div>
              <h4
                className="text-[16px] mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-[14px] text-gray-400 hover:text-[#D81E2A] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-gray-400 hover:text-[#D81E2A] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-gray-400 hover:text-[#D81E2A] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Our Work
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-gray-400 hover:text-[#D81E2A] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Get Involved
                </a>
              </div>
            </div>

            <div>
              <h4
                className="text-[16px] mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Contact
              </h4>
              <div
                className="space-y-2 text-[14px] text-gray-400"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p>contact@openpaytn.org</p>
              </div>
            </div>

            <div>
              <h4
                className="text-[16px] mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Follow Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/openpaytn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#333] rounded-full flex items-center justify-center hover:bg-[#D81E2A] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p
              className="text-[12px] text-gray-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2025 OpenPayTN — Registered as student NGO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};