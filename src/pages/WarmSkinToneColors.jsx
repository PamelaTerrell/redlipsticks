import { Link } from "react-router";
import PageLayout from "../components/PageLayout";
import UndertoneColorChart from "../components/UndertoneColorChart";

export default function WarmSkinToneColors() {
  const signs = [
    "Your skin may have golden, peachy, or yellow-based undertones.",
    "Gold jewelry often looks especially radiant on you.",
    "Cream, camel, coral, olive, and earthy shades often flatter your complexion.",
    "Orange-red and brick-red lipsticks often feel more harmonious than blue-heavy reds.",
    "You may tan more easily than burn, though this is not always the case.",
  ];

  const lipstickShades = [
    "Orange-red",
    "Brick red",
    "Terracotta red",
    "Tomato red",
    "Rust red",
    "Warm classic red",
  ];

  const jewelryMetals = ["Yellow gold", "Bronze", "Copper", "Rose gold"];

  const mistakes = [
    "Very icy shades can sometimes make warm skin appear flatter.",
    "Blue-heavy reds may feel sharper or less natural than warm reds.",
    "Cool grays can sometimes mute the natural glow of warm undertones.",
  ];

  const warmColorGroups = [
    {
      category: "Neutrals",
      colors: [
        { name: "Cream", hex: "#F2E2C9" },
        { name: "Camel", hex: "#B88A5A" },
        { name: "Warm Beige", hex: "#C7A07A" },
        { name: "Chocolate", hex: "#5E3A2C" },
        { name: "Olive Brown", hex: "#6C5A3B" },
        { name: "Honey", hex: "#D1A35A" },
      ],
    },
    {
      category: "Pinks & Reds",
      colors: [
        { name: "Coral", hex: "#D96C5F" },
        { name: "Tomato Red", hex: "#C63D2F" },
        { name: "Brick", hex: "#9E3D2E" },
        { name: "Terracotta", hex: "#B85C38" },
        { name: "Rust", hex: "#A14D33" },
        { name: "Warm Rose", hex: "#C9796B" },
      ],
    },
    {
      category: "Yellows, Greens & Teals",
      colors: [
        { name: "Mustard", hex: "#B88B2C" },
        { name: "Olive", hex: "#6E6B2F" },
        { name: "Moss", hex: "#6A7A3C" },
        { name: "Marigold", hex: "#D89A2B" },
        { name: "Warm Teal", hex: "#2E6F6B" },
        { name: "Turquoise", hex: "#2E8C82" },
      ],
    },
    {
      category: "Metallics & Rich Accents",
      colors: [
        { name: "Gold", hex: "#C8A25A" },
        { name: "Bronze", hex: "#8C6239" },
        { name: "Copper", hex: "#B4683A" },
        { name: "Rose Gold", hex: "#C98B74" },
        { name: "Peach", hex: "#E7A189" },
        { name: "Paprika", hex: "#A84A2E" },
      ],
    },
  ];

  return (
    <PageLayout bgClassName="bg-[#fbf6ef] text-[#34241b]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#eadbc9] bg-gradient-to-b from-[#fffdf9] via-[#fbf6ef] to-[#f7efe4]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[#f3cf9f]/35 blur-3xl" />
          <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-[#d8a15b]/25 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#a25524]">
              Warm Undertone Guide
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              The warm tone color guide
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f4635] md:text-2xl md:leading-9">
              Rich, glowing shades that bring warmth and life to warm undertones.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#7c6452] md:text-lg">
              If your undertones lean golden, peachy, or yellow-based, warm reds,
              earthy shades, and glowing metals often make your complexion look
              richer, brighter, and more radiant. Use this page as your full
              guide to color, lipstick, jewelry, and styling direction.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center rounded-full bg-[#a25524] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(162,85,36,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8d491c]"
              >
                See right vs wrong colors
              </a>

              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full border border-[#ddccb8] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#34241b] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#caa27b] hover:bg-white"
              >
                Take the quiz
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-[#715948]">
              <span className="rounded-full border border-[#eadbc9] bg-white/80 px-4 py-2">
                Warm red lipsticks
              </span>
              <span className="rounded-full border border-[#eadbc9] bg-white/80 px-4 py-2">
                Earthy wardrobe tones
              </span>
              <span className="rounded-full border border-[#eadbc9] bg-white/80 px-4 py-2">
                Gold & bronze metals
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#eadbc9] bg-white/85 p-5 shadow-[0_26px_72px_rgba(72,44,26,0.08)] backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f8ead7] via-[#fff7ef] to-[#f2e1cf] p-4 md:p-5">
                <img
                  src="/warm-skin-tone-chart.png"
                  alt="Warm skin tone chart showing clothing colors, red lipsticks, and jewelry"
                  className="w-full rounded-[1.6rem] border border-white/70 shadow-[0_18px_40px_rgba(72,44,26,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT VS WRONG COLORS */}
      <section
        id="comparison"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20"
      >
        <div className="rounded-[2rem] border border-[#eadbc9] bg-white/95 p-8 shadow-[0_18px_46px_rgba(72,44,26,0.05)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a25524]">
            Visual Guide
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Wrong colors vs right colors for warm tones
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#614b39]">
            Icy pinks, cool grays, silver, and blue-heavy reds can drain warmth
            from the complexion. Peach, coral, terracotta, olive, gold, and
            warm reds often make warm undertones look healthier, brighter, and
            more naturally radiant.
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#efe2d6]">
            <img
              src="/warm-tones-right-vs-wrong-colors.png"
              alt="Wrong colors versus right colors for warm skin tones"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW TO RECOGNIZE IT */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#eadbc9] bg-white/95 p-8 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a25524]">
              How to recognize it
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Do you have warm undertones?
            </h2>

            <div className="mt-6 space-y-4">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="flex gap-3 rounded-[1.25rem] border border-[#f0e4d7] bg-[#fcf8f3] px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#a25524]" />
                  <p className="text-sm leading-7 text-[#604937]">{sign}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#eadbc9] bg-gradient-to-br from-[#ffffff] to-[#faf3ea] p-8 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a25524]">
              Why it matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Warm harmony can make everything look more radiant
            </h2>

            <p className="mt-6 text-base leading-8 text-[#614b39]">
              When your wardrobe, jewelry, and lipstick echo your undertones,
              the overall effect often feels richer, softer, and more luminous.
              Warm-toned shades can help the skin appear healthier, more alive,
              and more naturally glowing.
            </p>

            <p className="mt-5 text-base leading-8 text-[#614b39]">
              This does not mean you can never wear cool colors. It simply means
              that warmer, earthier, and sunlit shades often create the most
              harmonious effect.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-[#eadbc9] bg-white px-5 py-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a25524]">
                Quick shortcut
              </p>
              <p className="mt-3 text-sm leading-7 text-[#604937]">
                If ivory, camel, coral, gold jewelry, and orange-red lipstick
                tend to look especially flattering on you, there is a good
                chance you lean warm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL COLOR CHART */}
      <div id="full-chart">
        <UndertoneColorChart
          eyebrow="Full Color Chart"
          title="The full color palette for warm tones"
          description="These shades often harmonize beautifully with golden, peachy, yellow-based, and sunlit undertones. Use this palette to guide lipstick, clothing, jewelry, and overall color choices."
          accent="#a25524"
          groups={warmColorGroups}
        />
      </div>

      {/* RED LIPSTICK FAMILIES + JEWELRY */}
      <section className="border-y border-[#eadbc9] bg-[#fffaf5]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#eadbc9] bg-white p-7 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c48b54]">
                Best Red Lipstick Families
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Reds that love warm undertones
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {lipstickShades.map((shade) => (
                  <span
                    key={shade}
                    className="rounded-full border border-[#f0ddd0] bg-[#fff8f3] px-4 py-2 text-sm text-[#7a3c25]"
                  >
                    {shade}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#715948]">
                Think orange-red, brick, terracotta, rust, and richer warm reds
                rather than icy blue-based shades. These often feel more natural,
                glowing, and in harmony with warm coloring.
              </p>

              <div className="mt-8">
                <Link
                  to="/blue-red-vs-orange-red"
                  className="inline-flex items-center text-sm font-medium text-[#a25524] hover:text-[#8d491c]"
                >
                  Explore blue-red vs orange-red →
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#eadbc9] bg-white p-7 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c48b54]">
                Jewelry & Accessories
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Warm-toned metals and finishes
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {jewelryMetals.map((metal) => (
                  <span
                    key={metal}
                    className="rounded-full border border-[#eadbc9] bg-[#fff8ef] px-4 py-2 text-sm text-[#7a5a2f]"
                  >
                    {metal}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#715948]">
                Gold, bronze, copper, and rose gold often mirror the warmth in
                the skin and create a glowing finish. In clothing and
                accessories, earthy neutrals, rich warm reds, and softened
                golden shades often work especially beautifully.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COLORS TO BE CAREFUL WITH + RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#eadbc9] bg-white/95 p-8 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a25524]">
              Colors to be careful with
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Common color mistakes for warm tones
            </h2>

            <div className="mt-6 space-y-4">
              {mistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-[1.25rem] border border-[#f0e4d7] bg-[#fcf8f3] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#604937]">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#eadbc9] bg-gradient-to-br from-[#fff8f1] to-[#ffffff] p-8 shadow-[0_18px_46px_rgba(72,44,26,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a25524]">
              Related guidance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Keep refining your red direction
            </h2>

            <p className="mt-6 text-base leading-8 text-[#614b39]">
              If you are warm-toned, some of the most useful next steps are
              learning the difference between blue-red and orange-red, exploring
              the lipstick families that harmonize with warmth, and taking the
              quiz for a more personalized starting point.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                to="/blue-red-vs-orange-red"
                className="block text-sm font-medium text-[#a25524] hover:text-[#8d491c]"
              >
                Blue-Red vs Orange-Red →
              </Link>
              <Link
                to="/best-red-lipsticks-over-40"
                className="block text-sm font-medium text-[#a25524] hover:text-[#8d491c]"
              >
                Best Red Lipsticks Over 40 →
              </Link>
              <Link
                to="/lipstick-match-quiz"
                className="block text-sm font-medium text-[#a25524] hover:text-[#8d491c]"
              >
                Take the RedLipsticks Quiz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="rounded-[2.25rem] border border-[#eadbc9] bg-gradient-to-r from-[#34241b] to-[#7a4b28] px-8 py-10 text-[#f9efe6] shadow-[0_22px_55px_rgba(72,44,26,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e8c69d]">
            Find Your Signature Red
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Want a more personalized red direction?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#f0dfd1]">
                Take the RedLipsticks quiz to explore the red lipstick families,
                finishes, and color direction most likely to flatter your
                undertone, coloring, and style preferences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#34241b] transition hover:brightness-105"
              >
                Take the quiz
              </Link>

              <Link
                to="/neutral-skin-tone-colors"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Explore neutral tones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}