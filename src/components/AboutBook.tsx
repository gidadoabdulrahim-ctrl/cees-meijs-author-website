import React from 'react';
import { BOOK_DETAILS } from '../types';
import { Compass, Factory, Users, Sparkles, BookOpen } from 'lucide-react';

export const AboutBook: React.FC = () => {
  const narrativePillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#B38628]" />,
      title: 'Het Kempische dorp',
      desc: 'Het stille platteland waar de tijd stil lijkt te staan en eenvoudige woningen het landschap bepalen.'
    },
    {
      icon: <Factory className="w-5 h-5 text-[#B38628]" />,
      title: 'De bouw op Strijp S',
      desc: 'De industriële activiteiten in Eindhoven, de oprichting van de Philips glasfabriek en de bouw van Philipswoningen.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#B38628]" />,
      title: 'Vriendschap & Sija',
      desc: 'Nieuwe vriendschappen in het stadspension en de hoopvolle toekomstplannen samen met zijn vriendin Sija.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#B38628]" />,
      title: 'Twee botsende werelden',
      desc: 'De ontmoeting tussen het agrarische boerenleven en de deftige villa’s van welvarende industriële pioniers.'
    }
  ];

  return (
    <section id="het-boek" className="py-20 md:py-28 bg-[#FAF8F5] relative border-t border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE4D8] text-[#63503B] text-xs font-semibold uppercase tracking-wider">
            <span>Het Boek</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1C1A] tracking-tight">
            Twee werelden ontmoeten elkaar
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-1.5" />
          <p className="text-[#63503B] text-lg font-serif italic">
            De historische roman van Cees Meijs
          </p>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Main Story Narrative strictly based on verified synopsis */}
          <div className="lg:col-span-7 space-y-5 text-[#33302B] leading-relaxed text-base sm:text-lg">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#B38628] first-letter:leading-none">
              De afstand tussen het stille Kempische dorp waar de tijd stil lijkt te staan en de bruisende stad Eindhoven waar Philips aan een imperium bouwt, is groot. Letterlijk en figuurlijk.
            </p>
            
            <p>
              Dorpeling Peer zoekt zijn toekomst in de stad. Twee werelden ontmoeten elkaar; het rustige boerenleven en de industriële activiteiten van de nieuwe ondernemingen. De eenvoudige woningen op het platteland en de deftige villa’s van rijke ondernemers.
            </p>

            <blockquote className="my-5 pl-5 border-l-2 border-[#B38628] italic font-serif text-xl text-[#1D1C1A] bg-[#F4EFE6]/70 py-4 pr-4 rounded-r-md">
              &ldquo;Hoewel Peer Verdonk niets weet van het moderne leven vindt hij werk bij de bouw van de glasfabriek op Strijp S en bij de bouw van Philipswoningen.&rdquo;
            </blockquote>

            <p>
              Hij maakt vrienden in het pension waar hij komt te wonen. De toekomst samen met zijn vriendin Sija lijkt rooskleurig. Maar het pakt anders uit dan hij had gedacht.
            </p>
            
            <div className="pt-2">
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8C651A] hover:text-[#1D1C1A] font-semibold text-xs uppercase tracking-wider group"
              >
                <span>Bestel het boek via Boekenbestellen.nl</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Book Specifications Box */}
          <div className="lg:col-span-5 bg-[#F4EFE6] border border-[#DCD0BF] rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C7355] font-semibold block mb-1">
                Boekgegevens
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1D1C1A]">
                De Glasfabriek
              </h3>
              <p className="text-xs text-[#63503B]">Cees Meijs</p>
            </div>

            <div className="space-y-3.5 border-t border-b border-[#DCD0BF]/70 py-4 text-sm">
              <div className="flex justify-between items-center text-[#4B4138]">
                <span className="font-medium">Genre</span>
                <span className="text-[#1D1C1A] font-semibold">{BOOK_DETAILS.genre}</span>
              </div>
              <div className="flex justify-between items-center text-[#4B4138]">
                <span className="font-medium">Uitvoering</span>
                <span className="text-[#1D1C1A] font-semibold">{BOOK_DETAILS.format}</span>
              </div>
              <div className="flex justify-between items-center text-[#4B4138]">
                <span className="font-medium">Taal</span>
                <span className="text-[#1D1C1A] font-semibold">{BOOK_DETAILS.language}</span>
              </div>
              <div className="flex justify-between items-center text-[#4B4138]">
                <span className="font-medium">ISBN</span>
                <span className="text-[#1D1C1A] font-mono text-xs">{BOOK_DETAILS.isbn}</span>
              </div>
              <div className="flex justify-between items-center text-[#4B4138]">
                <span className="font-medium">Historische setting</span>
                <span className="text-[#1D1C1A] text-right font-medium">Eindhoven & De Kempen</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={BOOK_DETAILS.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1D1C1A] hover:bg-[#33302B] text-[#FAF8F5] py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <BookOpen size={15} className="text-[#CD9F41]" />
                <span>Bestel De Glasfabriek</span>
              </a>
            </div>

          </div>

        </div>

        {/* Narrative Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {narrativePillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#FAF8F5] p-5 rounded-lg border border-[#E8DFC9] hover:border-[#B38628]/60 transition-colors space-y-2.5 shadow-xs"
            >
              <div className="w-9 h-9 rounded-full bg-[#EBE4D8] flex items-center justify-center border border-[#DCD0BF]">
                {pillar.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1D1C1A]">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#63503B] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
