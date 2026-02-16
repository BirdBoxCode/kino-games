"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  explore: [
    { name: "View Catalogue", href: "https://catalog.kinogames.eu/" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Settings", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Social 1", href: "#", icon: "/footer/social-link-1.svg" },
  { name: "Social 2", href: "#", icon: "/footer/social-link-2.svg" },
  { name: "Social 3", href: "#", icon: "/footer/social-link-3.svg" },
  { name: "Social 4", href: "#", icon: "/footer/social-link-4.svg" },
  { name: "Social 5", href: "#", icon: "/footer/social-link-5.svg" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#141414] flex flex-col">
      {/* Footer Top Section */}
      <div className="w-full px-10 md:px-20">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-10 md:py-20">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-[157px] h-[43.2px] relative">
              <Image
                src="/navbarlogo.svg"
                alt="Kino Games Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="font-inter text-[14px] font-medium tracking-[0.5px] text-text-on-dark leading-relaxed">
              Bringing video games into cinemas.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[16px] font-medium tracking-[0.5px] text-text-on-dark">
              EXPLORE
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative w-fit font-inter text-[16px] font-normal tracking-[0.5px] text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 group py-1"
                >
                  {link.name}
                  {/* Gold underline animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[16px] font-medium tracking-[0.5px] text-text-on-dark">
              LEGAL
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative w-fit font-inter text-[16px] font-normal tracking-[0.5px] text-text-on-dark/70 hover:text-text-on-dark transition-colors duration-200 group py-1"
                >
                  {link.name}
                  {/* Gold underline animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[16px] font-medium tracking-[0.5px] text-text-on-dark">
              FOLLOW US
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain brightness-100 group-hover:brightness-[1.2] group-hover:sepia group-hover:saturate-[3] group-hover:hue-rotate-10 transition-all duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#2A2A2A]" />

      {/* Footer Bottom Section */}
      <div className="w-full px-10 md:px-20">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-5 items-center">
          {/* Left: Copyright */}
          <div className="font-inter text-[14px] font-medium tracking-[0.5px] text-text-on-dark/70 text-center md:text-left">
            © 2026 Kino Games.
          </div>

          {/* Right: SpielFabrique */}
          <div className="flex items-center justify-center md:justify-end gap-0">
            <span className="font-inter text-[14px] font-medium tracking-[0.5px] text-text-on-dark/70">
              A project by
            </span>
            <div className="relative w-[100px] h-[32px]">
              <Image
                src="/footer/sf-logo.png"
                alt="SpielFabrique"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
