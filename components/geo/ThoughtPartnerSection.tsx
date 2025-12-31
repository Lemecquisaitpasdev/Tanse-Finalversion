'use client';

import { useState } from "react";
import { PixelGear, PixelComputer, PixelPencil, PixelTypewriter } from "./PixelIcons";

const AccordionItem = ({
  icon,
  title,
  description,
  isOpen,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border-b border-[hsl(var(--border))]">
    <button
      onClick={onClick}
      className="w-full flex items-start gap-4 py-6 text-left hover:opacity-70 transition-opacity"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <h3 className="font-display text-xl italic mb-2">{title}</h3>
        {isOpen && <p className="text-base text-muted-foreground">{description}</p>}
      </div>
    </button>
  </div>
);

const DiaWindowMockup = () => (
  <div className="bg-[hsl(var(--browser-bg))] rounded-2xl border border-[hsl(var(--border))] shadow-2xl overflow-hidden">
    <div className="h-12 bg-[hsl(var(--browser-tab-bg))] flex items-center px-4 gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
      </div>
    </div>
    <div className="p-8 min-h-[300px] flex items-center justify-center">
      <div className="text-6xl">✨</div>
    </div>
  </div>
);

export const ThoughtPartnerSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { icon: <PixelGear className="w-12 h-12" />, title: "You ask, Dia answers.", description: "Get instant, thoughtful responses to your questions — whether you're brainstorming ideas, solving problems, or exploring new topics." },
    { icon: <PixelComputer className="w-12 h-12" />, title: "Dia sees what you see.", description: "Dia understands the context of what you're working on, making suggestions and insights that actually make sense for your workflow." },
    { icon: <PixelPencil className="w-12 h-12" />, title: "Writing, reimagined.", description: "From drafting essays to polishing emails, Dia helps you write better, faster — with your unique voice." },
    { icon: <PixelTypewriter className="w-12 h-12" />, title: "It's built in the browser.", description: "No switching tabs, no copying and pasting. Dia lives right where you work, ready to help whenever you need it." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            A true thought partner
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic mt-2">
            Your thought partner for school.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="border-t border-[hsl(var(--border))]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index)}
              />
            ))}
          </div>

          {/* Browser Mockup */}
          <div className="relative">
            <DiaWindowMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
