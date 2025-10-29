"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionFrame from "./SectionFrame";

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
};

/* ------------------------------------------------------------------ */
/* Données témoignages - Format Trustpilot                            */
/* ------------------------------------------------------------------ */
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ariel Martinez",
    rating: 5,
    text: "Depuis que TANSE a restructuré notre présence locale, notre site convertit mieux et nos prises de rendez-vous ont augmenté de 40% en 4 mois. Le travail sur les fiches Google et l'optimisation locale fait vraiment la différence.",
    date: "Il y a 2 semaines",
    location: "Paris, France",
  },
  {
    name: "Hassan Toure",
    rating: 5,
    text: "Plus d'appels qualifiés sans dépenser un euro en publicité. Le référencement local bien fait change vraiment la donne pour notre garage. Les clients nous trouvent naturellement quand ils cherchent près de chez eux.",
    date: "Il y a 1 mois",
    location: "Lyon, France",
  },
  {
    name: "Maria Martin",
    rating: 5,
    text: "Notre fiche Google Business était complètement délaissée. TANSE l'a optimisée avec les bons mots-clés et photos. Résultat : +30% d'essais routiers demandés en 90 jours. Le ROI est évident.",
    date: "Il y a 3 semaines",
    location: "Marseille, France",
  },
  {
    name: "Gabriel Konovalov",
    rating: 5,
    text: "La méthode GEO de TANSE apporte des prospects incroyablement qualifiés. Ce ne sont pas des curieux, ce sont des gens prêts à acheter. Notre taux de conversion a doublé depuis la mise en place.",
    date: "Il y a 1 semaine",
    location: "Toulouse, France",
  },
  {
    name: "Richard Manisse",
    rating: 5,
    text: "L'association du référencement local et des pages services bien structurées nous donne une visibilité réelle sur Google Maps. Nous apparaissons maintenant dans le top 3 pour toutes nos spécialités dans un rayon de 25km.",
    date: "Il y a 2 mois",
    location: "Nantes, France",
  },
  {
    name: "Anaïs Dupré",
    rating: 5,
    text: "Après seulement 3 mois d'accompagnement, nous avons constaté +22% de demandes de devis pour notre atelier carrosserie. Les positions sur les recherches locales ont explosé et les avis positifs se multiplient.",
    date: "Il y a 3 semaines",
    location: "Bordeaux, France",
  },
  {
    name: "Eran Cohen",
    rating: 5,
    text: "Le reporting est simple et transparent : on voit les positions monter semaine après semaine, et surtout les appels téléphoniques suivent. C'est du concret, pas du vent. TANSE livre ce qu'ils promettent.",
    date: "Il y a 1 mois",
    location: "Nice, France",
  },
  {
    name: "Thomas Weber",
    rating: 5,
    text: "Nous gérons désormais mieux nos avis clients grâce à leur stratégie. Notre note Google est passée de 3.8 à 4.6 en 6 mois, et ça se voit immédiatement sur le nombre de visites en concession. Les gens font confiance.",
    date: "Il y a 2 semaines",
    location: "Strasbourg, France",
  },
];

/* ------------------------------------------------------------------ */
/* Composant Carte Avis                                               */
/* ------------------------------------------------------------------ */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(33.333%-1rem)] px-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="group h-full rounded-3xl border border-[#444684]/20 bg-white p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:border-[#444684]/40 hover:scale-105 hover:-translate-y-1 flex flex-col">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-110 ${
                i < testimonial.rating
                  ? "fill-[#444684] text-[#444684]"
                  : "fill-neutral-200 text-neutral-200"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-base md:text-[17px] leading-relaxed text-neutral-800 mb-6 flex-grow transition-colors duration-300 ease-in-out group-hover:text-neutral-900">
          {testimonial.text}
        </p>

        {/* Author Info */}
        <div className="border-t border-neutral-200 pt-4 transition-colors duration-300 ease-in-out group-hover:border-[#444684]/30">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-neutral-900 text-base transition-colors duration-300 ease-in-out group-hover:text-[#444684]">
                {testimonial.name}
              </div>
              {testimonial.location && (
                <div className="text-sm text-neutral-600 mt-1 transition-colors duration-300 ease-in-out group-hover:text-neutral-700">
                  {testimonial.location}
                </div>
              )}
            </div>
            <div className="text-sm text-neutral-500 whitespace-nowrap ml-4 transition-colors duration-300 ease-in-out group-hover:text-neutral-600">
              {testimonial.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Composant Principal Carrousel                                       */
/* ------------------------------------------------------------------ */
export default function TestimonialsMarquee() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Calculer le rating moyen
  const averageRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <SectionFrame id="temoignages">
      <section className="relative h-full w-full bg-[var(--bg)] py-16 md:py-20">
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#444684] mb-4 font-semibold">
              TÉMOIGNAGES CLIENTS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Nos clients génèrent des résultats
              <br className="hidden md:block" />
              <span className="text-[#444684]"> mesurables et durables</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-neutral-700 leading-relaxed">
              De la TPE au grand groupe, nos clients constatent une augmentation
              significative de leur visibilité locale, de leurs appels et de leurs
              conversions.
            </p>

            {/* Trustpilot-style rating */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-[#444684] text-[#444684]"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-neutral-900">
                  {averageRating}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                Basé sur {TESTIMONIALS.length} avis vérifiés
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/forfaits"
                className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full bg-[#444684] px-7 text-sm md:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px]"
              >
                Découvrir nos forfaits
              </a>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full border border-[#444684]/30 bg-white px-7 text-sm md:text-base font-medium text-[#444684] hover:bg-[#444684]/5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2 touch-manipulation min-h-[44px]"
              >
                Demander un audit
              </a>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-4 md:gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <button
              onClick={scrollPrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#444684]/30 bg-white text-[#444684] shadow-md hover:bg-[#444684] hover:text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={scrollNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#444684]/30 bg-white text-[#444684] shadow-md hover:bg-[#444684] hover:text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#444684] focus-visible:outline-offset-2"
              aria-label="Avis suivant"
            >
              <ChevronRight className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </SectionFrame>
  );
}
