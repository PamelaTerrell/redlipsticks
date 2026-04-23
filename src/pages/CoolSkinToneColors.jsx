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
              clearer, fresher, and more polished.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center rounded-full bg-[#7b4f7f] px-7 py-3.5 text-sm font-medium text-white"
              >
                Right vs Wrong Colors
              </a>

              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full border border-[#d8cfdd] bg-white px-7 py-3.5 text-sm font-medium text-[#2b2230]"
              >
                Take the Quiz
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e6dde9] bg-white p-5 shadow-xl">
            <img
              src="/cool-skin-tone-chart.png"
              alt="Cool tone chart"
              className="w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* NEW COMPARISON IMAGE */}
      <section
        id="comparison"
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16"
      >
        <div className="rounded-[2rem] border border-[#e6dde9] bg-white p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
            Visual Guide
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Wrong colors vs right colors
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#605268]">
            Yellow-heavy shades can dull cool complexions. Berry tones, navy,
            silver, charcoal, and blue-based reds often make cool skin look
            brighter and more elevated.
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#ece5f0]">
            <img
              src="/cool-tones-right-vs-wrong-colors.png"
              alt="Wrong colors versus right colors for cool skin tones"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* RECOGNIZE */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-[#e6dde9] bg-white p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7b4f7f]">
            How to recognize it
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Do you have cool undertones?
          </h2>

          <div className="mt-6 space-y-4">
            {signs.map((sign) => (
              <div
                key={sign}
                className="rounded-[1.25rem] border border-[#eee6f1] bg-[#faf8fb] px-5 py-4"
              >
                <p className="text-sm leading-7 text-[#5f5266]">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL CHART */}
      <div id="full-chart">
        <UndertoneColorChart
          eyebrow="Full Color Chart"
          title="The full color palette for cool tones"
          description="Use these shades for clothing, accessories, lipstick, and styling."
          accent="#7b4f7f"
          groups={coolColorGroups}
        />
      </div>

      {/* LIPSTICKS + JEWELRY */}
      <section className="border-y border-[#e6dde9] bg-[#fcfbfd]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-16">
          <article className="rounded-[2rem] border border-[#e6dde9] bg-white p-7 shadow-xl">
            <h3 className="text-2xl font-semibold">
              Best lipstick families
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {lipstickShades.map((shade) => (
                <span
                  key={shade}
                  className="rounded-full border border-[#ead8de] bg-[#fbf4f6] px-4 py-2 text-sm"
                >
                  {shade}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[#e6dde9] bg-white p-7 shadow-xl">
            <h3 className="text-2xl font-semibold">
              Best jewelry metals
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {jewelryMetals.map((metal) => (
                <span
                  key={metal}
                  className="rounded-full border border-[#e6dde9] bg-[#f6f6fa] px-4 py-2 text-sm"
                >
                  {metal}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* MISTAKES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-[#e6dde9] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Common mistakes for cool tones
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#2b2230] to-[#4b3b55] px-8 py-10 text-white shadow-xl">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Want your perfect red lipstick?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#e5d9ea]">
            Take the quiz to discover the red lipstick family most likely to
            flatter your undertone, coloring, and style.
          </p>

          <div className="mt-8">
            <Link
              to="/lipstick-match-quiz"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2b2230]"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}