import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function BestOver40() {
  const lipsticks = [
    {
      name: "Blue-based satin red",
      reason:
        "A brightening classic that can make teeth look whiter and the complexion look clearer.",
      bestFor: "Cool or neutral undertones",
    },
    {
      name: "Soft true red",
      reason:
        "Balanced, elegant, and wearable without feeling too sharp or too dramatic.",
      bestFor: "Most undertones",
    },
    {
      name: "Warm brick red",
      reason:
        "A richer, grounded red that feels sophisticated and flattering, especially in softer lighting.",
      bestFor: "Warm or olive undertones",
    },
    {
      name: "Rose-red cream",
      reason:
        "A gentler red that adds life and polish while staying approachable for everyday wear.",
      bestFor: "Those easing into red lipstick",
    },
    {
      name: "Deep velvet red",
      reason:
        "A more dramatic evening option that looks refined instead of harsh when paired with softer makeup.",
      bestFor: "Night looks and statement moments",
    },
  ];

  const tips = [
    "Choose cream, satin, or soft matte finishes over very dry formulas.",
    "A lip liner close to your lipstick shade creates a cleaner, more lifted look.",
    "Blue-based reds can brighten the smile and feel especially classic.",
    "If bold red feels intimidating, start with a rose-red or softened brick red.",
    "Hydrated lips make every red look more expensive.",
  ];

  return (
    <PageLayout bgClassName="bg-[#faf7f2] text-[#2d1e1e]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#ead9d2] bg-gradient-to-b from-[#fffdf9] via-[#faf7f2] to-[#f8f0eb]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-[#d8b3b3]/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-[#c7a76c]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-20">
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
              The most flattering reds are not always the loudest. The right red
              brings warmth, brightness, confidence, and polish to the face
              without feeling harsh.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
              If you are over 40, the most beautiful red lipstick is usually one
              that works with your undertone, lip texture, and comfort level.
              The goal is not to look younger. The goal is to look more alive,
              more elegant, and more like yourself.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          {/* MAIN ARTICLE */}
          <article className="space-y-8">
            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Editorial note
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What makes a red lipstick flattering after 40?
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                <p>
                  A flattering red usually has enough richness to define the
                  lips, but enough softness to avoid emphasizing dryness or
                  looking too severe against the skin.
                </p>
                <p>
                  Creamy formulas, satin finishes, and balanced reds often feel
                  more luxurious than extremely flat mattes. They move more
                  naturally with the lips and tend to look more forgiving in
                  daylight.
                </p>
                <p>
                  The most elegant reds also work with the rest of the face.
                  Soft skin, groomed brows, mascara, and a refined lip shape can
                  make even a strong red feel effortless.
                </p>
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                The edit
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Five red lipstick directions worth knowing
              </h2>

              <div className="mt-8 space-y-5">
                {lipsticks.map((lipstick) => (
                  <div
                    key={lipstick.name}
                    className="rounded-[1.75rem] border border-[#eee0da] bg-[#fffaf6] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(64,34,34,0.05)]"
                  >
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#2d1e1e] md:text-2xl">
                      {lipstick.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {lipstick.reason}
                    </p>
                    <p className="mt-4 text-sm font-medium text-[#9f102d]">
                      Best for: {lipstick.bestFor}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Application
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                How to make red lipstick look more polished
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] p-8 text-[#f8eee7] shadow-[0_20px_55px_rgba(64,34,34,0.14)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Coming soon
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Which red lipstick was made for you?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                A future personality quiz will help match you with the kind of
                red that best fits your undertone, mood, and style.
              </p>
            </section>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The best red lipstick for women over 40 is usually one that
                feels rich, creamy, and balanced — not overly dry, overly neon,
                or overly flat.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-[#fffaf6] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Future affiliate block
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                Product picks to add later
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f4949]">
                <li>Best satin red</li>
                <li>Best soft matte red</li>
                <li>Best drugstore red</li>
                <li>Best luxury splurge red</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Join the list
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                Get future red lipstick guides
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                Join for polished beauty guidance, lipstick edits, and future
                quiz access.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-[#e3d2cb] bg-[#fffdf9] px-5 py-3 text-sm text-[#2d1e1e] placeholder:text-[#9b8383] focus:outline-none"
                />
                <button className="w-full rounded-full bg-[#9f102d] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#890d26]">
                  Join the List
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#fffdf9] to-[#f7efe9] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Signature note
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The most beautiful red is rarely the one shouting the loudest.
                It is the one that makes you look more finished, more luminous,
                and more unmistakably yourself.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}