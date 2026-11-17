import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBook } from './components/AboutBook';
import { TrailerSection } from './components/TrailerSection';
import { HistoricalContext } from './components/HistoricalContext';
import { AboutAuthor } from './components/AboutAuthor';
import { OrderSection } from './components/OrderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D1C1A] selection:bg-[#B38628]/25 selection:text-[#1D1C1A] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About The Book */}
        <AboutBook />

        {/* Cinematic Trailer Presentation */}
        <TrailerSection />

        {/* Historical Context (Eindhoven & De Kempen) */}
        <HistoricalContext />

        {/* About The Author (Cees Meijs) */}
        <AboutAuthor />

        {/* Direct Ordering Section */}
        <OrderSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Professional Literary Footer */}
      <Footer />
    </div>
  );
};

export default App;
