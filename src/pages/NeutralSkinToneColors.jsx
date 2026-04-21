import { Link } from "react-router";
import PageLayout from "../components/PageLayout";
import UndertoneColorChart from "../components/UndertoneColorChart";

export default function NeutralSkinToneColors() {
  const clothingColors = [
    "Mauve",
    "Peach",
    "Fern",
    "Taupe",
    "Champagne",
    "Soft White",
    "Dusty Rose",
    "Mushroom",
  ];

  const lipstickShades = [
    "True Red",
    "Berry Red",
    "Coral Red",
    "Brick Red",
    "Soft Red",
    "Classic Red",
  ];

  const jewelryMetals = [
    "Silver",
    "White Gold",
    "Yellow Gold",
    "Bronze",
    "Rose Gold",
  ];

  const signs = [
    "Your skin may appear balanced rather than strongly pink or strongly golden.",
    "You can often wear both warm and cool shades without either looking completely wrong.",
    "Mixed metals can look beautiful on you.",
    "True reds, softer reds, and balanced tones often feel especially flattering.",
    "You may find that both ivory and soft white can work better than very stark extremes.",
  ];

  const strengths = [
    "Neutral undertones often have the most flexibility across clothing, jewelry, and makeup.",
    "You can usually borrow from both warm and cool palettes, then refine based on depth and softness.",
    "Balanced shades often create the most polished effect because they echo your natural harmony.",
  ];

  const mistakes = [
    "Extremely icy shades can sometimes feel too sharp.",
    "Very orange-heavy tones can sometimes pull too warm.",
    "The most flattering neutral palette is usually balanced, elegant, and softly refined rather than extreme.",
  ];

  const neutralColorGroups = [
  {
    category: "Neutrals",
    colors: [
      { name: "Soft White", hex: "#F5F1EA" },
      { name: "Mushroom", hex: "#9C8B84" },
      { name: "Taupe", hex: "#9A8577" },
      { name: "Stone", hex: "#B7A89A" },
      { name: "Cocoa", hex: "#6B4A3C" },
      { name: "Greige", hex: "#B3A79D" },
    ],
  },
  {
    category: "Pinks & Reds",
    colors: [
      { name: "True Red", hex: "#B0303C" },
      { name: "Soft Berry", hex: "#9A4F63" },
      { name: "Dusty Rose", hex: "#B67C86" },
      { name: "Balanced Rose", hex: "#C4878E" },
      { name: "Muted Red", hex: "#B6494E" },
      { name: "Rosewood", hex: "#8A5A5B" },
    ],
  },
  {
    category: "Greens, Blues & Purples",
    colors: [
      { name: "Sage", hex: "#8A9A7B" },
      { name: "Teal", hex: "#3D6F73" },
      { name: "Soft Navy", hex: "#465B78" },
      { name: "Eucalyptus", hex: "#7A9388" },
      { name: "Mauve", hex: "#9D7C8F" },
      { name: "Soft Plum", hex: "#7C5C6B" },
    ],
  },
  {
    category: "Metallics",
    colors: [
      { name: "Silver", hex: "#C9CDD3" },
      { name: "Gold", hex: "#C8A25A" },
      { name: "Rose Gold", hex: "#C98B74" },
      { name: "Champagne", hex: "#D8C3A3" },
      { name: "Pewter", hex: "#8A8D91" },
      { name: "Mixed Metals", hex: "#B7A18B" },
    ],
  },
];

  return (
    <PageLayout bgClassName="bg-[#f8f3ee] text-[#332821]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#e8ddd2] bg-gradient-to-b from-[#fdfbf8] via-[#f8f3ee] to-[#f4ede6]">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute left-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[#e8d8cb]/40 blur-3xl" />
          <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-[#d8c6b4]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#9b7458]">
              Neutral Undertone Guide
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              The best colors for neutral skin tones
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5148] md:text-2xl md:leading-9">
              If your undertones feel balanced rather than strongly warm or
              strongly cool, you may be able to wear a beautiful range of reds,
              wardrobe shades, and jewelry metals with ease.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#796a5f] md:text-lg">
              Use this page as your elegant guide to balanced color choices,
              refined wardrobe shades, flexible jewelry options, and chic red
              lipsticks that naturally flatter neutral undertones.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#chart"
                className="inline-flex items-center justify-center rounded-full bg-[#9b7458] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(155,116,88,0.22)] transition hover:-translate-y-0.5 hover:bg-[#89664d]"
              >
                View the color chart
              </a>

              <Link
                to="/warm-skin-tone-colors"
                className="inline-flex items-center justify-center rounded-full border border-[#ddcfc2] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#332821] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#cdb39e] hover:bg-white"
              >
                Explore warm tones
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-[#706259]">
              <span className="rounded-full border border-[#e8ddd2] bg-white/80 px-4 py-2">
                Balanced red lipsticks
              </span>
              <span className="rounded-full border border-[#e8ddd2] bg-white/80 px-4 py-2">
                Soft versatile palettes
              </span>
              <span className="rounded-full border border-[#e8ddd2] bg-white/80 px-4 py-2">
                Mixed metallics
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#e8ddd2] bg-white/85 p-5 shadow-[0_26px_72px_rgba(72,56,44,0.08)] backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f3e9df] via-[#fcf8f4] to-[#eee4da] p-4 md:p-5">
                <img
                  src="/neutral-skin-tone-chart.png"
                  alt="Neutral skin tone chart showing clothing colors, red lipsticks, and jewelry"
                  className="w-full rounded-[1.6rem] border border-white/70 shadow-[0_18px_40px_rgba(72,56,44,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS + STRENGTHS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e8ddd2] bg-white p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              How to recognize it
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Do you have neutral undertones?
            </h2>

            <div className="mt-6 space-y-4">
              {signs.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[#efe5dc] bg-[#fbf7f2] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#5d5048]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8ddd2] bg-gradient-to-br from-[#ffffff] to-[#f8f2ec] p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              Why it matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Neutral tones give you beautiful flexibility
            </h2>

            <div className="mt-6 space-y-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-[#efe5dc] bg-white px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#5d5048]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#e8ddd2] bg-[#fcf8f4] px-5 py-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9b7458]">
                Quick shortcut
              </p>

              <p className="mt-3 text-sm leading-7 text-[#5d5048]">
                If both gold and silver can look good on you, and true reds feel
                easier to wear than very orange or very blue reds, you may lean
                neutral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHART */}
      <section id="chart" className="border-y border-[#e8ddd2] bg-[#fdfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9b7458]">
              The Edit
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Your neutral-tone color palette
            </h2>

            <p className="mt-5 text-base leading-8 text-[#706259]">
              Use these shades as a starting point when choosing tops, dresses,
              makeup, accessories, and jewelry. Neutral undertones often shine
              in balanced, elegant colors that do not feel overly warm or overly
              cool.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-[#e8ddd2] bg-white p-7 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b28f76]">
                Clothing Colors
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Flexible wardrobe favorites
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {clothingColors.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e8ddd2] bg-[#faf5f0] px-4 py-2 text-sm text-[#5d5048]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#706259]">
                Neutral complexions often look especially chic in balanced soft
                tones, muted elegance, and versatile shades that bridge warm and
                cool.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#e8ddd2] bg-white p-7 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b28f76]">
                Best Red Lipsticks
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Reds that love neutral tones
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {lipstickShades.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#efd9d3] bg-[#fff7f5] px-4 py-2 text-sm text-[#7a4c42]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#706259]">
                Think classic reds, softened berry reds, balanced coral-reds,
                and refined brick tones that do not lean too far in either
                direction.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#e8ddd2] bg-white p-7 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b28f76]">
                Jewelry Metals
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Most flattering metallics
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {jewelryMetals.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e8ddd2] bg-[#fcf7f2] px-4 py-2 text-sm text-[#6e5948]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#706259]">
                One of the gifts of neutral undertones is flexibility. Mixed
                metals can often look intentionally elegant rather than
                conflicting.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="rounded-[2rem] border border-[#e8ddd2] bg-white p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
            What to watch for
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Common color mistakes for neutral tones
          </h2>

          <div className="mt-6 space-y-4">
            {mistakes.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[#efe5dc] bg-[#fbf7f2] px-5 py-4"
              >
                <p className="text-sm leading-7 text-[#5d5048]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UndertoneColorChart
  eyebrow="Full Color Chart"
  title="The full color palette for neutral tones"
  description="Neutral undertones often look strongest in balanced, softly refined shades that do not lean too icy or too warm. This palette is designed to guide flexible, elegant color choices across lipstick, fashion, and accessories."
  accent="#9b7458"
  groups={neutralColorGroups}
/>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="rounded-[2.25rem] border border-[#e8ddd2] bg-gradient-to-r from-[#332821] to-[#8a6a54] px-8 py-10 text-[#f8efe7] shadow-[0_22px_55px_rgba(72,56,44,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6d1bf]">
            Continue Exploring
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-5xl">
                Still deciding between warm, cool, and neutral?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#f0dfd2]">
                Explore the full undertone series and discover the colors,
                metals, and reds that feel most naturally flattering on you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/warm-skin-tone-colors"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#332821]"
              >
                View warm tones
              </Link>

              <Link
                to="/cool-skin-tone-colors"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white"
              >
                View cool tones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}