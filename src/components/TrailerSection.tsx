import React from 'react';
import { Film, ExternalLink, Sparkles } from 'lucide-react';
import { BOOK_DETAILS } from '../types';

export const TrailerSection: React.FC = () => {
  return (
    <section id="boektrailer" className="py-20 md:py-28 bg-[#1D1C1A] text-[#FAF8F5] relative overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33302B] text-[#CD9F41] text-xs font-semibold uppercase tracking-wider border border-[#4B4138]">
            <Film size={14} />
            <span>Officiële Boektrailer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            Ervaar de sfeer van De Glasfabriek
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-1.5" />
          <p className="text-[#C5BDB0] text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
            Bekijk de cinematografische boektrailer van Cees Meijs en proef de sfeer van het industriële Eindhoven.
          </p>
        </div>

        {/* Video Player Container (Google Drive Responsive Embed) */}
        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden border border-[#4B4138] bg-[#121110] shadow-2xl">
          <div className="relative aspect-video w-full bg-[#141312]">
            <iframe
              src={BOOK_DETAILS.trailerEmbedUrl}
              title="De Glasfabriek — Officiële Boektrailer"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Fallback Direct Link & Action Toolbar */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-[#24221F] border border-[#3B3630]">
          <div className="flex items-center gap-2 text-xs text-[#C5BDB0]">
            <Sparkles size={16} className="text-[#CD9F41]" />
            <span>Officiële trailer met geluid &bull; Volledig scherm beschikbaar</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BOOK_DETAILS.trailerDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#CD9F41] hover:text-[#FAF8F5] transition-colors py-2 px-3.5 rounded border border-[#4B4138] hover:border-[#CD9F41]"
            >
              <span>Direct bekijken op Google Drive</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={BOOK_DETAILS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B38628] hover:bg-[#CD9F41] text-[#1D1C1A] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors shadow-xs"
            >
              <span>Bestel het boek</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
