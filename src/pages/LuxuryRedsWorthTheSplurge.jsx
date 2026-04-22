import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function LuxuryRedsWorthTheSplurge() {
  const luxuryReasons = [
    "Luxury lipstick is not only about the name. The best ones often feel smoother, wear more elegantly, and make the entire look feel more refined.",
    "A splurge red should offer something special — richer texture, more flattering undertones, better comfort, or a finish that feels unmistakably elevated.",
    "The right luxury red can become a signature lipstick you return to again and again.",
  ];

  const whatMakesItWorthIt = [
    "More refined texture and smoother application",
    "Elegant finishes that feel richer and more polished on the lips",
    "Shades with undertones that flatter the face beautifully",
    "Packaging and overall experience that feels indulgent and special",
    "A lipstick you reach for when you want to feel especially finished",
  ];

  const luxuryPicks = [
    {
      name: "Charlotte Tilbury Red Carpet Red",
      note:
        "A glamorous modern classic with strong presence, elegant payoff, and a more luxurious feel than an ordinary everyday red.",
      bestFor: "Classic glamour, polished evenings, iconic red energy",
      tier: "Editor Favorite",
      url: "https://www.charlottetilbury.com/us/product/matte-revolution-red-carpet-red",
      buttonText: "Shop Charlotte Tilbury",
    },
    {
      name: "Dior Rouge Dior 999",
      note:
        "One of the most iconic luxury reds — rich, timeless, and beautifully suited to women who want a red that feels unmistakably couture.",
      bestFor: "Timeless elegance, refined statement lips, luxury lovers",
      tier: "Iconic Pick",
      url: "https://www.dior.com/en_us/beauty/products/rouge-dior-Y0356009.html",
      buttonText: "Shop Dior",
    },
    {
      name: "YSL Rouge Pur Couture Le Rouge",
      note:
        "A polished, high-impact red with that unmistakable luxe beauty feel — bold, feminine, and beautifully dressed up.",
      bestFor: "Statement glamour, sleek makeup looks, luxurious finish",
      tier: "Statement Pick",
      url: "https://www.yslbeautyus.com/makeup/lip/lipstick/rouge-pur-couture-caring-satin-lipstick/WW-51083YSL.html?dwvar_WW-51083YSL_color=WW-51083YSL%20R1",
      buttonText: "Shop YSL",
    },
    {
      name: "Chanel Rouge Allure",
      note:
        "If you want a red that feels graceful, classic, and sophisticated, Chanel is one of the strongest splurge directions to consider.",
      bestFor: "Soft luxury, timeless style, elegant everyday glamour",
      tier: "Classic Luxury",
      url: "https://www.chanel.com/us/makeup/p/160990/rouge-allure-luminous-intense-lip-colour/",
      buttonText: "Shop Chanel",
    },
  ];

  const bestForByMood = [
    {
      title: "Best luxury red for timeless glamour",
      text: "Dior 999 is one of the strongest choices if you want a red that feels iconic, polished, and permanently chic.",
    },
    {
      title: "Best luxury red for modern elegance",
      text: "Charlotte Tilbury Red Carpet Red is ideal if you want sophistication with a glamorous, current edge.",
    },
    {
      title: "Best luxury red for bold impact",
      text: "YSL Rouge Pur Couture Le Rouge is a strong direction if you want your red to feel bold, dressed up, and unmistakably luxe.",
    },
    {
      title: "Best luxury red for softer refinement",
      text: "Chanel Rouge Allure is a beautiful choice if you want a red that feels expensive, graceful, and wearable.",
    },
  ];

  const faqs = [
    {
      question: "Are luxury red lipsticks really better?",
      answer:
        "Sometimes yes — especially in texture, finish, undertone refinement, and overall wearing experience. The best luxury reds tend to feel smoother, richer, and more polished.",
    },
    {
      question: "What makes a luxury lipstick worth the splurge?",
      answer:
        "A luxury lipstick feels worth it when the texture is more refined, the color is especially flattering, and the finish gives the lips a noticeably more elegant look.",
    },
    {
      question: "Can a luxury red still work for mature lips?",
      answer:
        "Absolutely. In fact, many luxury formulas are especially appealing on mature lips because they can feel smoother, richer, and more forgiving than stiffer formulas.",
    },
    {
      question: "Should I buy luxury lipstick or several cheaper ones?",
      answer:
        "That depends on your style. If you love red lipstick and want one signature shade that feels special every time you wear it, a luxury red can be very worth it.",
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
                Luxury Reds Worth the Splurge
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                Some red lipsticks do more than add color. They bring richness,
                elegance, and a kind of polish that feels unmistakably elevated.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                This page is for the reds that feel special — the formulas,
                finishes, and iconic shades that can turn a lipstick into a true
                signature.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#editors-picks"
                  className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
                >
                  See luxury picks
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
                  Iconic luxury reds
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Elevated finishes
                </span>
                <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                  Signature lipstick energy
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/90 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)]">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4 md:p-5">
                <img
                  src="/luxury-reds-worth-the-splurge.png"
                  alt="Luxury red lipstick editorial image"
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
                Why splurge
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What makes a luxury red feel different?
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                {luxuryReasons.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                What to look for
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                What makes a luxury lipstick worth the money?
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {whatMakesItWorthIt.map((item) => (
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
                Luxury reds worth exploring
              </h2>

              <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#5f4949] md:text-base">
                These are strong starting points if you want a red lipstick that
                feels richer, more polished, and more indulgent than an ordinary
                everyday formula.
              </p>

              <div className="mt-8 space-y-5">
                {luxuryPicks.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.75rem] border border-[#eee0da] bg-[#fffaf6] p-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#2d1e1e] md:text-2xl">
                          {item.name}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#5f4949] md:text-[15px]">
                          {item.note}
                        </p>

                        <p className="mt-4 text-sm text-[#6f5555]">
                          Best for: {item.bestFor}
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
                            product_tier: item.tier,
                            page_context: "luxury_reds",
                            destination_url: item.url,
                          });
                        }
                      }}
                    >
                      {item.buttonText}
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-6 text-[#8a7272]">
                Some links on this page may later become affiliate links, which
                means RedLipsticks.com may earn a commission at no extra cost to
                you.
              </p>
            </section>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_18px_46px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Best by mood
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Which luxury red should you start with?
              </h2>

              <div className="mt-8 space-y-5">
                {bestForByMood.map((item) => (
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
                Common questions about luxury red lipstick
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
                A luxury red is worth it when it makes you feel unmistakably
                polished.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                The best splurge lipstick is not just more expensive. It feels
                more graceful, more refined, and more like a signature.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                Dior 999 and Charlotte Tilbury Red Carpet Red are among the
                strongest places to start if you want a luxury red that feels
                iconic, polished, and worth the splurge.
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
                Luxury note
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The best splurge lipstick is not always the boldest one. It is
                the one that makes the lips and the entire face look more
                beautifully composed.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Keep exploring
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/best-red-lipsticks-under-15"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Best Reds Under $15 →
                </Link>
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
                A beautiful luxury red does more than color the lips. It gives
                the whole face an unmistakable sense of finish.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}