"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import CGU_GraceCouture from './WebsiteRegulations';

interface ModalTriggerProps {
  triggerLabel?: string;      // טקסט לכפתור הפתיחה
  triggerClassName?: string;  // מחלקות עיצוב לכפתור
}

interface ModalTitleProps {
  title?: string;             // כותרת למודאל (ל-aria)
}

type ModalProps = ModalTriggerProps & ModalTitleProps;

export default function Modal({
  triggerLabel = "Conditions générales d’utilisation",
  triggerClassName = "underline hover:opacity-80 focus:outline-none rounded",
  title = "Conditions Générales d’Utilisation – Grace Couture",
}: ModalProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // נעילת גלילת body בזמן פתיחה
  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // החזרת פוקוס לכפתור עם סגירת המודאל
 useEffect(() => {
  if (!open) {
    // פשוט גלול לראש הדף אחרי סגירת מודאל
    window.scrollTo(0, 0);
  }
}, [open]);

  // סגירה ב-ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // מלכודת טאב בסיסית
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus(); e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus(); e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // סגירה בלחיצה מחוץ לחלון
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <>
      {/* טריגר לפתיחת המודאל */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>

      {/* מודאל */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/45 p-4"
          onMouseDown={onBackdropClick}
        >
          <div
            ref={dialogRef}
            className="relative w-full max-w-4xl  rounded-2xl bg-white shadow-xl focus:outline-none"
          >
            {/* כותרת + כפתור סגירה */}
          // שנה את הheader של המודאל:
<div className="sticky top-0 z-60 flex items-start justify-between gap-4 bg-white border-b border-gray-200 px-5 py-4 rounded-t-2xl">
  <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-black leading-tight flex-1 mt-1">
    {title}
  </h2>
  <button
    type="button"
    onClick={() => setOpen(false)}
    aria-label="Fermer la fenêtre"
    title="Fermer"
    className="text-black p-2 rounded-lg border-2 border-black hover:bg-gray-50 focus-visible:ring flex-shrink-0"
  >
    <X size={20} />
  </button>
</div>

            {/* אזור התוכן – ניתן לגלילה */}
       <div className="px-5 pb-5 pt-4 overflow-y-auto max-h-[calc(75vh-80px)] text-left">
  <CGU_GraceCouture />
</div>
          </div>
        </div>
      )}
    </>
  );
}
