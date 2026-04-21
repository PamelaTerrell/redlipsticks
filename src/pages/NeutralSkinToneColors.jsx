import { Link } from "react-router";
import PageLayout from "../components/PageLayout";
import UndertoneColorChart from "../components/UndertoneColorChart";

export default function NeutralSkinToneColors() {
  const signs = [
    "Your skin may appear balanced rather than strongly pink or strongly golden.",
    "You can often wear both warm and cool shades without either looking completely wrong.",
    "Both gold and silver can look beautiful on you.",
    "True reds, softened reds, and balanced tones often feel especially flattering.",
    "You may find that both ivory and soft white can work better than very stark extremes.",
  ];

  const lipstickShades = [
    "True red",
    "Balanced red",
    "Soft berry red",
    "Rose-red",
    "Muted classic red",
    "Refined satin red",
  ];

  const jewelryMetals = [
    "Silver",
    "White gold",
    "Yellow gold",
    "Rose gold",
    "Mixed metals",
  ];

  const mistakes = [
    "Extremely icy shades can sometimes feel too sharp.",
    "Very orange-heavy tones can sometimes pull too warm.",
    "The most flattering neutral palette is usually balanced and refined rather than strongly extreme.",
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
              The neutral tone color guide
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5148] md:text-2xl md:leading-9">
              Balanced shades that create effortless elegance for neutral undertones.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#796a5f] md:text-lg">
              If your undertones feel balanced rather than strongly warm or cool,
              you may be able to wear a beautiful range of reds, wardrobe shades,
              and jewelry metals with ease. Use this page as your full guide to
              balanced color, lipstick, jewelry, and styling direction.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#full-chart"
                className="inline-flex items-center justify-center rounded-full bg-[#9b7458] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(155,116,88,0.22)] transition hover:-translate-y-0.5 hover:bg-[#89664d]"
              >
                See full palette
              </a>

              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full border border-[#ddcfc2] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#332821] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#cdb39e] hover:bg-white"
              >
                Take the quiz
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

      {/* HOW TO RECOGNIZE IT */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e8ddd2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              How to recognize it
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Do you have neutral undertones?
            </h2>

            <div className="mt-6 space-y-4">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="flex gap-3 rounded-[1.25rem] border border-[#efe5dc] bg-[#fbf7f2] px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9b7458]" />
                  <p className="text-sm leading-7 text-[#5d5048]">{sign}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8ddd2] bg-gradient-to-br from-[#ffffff] to-[#f8f2ec] p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              Why it matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Neutral harmony gives you beautiful flexibility
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5d5048]">
              When your wardrobe, jewelry, and lipstick sit in balance with your
              undertones, the overall effect often feels easy, polished, and
              intentional. Neutral coloring can often handle both warm and cool
              influence, especially when the shades are softly refined rather
              than extreme.
            </p>

            <p className="mt-5 text-base leading-8 text-[#5d5048]">
              This flexibility is one of the strengths of neutral undertones,
              but it still helps to choose colors that feel balanced rather than
              too icy or too strongly orange.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-[#e8ddd2] bg-white px-5 py-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9b7458]">
                Quick shortcut
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5d5048]">
                If both gold and silver can look good on you, and true reds feel
                easier to wear than very orange or very blue reds, there is a
                good chance you lean neutral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL COLOR CHART */}
      <div id="full-chart">
        <UndertoneColorChart
          eyebrow="Full Color Chart"
          title="The full color palette for neutral tones"
          description="Neutral undertones often look strongest in balanced, softly refined shades that do not lean too icy or too warm. Use this palette as a visual guide for clothing, accessories, lipstick, and overall styling."
          accent="#9b7458"
          groups={neutralColorGroups}
        />
      </div>

      {/* RED LIPSTICK FAMILIES + JEWELRY */}
      <section className="border-y border-[#e8ddd2] bg-[#fdfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#e8ddd2] bg-white p-7 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b28f76]">
                Best Red Lipstick Families
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Reds that love neutral undertones
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {lipstickShades.map((shade) => (
                  <span
                    key={shade}
                    className="rounded-full border border-[#efd9d3] bg-[#fff7f5] px-4 py-2 text-sm text-[#7a4c42]"
                  >
                    {shade}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#706259]">
                Think true red, softened berry, rose-red, and balanced classic
                reds rather than shades that lean very icy or strongly orange.
                These often feel the most elegant, flexible, and naturally
                flattering on neutral coloring.
              </p>

              <div className="mt-8">
                <Link
                  to="/blue-red-vs-orange-red"
                  className="inline-flex items-center text-sm font-medium text-[#9b7458] hover:text-[#89664d]"
                >
                  Explore blue-red vs orange-red →
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#e8ddd2] bg-white p-7 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b28f76]">
                Jewelry & Accessories
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Balanced metals and finishes
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {jewelryMetals.map((metal) => (
                  <span
                    key={metal}
                    className="rounded-full border border-[#e8ddd2] bg-[#fcf7f2] px-4 py-2 text-sm text-[#6e5948]"
                  >
                    {metal}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#706259]">
                One of the gifts of neutral undertones is flexibility. Gold,
                silver, rose gold, and mixed metals can often look intentionally
                elegant rather than conflicting. In clothing and accessories,
                balanced, softly refined shades often work especially well.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COLORS TO BE CAREFUL WITH + RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#e8ddd2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              Colors to be careful with
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Common color mistakes for neutral tones
            </h2>

            <div className="mt-6 space-y-4">
              {mistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-[1.25rem] border border-[#efe5dc] bg-[#fbf7f2] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#5d5048]">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8ddd2] bg-gradient-to-br from-[#f8f2ec] to-[#ffffff] p-8 shadow-[0_18px_46px_rgba(72,56,44,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7458]">
              Related guidance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Keep refining your red direction
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5d5048]">
              If you are neutral-toned, some of the most useful next steps are
              understanding balanced reds, learning where blue-red and
              orange-red differ, and taking the quiz for a more personalized
              starting point.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                to="/blue-red-vs-orange-red"
                className="block text-sm font-medium text-[#9b7458] hover:text-[#89664d]"
              >
                Blue-Red vs Orange-Red →
              </Link>
              <Link
                to="/best-red-lipsticks-over-40"
                className="block text-sm font-medium text-[#9b7458] hover:text-[#89664d]"
              >
                Best Red Lipsticks Over 40 →
              </Link>
              <Link
                to="/lipstick-match-quiz"
                className="block text-sm font-medium text-[#9b7458] hover:text-[#89664d]"
              >
                Take the RedLipsticks Quiz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="rounded-[2.25rem] border border-[#e8ddd2] bg-gradient-to-r from-[#332821] to-[#8a6a54] px-8 py-10 text-[#f8efe7] shadow-[0_22px_55px_rgba(72,56,44,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6d1bf]">
            Find Your Signature Red
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Want a more personalized red direction?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#f0dfd2]">
                Take the RedLipsticks quiz to explore the red lipstick families,
                finishes, and color direction most likely to flatter your
                undertone, coloring, and style preferences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#332821] transition hover:brightness-105"
              >
                Take the quiz
              </Link>

              <Link
                to="/cool-skin-tone-colors"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Explore cool tones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}