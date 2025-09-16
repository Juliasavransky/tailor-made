// /src/hooks/use-contact-form.ts
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed');
      toast({ title: 'Message Sent!', description: "Thank you—we'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      toast({ title: 'Send failed', description: 'Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading };
}
