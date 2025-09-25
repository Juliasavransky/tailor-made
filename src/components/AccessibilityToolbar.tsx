"use client";
import { useEffect, useRef, useState } from "react";
import { Accessibility, X } from "lucide-react";

type Prefs = {
  fontScale: number;        // 1 = רגיל
  highContrast: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
};

const STORAGE_KEY = "a11y-prefs-v1";

// טקסטים בצרפתית (כנדרש)
const t = {
  fabLabel: "Outils d’accessibilité",
  panelTitle: "Outils d’accessibilité",
  increase: "Augmenter la taille du texte",
  decrease: "Diminuer la taille du texte",
  reset: "Réinitialiser",
  contrast: "Contraste élevé",
  underline: "Souligner les liens",
  motion: "Réduire les animations",
  close: "Fermer le panneau",
};

export default function AccessibilityFab() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    fontScale: 1,
    highContrast: false,
    underlineLinks: false,
    reduceMotion: false,
  });

  const panelRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  // טען העדפות מהאחסון המקומי ב-mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPrefs(JSON.parse(saved));
    } catch {}
  }, []);

  // החל העדפות על <html> ושמור
  useEffect(() => {
    const html = document.documentElement;
    html.style.setProperty("--a11y-font-scale", String(prefs.fontScale));
    html.classList.toggle("a11y-contrast", prefs.highContrast);
    html.classList.toggle("a11y-underline-links", prefs.underlineLinks);
    html.classList.toggle("a11y-reduce-motion", prefs.reduceMotion);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  // פתיחה/סגירה + החזרת פוקוס
  useEffect(() => {
    if (open) {
      firstBtnRef.current?.focus();
    } else {
      fabRef.current?.focus();
    }
  }, [open]);

  // סגירה ב-ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // סגירה בלחיצה מחוץ לפאנל
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const panel = panelRef.current;
      if (panel && !panel.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const changeScale = (delta: number) => {
    setPrefs((p) => {
      const next = Math.min(1.6, Math.max(0.8, Number((p.fontScale + delta).toFixed(2))));
      return { ...p, fontScale: next };
    });
  };

  const reset = () =>
    setPrefs({ fontScale: 1, highContrast: false, underlineLinks: false, reduceMotion: false });

  const panelId = "a11y-panel";

  return (
    <>
      {/* כפתור צף – FAB */}
      <button
        ref={fabRef}
        type="button"
        aria-label={t.fabLabel}
        title={t.fabLabel}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 z-50 text-white left-5  inline-flex items-center justify-center rounded-full shadow-lg border-2 bg-primary/95 backdrop-blur w-14 h-14 focus:outline-none focus-visible:ring transition"
      >
        <Accessibility aria-hidden="true" />
        <span className="sr-only">{t.fabLabel}</span>
      </button>

      {/* פאנל כלים צף */}
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-title"
          className="fixed bottom-24 left-5 z-50 w-[min(92vw,360px)] rounded-2xl shadow-xl border bg-white backdrop-blur p-3"
        >
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 id="a11y-title" className="text-base font-semibold">
              {t.panelTitle}
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg border focus:outline-none focus-visible:ring"
              aria-label={t.close}
              title={t.close}
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <div className="pt-3 grid grid-cols-3 gap-2">
            <button
              ref={firstBtnRef}
              className="px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring"
              onClick={() => changeScale(0.1)}
              aria-label={t.increase}
              title={t.increase}
            >
              A+
            </button>
            <button
              className="px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring"
              onClick={() => changeScale(-0.1)}
              aria-label={t.decrease}
              title={t.decrease}
            >
              A−
            </button>
            <button
              className="px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring"
              onClick={reset}
              aria-label={t.reset}
              title={t.reset}
            >
              ↺
            </button>

            <button
              className={"px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring " + (prefs.highContrast ? "ring-2" : "")}
              onClick={() => setPrefs((p) => ({ ...p, highContrast: !p.highContrast }))}
              aria-pressed={prefs.highContrast}
              aria-label={t.contrast}
              title={t.contrast}
            >
              ⬛⬜
            </button>

            <button
              className={"px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring " + (prefs.underlineLinks ? "ring-2" : "")}
              onClick={() => setPrefs((p) => ({ ...p, underlineLinks: !p.underlineLinks }))}
              aria-pressed={prefs.underlineLinks}
              aria-label={t.underline}
              title={t.underline}
            >
              <span className="underline decoration-2">abc</span>
            </button>

            <button
              className={"px-3 py-2 rounded-xl border text-sm focus:outline-none focus-visible:ring " + (prefs.reduceMotion ? "ring-2" : "")}
              onClick={() => setPrefs((p) => ({ ...p, reduceMotion: !p.reduceMotion }))}
              aria-pressed={prefs.reduceMotion}
              aria-label={t.motion}
              title={t.motion}
            >
              ◼︎
            </button>
          </div>
        </div>
      )}
    </>
  );
}
