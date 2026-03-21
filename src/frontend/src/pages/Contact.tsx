import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-cream border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe text-sm";

  return (
    <main className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Say Hello
            </p>
            <h1 className="font-serif text-5xl font-bold text-charcoal">
              Get in Touch
            </h1>
            <p className="mt-4 text-taupe max-w-md mx-auto">
              We&rsquo;d love to hear from you — every message is read with
              care.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12">
          <AnimatedSection className="md:col-span-2">
            <div className="space-y-8 pt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">Email Us</p>
                  <a
                    href="mailto:hello@keepsy.in"
                    className="text-gold text-sm hover:underline"
                  >
                    hello@keepsy.in
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Instagram"
                  >
                    <title>Instagram</title>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">Instagram</p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:underline"
                  >
                    @keepsy.in
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">Based In</p>
                  <p className="text-taupe text-sm">Delhi, India 🇮🇳</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-3" delay={100}>
            {submitted ? (
              <div
                className="bg-cream p-10 rounded-sm shadow-card text-center"
                data-ocid="contact.success_state"
              >
                <div className="text-gold text-5xl mb-5">✦</div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                  Message Sent
                </h3>
                <p className="text-taupe">
                  Thank you, {form.name}. We&rsquo;ll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream p-8 rounded-sm shadow-card space-y-5"
                data-ocid="contact.modal"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-sm font-medium text-charcoal mb-1.5"
                      htmlFor="c-name"
                    >
                      Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      data-ocid="contact.input"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-charcoal mb-1.5"
                      htmlFor="c-email"
                    >
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="you@email.com"
                      data-ocid="contact.input"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-charcoal mb-1.5"
                    htmlFor="c-subject"
                  >
                    Subject
                  </label>
                  <select
                    id="c-subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, subject: e.target.value }))
                    }
                    data-ocid="contact.select"
                    className={inputClass}
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Enquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="shipping">Shipping &amp; Delivery</option>
                    <option value="returns">Returns &amp; Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-charcoal mb-1.5"
                    htmlFor="c-message"
                  >
                    Message *
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="How can we help you?"
                    data-ocid="contact.textarea"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3.5 rounded-sm transition-colors duration-200 text-sm tracking-wide"
                >
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
