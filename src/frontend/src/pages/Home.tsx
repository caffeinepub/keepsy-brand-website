import { Link } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";

const features = [
  {
    id: "memory",
    icon: "✦",
    title: "Memory-Driven Design",
    desc: "Each piece is inspired by your story.",
  },
  {
    id: "resin",
    icon: "✦",
    title: "Premium Resin Craft",
    desc: "Handmade with love in Delhi.",
  },
  {
    id: "custom",
    icon: "✦",
    title: "Fully Customizable",
    desc: "Names, dates, messages — all yours.",
  },
  {
    id: "gift",
    icon: "✦",
    title: "Perfect for Gifting",
    desc: "For every occasion that matters.",
  },
];

const steps = [
  {
    id: "choose",
    n: "01",
    title: "Choose Your Piece",
    desc: "Browse our collection of handcrafted bracelets and earrings.",
  },
  {
    id: "story",
    n: "02",
    title: "Add Your Story",
    desc: "Engrave names, dates, and messages that mean the most.",
  },
  {
    id: "craft",
    n: "03",
    title: "We Craft & Deliver",
    desc: "Your keepsake is handmade and delivered with care to your door.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ivory">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blush/30 rounded-bl-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blush/20 rounded-tr-[60px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 z-10">
              <AnimatedSection delay={0}>
                <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
                  Handcrafted in Delhi
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal leading-tight">
                  Turn Your Memories
                  <br />
                  <span className="text-gold italic">into Keepsakes</span>
                </h1>
                <p className="mt-6 text-taupe text-lg leading-relaxed max-w-md">
                  Handcrafted resin jewelry that carries the moments you never
                  want to forget. Made with love, worn with meaning.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/shop"
                    data-ocid="hero.primary_button"
                    className="bg-gold hover:bg-gold-dark text-white font-medium px-8 py-3.5 rounded-sm transition-colors duration-200 text-sm tracking-wide"
                  >
                    Shop Now
                  </Link>
                  <Link
                    to="/custom-order"
                    data-ocid="hero.secondary_button"
                    className="border border-gold text-gold hover:bg-gold hover:text-white font-medium px-8 py-3.5 rounded-sm transition-all duration-200 text-sm tracking-wide"
                  >
                    Customize Now
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="order-1 md:order-2 flex justify-center z-10">
              <AnimatedSection delay={150}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-[40px] translate-x-4 translate-y-4" />
                  <div className="overflow-hidden rounded-[32px] shadow-soft w-full max-w-md">
                    <img
                      src="/assets/uploads/bracelet-2.jpeg"
                      alt="Memory Bracelet — handcrafted resin keepsake"
                      className="w-full h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl font-bold text-charcoal">
                Our Keepsakes
              </h2>
              <p className="mt-3 text-taupe max-w-md mx-auto">
                Each piece is handcrafted to hold your most precious memories.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Memory Bracelet",
                price: "₹899",
                image: "/assets/uploads/bracelet-2.jpeg",
                id: "bracelet",
              },
              {
                name: "Bloom Earrings",
                price: "₹699",
                image: "/assets/uploads/Earring-4.jpeg",
                id: "earrings",
              },
            ].map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 100}>
                <div
                  className="bg-ivory rounded-sm shadow-card hover:shadow-soft transition-shadow group"
                  data-ocid={`products.item.${i + 1}`}
                >
                  <div className="overflow-hidden rounded-t-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-semibold text-charcoal">
                      {product.name}
                    </h3>
                    <p className="text-gold font-medium mt-1">
                      {product.price}
                    </p>
                    <Link
                      to="/product/$id"
                      params={{ id: product.id }}
                      data-ocid="products.primary_button"
                      className="mt-4 inline-block text-sm text-gold hover:text-gold-dark font-medium underline-offset-4 hover:underline transition-colors"
                    >
                      Shop Now &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={200}>
              <div
                className="bg-blush rounded-sm shadow-card hover:shadow-soft transition-shadow flex flex-col items-center justify-center p-10 text-center min-h-[360px]"
                data-ocid="products.item.3"
              >
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-serif text-xl font-semibold text-charcoal">
                  Custom Keepsake
                </h3>
                <p className="text-taupe text-sm mt-2 mb-6">
                  Tell us your story. We&rsquo;ll craft something truly yours.
                </p>
                <Link
                  to="/custom-order"
                  data-ocid="products.primary_button"
                  className="bg-gold hover:bg-gold-dark text-white font-medium px-6 py-2.5 rounded-sm transition-colors text-sm"
                >
                  Create Yours
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Keepsy */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
                  Our Promise
                </p>
                <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
                  Why Keepsy?
                </h2>
                <p className="font-serif italic text-xl text-taupe leading-relaxed">
                  &ldquo;Every piece we craft carries a piece of your soul — a
                  date, a name, a moment that changed everything.&rdquo;
                </p>
                <p className="text-taupe mt-4 leading-relaxed">
                  We believe jewelry should be more than ornament — it should
                  carry meaning, hold memory, and tell your story.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((f) => (
                  <div
                    key={f.id}
                    className="bg-cream p-6 rounded-sm shadow-card"
                  >
                    <span className="text-gold text-xl">{f.icon}</span>
                    <h4 className="font-serif text-charcoal font-semibold mt-3 mb-1">
                      {f.title}
                    </h4>
                    <p className="text-taupe text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Personalization */}
      <section className="py-20 md:py-28 bg-blush/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl font-bold text-charcoal">
                Make It Yours
              </h2>
              <p className="mt-3 text-taupe max-w-md mx-auto">
                Every Keepsy piece is a canvas for your most cherished memory.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.id} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold text-white font-serif font-bold text-lg flex items-center justify-center mx-auto mb-5 shadow-soft">
                    {step.n}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex gap-6">
                <img
                  src="/assets/uploads/Aman-3.jpeg"
                  alt="Aman Raj — Co-Founder"
                  className="w-32 h-32 rounded-[20px] object-cover object-top shadow-card"
                />
                <img
                  src="/assets/uploads/Suyash-5.jpeg"
                  alt="Suyash Pratap — Co-Founder"
                  className="w-32 h-32 rounded-[20px] object-cover object-top shadow-card mt-8"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
                About Us
              </p>
              <h2 className="font-serif text-4xl font-bold text-charcoal mb-6">
                Born from a Memory
              </h2>
              <p className="text-taupe leading-relaxed mb-4">
                Keepsy was born when two friends — Aman and Suyash — searched
                for something to hold a memory close and found nothing truly
                meaningful. So they built it themselves. What began as a hobby
                became a brand built entirely on the belief that jewelry should
                mean something.
              </p>
              <p className="text-taupe leading-relaxed mb-8">
                Today, every Keepsy piece is handcrafted in Delhi with love,
                precision, and the story you share with us.
              </p>
              <Link
                to="/about"
                className="inline-block border border-gold text-gold hover:bg-gold hover:text-white font-medium px-7 py-3 rounded-sm transition-all duration-200 text-sm tracking-wide"
              >
                Read Our Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Every Memory Deserves to be Worn
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Start your Keepsy journey today. Create something truly yours.
            </p>
            <Link
              to="/custom-order"
              data-ocid="cta.primary_button"
              className="inline-block bg-white text-gold font-semibold px-10 py-4 rounded-sm hover:bg-ivory transition-colors duration-200 text-sm tracking-wide"
            >
              Create Your Keepsake
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
