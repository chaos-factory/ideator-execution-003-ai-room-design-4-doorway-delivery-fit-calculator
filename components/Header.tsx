'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { DoorIcon, MenuIcon, CloseIcon } from './icons/Icons';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Example Fit Pass', href: '/pdfs/example-fit-pass.pdf' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'For Movers & Buildings', href: '#for-movers' },
    { text: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`
        sticky top-0 z-40 bg-white transition-shadow
        ${isSticky ? 'shadow-md' : ''}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-primary transition-colors">
            <DoorIcon size={28} className="text-primary" />
            <span>Fit Pass</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/wizard">
              <Button variant="primary">Start Fit Check</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <Link href="/wizard" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  Start Fit Check
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sticky CTA */}
      {isSticky && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-50">
          <Link href="/wizard">
            <Button variant="primary" className="w-full">
              Start Fit Check
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
