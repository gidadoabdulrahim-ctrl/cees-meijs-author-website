import React from 'react';
import { BOOK_DETAILS, NAV_ITEMS } from '../types';
import { ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-[#A0988C] border-t border-[#292622] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#292622]">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5] block">
              Cees Meijs
            </span>
            <p className="font-serif text-lg text-[#CD9F41] italic">
              De Glasfabriek
            </p>
            <p className="text-xs text-[#8C8275] max-w-sm leading-relaxed">
              Een historische roman over de Brabantse Kempen en de bouw van de Philips glasfabriek in Eindhoven.
            </p>
          </div>

          {/* Quick navigation links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold block mb-2">
              Navigatie
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#FAF8F5] transition-colors py-1 focus-visible:outline-none focus-visible:text-[#CD9F41]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct purchase & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold block mb-2">
                Boek Bestellen
              </span>
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#CD9F41] hover:text-[#FAF8F5] font-semibold transition-colors"
              >
                <span>Boekenbestellen.nl</span>
                <ExternalLink size={13} />
              </a>
              <p className="text-[11px] text-[#6E665C] mt-1">
                ISBN: {BOOK_DETAILS.isbn} &bull; Paperback
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#8C8275] hover:text-[#FAF8F5] transition-colors py-1 group"
                aria-label="Terug naar boven"
              >
                <div className="w-6 h-6 rounded-full bg-[#24221F] group-hover:bg-[#33302B] flex items-center justify-center transition-colors">
                  <ArrowUp size={12} className="text-[#CD9F41]" />
                </div>
                <span>Naar boven</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E665C] gap-4">
          <p>
            &copy; {currentYear} Cees Meijs. Alle rechten voorbehouden.
          </p>
          <p className="text-[11px] text-[#554F47]">
            Officiële auteurswebsite voor &lsquo;De Glasfabriek&rsquo;
          </p>
        </div>

      </div>
    </footer>
  );
};
