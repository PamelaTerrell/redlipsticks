import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function BestOver40() {
  const lipstickDirections = [
    {
      name: "Blue-Based Satin Red",
      reason:
        "Brightening, classic, and elegant. Often makes the smile look cleaner while adding polish to the complexion.",
      bestFor: "Cool or neutral undertones",
    },
    {
      name: "Soft True Red",
      reason:
        "Balanced and wearable. A refined option when you want sophistication without harshness.",
      bestFor: "Most undertones",
    },
    {
      name: "Warm Brick Red",
      reason:
        "Rich and grounded with a luxurious feel. Especially flattering on warm and olive skin tones.",
      bestFor: "Warm or olive undertones",
    },
    {
      name: "Rose-Red Cream",
      reason:
        "Gentle, feminine, and easy to wear. Perfect for those easing into red lipstick.",
      bestFor: "Everyday elegance",
    },
    {
      name: "Deep Velvet Red",
      reason:
        "Dramatic and refined. Beautiful for evening looks when paired with softer makeup.",
      bestFor: "Night looks and statement moments",
    },
  ];

  const polishedTips = [
    "Choose satin, cream, or soft matte finishes over overly dry formulas.",
    "Use lip liner close to your lipstick shade for cleaner edges and lift.",
    "Hydrated lips make every lipstick look more luxurious.",
    "Blue-based reds often brighten the smile.",
    "Start with softer reds if bold shades feel intimidating.",
  ];

  return (
    <PageLayout bgClassName="bg-[#faf7f2] text-[#2d1e1e]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#ead9d2] bg-gradient-to-b from-[#fffdf9] via-[#faf7f2] to-[#f8f0eb]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-[#d8b3b3]/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-[#c7a76c]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <Link
              to="/"
              className="inline-flex text-sm font-medium text-[#9f102d] transition hover:opacity-70"
            >
              ← Back to Home
            </Link>

            <div className="mt-8 max-w-5xl">
              <img
                src="/kiss.png"
                alt="Red Lipsticks logo"
                className="mb-8 h-auto w-28 md:w-36 drop-shadow-[0_18px_40px_rgba(159,16,45,0.14)]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
                Red Lipsticks Guide
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-[#2d1e1e] md:text-6xl lg:text-7xl">
                Best Red Lipsticks for Women Over 40
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                The most flattering reds are not always the loudest. The right
                red adds life, confidence, brightness, and polish without
                feeling severe.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                The goal is not to look younger. The goal is to look radiant,
                elegant, and beautifully yourself.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/90 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)]">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4">
                <img
                  src="/over40-red-lipstick-hero-1.png"
                  alt="Elegant woman over 40 wearing red lipstick"
                  className="w-full rounded-[1.6rem] object-cover shadow-[0_18px_40px_rgba(64,34,34,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          {/* LEFT */}
          <article className="space-y-8">
            <section className="rounded-[2rem] border border-[#ead9d2] bg-white p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Editorial Note
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                What makes a red lipstick flattering after 40?
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                <p>
                  Richness, softness, and undertone matter more than trendiness.
                  Reds that harmonize with your coloring tend to look effortless.
                </p>

                <p>
                  Cream and satin textures often appear more refined than very
                  flat matte formulas, especially in daylight.
                </p>

                <p>
                  The most elegant red works with the whole face — skin,
                  brows, lashes, and confidence.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                The Edit
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Five red directions worth knowing
              </h2>

              <div className="mt-8 space-y-5">
                {lipstickDirections.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <h3 className="text-xl font-semibold">{item.name}</h3>

                    <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                      {item.reason}
                    </p>

                    <p className="mt-4 text-sm font-medium text-[#9f102d]">
                      Best for: {item.bestFor}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] p-8 text-[#f8eee7] shadow-[0_18px_46px_rgba(64,34,34,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Final Thought
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                The best red is the one that makes you look alive.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0]">
                More polished. More luminous. More unmistakably yourself.
              </p>
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white p-5 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <img
                src="/over40-red-lipstick-hero-2.png"
                alt="Elegant older woman with curly dark hair wearing red lipstick"
                className="w-full rounded-[1.5rem] object-cover"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Beauty has no age ceiling
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                Red lipstick can become more powerful with age — because presence,
                confidence, and style deepen over time.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Polished Tips
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f4949]">
                {polishedTips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-[#fffaf6] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Explore More
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/lipstick-match-quiz"
                  className="block text-[#9f102d] hover:opacity-70"
                >
                  Take the Lipstick Quiz →
                </Link>

                <Link
                  to="/red-lipsticks-that-make-teeth-look-whiter"
                  className="block text-[#9f102d] hover:opacity-70"
                >
                  Teeth-Whitening Reds →
                </Link>

                <Link
                  to="/blue-red-vs-orange-red"
                  className="block text-[#9f102d] hover:opacity-70"
                >
                  Blue-Red vs Orange-Red →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}