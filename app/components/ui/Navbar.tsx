"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Business Model", href: "/#business-model" },
  { name: "Partners", href: "/#partners" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[120px] bg-transparent border-b-[2px] border-[#2A2A2A] flex items-center justify-center z-50 px-4 md:px-12 backdrop-blur-sm">
        <div className="w-full max-w-[1440px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <div className="w-[157px] h-[43.2px] relative">
              <Image
                src="/navbarlogo.svg"
                alt="Kino Games Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-inter font-medium text-[16px] text-text-on-dark tracking-[2px] hover:opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="flex items-center gap-[10px] px-[9px] py-[10px] bg-accent-gold border border-accent-gold rounded-[6px] text-text-on-light font-inter font-medium text-[16px] tracking-[2px] hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-text-on-dark p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg-dark z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-inter font-medium text-[24px] text-text-on-dark tracking-[2px] hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center gap-[10px] px-[20px] py-[15px] bg-accent-teal border border-accent-teal rounded-[6px] text-text-on-light font-inter font-medium text-[18px] tracking-[2px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
