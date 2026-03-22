import { Link } from "@tanstack/react-router";
import { Check, Copy, MapPin, MessageCircle, Package } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { useCart } from "../context/CartContext";

type PaymentTab = "upi" | "card" | "cod";
type CardTab = "cards" | "netbanking" | "wallets";

const banks = ["SBI", "HDFC", "ICICI", "Axis", "Kotak"];
const wallets = ["Paytm", "PhonePe", "Google Pay"];

const OWNER_WHATSAPP = "918083675985";

const WhatsAppNote = () => (
  <p className="text-xs text-taupe text-center mt-2">
    <span className="text-gold">★</span> Only after the confirmation of payment
    on WhatsApp, the order will be acknowledged.
  </p>
);

type Address = {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
};

const addressFields: {
  key: keyof Address;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  {
    key: "address",
    label: "Address",
    type: "text",
    placeholder: "Street, Area, Landmark",
  },
  { key: "city", label: "City", type: "text", placeholder: "Delhi" },
  { key: "state", label: "State", type: "text", placeholder: "Delhi" },
  { key: "pincode", label: "Pincode", type: "text", placeholder: "110001" },
  { key: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
];

export default function Checkout() {
  const { items, totalPrice, removeItem } = useCart();
  const [paymentTab, setPaymentTab] = useState<PaymentTab>("upi");
  const [cardTab, setCardTab] = useState<CardTab>("cards");
  const [copied, setCopied] = useState(false);
  const [bank, setBank] = useState("");
  const [wallet, setWallet] = useState("");
  const [promo, setPromo] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [deliveryAddress, setDeliveryAddress] = useState<Address>({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = totalPrice >= 999 ? 0 : 99;
  const total = totalPrice + shipping;

  const copyUpi = () => {
    navigator.clipboard.writeText("amanraj933420-1@oksbi").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const buildWhatsAppMessage = (method: string) => {
    const lines: string[] = [];
    lines.push("🛍️ *New Order - Keepsy*");
    lines.push("");
    lines.push("*Order Details:*");
    for (const item of items) {
      lines.push(
        `• ${item.name} × ${item.quantity} — ₹${item.price * item.quantity}`,
      );
      if (item.customization?.name)
        lines.push(`  Name engraving: ${item.customization.name}`);
      if (item.customization?.date)
        lines.push(`  Date: ${item.customization.date}`);
    }
    lines.push("");
    lines.push(
      `Subtotal: ₹${totalPrice}  |  Shipping: ${shipping === 0 ? "Free" : `₹${shipping}`}`,
    );
    lines.push(`*Total Amount: ₹${total}*`);
    lines.push("");
    lines.push(`*Payment Method:* ${method}`);
    lines.push("");
    lines.push("*Delivery Address:*");
    if (deliveryAddress.name) lines.push(`Name: ${deliveryAddress.name}`);
    if (deliveryAddress.address)
      lines.push(`Address: ${deliveryAddress.address}`);
    if (deliveryAddress.city) lines.push(`City: ${deliveryAddress.city}`);
    if (deliveryAddress.state) lines.push(`State: ${deliveryAddress.state}`);
    if (deliveryAddress.pincode)
      lines.push(`Pincode: ${deliveryAddress.pincode}`);
    if (deliveryAddress.phone) lines.push(`Phone: ${deliveryAddress.phone}`);
    lines.push("");
    lines.push("Please confirm this order. Thank you! 🙏");
    return encodeURIComponent(lines.join("\n"));
  };

  const openWhatsApp = (method: string) => {
    const msg = buildWhatsAppMessage(method);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${msg}`, "_blank");
    setOrderPlaced(true);
  };

  const inputClass =
    "w-full bg-ivory border border-divider rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder-taupe text-sm";

  const DeliveryAddressForm = () => (
    <div className="space-y-4 mt-6 pt-6 border-t border-divider">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={16} className="text-gold" />
        <h3 className="font-medium text-charcoal text-sm">Delivery Address</h3>
      </div>
      {addressFields.map((field) => (
        <div key={field.key}>
          <label
            className="block text-xs font-medium text-taupe mb-1"
            htmlFor={`addr-${field.key}`}
          >
            {field.label}
          </label>
          <input
            id={`addr-${field.key}`}
            type={field.type}
            placeholder={field.placeholder}
            value={deliveryAddress[field.key]}
            onChange={(e) =>
              setDeliveryAddress((a) => ({ ...a, [field.key]: e.target.value }))
            }
            data-ocid="checkout.input"
            className={inputClass}
          />
        </div>
      ))}
    </div>
  );

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-ivory flex items-center justify-center py-24">
        <AnimatedSection>
          <div
            className="text-center max-w-md mx-auto px-4"
            data-ocid="checkout.success_state"
          >
            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-white" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Order Placed!
            </h2>
            <p className="text-taupe leading-relaxed mb-6">
              Thank you for your order. Your keepsake is being crafted with
              love. You&rsquo;ll receive updates within 24 hours.
            </p>
            <Link
              to="/shop"
              data-ocid="checkout.primary_button"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-medium px-8 py-3 rounded-sm transition-colors text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </AnimatedSection>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h1 className="font-serif text-4xl font-bold text-charcoal mb-12 text-center">
            Complete Your Order
          </h1>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Payment */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="bg-cream rounded-sm shadow-card p-8">
                <div className="flex rounded-sm border border-divider overflow-hidden mb-8">
                  {(
                    [
                      { key: "upi", label: "UPI" },
                      { key: "card", label: "Card / Net Banking" },
                      { key: "cod", label: "Cash on Delivery" },
                    ] as { key: PaymentTab; label: string }[]
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      data-ocid="checkout.tab"
                      onClick={() => setPaymentTab(tab.key)}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        paymentTab === tab.key
                          ? "bg-gold text-white"
                          : "text-taupe hover:text-charcoal"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {paymentTab === "upi" && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-xl font-semibold text-charcoal">
                      Pay via UPI
                    </h2>
                    <div className="bg-ivory p-4 rounded-sm flex items-center justify-between border border-divider">
                      <span className="font-mono text-charcoal text-sm">
                        amanraj933420-1@oksbi
                      </span>
                      <button
                        type="button"
                        onClick={copyUpi}
                        data-ocid="checkout.secondary_button"
                        className="flex items-center gap-1.5 text-gold hover:text-gold-dark text-xs font-medium transition-colors"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <div className="mx-auto w-56 flex flex-col items-center justify-center">
                      <img
                        src="/assets/uploads/QR-1.jpeg"
                        alt="Scan to Pay via UPI"
                        className="w-48 h-48 object-contain rounded-sm"
                      />
                      <p className="text-xs text-taupe mt-2">Scan to Pay</p>
                      <p className="text-xs text-gold font-medium mt-1">
                        ₹{total}
                      </p>
                    </div>
                    <DeliveryAddressForm />
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsApp("UPI — amanraj933420-1@oksbi")
                        }
                        data-ocid="checkout.primary_button"
                        className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-4 rounded-sm transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={18} />
                        I&rsquo;ve Paid ₹{total} — Confirm via WhatsApp
                      </button>
                      <WhatsAppNote />
                    </div>
                  </div>
                )}

                {paymentTab === "card" && (
                  <div className="space-y-6">
                    <div className="flex gap-1 bg-ivory rounded-sm p-1 border border-divider">
                      {(["cards", "netbanking", "wallets"] as CardTab[]).map(
                        (t) => (
                          <button
                            key={t}
                            type="button"
                            data-ocid="checkout.tab"
                            onClick={() => setCardTab(t)}
                            className={`flex-1 py-2 text-xs font-medium rounded-sm capitalize transition-colors ${
                              cardTab === t
                                ? "bg-gold text-white"
                                : "text-taupe hover:text-charcoal"
                            }`}
                          >
                            {t === "netbanking"
                              ? "Net Banking"
                              : t === "wallets"
                                ? "Wallets"
                                : "Cards"}
                          </button>
                        ),
                      )}
                    </div>
                    {cardTab === "cards" && (
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          value={cardDetails.number}
                          onChange={(e) =>
                            setCardDetails((d) => ({
                              ...d,
                              number: e.target.value,
                            }))
                          }
                          data-ocid="checkout.input"
                          className={inputClass}
                          maxLength={19}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM / YY"
                            value={cardDetails.expiry}
                            onChange={(e) =>
                              setCardDetails((d) => ({
                                ...d,
                                expiry: e.target.value,
                              }))
                            }
                            data-ocid="checkout.input"
                            className={inputClass}
                            maxLength={7}
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cardDetails.cvv}
                            onChange={(e) =>
                              setCardDetails((d) => ({
                                ...d,
                                cvv: e.target.value,
                              }))
                            }
                            data-ocid="checkout.input"
                            className={inputClass}
                            maxLength={4}
                          />
                        </div>
                        <DeliveryAddressForm />
                        <div>
                          <button
                            type="button"
                            onClick={() => openWhatsApp("Card Payment")}
                            data-ocid="checkout.primary_button"
                            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-4 rounded-sm transition-colors text-sm flex items-center justify-center gap-2"
                          >
                            <MessageCircle size={18} />
                            Pay ₹{total} — Confirm via WhatsApp
                          </button>
                          <WhatsAppNote />
                        </div>
                      </div>
                    )}
                    {cardTab === "netbanking" && (
                      <div className="space-y-4">
                        {banks.map((b) => (
                          <label
                            key={b}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="bank"
                              value={b}
                              checked={bank === b}
                              onChange={() => setBank(b)}
                              data-ocid="checkout.radio"
                              className="w-4 h-4 accent-gold"
                            />
                            <span className="text-sm text-charcoal group-hover:text-gold transition-colors">
                              {b}
                            </span>
                          </label>
                        ))}
                        <DeliveryAddressForm />
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              openWhatsApp(
                                `Net Banking — ${bank || "selected bank"}`,
                              )
                            }
                            data-ocid="checkout.primary_button"
                            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-4 rounded-sm transition-colors text-sm flex items-center justify-center gap-2 mt-2"
                          >
                            <MessageCircle size={18} />
                            Proceed — Confirm via WhatsApp
                          </button>
                          <WhatsAppNote />
                        </div>
                      </div>
                    )}
                    {cardTab === "wallets" && (
                      <div className="space-y-4">
                        {wallets.map((w) => (
                          <label
                            key={w}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="wallet"
                              value={w}
                              checked={wallet === w}
                              onChange={() => setWallet(w)}
                              data-ocid="checkout.radio"
                              className="w-4 h-4 accent-gold"
                            />
                            <span className="text-sm text-charcoal group-hover:text-gold transition-colors">
                              {w}
                            </span>
                          </label>
                        ))}
                        <DeliveryAddressForm />
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              openWhatsApp(
                                `Wallet — ${wallet || "selected wallet"}`,
                              )
                            }
                            data-ocid="checkout.primary_button"
                            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-4 rounded-sm transition-colors text-sm flex items-center justify-center gap-2 mt-2"
                          >
                            <MessageCircle size={18} />
                            Pay with Wallet — Confirm via WhatsApp
                          </button>
                          <WhatsAppNote />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {paymentTab === "cod" && (
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center p-5 bg-ivory border border-divider rounded-sm">
                      <Package size={28} className="text-gold shrink-0" />
                      <div>
                        <h3 className="font-medium text-charcoal">
                          Cash on Delivery Available
                        </h3>
                        <p className="text-sm text-taupe mt-1">
                          Pay when your keepsake arrives at your door.
                        </p>
                      </div>
                    </div>
                    <DeliveryAddressForm />
                    <div>
                      <button
                        type="button"
                        onClick={() => openWhatsApp("Cash on Delivery")}
                        data-ocid="checkout.primary_button"
                        className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium py-4 rounded-sm transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={18} />
                        Place Order ₹{total} — Confirm via WhatsApp
                      </button>
                      <WhatsAppNote />
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={100}>
              <div className="bg-cream rounded-sm shadow-card p-8 sticky top-24">
                <h2 className="font-serif text-xl font-semibold text-charcoal mb-6">
                  Your Order
                </h2>
                {items.length === 0 ? (
                  <div
                    className="text-center py-10"
                    data-ocid="checkout.empty_state"
                  >
                    <p className="text-taupe mb-4">Your cart is empty.</p>
                    <Link
                      to="/shop"
                      data-ocid="checkout.primary_button"
                      className="text-gold hover:underline text-sm font-medium"
                    >
                      Continue Shopping →
                    </Link>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-4 mb-6">
                      {items.map((item, i) => (
                        <li
                          key={item.id}
                          className="flex gap-4"
                          data-ocid={`checkout.item.${i + 1}`}
                        >
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-sm shrink-0"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-blush rounded-sm flex items-center justify-center shrink-0">
                              <span className="text-xl">✦</span>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-charcoal text-sm truncate">
                              {item.name}
                            </p>
                            {item.customization?.name && (
                              <p className="text-xs text-taupe">
                                Name: {item.customization.name}
                              </p>
                            )}
                            {item.customization?.date && (
                              <p className="text-xs text-taupe">
                                Date: {item.customization.date}
                              </p>
                            )}
                            <p className="text-xs text-taupe mt-0.5">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-sm font-medium text-charcoal">
                              ₹{item.price * item.quantity}
                            </p>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              data-ocid="checkout.delete_button"
                              className="text-xs text-taupe hover:text-red-500 mt-1 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mb-6">
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        data-ocid="checkout.input"
                        className="flex-1 bg-ivory border border-divider rounded-sm px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold text-charcoal placeholder-taupe"
                      />
                      <button
                        type="button"
                        data-ocid="checkout.secondary_button"
                        className="px-4 py-2 bg-gold text-white text-xs rounded-sm hover:bg-gold-dark transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    <div className="border-t border-divider pt-5 space-y-2.5 text-sm">
                      <div className="flex justify-between text-taupe">
                        <span>Subtotal</span>
                        <span>₹{totalPrice}</span>
                      </div>
                      <div className="flex justify-between text-taupe">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-charcoal text-base pt-2 border-t border-divider">
                        <span>Total</span>
                        <span className="text-gold">₹{total}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
