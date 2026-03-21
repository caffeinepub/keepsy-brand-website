import { Link, useParams } from "@tanstack/react-router";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { useCart } from "../context/CartContext";

const products: Record<
  string,
  {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  }
> = {
  bracelet: {
    id: "bracelet",
    name: "Memory Bracelet",
    price: 899,
    image: "/images/bracelet.jpeg",
    description:
      "Our signature Memory Bracelet is handcrafted from premium resin, capturing your chosen name, date, or message in a timeless wearable keepsake. Each piece is made-to-order in our Delhi studio.",
    category: "Bracelets",
  },
  earrings: {
    id: "earrings",
    name: "Bloom Earrings",
    price: 699,
    image: "/images/Earring.jpeg",
    description:
      "The Bloom Earrings are a celebration of delicate beauty. Crafted from high-quality resin with pressed botanicals and your personal touch, these earrings are as unique as the memories they carry.",
    category: "Earrings",
  },
  "custom-set": {
    id: "custom-set",
    name: "Custom Keepsake Set",
    price: 1499,
    image: "",
    description:
      "A complete set — bracelet and earring pair — fully customized with your name, special date, and a heartfelt message. The perfect gift for someone irreplaceable.",
    category: "Bracelets",
  },
  "rose-bracelet": {
    id: "rose-bracelet",
    name: "Rose Memory Bracelet",
    price: 999,
    image: "/images/bracelet.jpeg",
    description:
      "The Rose Memory Bracelet features a warm blush resin setting with real dried rose petals encased inside. Add a name or date to make it truly unforgettable.",
    category: "Bracelets",
  },
  "pearl-earrings": {
    id: "pearl-earrings",
    name: "Pearl Drop Earrings",
    price: 799,
    image: "/images/Earring.jpeg",
    description:
      "Elegant teardrop earrings with a pearl-white resin finish. Light, comfortable, and endlessly wearable — customize with initials or a meaningful date.",
    category: "Earrings",
  },
};

export default function ProductDetail() {
  const { id } = useParams({ from: "/product/$id" });
  const product = id ? products[id] : null;
  const { addItem } = useCart();

  const [customName, setCustomName] = useState("");
  const [customDate, setCustomDate] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4">
        <h2 className="font-serif text-3xl text-charcoal">Product not found</h2>
        <Link to="/shop" className="text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      customization: {
        name: customName || undefined,
        date: customDate || undefined,
        message: customMessage || undefined,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <main className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="overflow-hidden rounded-sm shadow-soft group">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-[520px] bg-blush flex items-center justify-center">
                  <span className="text-8xl">✦</span>
                </div>
              )}
            </div>

            <div>
              <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl font-bold text-charcoal">
                {product.name}
              </h1>
              <p className="text-2xl text-gold font-semibold mt-3">
                ₹{product.price}
              </p>
              <p className="text-taupe mt-5 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8 border-t border-divider pt-8">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-5">
                  Personalize It
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm text-charcoal font-medium mb-1.5"
                      htmlFor="cust-name"
                    >
                      Name
                    </label>
                    <input
                      id="cust-name"
                      type="text"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="e.g. Priya"
                      data-ocid="product.input"
                      className="w-full bg-cream border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-charcoal font-medium mb-1.5"
                      htmlFor="cust-date"
                    >
                      Special Date
                    </label>
                    <input
                      id="cust-date"
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      data-ocid="product.input"
                      className="w-full bg-cream border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm text-charcoal font-medium mb-1.5"
                      htmlFor="cust-message"
                    >
                      Message{" "}
                      <span className="text-taupe font-normal">
                        (max 100 characters)
                      </span>
                    </label>
                    <textarea
                      id="cust-message"
                      value={customMessage}
                      onChange={(e) =>
                        setCustomMessage(e.target.value.slice(0, 100))
                      }
                      placeholder="A message close to your heart..."
                      rows={3}
                      data-ocid="product.textarea"
                      className="w-full bg-cream border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe text-sm resize-none"
                    />
                    <p className="text-right text-xs text-taupe mt-1">
                      {customMessage.length}/100
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-charcoal font-medium mb-2">
                  Quantity
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    data-ocid="product.secondary_button"
                    className="w-9 h-9 rounded-sm border border-divider flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-medium text-charcoal">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    data-ocid="product.secondary_button"
                    className="w-9 h-9 rounded-sm border border-divider flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                data-ocid="product.primary_button"
                className={`mt-8 w-full flex items-center justify-center gap-2 font-medium py-4 rounded-sm transition-all duration-300 text-sm ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-gold hover:bg-gold-dark text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>

              {added && (
                <div
                  data-ocid="product.success_state"
                  className="mt-4 text-center"
                >
                  <Link
                    to="/checkout"
                    className="text-sm text-gold hover:underline"
                  >
                    View Cart &amp; Checkout →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
