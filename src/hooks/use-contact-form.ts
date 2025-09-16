import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
