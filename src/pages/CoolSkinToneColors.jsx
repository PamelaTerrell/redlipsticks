import { Link } from "react-router";
import PageLayout from "../components/PageLayout";
import UndertoneColorChart from "../components/UndertoneColorChart";

export default function CoolSkinToneColors() {
  const signs = [
    "Your skin may have pink, rosy, or blue-based undertones.",
    "Silver jewelry often looks especially radiant on you.",
    "True white, berry tones, and jewel colors often make your complexion glow.",
    "Blue-based reds usually feel more harmonious than orange-reds.",
    "You may burn more easily than tan, though this is not always the case.",
  ];

  const lipstickShades = [
    "Blue-red",
    "Cherry red",
    "Cranberry",
    "Berry red",
    "Raspberry red",
    "Wine red",
  ];

  const jewelryMetals = ["Silver", "White gold", "Platinum"];

  const mistakes = [
    "Very orange-red lipstick can sometimes compete with cool undertones.",
    "Strong mustard or yellow-heavy tones may make the skin look less vibrant.",
    "Extremely earthy shades can sometimes feel heavy instead of brightening.",
  ];

  const coolColorGroups = [
    {
      category: "Neutrals",
      colors: [
        { name: "True White", hex: "#F8F8F6" },
        { name: "Charcoal", hex: "#4A4E57" },
        { name: "Cool Taupe", hex: "#B7AAA1" },
        { name: "Slate", hex: "#6E7C8C" },
        { name: "Navy", hex: "#223A5E" },
        { name: "Soft Gray", hex: "#C7CBD1" },
      ],
    },
    {
      category: "Pinks & Reds",
      colors: [
        { name: "Rose", hex: "#C97C8A" },
        { name: "Berry", hex: "#8A3D5E" },
        { name: "Raspberry", hex: "#B14D6E" },
        { name: "Cranberry", hex: "#9E2F4F" },
        { name: "Blue-Red", hex: "#A61E32" },
        { name: "Cool Pink", hex: "#D8A3B5" },
      ],
    },
    {
      category: "Blues & Greens",
      colors: [
        { name: "Emerald", hex: "#0F6B5B" },
        { name: "Sapphire", hex: "#2D4F8B" },
        { name: "Icy Blue", hex: "#C9DDF2" },
        { name: "Teal", hex: "#2C6C73" },
        { name: "Pine", hex: "#355C4D" },
        { name: "Sea Blue", hex: "#5E8FB1" },
      ],
    },
    {
      category: "Purples & Metallics",
      colors: [
        { name: "Plum", hex: "#6E3E5B" },
        { name: "Amethyst", hex: "#8D6AAE" },
        { name: "Orchid", hex: "#B784A7" },
        { name: "Silver", hex: "#C9CDD3" },
        { name: "Platinum", hex: "#D8DADF" },
        { name: "White Gold", hex: "#E5E1D8" },
      ],
    },
  ];

  return (
    <PageLayout bgClassName="bg-[#f7f5f8] text-[#2b2230]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#e6dde9] bg-gradient-to-b from-[#fcfbfd] via-[#f7f5f8] to-[#f1edf4]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-[-6rem] top-[-4rem] h-64 w-64 rounded-full bg-[#d8cade]/35 blur-3xl" />
          <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-[#cfd7ef]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#7b4f7f]">
              Cool Undertone Guide
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-[#2b2230] md:text-6xl lg:text-7xl">
              The cool tone color guide
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d4d64] md:text-2xl md:leading-9">
              Discover the shades that brighten, refine, and flatter cool
              undertones.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#74657b] md:text-lg">
              If your undertones lean pink, rosy, or blue-based, cool reds,
              jewel tones, and silvery metals often make your features look
              clearer, fresher, and more polished. Use this page as your full
              guide to color, lipstick, jewelry, and styling direction.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#full-chart"
                className="inline-flex items-center justify-center rounded-full bg-[#7b4f7f] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(123,79,127,0.22)] transition hover:-translate-y-0.5 hover:bg-[#69436d]"
              >
                See full palette
              </a>

              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full border border-[#d8cfdd] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#2b2230] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#bca7c7] hover:bg-white"
              >
                Take the quiz
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-[#6f6275]">
              <span className="rounded-full border border-[#e6dde9] bg-white/80 px-4 py-2">
                Blue-based reds
              </span>
              <span className="rounded-full border border-[#e6dde9] bg-white/80 px-4 py-2">
                Jewel-tone wardrobes
              </span>
              <span className="rounded-full border border-[#e6dde9] bg-white/80 px-4 py-2">
                Silver & white gold
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#e6dde9] bg-white/85 p-5 shadow-[0_26px_72px_rgba(55,40,66,0.08)] backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#eef0f8] via-[#faf8fb] to-[#eee7f2] p-4 md:p-5">
                <img
                  src="/cool-skin-tone-chart.png"
                  alt="Chic cool skin tone color chart with clothing colors, lipstick shades, and jewelry recommendations"
                  className="w-full rounded-[1.6rem] border border-white/70 object-cover shadow-[0_18px_40px_rgba(55,40,66,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO RECOGNIZE IT */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e6dde9] bg-white/95 p-8 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
              How to recognize it
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Do you have cool undertones?
            </h2>

            <div className="mt-6 space-y-4">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="flex gap-3 rounded-[1.25rem] border border-[#eee6f1] bg-[#faf8fb] px-4 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7b4f7f]" />
                  <p className="text-sm leading-7 text-[#5f5266]">{sign}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e6dde9] bg-gradient-to-br from-[#ffffff] to-[#f7f3f9] p-8 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
              Why it matters
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Cool harmony can make everything look more refined
            </h2>

            <p className="mt-6 text-base leading-8 text-[#605268]">
              When your wardrobe, jewelry, and lipstick echo your undertones,
              the overall effect often feels more effortless and elevated.
              Cool-toned shades can help the skin appear clearer, the eyes
              brighter, and red lipstick more naturally flattering.
            </p>

            <p className="mt-5 text-base leading-8 text-[#605268]">
              This does not mean you can never wear warm colors. It simply means
              that cooler, clearer shades often create the most naturally
              harmonious effect.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-[#e6dde9] bg-white px-5 py-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7b4f7f]">
                Quick shortcut
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5f5266]">
                If bright white, berry tones, silver jewelry, and blue-red
                lipstick tend to look especially elegant on you, there is a good
                chance you lean cool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL COLOR CHART */}
      <div id="full-chart">
        <UndertoneColorChart
          eyebrow="Full Color Chart"
          title="The full color palette for cool tones"
          description="These shades are often especially flattering on cool undertones because they echo pink, rosy, blue-based, and jewel-toned coloring. Use this as a visual guide for clothing, accessories, lipstick, and overall styling."
          accent="#7b4f7f"
          groups={coolColorGroups}
        />
      </div>

      {/* RED LIPSTICK FAMILIES + JEWELRY */}
      <section className="border-y border-[#e6dde9] bg-[#fcfbfd]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#e6dde9] bg-white p-7 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b08ab6]">
                Best Red Lipstick Families
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Reds that love cool undertones
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {lipstickShades.map((shade) => (
                  <span
                    key={shade}
                    className="rounded-full border border-[#ead8de] bg-[#fbf4f6] px-4 py-2 text-sm text-[#6b4352]"
                  >
                    {shade}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#6b5b72]">
                Think blue-red, berry-red, wine-red, and cool cherry tones
                rather than orange-leaning reds. These usually feel more
                harmonious and often make the smile look brighter as well.
              </p>

              <div className="mt-8">
                <Link
                  to="/red-lipsticks-that-make-teeth-look-whiter"
                  className="inline-flex items-center text-sm font-medium text-[#7b4f7f] hover:text-[#69436d]"
                >
                  Explore brightening reds →
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#e6dde9] bg-white p-7 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b08ab6]">
                Jewelry & Accessories
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Cool-toned metals and finishes
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {jewelryMetals.map((metal) => (
                  <span
                    key={metal}
                    className="rounded-full border border-[#e6dde9] bg-[#f6f6fa] px-4 py-2 text-sm text-[#5a5d6d]"
                  >
                    {metal}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#6b5b72]">
                Silver, platinum, and white gold often mirror the coolness in
                the skin and create a refined, graceful finish. In clothing and
                accessories, cooler grays, jewel tones, and crisp whites often
                work especially beautifully.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COLORS TO BE CAREFUL WITH + RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#e6dde9] bg-white/95 p-8 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
              Colors to be careful with
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Common color mistakes for cool tones
            </h2>

            <div className="mt-6 space-y-4">
              {mistakes.map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-[1.25rem] border border-[#eee6f1] bg-[#faf8fb] px-5 py-4"
                >
                  <p className="text-sm leading-7 text-[#5f5266]">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e6dde9] bg-gradient-to-br from-[#f5f0f8] to-[#ffffff] p-8 shadow-[0_18px_46px_rgba(55,40,66,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
              Related guidance
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Keep refining your red direction
            </h2>

            <p className="mt-6 text-base leading-8 text-[#605268]">
              If you are cool-toned, some of the most useful next steps are
              learning the difference between blue-red and orange-red, exploring
              reds that brighten the smile, and taking the quiz for a more
              personalized starting point.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                to="/blue-red-vs-orange-red"
                className="block text-sm font-medium text-[#7b4f7f] hover:text-[#69436d]"
              >
                Blue-Red vs Orange-Red →
              </Link>
              <Link
                to="/red-lipsticks-that-make-teeth-look-whiter"
                className="block text-sm font-medium text-[#7b4f7f] hover:text-[#69436d]"
              >
                Red Lipsticks That Make Teeth Look Whiter →
              </Link>
              <Link
                to="/best-red-lipsticks-over-40"
                className="block text-sm font-medium text-[#7b4f7f] hover:text-[#69436d]"
              >
                Best Red Lipsticks Over 40 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div className="rounded-[2.25rem] border border-[#e6dde9] bg-gradient-to-r from-[#2b2230] to-[#4b3b55] px-8 py-10 text-[#f6eff8] shadow-[0_22px_55px_rgba(55,40,66,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8c4df]">
            Find Your Signature Red
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Want a more personalized red direction?
              </h2>

              <p className="mt-5 text-base leading-8 text-[#e5d9ea]">
                Take the RedLipsticks quiz to explore the red lipstick families,
                finishes, and color direction most likely to flatter your
                undertone, coloring, and style preferences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#2b2230] transition hover:brightness-105"
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