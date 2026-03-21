import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold text-gold tracking-widest">
              KEEPSY
            </span>
            <p className="mt-3 text-sm text-taupe leading-relaxed">
              Memory-driven keepsakes crafted with love in Delhi, India.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-taupe hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-taupe hover:text-gold transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-label="Pinterest"
                >
                  <title>Pinterest</title>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.88 6.4 9.34-.09-.8-.17-2.02.03-2.9.19-.78 1.25-5.3 1.25-5.3s-.32-.64-.32-1.59c0-1.49.87-2.6 1.94-2.6.91 0 1.36.68 1.36 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.42 3.14-5.29 0-2.18-1.47-3.81-4.12-3.81-3.01 0-4.89 2.25-4.89 4.77 0 .87.25 1.48.65 1.95.18.21.21.3.14.54-.05.18-.16.63-.2.8-.07.26-.28.35-.52.25-1.44-.59-2.11-2.17-2.11-3.95 0-2.93 2.48-6.47 7.4-6.47 3.97 0 6.6 2.88 6.6 5.97 0 4.1-2.27 7.17-5.6 7.17-1.12 0-2.18-.61-2.54-1.3l-.7 2.76c-.26.98-.96 2.2-1.43 2.94.43.13.88.2 1.34.2 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-taupe hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-charcoal font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {(
                [
                  { label: "Home", to: "/" },
                  { label: "Shop", to: "/shop" },
                  { label: "Custom Order", to: "/custom-order" },
                  { label: "About", to: "/about" },
                ] as {
                  label: string;
                  to: "/" | "/shop" | "/custom-order" | "/about";
                }[]
              ).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-taupe hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-charcoal font-semibold mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Contact Us" },
                { label: "FAQs" },
                { label: "Shipping Policy" },
                { label: "Returns" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to="/contact"
                    className="text-sm text-taupe hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-charcoal font-semibold mb-4">
              Stay in Touch
            </h4>
            <p className="text-sm text-taupe mb-4">
              Get new arrivals and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-ivory border border-divider rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe"
                aria-label="Newsletter email"
                data-ocid="footer.input"
              />
              <button
                type="submit"
                data-ocid="footer.submit_button"
                className="bg-gold hover:bg-gold-dark text-white text-sm font-medium px-4 py-2.5 rounded-sm transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-taupe">
          <span>&copy; {year} Keepsy. All rights reserved.</span>
          <span>Crafted with Love in Delhi, India 🇮🇳</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
