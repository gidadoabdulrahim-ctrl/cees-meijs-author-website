import React from 'react';
import { BOOK_DETAILS } from '../types';
import { Play, ShoppingBag, ArrowRight, BookCheck, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EA] to-[#FAF8F5]"
    >
      {/* Subtle archival texture & architectural lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1D1C1A_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Literary Copy & Calls to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Meta badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBE4D8] border border-[#DCD0BF] text-[#63503B] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B38628]" />
              <span>Historische Roman &bull; Cees Meijs</span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1A] leading-[1.12]">
                De Glasfabriek
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#63503B] italic font-normal leading-relaxed">
                Tussen de stilte van het Kempische platteland en de opkomst van Philips in Eindhoven.
              </p>
            </div>

            {/* Verified Lead Synopsis */}
            <p className="text-base sm:text-lg text-[#4B4138] leading-relaxed max-w-2xl font-normal">
              {BOOK_DETAILS.synopsisLead} Dorpeling Peer Verdonk verlaat zijn vertrouwde wereld en 
              vindt werk bij de constructie van de baanbrekende glasfabriek op Strijp S. 
              Een meeslepende ontmoeting tussen twee botsende werelden.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#1D1C1A] hover:bg-[#33302B] text-[#FAF8F5] px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38628]"
              >
                <ShoppingBag size={18} className="text-[#CD9F41]" />
                <span>Bestel het boek</span>
                <ArrowRight size={16} className="text-[#CD9F41]" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#boektrailer"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#EBE4D8]/60 text-[#1D1C1A] border border-[#DCD0BF] hover:border-[#B38628] px-7 py-4 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B38628]"
              >
                <div className="w-6 h-6 rounded-full bg-[#1D1C1A]/10 flex items-center justify-center text-[#1D1C1A]">
                  <Play size={12} className="ml-0.5 fill-current" />
                </div>
                <span>Bekijk de boektrailer</span>
              </a>
            </div>

            {/* Reassurance details */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8C7355]">
              <div className="flex items-center gap-1.5">
                <BookCheck size={14} className="text-[#B38628]" />
                <span>Officiële uitgave &bull; Paperback</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#B38628]" />
                <span>Veilig bestellen via Boekenbestellen.nl</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Book Cover Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-xs sm:max-w-sm w-full group">
              
              {/* Ambient backlight glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#B38628]/15 via-[#8C7355]/10 to-transparent rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Book Container with realistic physical styling */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative rounded-r-md rounded-l-xs overflow-hidden book-cover-3d bg-[#1D1C1A]">
                  <img
                    src={BOOK_DETAILS.coverImageWeb}
                    srcSet={`${BOOK_DETAILS.coverImageWeb} 900w, ${BOOK_DETAILS.coverImage} 1706w`}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                    alt="Officiële boekcover van De Glasfabriek door Cees Meijs"
                    className="w-full h-auto max-h-[500px] object-contain rounded-r-md shadow-2xl block"
                    loading="eager"
                    width={400}
                    height={600}
                  />
                  {/* Spine highlight overlay */}
                  <div className="book-spine-highlight" />
                </div>

                {/* Cover caption / authenticity badge */}
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#8C7355] font-medium bg-[#FAF8F5]/80 px-3 py-1 rounded border border-[#E8DFC9]">
                    Originele omslag &bull; De Glasfabriek
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
