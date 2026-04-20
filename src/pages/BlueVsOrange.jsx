import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function BlueVsOrange() {
  const comparisons = [
    {
      title: "Blue-red",
      description:
        "Blue-red lipsticks feel crisp, classic, and brightening. They often make teeth look whiter and can give the face a cleaner, more luminous finish.",
      bestFor: "Cool undertones, neutral undertones, polished classic glamour",
    },
    {
      title: "Orange-red",
      description:
        "Orange-red lipsticks feel warmer, sunnier, and more relaxed. They can add warmth to the complexion and often feel softer, more playful, or more Mediterranean in mood.",
      bestFor:
        "Warm undertones, olive undertones, golden skin, vibrant daytime looks",
    },
  ];

  const signs = [
    "If silver jewelry flatters you most, blue-red may feel more natural.",
    "If gold jewelry flatters you most, orange-red may feel more harmonious.",
    "If your skin pulls rosy, cool, or porcelain, start with blue-red.",
    "If your skin pulls golden, peachy, or olive, start with orange-red.",
    "If you want a more formal, timeless lipstick look, blue-red often wins.",
    "If you want a softer, warmer, more effortless glamour, orange-red can be beautiful.",
  ];

  return (
    <PageLayout bgClassName="bg-[#faf7f2] text-[#2d1e1e]">
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
              Blue-Red vs Orange-Red: Which Flatters You More?
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
              Some reds brighten the face with cool precision. Others warm the
              complexion with softness and glow. The most flattering one is not
              about trends. It is about harmony.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
              Understanding the difference between blue-red and orange-red can
              make choosing lipstick feel far less confusing. Once you know what
              your skin responds to, red becomes more intuitive, more elegant,
              and much easier to wear beautifully.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <article className="space-y-8">
            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                The difference
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What is a blue-red? What is an orange-red?
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                <p>
                  A blue-red has cooler undertones. It tends to feel cleaner,
                  sharper, and more classic. It can make the smile look brighter
                  and often gives the face a more refined, high-contrast finish.
                </p>
                <p>
                  An orange-red has warmer undertones. It tends to feel sunnier,
                  softer, and more relaxed. It can add warmth and life to the
                  complexion, especially when the skin already carries golden or
                  olive tones.
                </p>
                <p>
                  Neither is better. The goal is simply to choose the red that
                  works with your coloring rather than fighting it.
                </p>
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Visual comparison
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                See the difference side by side
              </h2>

              <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#5f4949] md:text-base">
                Blue-red tends to read cooler, crisper, and more classic.
                Orange-red tends to read warmer, softer, and more sunlit. Seeing
                them side by side can make the undertone difference much easier
                to recognize.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.9rem] border border-[#eee0da] bg-[#fffaf6] shadow-[0_18px_40px_rgba(64,34,34,0.05)]">
                <img
                  src="/blue-vs-orange-red.png"
                  alt="Side-by-side comparison of a blue-red lipstick look and an orange-red lipstick look"
                  className="h-auto w-full object-cover"
                />
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Comparison
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                The two red families worth knowing
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {comparisons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-[#eee0da] bg-[#fffaf6] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(64,34,34,0.05)]"
                  >
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2d1e1e]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {item.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-[#9f102d]">
                      Best for: {item.bestFor}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                How to tell
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Quick signs that point you in the right direction
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {signs.map((sign) => (
                  <li key={sign} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] p-8 text-[#f8eee7] shadow-[0_20px_55px_rgba(64,34,34,0.14)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Final thought
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                The best red is the one that makes your whole face look more
                alive.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                If a red makes your skin look clearer, your smile brighter, and
                your expression more finished, you are close. That is the kind
                of harmony worth trusting.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                Blue-red usually flatters cooler coloring. Orange-red usually
                flatters warmer coloring. Neutral undertones can often wear
                both.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-[#fffaf6] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Future product edit
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                Picks to add later
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f4949]">
                <li>Best blue-red lipstick</li>
                <li>Best orange-red lipstick</li>
                <li>Best neutral red</li>
                <li>Best lip liner for each</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Join the list
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                Get future shade guides
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                Join for elegant lipstick guidance, undertone help, and future
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
                The right red does not sit on the face like a costume. It
                settles into the face like it was always meant to be there.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}