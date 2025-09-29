'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

type FormValues = {
  name: string;
  email: string;
  message: string;
  consent: boolean; // GDPR consent
};

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setFocus,
  } = useForm<FormValues>({ mode: 'onTouched' });

  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [seconds, setSeconds] = useState(20);
  const [animateIn, setAnimateIn] = useState(false);

  // Timer and redirect back to the form
  useEffect(() => {
    if (!sent) return;
    const tick = setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),
      1000
    );
    const to = setTimeout(() => {
      setSent(false);
      setSeconds(20);
      setTimeout(() => setAnimateIn(true), 50); // trigger animation when form returns
    }, 20000);
    return () => {
      clearInterval(tick);
      clearTimeout(to);
    };
  }, [sent]);

  // Record unsent attempts (for example: without GDPR consent) in localStorage
  const recordUnsent = (reason: string) => {
    try {
      const listKey = 'unsent-submissions';
      const existing = JSON.parse(localStorage.getItem(listKey) || '[]');
      const values = getValues();
      const entry = {
        reason,
        values,
        ts: new Date().toISOString(),
      };
      localStorage.setItem(
        listKey,
        JSON.stringify([entry, ...existing].slice(0, 50))
      );
    } catch {
      // ignore storage errors
    }
  };

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(payload?.error || 'Échec');

      // Success
      setSent(true);
      setAnimateIn(false);
      reset();
    } catch (err: any) {
      setServerError('Échec de l’envoi. Veuillez réessayer plus tard.');
    }
  };

  // Handle invalid state (e.g. consent not checked)
  const onInvalid = () => {
    if (errors.consent) {
      recordUnsent('Consentement non donné (RGPD)');
      setFocus('consent');
    }
  };

  // Thank you screen after submission
  if (sent) {
    return (
      <div className="card-elegant bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
        <img
          src="/images/grace logo icon.png"
          alt="Logo Grace Couture"
          className="object-contain w-28 sm:w-36 md:w-44 mb-6"
        />
        <CheckCircle2 size={56} className="text-secondary mb-4" aria-hidden />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Merci ! Nous avons bien reçu votre message
        </h3>
        <p className="text-muted-foreground mb-6">
          Nous vous contacterons dès que possible. Vous serez redirigé vers le
          formulaire dans <span className="font-semibold">{seconds}</span>{" "}
          secondes.
        </p>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="btn-hero w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95"
        >
          Retour à la page d’accueil maintenant
        </button>
      </div>
    );
  }

  return (
    <div className='card-elegant bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col'>
      <h3 className='text-2xl font-bold text-foreground mb-6'>
        Envoyez-nous un message
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
        className='space-y-6 flex flex-col'
      >
        {/* Name */}
        <div>
          <label
            htmlFor='name'
            className='text-start block font-semibold text-foreground mb-2 text-xl'
          >
            Nom complet
          </label>
          <input
            id='name'
            type='text'
            autoComplete='name'
            aria-invalid={!!errors.name}
            {...register('name', {
              required: 'Champ requis',
              minLength: { value: 2, message: 'Au moins 2 caractères' },
              maxLength: { value: 80, message: 'Maximum 80 caractères' },
              pattern: {
                value: /^[\p{L}\s'.-]+$/u,
                message: 'Nom invalide',
              },
            })}
            className={`w-full px-4 py-3 bg-input border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.name ? 'border-destructive' : 'border-border'
            }`}
            placeholder='Votre nom complet'
          />
          {errors.name && (
            <p role='alert' className='mt-2 text-sm text-destructive'>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='text-start block text-xl font-semibold text-foreground mb-2'
          >
            Adresse e-mail
          </label>
          <input
            id='email'
            type='email'
            autoComplete='email'
            aria-invalid={!!errors.email}
            {...register('email', {
              required: 'Champ requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse e-mail invalide',
              },
              maxLength: { value: 254, message: 'Adresse e-mail trop longue' },
            })}
            className={`w-full px-4 py-3 bg-input border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.email ? 'border-destructive' : 'border-border'
            }`}
            placeholder='votre@email.com'
          />
          {errors.email && (
            <p role='alert' className='mt-2 text-sm text-destructive'>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor='message'
            className='text-start block text-xl font-semibold text-foreground mb-2'
          >
            Message
          </label>
          <textarea
            id='message'
            rows={6}
            aria-invalid={!!errors.message}
            {...register('message', {
              required: 'Champ requis',
              minLength: { value: 10, message: 'Au moins 10 caractères' },
              maxLength: { value: 2000, message: 'Maximum 2000 caractères' },
            })}
            className={`w-full px-4 py-3 bg-input border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-80 ${
              errors.message ? 'border-destructive' : 'border-border'
            }`}
            placeholder='Parlez-nous de votre projet ou de votre demande...'
          />
          {errors.message && (
            <p role='alert' className='mt-2 text-sm text-destructive'>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* GDPR Consent */}
        <div className='pt-2'>
          <div className='flex items-start gap-3'>
            <input
              id='consent'
              type='checkbox'
              aria-invalid={!!errors.consent}
              aria-describedby='consent-hint'
              {...register('consent', {
                required:
                  'Vous devez accepter les conditions d’envoi et de confidentialité (RGPD) pour envoyer ce message.',
              })}
              className={`mt-1 h-5 w-5 rounded border ${
                errors.consent
                  ? 'border-destructive ring-1 ring-destructive'
                  : 'border-border'
              }`}
            />
            <label
              htmlFor='consent'
              className='text-xs text-start leading-6 text-foreground'
            >
              <span className='font-semibold'>Je consens</span> à l’envoi de ce
              message et à la transmission de mes{' '}
              <Modal triggerLabel=' coordonnées conformément ' />
              au <span className='font-semibold'>RGPD</span>.
              <br />
              {/* Optional: add Terms modal trigger button here */}
            </label>
          </div>

          {errors.consent && (
            <p role='alert' className='mt-2 text-sm text-destructive'>
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Server error */}
        {serverError && (
          <p role='alert' className='text-sm text-destructive -mt-2'>
            {serverError}
          </p>
        )}

        {/* Submit */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='btn-hero w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed group mt-auto'
        >
          {isSubmitting ? (
            <span className='inline-flex items-center gap-2'>
              <Loader2 className='animate-spin' size={20} />
              Envoi en cours...
            </span>
          ) : (
            <>
              Envoyer le message
              <Send
                className='ml-4 group-hover:translate-x-1 transition-transform duration-300 inline'
                size={20}
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
