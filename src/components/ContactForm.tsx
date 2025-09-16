import { Send } from 'lucide-react';
import { useContactForm } from '@/hooks/use-contact-form';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="card-elegant bg-card rounded-2xl p-8 shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-grow">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>

        <div className="flex-grow">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none h-full"
            placeholder="Tell us about your project or inquiry..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-hero w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:scale-105 active:scale-95 group mt-auto"
        >
          Send Message
          <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline" size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
