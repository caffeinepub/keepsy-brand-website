import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

interface FormState {
  name: string;
  email: string;
  phone: string;
  productType: string;
  date: string;
  message: string;
  image: File | null;
}

export default function CustomOrder() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    productType: "",
    date: "",
    message: "",
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-cream border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe text-sm";

  if (submitted) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center py-24">
        <AnimatedSection>
          <div
            className="text-center max-w-md mx-auto px-4"
            data-ocid="custom_order.success_state"
          >
            <div className="text-gold text-5xl mb-6">✦</div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Your Story Has Been Received
            </h2>
            <p className="text-taupe leading-relaxed">
              Thank you, {form.name}. We'll be in touch within 24 hours to begin
              crafting your keepsake with love.
            </p>
          </div>
        </AnimatedSection>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Bespoke Keepsake
            </p>
            <h1 className="font-serif text-5xl font-bold text-charcoal">
              Create Your Keepsake
            </h1>
            <p className="mt-4 text-taupe max-w-md mx-auto">
              Tell us your story. We'll craft it into something beautiful.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <form
            onSubmit={handleSubmit}
            className="bg-cream p-8 md:p-12 rounded-sm shadow-soft space-y-6"
            data-ocid="custom_order.modal"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-charcoal mb-1.5"
                  htmlFor="co-name"
                >
                  Your Name *
                </label>
                <input
                  id="co-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Aman Raj"
                  data-ocid="custom_order.input"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-charcoal mb-1.5"
                  htmlFor="co-email"
                >
                  Email Address *
                </label>
                <input
                  id="co-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="you@email.com"
                  data-ocid="custom_order.input"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-charcoal mb-1.5"
                  htmlFor="co-phone"
                >
                  Phone Number
                </label>
                <input
                  id="co-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+91 98765 43210"
                  data-ocid="custom_order.input"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-charcoal mb-1.5"
                  htmlFor="co-type"
                >
                  Product Type *
                </label>
                <select
                  id="co-type"
                  required
                  value={form.productType}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, productType: e.target.value }))
                  }
                  data-ocid="custom_order.select"
                  className={inputClass}
                >
                  <option value="">Select a product</option>
                  <option value="Bracelet">Bracelet</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Both">Both (Set)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-charcoal mb-1.5"
                htmlFor="co-date"
              >
                Special Date
              </label>
              <input
                id="co-date"
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm((f) => ({ ...f, date: e.target.value }))
                }
                data-ocid="custom_order.input"
                className={inputClass}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-charcoal mb-1.5"
                htmlFor="co-message"
              >
                Your Story / Message *
              </label>
              <textarea
                id="co-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell us about the memory you'd like to preserve..."
                data-ocid="custom_order.textarea"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-charcoal mb-1.5"
                htmlFor="co-image"
              >
                Upload Reference Image
              </label>
              <div className="border-2 border-dashed border-divider rounded-sm p-6 text-center hover:border-gold transition-colors cursor-pointer">
                <input
                  id="co-image"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      image: e.target.files?.[0] ?? null,
                    }))
                  }
                  data-ocid="custom_order.upload_button"
                  className="hidden"
                />
                <label htmlFor="co-image" className="cursor-pointer">
                  <div className="text-gold text-3xl mb-2">↑</div>
                  <p className="text-sm text-taupe">
                    {form.image
                      ? form.image.name
                      : "Click to upload an inspiration image"}
                  </p>
                  <p className="text-xs text-taupe/70 mt-1">
                    PNG, JPG, WEBP up to 10MB
                  </p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              data-ocid="custom_order.submit_button"
              className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-4 rounded-sm transition-colors duration-200 text-sm tracking-wide"
            >
              Send My Story
            </button>
          </form>
        </AnimatedSection>
      </div>
    </main>
  );
}
