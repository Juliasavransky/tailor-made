import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import CGU_GraceCouture from './WebsiteRegulations';

export default function Modal({ triggerLabel = "Conditions générales d’utilisation", triggerClassName = "underline hover:opacity-80 focus:outline-none rounded", title = "Conditions Générales d’Utilisation – Grace Couture" }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onMouseDown={onBackdropClick}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-xl focus:outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-white border-b border-gray-200 px-5 py-4 rounded-t-2xl">
          <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-black leading-tight flex-1 mt-1">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer la fenêtre"
            className="text-black p-2 rounded-lg border-2 border-black hover:bg-gray-50 focus-visible:ring"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="h-[80vh] overflow-y-auto px-5 pb-5 pt-4 text-left">
          <CGU_GraceCouture />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={triggerClassName}
      >
        {triggerLabel}
      </button>

      {open && typeof window !== "undefined"
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}
