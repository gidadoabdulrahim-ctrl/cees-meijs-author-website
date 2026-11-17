import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BOOK_DETAILS } from '../types';
import { Menu, X, BookOpen, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFC9]' 
          : 'bg-[#FAF8F5]/70 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a 
            href="#home" 
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38628] rounded px-1"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1D1C1A] group-hover:text-[#B38628] transition-colors">
              Cees Meijs
            </span>
            <span className="text-xs uppercase tracking-widest text-[#8C7355] font-medium">
              De Glasfabriek
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Hoofdnavigatie">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#4B4138] hover:text-[#1D1C1A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B38628] hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38628] rounded-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href={BOOK_DETAILS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1D1C1A] hover:bg-[#33302B] text-[#FAF8F5] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B38628]"
            >
              <span>Bestel boek</span>
              <ExternalLink size={13} className="text-[#CD9F41]" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1D1C1A] hover:text-[#B38628] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38628] rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-[#E8DFC9] bg-[#FAF8F5] overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#1D1C1A] hover:text-[#B38628] py-1 border-b border-[#FAF8F5] hover:border-[#E8DFC9] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={BOOK_DETAILS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1D1C1A] text-[#FAF8F5] py-3 rounded-md text-sm font-semibold uppercase tracking-wider"
            >
              <BookOpen size={16} className="text-[#CD9F41]" />
              <span>Bestel het boek</span>
              <ExternalLink size={14} className="text-[#CD9F41]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
