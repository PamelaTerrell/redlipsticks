import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function BestRedsUnder15() {
  const budgetReasons = [
    "A lower price does not have to mean a cheap-looking red.",
    "Many drugstore formulas now offer creamy finishes, richer pigment, and more flattering undertones than people expect.",
    "The best budget reds usually balance comfort, color payoff, and a finish that still looks polished on the lips.",
  ];

  const whatToLookFor = [
    "Cream, satin, or comfortable soft-matte textures",
    "Reds with flattering undertones rather than flat neon brightness",
    "A formula that feels smooth enough to wear without constant discomfort",
    "Shades that make the face look brighter and more finished, not harsher",
  ];

  const picks = [
    {
      name: "Revlon Super Lustrous Lipstick",
      shade: "Love That Red",
      description:
        "A classic affordable red with a creamy feel and a polished, wearable finish that makes it one of the safest overall under-$15 picks.",
      bestFor: "Best overall, classic red lovers, mature lips",
      priceNote: "Often around $7",
      tier: "Editor Favorite",
      url: "https://www.walmart.com/ip/Rev-Superlustrous-Rv-Sl-Ls-Capsule-006-Bom/372095782",
      buttonText: "Shop Revlon",
    },
    {
      name: "L'Oréal Paris Colour Riche Satin Lipstick",
      shade: "British Red",
      description:
        "A smoother satin-style formula that feels a little richer and more elevated than many budget lipsticks, especially if you want a more nourished look.",
      bestFor: "Best satin finish, dry lips, polished everyday wear",
      priceNote: "Often around $8",
      tier: "Best Satin",
      url: "https://www.target.com/p/l-39-oreal-paris-colour-riche-original-satin-lipstick-for-moisturized-lips-350-british-red-0-13oz/-/A-12912136",
      buttonText: "Shop L'Oréal",
    },
    {
      name: "Milani Color Statement Lipstick",
      shade: "Best Red",
      description:
        "A bold, statement-making red with strong color payoff that still stays within an affordable range.",
      bestFor: "Best bold red, glam looks, stronger payoff",
      priceNote: "Often around $6 to $7",
      tier: "Bold Glam",
      url: "https://www.walmart.com/ip/Milani-Color-Statement-Lipstick-Best-Red/24008092",
      buttonText: "Shop Milani",
    },
    {
      name: "Wet n Wild MegaLast Matte Lip Color",
      shade: "Stoplight Red",
      description:
        "A very low-cost matte option for shoppers who want a red statement lip without spending much at all.",
      bestFor: "Lowest budget, matte lovers, under-$5 category",
      priceNote: "Often around $3",
      tier: "Lowest Price",
      url: "https://www.cvs.com/shop/wet-n-wild-mega-last-matte-lip-color-prodid-2560006?skuId=361391",
      buttonText: "Shop Wet n Wild",
    },
    {
      name: "Maybelline Color Sensational Lipstick",
      shade: "Red For Me",
      description:
        "A flattering, easy-to-wear red that works well if you want a mainstream classic from a familiar brand at a drugstore-friendly price.",
      bestFor: "Beginner-friendly, classic wear, easy everyday red",
      priceNote: "Often around $6",
      tier: "Easy Pick",
      url: "https://www.walmart.com/ip/Maybelline-Color-Sensational-Made-For-All-Lipstick-Red-For-Me/835034563",
      buttonText: "Shop Maybelline",
    },
  ];

  const bestForByGoal = [
    {
      title: "Best overall under $15",
      text: "Revlon Super Lustrous in Love That Red is the safest all-around choice if you want creaminess, comfort, and a classic red feel.",
    },
    {
      title: "Best for a smoother satin look",
      text: "L'Oréal Colour Riche Satin is a strong option if you want your lips to look a little softer and more polished.",
    },
    {
      title: "Best for bold statement color",
      text: "Milani Color Statement in Best Red is the one to reach for if you want stronger payoff and more drama.",
    },
    {
      title: "Best ultra-budget red",
      text: "Wet n Wild MegaLast Matte gives you a true red option at a very low price point.",
    },
  ];

  const faqs = [
    {
      question: "Can a red lipstick under $15 still look elegant?",
      answer:
        "Yes. The most elegant budget reds usually have better undertones, smoother finishes, and enough comfort to keep the lips looking polished rather than flat or dry.",
    },
    {
      question: "What is the best finish for an affordable red lipstick?",
      answer:
        "Cream and satin finishes are often the easiest to make look refined. Very dry mattes can be harder to pull off unless the formula is especially comfortable.",
    },
    {
      question: "Are drugstore red lipsticks good for mature lips?",
      answer:
        "They can be. The key is choosing formulas that feel creamy, smoothing, and not overly stiff or chalky.",
    },
    {
      question: "Should I choose a blue-red or warm red under $15?",
      answer:
        "That depends on your undertone and the effect you want. Blue-reds often feel brighter and more classic, while warmer reds can add softness and glow.",
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
                Best Red Lipsticks Under $15
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                Affordable does not have to mean flat, harsh, or forgettable.
                The right red under $15 can still look polished, flattering, and
                beautifully put together.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                This guide focuses on budget-friendly reds that still offer
                richness, wearable color, and a finish that feels more elegant
                than their price tag might suggest.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#editors-picks"
                  className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
                >
                  See the best picks
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
                  Budget-friendly reds
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Cream & satin finishes
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Polished under $15
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/90 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)]">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4 md:p-5">
                <img
                  src="/best-reds-under-15.png"
                  alt="Elegant beauty image for best red lipsticks under 15 dollars"
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
                Why this matters
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                A budget red can still look expensive
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                {budgetReasons.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                What to look for
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What makes an affordable red worth buying?
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

            <section
              id="editors-picks"
              className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Editor&apos;s Picks
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Red lipsticks worth exploring under $15
              </h2>

              <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#5f4949] md:text-base">
                These are strong starting points if you want affordable reds
                that still feel flattering, wearable, and more elevated than
                their price point.
              </p>

              <div className="mt-8 space-y-5">
                {picks.map((item) => (
                  <div
                    key={item.name + item.shade}
                    className="rounded-[1.75rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#2d1e1e] md:text-2xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-[#9f102d]">
                          Shade: {item.shade}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                          {item.description}
                        </p>

                        <p className="mt-4 text-sm text-[#6f5555]">
                          Best for: {item.bestFor}
                        </p>

                        <p className="mt-2 text-sm text-[#6f5555]">
                          {item.priceNote}
                        </p>
                      </div>

                      <span className="rounded-full bg-[#9f102d]/10 px-3 py-1 text-xs font-medium text-[#9f102d]">
                        {item.tier}
                      </span>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="mt-5 inline-flex rounded-full bg-[#9f102d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#890d26]"
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag("event", "product_click", {
                            product_name: item.name,
                            product_shade: item.shade,
                            product_tier: item.tier,
                            page_context: "best_reds_under_15",
                            destination_url: item.url,
                          });
                        }
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-6 text-[#8a7272]">
                Prices can change. Some links on this page may later become
                affiliate links, which means RedLipsticks.com may earn a
                commission at no extra cost to you.
              </p>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Best by goal
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Which budget red should you start with?
              </h2>

              <div className="mt-8 space-y-5">
                {bestForByGoal.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[#2d1e1e] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                FAQ
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Common questions about affordable red lipstick
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
                The best red under $15 is the one that still makes you feel
                finished.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                A truly good budget red should still give you harmony, color,
                and polish. Price matters, but how the lipstick wears on the
                face matters more.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                Revlon is the strongest overall under-$15 red if you want a safe
                balance of comfort, polish, and classic red color.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#2d1e1e] to-[#4a2c30] p-7 text-[#f8eee7] shadow-[0_16px_40px_rgba(64,34,34,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Personalized help
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
                Not sure which red direction suits you?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#ead6d0]">
                Take the lipstick match quiz to discover a more flattering red
                direction based on undertone, softness, contrast, and style.
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
                Smart budget strategy
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                If you want your red lipstick to look more elevated, spend less
                on the lipstick itself and pay closer attention to finish,
                undertone, and lip prep.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Keep exploring
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/best-red-lipsticks-for-mature-lips"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Best Reds for Mature Lips →
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
                A red lipstick does not have to be expensive to look elegant. It
                simply has to flatter the face and wear with grace.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}