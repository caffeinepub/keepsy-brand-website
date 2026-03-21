import { Link } from "@tanstack/react-router";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const allProducts = [
  {
    id: "bracelet",
    name: "Memory Bracelet",
    price: 899,
    image: "/images/bracelet.jpeg",
    category: "Bracelets",
  },
  {
    id: "earrings",
    name: "Bloom Earrings",
    price: 699,
    image: "/images/Earring.jpeg",
    category: "Earrings",
  },
  {
    id: "custom-set",
    name: "Custom Keepsake Set",
    price: 1499,
    image: "",
    category: "Bracelets",
  },
  {
    id: "rose-bracelet",
    name: "Rose Memory Bracelet",
    price: 999,
    image: "/images/bracelet.jpeg",
    category: "Bracelets",
  },
  {
    id: "pearl-earrings",
    name: "Pearl Drop Earrings",
    price: 799,
    image: "/images/Earring.jpeg",
    category: "Earrings",
  },
];

type CategoryFilter = "All" | "Bracelets" | "Earrings";
type PriceFilter = "All" | "Under ₹500" | "₹500–₹1000" | "Above ₹1000";

function matchesPrice(price: number, filter: PriceFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Under ₹500") return price < 500;
  if (filter === "₹500–₹1000") return price >= 500 && price <= 1000;
  return price > 1000;
}

export default function Shop() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("All");

  const filtered = allProducts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      matchesPrice(p.price, priceFilter),
  );

  return (
    <main className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-charcoal">
              Our Collection
            </h1>
            <p className="mt-3 text-taupe max-w-md mx-auto">
              Handcrafted resin pieces that carry your memories.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="flex flex-col sm:flex-row gap-6 mb-12 items-start sm:items-center">
            <div className="flex gap-2 flex-wrap">
              {(["All", "Bracelets", "Earrings"] as CategoryFilter[]).map(
                (c) => (
                  <button
                    key={c}
                    type="button"
                    data-ocid="shop.tab"
                    onClick={() => setCategory(c)}
                    className={`px-5 py-2 text-sm rounded-sm border transition-colors duration-200 ${
                      category === c
                        ? "bg-gold text-white border-gold"
                        : "border-divider text-taupe hover:border-gold hover:text-gold"
                    }`}
                  >
                    {c}
                  </button>
                ),
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {(
                [
                  "All",
                  "Under ₹500",
                  "₹500–₹1000",
                  "Above ₹1000",
                ] as PriceFilter[]
              ).map((p) => (
                <button
                  key={p}
                  type="button"
                  data-ocid="shop.tab"
                  onClick={() => setPriceFilter(p)}
                  className={`px-4 py-2 text-xs rounded-sm border transition-colors duration-200 ${
                    priceFilter === p
                      ? "bg-gold text-white border-gold"
                      : "border-divider text-taupe hover:border-gold hover:text-gold"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {filtered.length === 0 ? (
          <div className="text-center py-24" data-ocid="shop.empty_state">
            <p className="text-taupe text-lg">
              No products match your filters.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 60}>
                <div
                  className="bg-cream rounded-sm shadow-card hover:shadow-soft transition-shadow group"
                  data-ocid={`shop.item.${i + 1}`}
                >
                  <div className="overflow-hidden rounded-t-sm">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-64 bg-blush flex items-center justify-center">
                        <span className="text-6xl">✦</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                      {product.name}
                    </h3>
                    <p className="text-gold font-medium mt-1">
                      ₹{product.price}
                    </p>
                    <Link
                      to="/product/$id"
                      params={{ id: product.id }}
                      data-ocid="shop.primary_button"
                      className="mt-4 inline-block bg-gold hover:bg-gold-dark text-white text-sm font-medium px-5 py-2 rounded-sm transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
