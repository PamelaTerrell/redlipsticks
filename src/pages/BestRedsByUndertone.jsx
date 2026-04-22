import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function BestRedsByUndertone() {
  const undertoneSections = [
    {
      title: "Cool undertones",
      subtitle: "The most flattering reds often lean blue, berry, or cherry.",
      description:
        "If your skin tends to look best in silver jewelry, jewel tones, crisp white, and cooler shades, your most flattering reds are often blue-based reds, berry reds, cranberry tones, and classic cool reds.",
      bestReds: [
        "Blue-red",
        "Cherry red",
        "Cranberry red",
        "Berry red",
        "Cool classic red",
      ],
      bestFor:
        "Rosy, pink, porcelain, or cool-toned complexions that come alive with cooler contrast.",
      link: "/cool-skin-tone-colors",
      cta: "Explore cool tones",
      accent: "Cool-toned favorite",
    },
    {
      title: "Warm undertones",
      subtitle: "The most flattering reds often lean orange, brick, or terracotta.",
      description:
        "If your skin tends to glow in gold jewelry, earthy shades, camel, olive, coral, and sunlit colors, your best reds are often warmer and richer. Think orange-reds, brick reds, warm tomato reds, and terracotta tones.",
      bestReds: [
        "Orange-red",
        "Brick red",
        "Warm tomato red",
        "Terracotta red",
        "Rust red",
      ],
      bestFor:
        "Golden, peachy, warm, or sunlit complexions that look best with warmth and glow.",
      link: "/warm-skin-tone-colors",
      cta: "Explore warm tones",
      accent: "Warm-toned favorite",
    },
    {
      title: "Neutral undertones",
      subtitle: "The most flattering reds often feel balanced instead of extreme.",
      description:
        "If both silver and gold can look good on you, and your skin wears both warm and cool clothing shades fairly well, balanced reds may be your best starting point. True reds, softened berry reds, and refined classic reds are often especially flattering.",
      bestReds: [
        "True red",
        "Balanced red",
        "Soft red",
        "Refined berry red",
        "Classic neutral red",
      ],
      bestFor:
        "Balanced complexions that can borrow from both cool and warm lipstick families.",
      link: "/neutral-skin-tone-colors",
      cta: "Explore neutral tones",
      accent: "Most versatile",
    },
  ];

  const quickClues = [
    "If silver jewelry usually looks best, start with cooler blue-based reds.",
    "If gold jewelry usually looks best, start with warmer brick and orange-reds.",
    "If both work fairly well, true reds and balanced reds are often your best first stop.",
    "If a red makes your skin look clearer and your smile look brighter, you are probably close to your best undertone match.",
  ];

  const mistakes = [
    "Choosing red lipstick based only on trends instead of undertone",
    "Assuming every classic red flatters every complexion equally",
    "Mistaking a bold red for a flattering red",
    "Ignoring finish, softness, and comfort when judging how a lipstick looks on the face",
  ];

  const faqs = [
    {
      question: "What is the best red lipstick for cool undertones?",
      answer:
        "Blue-reds, cherry reds, cranberry tones, and berry-based reds are often the most flattering starting points for cool undertones.",
    },
    {
      question: "What is the best red lipstick for warm undertones?",
      answer:
        "Orange-reds, brick reds, warm tomato reds, and terracotta reds are often the most naturally flattering for warm undertones.",
    },
    {
      question: "What if I have neutral undertones?",
      answer:
        "Neutral undertones can often wear both warm and cool reds, but true reds and balanced reds are usually the easiest place to begin.",
    },
    {
      question: "Can I wear a red outside my undertone family?",
      answer:
        "Yes. Undertone guidance is there to make shopping easier, not restrictive. But the reds that echo your undertone usually feel more harmonious and flattering.",
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
                The Best Reds by Undertone
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                The most flattering red lipstick is usually not the trendiest one.
                It is the one whose undertone works in harmony with your face.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                If red lipstick has ever felt confusing, undertone is often the
                missing piece. Once you know whether your coloring leans cool,
                warm, or neutral, finding a flattering red becomes far easier.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#undertone-guide"
                  className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
                >
                  Explore by undertone
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
                  Cool = blue-reds
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Warm = brick & orange-reds
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Neutral = balanced true reds
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/90 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)]">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4 md:p-5">
                <img
                  src="/best-reds-by-undertone.png"
                  alt="Elegant undertone guide image for red lipstick directions"
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
            <section
              id="undertone-guide"
              className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Undertone guide
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Which reds usually flatter best?
              </h2>

              <div className="mt-8 space-y-6">
                {undertoneSections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-[1.75rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#2d1e1e]">
                          {section.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-[#9f102d]">
                          {section.subtitle}
                        </p>
                      </div>

                      <span className="rounded-full bg-[#9f102d]/10 px-3 py-1 text-xs font-medium text-[#9f102d]">
                        {section.accent}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {section.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {section.bestReds.map((red) => (
                        <span
                          key={red}
                          className="rounded-full border border-[#ead9d2] bg-white px-3 py-1.5 text-xs text-[#6f5555]"
                        >
                          {red}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#6f5555]">
                      Best for: {section.bestFor}
                    </p>

                    <Link
                      to={section.link}
                      className="mt-5 inline-flex text-sm font-medium text-[#9f102d] transition hover:text-[#7f0c21]"
                    >
                      {section.cta} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Quick clues
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Simple ways to point yourself in the right direction
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {quickClues.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Common mistakes
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Why red lipstick can feel harder than it needs to
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {mistakes.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                FAQ
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Common questions about red lipstick and undertone
              </h2>

              <div className="mt-8 space-y-5">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[#2d1e1e] md:text-xl">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {item.answer}
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
                The best red is the one that feels in harmony with your face.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                When your red lipstick works with your undertone instead of
                against it, the whole face tends to look brighter, clearer, and
                more beautifully finished.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                Cool undertones usually shine in blue-reds and berry reds. Warm
                undertones often glow in brick and orange-reds. Neutral
                undertones often look best in balanced true reds.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#2d1e1e] to-[#4a2c30] p-7 text-[#f8eee7] shadow-[0_16px_40px_rgba(64,34,34,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Personalized help
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                Still not sure what undertone you are?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#ead6d0]">
                Take the lipstick match quiz to get a more personalized red
                direction based on your coloring, style, and lipstick goals.
              </p>

              <Link
                to="/lipstick-match-quiz"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2d1e1e] transition hover:brightness-105"
              >
                Take the quiz
              </Link>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-[#fffaf6] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Start here
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/cool-skin-tone-colors"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Cool Skin Tone Guide →
                </Link>
                <Link
                  to="/warm-skin-tone-colors"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Warm Skin Tone Guide →
                </Link>
                <Link
                  to="/neutral-skin-tone-colors"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Neutral Skin Tone Guide →
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Keep exploring
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/blue-red-vs-orange-red"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Blue-Red vs Orange-Red →
                </Link>
                <Link
                  to="/red-lipsticks-that-make-teeth-look-whiter"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Teeth-Whitening Reds →
                </Link>
                <Link
                  to="/best-red-lipsticks-for-mature-lips"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Best Reds for Mature Lips →
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#fffdf9] to-[#f7efe9] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Signature note
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The most flattering red usually does not shout louder than the
                others. It simply makes your whole face look more alive.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}