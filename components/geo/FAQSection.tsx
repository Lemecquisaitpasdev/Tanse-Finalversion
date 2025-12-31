'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-border">
    <button onClick={onClick} className="w-full flex items-center justify-between py-6 text-left hover:opacity-70 transition-opacity">
      <span className="font-display text-lg md:text-xl italic pr-8">{question}</span>
      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-muted-foreground leading-relaxed pr-12">{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "Do students get early access to the beta?", answer: "Yes! Students with a valid .edu email address get priority access to the Dia beta." },
    { question: "Are there any discounts for students?", answer: "Absolutely. We offer a generous student discount — just verify your student status." },
    { question: "What devices are currently supported?", answer: "Dia is currently available for macOS with Apple Silicon (M1 and later)." },
    { question: "Is The Browser Company hiring interns?", answer: "We love working with talented students! Check out our careers page." },
    { question: "I'm a student who loves Dia. How can I get more involved?", answer: "Join our Discord community to connect with other Dia users and share feedback." },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl italic">Questions?<br />Answers.</h2>
        </div>
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
