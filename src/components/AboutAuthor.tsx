import React from 'react';
import { BOOK_DETAILS } from '../types';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="over-de-auteur" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8DFC9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE4D8] text-[#63503B] text-xs font-semibold uppercase tracking-wider">
            <span>De Auteur</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1C1A] tracking-tight">
            Over Cees Meijs
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-1.5" />
        </div>

        {/* Editorial Layout: Portrait + Verified Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="relative rounded-md overflow-hidden bg-[#F2ECE2] p-2 border border-[#DCD0BF] shadow-sm">
                <div className="relative aspect-[427/560] w-full overflow-hidden rounded-xs bg-[#E8DFC9]">
                  <img
                    src={BOOK_DETAILS.authorImage}
                    alt="Portret van auteur Cees Meijs"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width={427}
                    height={560}
                  />
                </div>
              </div>

              {/* Verified Author Caption */}
              <div className="mt-3 text-center">
                <span className="font-serif text-lg font-bold text-[#1D1C1A] block">
                  Cees Meijs
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7355] font-medium block mt-0.5">
                  Auteur van De Glasfabriek
                </span>
              </div>
            </div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-5 text-[#33302B] leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-[#1D1C1A] font-medium italic leading-snug">
              Bouwkunde, heemkunde en de fascinatie voor het industriële tijdperk.
            </p>

            <p>
              {BOOK_DETAILS.authorBioParagraph1}
            </p>

            <p>
              {BOOK_DETAILS.authorBioParagraph2}
            </p>

            <div className="pt-2">
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B38628] hover:text-[#8C651A] transition-colors group"
              >
                <span>Bestel De Glasfabriek van Cees Meijs</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
