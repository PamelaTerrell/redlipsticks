import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function MatureLips() {
  const lipstickPicks = [
    {
      name: "Creamy blue-based red",
      reason:
        "A classic brightening red that helps the smile look cleaner while staying softer and more forgiving than a dry matte.",
      bestFor: "Cool or neutral undertones, polished classic looks",
    },
    {
      name: "Soft satin true red",
      reason:
        "Balanced and elegant, with enough richness to define the lips without looking severe or overdone.",
      bestFor: "Most undertones, everyday sophistication",
    },
    {
      name: "Warm brick cream red",
      reason:
        "A grounded, flattering option that adds warmth and depth while often feeling especially graceful on mature features.",
      bestFor: "Warm, olive, or golden undertones",
    },
    {
      name: "Rose-red satin",
      reason:
        "A softer red direction that brings freshness and life to the face without demanding a dramatic makeup look.",
      bestFor: "Those easing into red lipstick",
    },
    {
      name: "Deep berry-red cream",
      reason:
        "Rich and refined, this kind of red can feel luxurious and statement-making while still looking smoother than a flat matte.",
      bestFor: "Evening looks, richer glamour, cooler seasons",
    },
  ];

  const whatToLookFor = [
    "Cream, satin, and balm-like lipstick textures usually flatter mature lips more than very dry mattes.",
    "Hydration matters because dryness can make lipstick settle into texture more easily.",
    "A slightly softer edge often looks more elegant than an ultra-sharp, overdrawn line.",
    "Lip liner can help define the shape and reduce feathering when chosen carefully.",
    "Reds with richness and balance often look more expensive and forgiving than very neon or overly flat shades.",
  ];

  const avoidNotes = [
    "Very dry matte formulas can emphasize lip texture and make the finish look harsher.",
    "Overly chalky or stiff reds can feel aging instead of refining.",
    "Extremely neon reds may overpower the face rather than harmonize with it.",
    "A lipstick that skips hydration underneath often looks less polished within a short time.",
  ];

  const finishNotes = [
    {
      title: "Cream finish",
      text: "Comfortable, smoother-looking, and often one of the most flattering choices for mature lips.",
    },
    {
      title: "Satin finish",
      text: "Elegant and polished with a soft light-reflecting quality that helps lips look fuller and more refined.",
    },
    {
      title: "Soft matte",
      text: "Can work beautifully if the formula is flexible and not overly drying, but formula matters a great deal.",
    },
    {
      title: "Gloss topper",
      text: "A small touch at the center of the lips can add life and dimension without making the look feel too young or sticky.",
    },
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
                Best Red Lipsticks for Mature Lips
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                Red lipstick can look stunning on mature lips — but formula,
                finish, and softness matter more than ever.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                The goal is not to avoid red. The goal is to choose reds that
                feel smoother, richer, and more elegant on the lips, without
                emphasizing dryness, feathering, or harshness.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#best-picks"
                  className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
                >
                  See the best lipstick types
                </a>

                <Link
                  to="/lipstick-match-quiz"
                  className="inline-flex items-center justify-center rounded-full border border-[#d9c2b7] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#2d1e1e] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#c7a76c] hover:bg-white"
                >
                  Take the quiz
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-3 text-sm text-[#6f5555]">
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Cream & satin textures
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Softer, richer reds
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Less dryness, more polish
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/90 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)]">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4 md:p-5">
                <img
                  src="/mature-lips-red-lipstick.png"
                  alt="Elegant mature beauty portrait with refined red lipstick"
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
          <article className="space-y-8">
            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                What matters most
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What makes a red lipstick flattering on mature lips?
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                <p>
                  Mature lips often look best in formulas that offer both color
                  and softness. A red that is too dry or too flat can make the
                  lips look more textured, while a richer, creamier finish can
                  help them appear smoother and more elegant.
                </p>

                <p>
                  The most beautiful result usually comes from balance:
                  definition without harshness, richness without heaviness, and
                  color without stiffness.
                </p>

                <p>
                  This is why classic creams, satins, and softer reds often feel
                  more luxurious than extremely dry mattes or overly neon
                  formulas.
                </p>
              </div>
            </section>

            <section
              id="best-picks"
              className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                The edit
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Red lipstick directions worth knowing
              </h2>

              <div className="mt-8 space-y-5">
                {lipstickPicks.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#2d1e1e] md:text-2xl">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {item.reason}
                    </p>

                    <p className="mt-4 text-sm font-medium text-[#9f102d]">
                      Best for: {item.bestFor}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                What to look for
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                The lipstick qualities that help mature lips look better
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {whatToLookFor.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Finish guide
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Which finishes usually flatter best?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {finishNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <h3 className="text-xl font-semibold text-[#2d1e1e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f4949]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] p-8 text-[#f8eee7] shadow-[0_18px_46px_rgba(64,34,34,0.14)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Final thought
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Red lipstick does not stop being beautiful with age.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                It simply becomes more dependent on texture, finish, and
                harmony. The right red can make mature lips look polished,
                smoother, richer, and beautifully alive.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The most flattering red lipsticks for mature lips are usually
                creamy, satin, or softly textured formulas that add richness and
                polish without emphasizing dryness.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-[#fffaf6] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                What to avoid
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#5f4949]">
                {avoidNotes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Keep exploring
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/best-red-lipsticks-over-40"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Best Red Lipsticks Over 40 →
                </Link>
                <Link
                  to="/red-lipsticks-that-make-teeth-look-whiter"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Teeth-Whitening Reds →
                </Link>
                <Link
                  to="/blue-red-vs-orange-red"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Blue-Red vs Orange-Red →
                </Link>
                <Link
                  to="/lipstick-match-quiz"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Take the Lipstick Quiz →
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#fffdf9] to-[#f7efe9] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Signature note
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The right red does not make mature lips look older. It makes the
                entire face look more finished, more luminous, and more like
                itself.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}