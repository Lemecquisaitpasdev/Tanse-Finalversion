"use client";

type Props = {
  className?: string;
  label?: string;
};

export default function ConsentPreferencesButton({
  className = "rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm hover:bg-black/10",
  label = "Gérer mes préférences cookies",
}: Props) {
  const openConsent = () => {
    try {
      (window as any).__cmp?.("showConsentTool"); // IAB TCF (ex. TCF v2)
      (window as any).Cookiebot?.show?.();        // Cookiebot
      (window as any).axeptioSDK?.open?.();       // Axeptio
    } catch {}
  };

  return (
    <button type="button" onClick={openConsent} className={className}>
      {label}
    </button>
  );
}