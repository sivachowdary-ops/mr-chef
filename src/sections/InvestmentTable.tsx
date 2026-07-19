import { packages } from "@/data/packages";

/** Rows for the comparison table — derived from packages data */
function getRows() {
  return [
    {
      label: "Investment",
      values: packages.map((p) => p.priceFormatted),
      highlight: true,
    },
    {
      label: "Royalty",
      values: packages.map(() => "0%"),
      highlight: false,
    },
    {
      label: "Revenue Share",
      values: packages.map(() => "None"),
      highlight: false,
    },
    {
      label: "Est. Daily Business",
      values: packages.map((p) => p.estimatedDailyBusiness ?? "—"),
      highlight: false,
    },
    {
      label: "Est. Daily Profit",
      values: packages.map((p) => p.estimatedDailyProfit ?? "—"),
      highlight: false,
    },
    {
      label: "Area Exclusivity",
      values: packages.map(() => "Yes"),
      highlight: false,
    },
  ];
}

export default function InvestmentTable() {
  const rows = getRows();

  return (
    <section id="investment" className="section-padding bg-brand-bg">
      <div className="section-container">
        {/* ── Heading ───────────────────────────────────────── */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-amber mb-3.5">
            Investment Details
          </span>
          <h2 className="section-heading">
            Investment at a <span className="text-gradient">Glance</span>
          </h2>
        </div>

        {/* ── Table wrapper — scrollable on mobile ──────────── */}
        <div className="relative mx-auto max-w-4xl">
          {/* Scroll-hint gradient (mobile only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-brand-bg to-transparent md:hidden"
          />

          <div className="overflow-x-auto rounded-2xl border border-brand-warm-gray/60 bg-white shadow-sm">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-warm-gray/60 bg-brand-cream/50">
                  <th className="px-5 py-4 font-heading text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Feature
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.id}
                      className="px-5 py-4 text-center font-heading text-xs font-semibold uppercase tracking-wider text-brand-charcoal"
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={
                      idx % 2 === 0
                        ? "bg-white"
                        : "bg-brand-cream/30"
                    }
                  >
                    <td className="px-5 py-3.5 font-medium text-brand-charcoal">
                      {row.label}
                    </td>
                    {row.values.map((value, vIdx) => (
                      <td
                        key={`${row.label}-${vIdx}`}
                        className={`px-5 py-3.5 text-center tabular-nums ${
                          row.highlight
                            ? "font-extrabold text-brand-amber text-base"
                            : "font-semibold text-brand-charcoal/90"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Disclaimer ────────────────────────────────────── */}
        <div className="mx-auto mt-10 max-w-2xl text-center bg-brand-cream/80 border border-brand-warm-gray/60 px-6 py-4 rounded-xl shadow-xs">
          <p className="text-xs sm:text-sm font-semibold text-brand-charcoal leading-relaxed">
            * Estimates shared by the business for reference only; actual results depend entirely on location, local footfall, and daily operation.
          </p>
        </div>
      </div>
    </section>
  );
}
