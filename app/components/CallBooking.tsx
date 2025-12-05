"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowRight, Video, Phone } from "lucide-react";

type TimeSlot = {
  time: string;
  available: boolean;
};

const AVAILABLE_SLOTS: TimeSlot[] = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: false },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "11:30", available: false },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: true },
  { time: "15:30", available: false },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
];

export default function CallBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<"video" | "phone">("video");
  const [step, setStep] = useState<"date" | "time" | "details" | "confirmed">("date");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    notes: "",
  });

  // Générer les 14 prochains jours (seulement jours ouvrés)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    let current = new Date();

    while (dates.length < 14) {
      current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
      const day = current.getDay();
      // Exclure samedi (6) et dimanche (0)
      if (day !== 0 && day !== 6) {
        dates.push(new Date(current));
      }
    }

    return dates;
  };

  const availableDates = getAvailableDates();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep("confirmed");
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
  };

  const formatDateShort = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
    }).format(date);
  };

  const getDayName = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "short",
    }).format(date);
  };

  if (step === "confirmed") {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 md:p-12 text-center border border-green-200/50 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -z-10" />

        <div className="relative z-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>

          <h3 className="mt-6 text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Rendez-vous confirmé !
          </h3>

          <p className="mt-3 text-neutral-600 max-w-md mx-auto">
            Nous vous avons envoyé un email de confirmation avec les détails de votre rendez-vous.
          </p>

          <div className="mt-8 inline-flex flex-col gap-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-md">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="font-medium">{selectedDate && formatDate(selectedDate)}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="font-medium">{selectedTime}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              {selectedType === "video" ? (
                <Video className="h-5 w-5 text-green-600" />
              ) : (
                <Phone className="h-5 w-5 text-green-600" />
              )}
              <span className="font-medium">
                {selectedType === "video" ? "Visio Google Meet" : "Appel téléphonique"}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setStep("date");
              setSelectedDate(null);
              setSelectedTime(null);
              setFormData({ nom: "", email: "", telephone: "", entreprise: "", notes: "" });
            }}
            className="mt-6 text-sm text-green-600 hover:text-green-700 font-medium underline"
          >
            Prendre un autre rendez-vous
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-visible">
      {/* Header */}
      <div className="relative z-10 p-8 md:p-10 mb-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Réserver un appel
          </h2>
        </div>
        <p className="text-neutral-600 max-w-xl">
          Échangez en direct avec notre équipe d'experts SEO local. Choisissez le créneau qui vous convient.
        </p>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step === "date" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-indigo-200"}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step === "time" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : step === "details" ? "bg-indigo-200" : "bg-neutral-200"}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step === "details" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-neutral-200"}`} />
        </div>
      </div>

      <div className="p-8 md:p-10 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg">
        {/* Step 1: Date Selection */}
        {step === "date" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg font-semibold text-neutral-800">
              Choisissez une date
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
              {availableDates.map((date, idx) => {
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateSelect(date)}
                    className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 shadow-lg shadow-indigo-500/50 scale-105"
                        : "bg-white/60 backdrop-blur-sm border-white/80 hover:border-indigo-300 hover:shadow-md hover:scale-105"
                    }`}
                  >
                    <div className={`text-xs font-medium uppercase ${isSelected ? "text-indigo-200" : "text-neutral-500"}`}>
                      {getDayName(date)}
                    </div>
                    <div className={`text-2xl font-bold mt-1 ${isSelected ? "text-white" : "text-neutral-800"}`}>
                      {date.getDate()}
                    </div>
                    <div className={`text-xs mt-1 ${isSelected ? "text-indigo-100" : "text-neutral-500"}`}>
                      {new Intl.DateTimeFormat("fr-FR", { month: "short" }).format(date)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {step === "time" && selectedDate && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-800">
                Choisissez un créneau
              </h3>
              <button
                onClick={() => setStep("date")}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                ← Changer de date
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80">
              <p className="text-sm font-medium text-neutral-700">
                {formatDate(selectedDate)}
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {AVAILABLE_SLOTS.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedTime === slot.time
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 shadow-lg shadow-indigo-500/50 scale-105"
                      : slot.available
                      ? "bg-white/60 backdrop-blur-sm border-white/80 hover:border-indigo-300 hover:shadow-md hover:scale-105"
                      : "bg-neutral-100/50 border-neutral-200 opacity-50 cursor-not-allowed"
                  }`}
                >
                  <Clock className={`h-4 w-4 mx-auto mb-1 ${selectedTime === slot.time ? "text-white" : slot.available ? "text-indigo-500" : "text-neutral-400"}`} />
                  <div className={`text-sm font-semibold ${selectedTime === slot.time ? "text-white" : slot.available ? "text-neutral-800" : "text-neutral-400"}`}>
                    {slot.time}
                  </div>
                </button>
              ))}
            </div>

            {/* Call type selection */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-neutral-700">Type d'appel :</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedType("video")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedType === "video"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 shadow-lg"
                      : "bg-white/60 backdrop-blur-sm border-white/80 hover:border-indigo-300"
                  }`}
                >
                  <Video className={`h-6 w-6 mx-auto mb-2 ${selectedType === "video" ? "text-white" : "text-indigo-500"}`} />
                  <div className={`text-sm font-semibold ${selectedType === "video" ? "text-white" : "text-neutral-800"}`}>
                    Visio
                  </div>
                  <div className={`text-xs mt-1 ${selectedType === "video" ? "text-indigo-100" : "text-neutral-500"}`}>
                    Google Meet
                  </div>
                </button>
                <button
                  onClick={() => setSelectedType("phone")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedType === "phone"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-400 shadow-lg"
                      : "bg-white/60 backdrop-blur-sm border-white/80 hover:border-indigo-300"
                  }`}
                >
                  <Phone className={`h-6 w-6 mx-auto mb-2 ${selectedType === "phone" ? "text-white" : "text-indigo-500"}`} />
                  <div className={`text-sm font-semibold ${selectedType === "phone" ? "text-white" : "text-neutral-800"}`}>
                    Téléphone
                  </div>
                  <div className={`text-xs mt-1 ${selectedType === "phone" ? "text-indigo-100" : "text-neutral-500"}`}>
                    Appel direct
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Details Form */}
        {step === "details" && selectedDate && selectedTime && (
          <form onSubmit={handleConfirm} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-800">
                Vos coordonnées
              </h3>
              <button
                type="button"
                onClick={() => setStep("time")}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                ← Changer l'heure
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-indigo-600" />
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-indigo-600" />
                <span className="font-medium">{selectedTime}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Alex Martin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="alex@entreprise.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="TANSE Auto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Notes (optionnel)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Sujets que vous souhaitez aborder..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Confirmer le rendez-vous
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
