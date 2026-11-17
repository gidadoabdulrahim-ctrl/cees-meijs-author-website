import React from 'react';
import { Mail, BookOpen, MessageSquare, ExternalLink } from 'lucide-react';
import { BOOK_DETAILS } from '../types';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E8DFC9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE4D8] text-[#63503B] text-xs font-semibold uppercase tracking-wider">
            <span>Contact & Informatie</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1C1A] tracking-tight">
            Contact met de auteur
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-1.5" />
          <p className="text-[#63503B] text-base sm:text-lg font-serif italic">
            Voor vragen van lezers, persverzoeken, boekhandels en literaire bijeenkomsten.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-[#FAF8F5] border border-[#DCD0BF] rounded-xl p-8 sm:p-10 shadow-xs space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: General Inquiries */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center border border-[#DCD0BF] text-[#B38628]">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1D1C1A]">
                Lezers & Boekhandels
              </h3>
              <p className="text-sm text-[#4B4138] leading-relaxed">
                Heeft u vragen over <em>De Glasfabriek</em> of wilt u als boekhandel exemplaren opnemen in uw collectie? Bestellingen en distributie verlopen via het officiële verkoopkanaal van Boekenbestellen.nl.
              </p>
            </div>

            {/* Right: Press & Media */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center border border-[#DCD0BF] text-[#B38628]">
                <BookOpen size={18} />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1D1C1A]">
                Pers & Lezingen
              </h3>
              <p className="text-sm text-[#4B4138] leading-relaxed">
                Voor interviewverzoeken, recensie-exemplaren of literaire lezingen rond de historische achtergrond van Eindhoven en De Kempen kunt u tevens terecht bij de uitgeverij.
              </p>
            </div>
          </div>

          {/* Author Public Notice */}
          <div className="p-5 bg-[#F5EFE6] border border-[#E0D5C3] rounded-lg flex items-start gap-3.5 text-xs text-[#63503B]">
            <Mail size={18} className="text-[#B38628] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-[#1D1C1A] block">
                Officiële contactgegevens
              </span>
              <p className="leading-relaxed">
                De rechtstreekse openbare contactgegevens en het persloket voor Cees Meijs worden momenteel ingericht en verschijnen na formele goedkeuring op deze pagina. Voor bestellingen en lezersvragen kunt u direct terecht via de officiële bestelpagina.
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2 text-center sm:text-right">
            <a
              href={BOOK_DETAILS.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1D1C1A] hover:bg-[#33302B] text-[#FAF8F5] px-7 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Ga naar Boekenbestellen.nl</span>
              <ExternalLink size={14} className="text-[#CD9F41]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
