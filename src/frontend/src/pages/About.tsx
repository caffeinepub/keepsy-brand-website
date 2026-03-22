import AnimatedSection from "../components/AnimatedSection";

const founders = [
  {
    id: "aman",
    name: "Aman Raj",
    role: "Co-Founder & Creative Director",
    photo: "/assets/uploads/Aman-3.jpeg",
    bio: "Aman leads design and product vision at Keepsy. His passion for storytelling through craft shapes every piece we create.",
  },
  {
    id: "suyash",
    name: "Suyash Pratap",
    role: "Co-Founder & Operations",
    photo: "/assets/uploads/Suyash-5.jpeg",
    bio: "Suyash ensures every order is fulfilled with care and precision. He builds the systems that let our craft scale with love.",
  },
];

const values = [
  {
    id: "memory",
    title: "Memory First",
    desc: "Every design decision begins with the story behind the piece. We don't create jewelry — we preserve moments.",
  },
  {
    id: "handmade",
    title: "Handmade Always",
    desc: "No two pieces are alike. Each keepsake is poured, set, and finished by hand in our Delhi studio.",
  },
  {
    id: "sustainable",
    title: "Sustainably Crafted",
    desc: "We use responsibly sourced materials and minimal packaging — beauty that's kind to the earth.",
  },
  {
    id: "personal",
    title: "Deeply Personal",
    desc: "We read every customization note with care. Your story matters to us as much as it matters to you.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-5xl font-bold text-charcoal mb-8">
              Born from a Memory
            </h1>
            <div className="space-y-5 text-taupe leading-relaxed">
              <p>
                Keepsy was born from a moment we never want to forget. In the
                summer of 2023, two friends — Aman and Suyash — sat in a small
                Delhi café, flipping through old photographs. Aman&rsquo;s
                grandmother had just passed, and he wanted something — anything
                — that could carry her memory in a tangible way. Something he
                could hold, wear, and feel every day.
              </p>
              <p>
                They searched everywhere. Everything felt generic,
                mass-produced, hollow. So they decided to create it themselves.
                What began as a hobby became Keepsy — a brand built entirely on
                the belief that jewelry should mean something.
              </p>
              <p>
                Today, Keepsy crafts premium handmade resin pieces for people
                across India who want to keep their most precious memories
                close. Every piece is made in Delhi, with love, by hand — just
                the way it should be.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-serif italic text-2xl md:text-3xl text-white leading-relaxed">
              &ldquo;We believe jewelry should be more than ornament — it should
              carry meaning, hold memory, and tell your story.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl font-bold text-charcoal">
                Meet the Founders
              </h2>
              <p className="text-taupe mt-3">
                The hearts behind every keepsake.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {founders.map((founder, i) => (
              <AnimatedSection key={founder.id} delay={i * 100}>
                <div
                  className="bg-cream p-8 rounded-sm shadow-card text-center"
                  data-ocid={`founders.item.${i + 1}`}
                >
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-5"
                  />
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {founder.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1 mb-4">
                    {founder.role}
                  </p>
                  <p className="text-taupe text-sm leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl font-bold text-charcoal">
                What We Stand For
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.id} delay={i * 80}>
                <div className="text-center">
                  <div className="text-gold text-3xl mb-4">✦</div>
                  <h4 className="font-serif font-semibold text-charcoal mb-2">
                    {v.title}
                  </h4>
                  <p className="text-taupe text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
