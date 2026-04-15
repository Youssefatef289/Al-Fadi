export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/201279781350"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-600 bg-white shadow-2xl shadow-slate-400/40 transition-colors hover:bg-emerald-50"
      aria-label="واتساب"
    >
      <i className="fab fa-whatsapp text-3xl text-emerald-600" />
    </a>
  );
}
