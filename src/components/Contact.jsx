import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  MapPin,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields before sending.',
      });
      return;
    }

    // Prepare mailto link as reliable real-world fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');

    setStatus({
      type: 'success',
      message:
        'Your message has been pre-filled in your default email client. (You can also connect a backend endpoint like Formspree or EmailJS in Contact.jsx).',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 bg-surface-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Build Something Together
          </h2>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            I'm open to opportunities where I can contribute my development skills, learn new technologies and work on meaningful projects. Currently based in Kozhikode, Kerala.
          </p>
          <div className="w-12 h-1 bg-brand-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-brand-400 transition-colors break-all sm:break-normal block truncate sm:text-clip"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-950 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="p-2.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-brand-400 transition-colors block"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-surface-950 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-brand-500/40 hover:bg-slate-800/50 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-surface-950 border border-slate-800 text-slate-400 group-hover:text-brand-400 transition-colors shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-slate-400">Profile</div>
                  <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                    LinkedIn
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-900/80 border border-slate-800/90 hover:border-brand-500/40 hover:bg-slate-800/50 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-surface-950 border border-slate-800 text-slate-400 group-hover:text-brand-400 transition-colors shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-slate-400">Repositories</div>
                  <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                    GitHub
                  </div>
                </div>
              </a>
            </div>

            {/* Location indicator */}
            <div className="p-4 rounded-xl bg-surface-950 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Kozhikode, Kerala, India • Available for On-site & Remote</span>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-surface-900/90 border border-slate-800 shadow-xl shadow-black/30">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill in the details below to reach out directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500/80 focus:ring-1 focus:ring-brand-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email Address <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500/80 focus:ring-1 focus:ring-brand-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message <span className="text-brand-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an opportunity, project, or role..."
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500/80 focus:ring-1 focus:ring-brand-500/80 transition-colors resize-none"
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-3 rounded-lg text-xs leading-relaxed flex items-start gap-2 ${
                      status.type === 'error'
                        ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-brand-400 hover:bg-brand-300 shadow-md shadow-brand-500/20 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Developer backend note */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 text-center">
                Configured with mailto fallback • Ready for Formspree / EmailJS backend hook
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
