"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about", index: 1, type: 'cinematic' },
  { name: "How It Works", href: "/#how-it-works", index: 3, type: 'cinematic' },
  { name: "Our Model", href: "/#our-model", index: 5, type: 'cinematic' },
  { name: "Partners", href: "/#partners", index: -1, type: 'normal' },
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

  const goToSection = (index: number) => {
    window.dispatchEvent(new CustomEvent('cinematic-nav', { 
      detail: { index, type: 'cinematic' } 
    }));
  };

  const handleNavClick = (e: React.MouseEvent, link: { index: number; type: string; name: string; href: string }) => {
    e.preventDefault(); // Prevent default anchor jump
    setIsOpen(false);

    if (link.type === 'cinematic') {
      goToSection(link.index);
    } else if (link.type === 'normal') {
      // Normal scroll for non-cinematic sections (Partners, etc.)
      const targetId = link.href.replace('/#', '');
      
      window.dispatchEvent(new CustomEvent('cinematic-nav', { 
        detail: {
          type: 'scroll-to-target',
          targetId
        } 
      }));
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Logo click returns to Hero (Cinematic 0)
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    goToSection(0);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[120px] bg-transparent border-b-[1px] border-[#2A2A2A] flex items-center justify-center z-[999] px-4 md:px-12 backdrop-blur-sm">
        <div className="w-full max-w-[1440px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="relative z-50">
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
                onClick={(e) => handleNavClick(e, link)}
                className="relative font-inter font-medium text-[16px] text-text-on-dark tracking-[2px] group py-1"
              >
                {link.name}
                {/* Right-to-left underline animation */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="flex items-center gap-[10px] px-[18px] py-[10px] bg-transparent border-2 border-accent-gold rounded-[6px] text-text-on-dark font-inter font-medium text-[16px] tracking-[2px] hover:bg-accent-gold hover:text-text-on-light transition-all duration-300"
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
            className="fixed inset-0 bg-bg-dark z-[200] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="relative font-inter font-medium text-[24px] text-text-on-dark tracking-[2px] group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="mt-4 flex items-center gap-[10px] px-[24px] py-[12px] bg-transparent border-2 border-accent-gold rounded-[6px] text-text-on-dark font-inter font-medium text-[18px] tracking-[2px] hover:bg-accent-gold hover:text-text-on-light transition-all duration-300"
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
