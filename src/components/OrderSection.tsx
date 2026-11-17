import React from 'react';
import { BOOK_DETAILS } from '../types';
import { ShoppingBag, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';

export const OrderSection: React.FC = () => {
  return (
    <section id="bestellen" className="py-24 bg-[#1D1C1A] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D1C1A] via-[#24221F] to-[#1D1C1A] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33302B] text-[#CD9F41] text-xs font-semibold uppercase tracking-wider border border-[#4B4138]">
            <span>Bestelinformatie</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            Bestel De Glasfabriek
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-2" />
          <p className="text-[#C5BDB0] text-lg font-serif italic">
            Haal dit meeslepende stuk Brabantse geschiedenis vandaag nog in huis.
          </p>
        </div>

        {/* Purchase Card Box */}
        <div className="bg-[#24221F] border border-[#443E38] rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left: Book Cover Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[260px] sm:max-w-[280px]">
                <div className="book-cover-3d rounded-r-md rounded-l-xs overflow-hidden shadow-2xl bg-[#141312]">
                  <img
                    src={BOOK_DETAILS.coverImageWeb}
                    srcSet={`${BOOK_DETAILS.coverImageWeb} 900w, ${BOOK_DETAILS.coverImage} 1706w`}
                    sizes="(max-width: 640px) 240px, 280px"
                    alt="Boekcover De Glasfabriek van Cees Meijs"
                    className="w-full h-auto object-contain rounded-r-md"
                    loading="lazy"
                    width={320}
                    height={480}
                  />
                  <div className="book-spine-highlight" />
                </div>
              </div>
            </div>

            {/* Right: Order details & verified direct action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#CD9F41] font-semibold">
                  Officiële Uitgave
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5] mt-1">
                  De Glasfabriek
                </h3>
                <p className="text-[#C5BDB0] text-sm mt-1">
                  Door <span className="text-[#FAF8F5] font-semibold">Cees Meijs</span>
                </p>
              </div>

              <p className="text-[#C5BDB0] text-base leading-relaxed">
                Beleef het verhaal van Peer Verdonk en ontdek hoe de botsing tussen traditie en industriële vernieuwing de levens van gewone mensen in Eindhoven voorgoed veranderde.
              </p>

              {/* Verified Product Facts */}
              <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-[#3B3630] text-xs">
                <div>
                  <span className="text-[#8C8275] block">Formaat:</span>
                  <span className="text-[#FAF8F5] font-medium">Paperback</span>
                </div>
                <div>
                  <span className="text-[#8C8275] block">Taal:</span>
                  <span className="text-[#FAF8F5] font-medium">Nederlands</span>
                </div>
                <div>
                  <span className="text-[#8C8275] block">ISBN:</span>
                  <span className="text-[#FAF8F5] font-mono">{BOOK_DETAILS.isbn}</span>
                </div>
                <div>
                  <span className="text-[#8C8275] block">Distributie:</span>
                  <span className="text-[#FAF8F5] font-medium">Boekenbestellen.nl</span>
                </div>
              </div>

              {/* Main Order CTA Button */}
              <div className="pt-2">
                <a
                  href={BOOK_DETAILS.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B38628] hover:bg-[#CD9F41] text-[#1D1C1A] px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#CD9F41]"
                >
                  <ShoppingBag size={18} />
                  <span>Bestel De Glasfabriek</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Reassurance notes */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#8C8275]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#CD9F41]" />
                  <span>Officiële verkoop via Boekenbestellen.nl</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={16} className="text-[#CD9F41]" />
                  <span>Betrouwbare bestel- en betaalafhandeling</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
