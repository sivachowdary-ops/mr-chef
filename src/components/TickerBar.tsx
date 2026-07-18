export default function TickerBar() {
  const items = [
    "Zero Royalty",
    "Real Profit",
    "Zero Training Fees",
    "40% Margin",
    "Fully Customizable",
    "One-Time Investment",
  ];

  // Duplicate items enough times for seamless loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-brand-charcoal">
      <div className="ticker-track flex whitespace-nowrap py-2">
        {repeated.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-2 px-6 text-[11px] font-bold uppercase tracking-widest text-white/90"
          >
            <span className="h-1 w-1 rounded-full bg-brand-amber shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
