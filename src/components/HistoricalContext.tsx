import React from 'react';
import { Landmark, Flame, Home, Building2 } from 'lucide-react';

export const HistoricalContext: React.FC = () => {
  const historicalFacets = [
    {
      year: '1916',
      title: 'De bouw van de Philips Glasfabriek',
      icon: <Flame className="w-5 h-5 text-[#B38628]" />,
      summary: 'Tijdens de Eerste Wereldoorlog raakte de toevoer van glasballons voor gloeilampen vanuit Duitsland gestremd. Philips besloot daarom op Strijp S in Eindhoven een eigen glasfabriek te bouwen. Deze industriële reuzenstap veranderde de skyline en trok talloze arbeiders aan.'
    },
    {
      year: '1910–1920',
      title: 'De metamorfose van Eindhoven',
      icon: <Building2 className="w-5 h-5 text-[#B38628]" />,
      summary: 'Eindhoven transformeerde in hoog tempo van een rustige provinciestad tot een bruisend industrieel knooppunt. De opkomst van fabrieken bracht moderne machines, spoorlijnen en een ongekende economische bedrijvigheid met zich mee.'
    },
    {
      year: 'Kempen',
      title: 'De Brabantse Kempen & het platteland',
      icon: <Landmark className="w-5 h-5 text-[#B38628]" />,
      summary: 'In schril contrast met de stad stonden de omliggende Kempische dorpen. Hier leefde men in hechte dorpsgemeenschappen, dicht bij de natuur en de kerk. Voor veel dorpsbewoners zoals Peer was de stap naar de industriestad een sprong in het onbekende.'
    },
    {
      year: 'Sociaal',
      title: 'Pensions & Philipswoningen',
      icon: <Home className="w-5 h-5 text-[#B38628]" />,
      summary: 'Om de toevloed van jonge arbeiders te huisvesten, verrezen er nieuwe wijken met moderne arbeiderswoningen en ontstonden er pensions waar werknemers samenleefden. Het dagelijks leven balanceerde tussen hard labeur, kameraadschap en heimwee.'
    }
  ];

  return (
    <section id="historische-context" className="py-24 bg-[#F5F0E6] border-t border-[#E0D5C3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFC9] text-[#63503B] text-xs font-semibold uppercase tracking-wider">
            <span>Historische Context</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1C1A] tracking-tight">
            Eindhoven & De Kempen in het Industriële Tijdperk
          </h2>
          <div className="w-16 h-0.5 bg-[#B38628] mx-auto my-2" />
          <p className="text-[#63503B] text-lg font-serif italic">
            De historische werkelijkheid die ten grondslag ligt aan de gebeurtenissen in De Glasfabriek.
          </p>
        </div>

        {/* Editorial Overview Article */}
        <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#DCD0BF] rounded-lg p-8 sm:p-12 mb-16 shadow-xs">
          <div className="space-y-6 text-[#33302B] leading-relaxed text-base sm:text-lg">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1D1C1A] border-b border-[#E8DFC9] pb-4">
              Twee werelden in één regio
            </h3>
            <p>
              In het vroege twintigste-eeuwse Noord-Brabant voltrok zich een van de meest ingrijpende sociaaleconomische veranderingen van Nederland. Aan de ene kant lagen de uitgestrekte heidevelden, zandgronden en vredige dorpen van de Kempen, waar het leven al eeuwenlang werd bepaald door agrarische tradities en seizoenen.
            </p>
            <p>
              Aan de andere kant verrees in Eindhoven in hoog tempo een internationaal industrieel centrum onder leiding van de gebroeders Philips. De opening van de glasfabriek op Strijp S in 1916 markeerde een cruciaal moment: Philips was voortaan niet meer afhankelijk van buitenlandse glasblaasbedrijven voor hun gloeilampen.
            </p>
            <p className="text-sm text-[#8C7355] italic pt-2 border-t border-[#E8DFC9]">
              In &lsquo;De Glasfabriek&rsquo; brengt auteur Cees Meijs deze historische ontmoeting tot leven door de ogen van dorpsjongen Peer Verdonk.
            </p>
          </div>
        </div>

        {/* Historical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {historicalFacets.map((facet, index) => (
            <div 
              key={index}
              className="bg-[#FAF8F5] p-7 rounded-lg border border-[#DCD0BF] hover:border-[#B38628] transition-colors space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#B38628] bg-[#F5F0E6] px-3 py-1 rounded border border-[#E8DFC9]">
                  {facet.year}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F5F0E6] flex items-center justify-center">
                  {facet.icon}
                </div>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1D1C1A]">
                {facet.title}
              </h4>
              <p className="text-sm text-[#4B4138] leading-relaxed">
                {facet.summary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
