import { Link } from "react-router";
import PageLayout from "../components/PageLayout";

export default function TeethWhiterReds() {
  const lipstickPicks = [
    {
      name: "Blue-based classic red",
      reason:
        "The most reliable family for making teeth appear brighter because cooler undertones visually contrast yellow tones.",
      bestFor: "Classic glamour, cool undertones, timeless looks",
    },
    {
      name: "Cherry red",
      reason:
        "A vivid cherry red can feel fresh, bright, and smile-enhancing without being too deep or too dramatic.",
      bestFor: "Day-to-night polish, lively color, brighter complexions",
    },
    {
      name: "Cranberry red",
      reason:
        "A slightly deeper cool red that still brightens the smile while feeling sophisticated and refined.",
      bestFor: "Elegant everyday wear, cooler seasons, polished makeup",
    },
    {
      name: "Berry-red",
      reason:
        "Berry-based reds often create a whiter-looking smile while feeling a bit softer and more wearable than a stark classic red.",
      bestFor: "Those who want a gentler version of a brightening red",
    },
    {
      name: "Cool deep red",
      reason:
        "A deeper blue-based red can look luxurious and dramatic while still keeping the smile looking cleaner and brighter.",
      bestFor: "Evening looks, statement makeup, rich glamour",
    },
  ];

  const avoidNotes = [
    "Very orange-red lipsticks can sometimes make teeth appear less white.",
    "Warm tomato reds may be beautiful, but they do not usually create the same brightening effect on the smile as cooler reds.",
    "Extremely neon warm shades can exaggerate yellow tones rather than contrast them.",
  ];

  const quickSigns = [
    "If a red looks slightly berry, cherry, wine, or blue-based, it is more likely to brighten the smile.",
    "If a red looks obviously orange, coral-heavy, or tomato-warm, it is less likely to make teeth look whiter.",
    "Satin and cream finishes often look more elegant and forgiving than very dry matte formulas.",
    "Lip liner can help create a cleaner, more polished finish, which also makes the overall look feel brighter.",
  ];

  const productPicks = [
    {
      name: "MAC Ruby Woo",
      note: "A legendary vivid blue-red matte with a classic teeth-brightening effect.",
      tier: "Prestige",
      retailer: "MAC",
      link: "https://www.maccosmetics.com/product/13854/52593/products/makeup/lips/lipstick/retro-matte-lipstick",
    },
    {
      name: "Dior Rouge Dior 999",
      note: "A luxury iconic red worth checking first if you want a polished classic.",
      tier: "Luxury",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760",
    },
    {
      name: "NARS Dragon Girl",
      note: "A cool bright red that gives a crisp, lively finish.",
      tier: "Prestige",
      retailer: "Sephora",
      link: "https://www.sephora.com/product/powermatte-lipstick-dragon-girl-0-8-gr-P508342",
    },
    {
      name: "Revlon Cherries in the Snow",
      note: "A classic affordable berry-red with cool undertones and vintage glamour.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/super-lustrous-lipstick-xlsImpprod2940211?sku=1741444",
    },
    {
      name: "Maybelline SuperStay Matte Ink in Pioneer",
      note: "A bold classic red with long wear and a strong brightening look.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/superstay-matte-ink-liquid-lipstick-xlsImpprod16211185?pr_rd_page=3&sku=2537824",
    },
    {
      name: "L'Oréal Colour Riche True Red",
      note: "A creamy satin option if you want something classic and easier to wear.",
      tier: "Drugstore",
      retailer: "Ulta",
      link: "https://www.ulta.com/p/colour-riche-original-satin-lipstick-2681?sku=2117582",
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
                Red Lipsticks That Make Teeth Look Whiter
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
                The reds that make teeth look whiter are usually not the warmest
                ones. They are the reds with cooler undertones — the shades that
                create contrast, brightness, and polish.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6f5555] md:text-lg">
                If you have ever wondered why some red lipsticks make your smile
                look cleaner and brighter while others do not, the answer is
                often undertone. The right red can make an immediate visual
                difference.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/85 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)] backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-4 md:p-5">
                <img
                  src="/teeth-whiter-red-lipsticks.png"
                  alt="Beauty image for red lipsticks that make teeth look whiter"
                  className="w-full rounded-[1.6rem] border border-white/70 object-cover shadow-[0_18px_40px_rgba(64,34,34,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 lg:px-16 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <article className="space-y-8">
            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Why this works
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Why some red lipsticks make teeth look brighter
              </h2>

              <div className="mt-6 space-y-6 text-[15px] leading-8 text-[#5f4949] md:text-base">
                <p>
                  Red lipstick does not actually whiten teeth, but it can create
                  a visual effect that makes the smile look brighter. Cooler
                  reds, especially blue-based reds, tend to contrast yellow
                  tones more effectively.
                </p>
                <p>
                  That contrast makes the teeth appear cleaner and whiter by
                  comparison. Warmer reds, especially orange-leaning ones, often
                  do the opposite and can bring out warmth in the teeth.
                </p>
                <p>
                  This is why a lipstick can look beautiful in the tube but feel
                  completely different once it is on the face. Undertone matters
                  just as much as color depth.
                </p>
              </div>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                The edit
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Red lipstick families worth knowing
              </h2>

              <div className="mt-8 space-y-5">
                {lipstickPicks.map((lipstick) => (
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
                What to avoid
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                Red tones that usually do not brighten the smile
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {avoidNotes.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-white/95 p-8 shadow-[0_20px_55px_rgba(64,34,34,0.05)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Quick guide
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                How to spot a brightening red faster
              </h2>

              <ul className="mt-8 space-y-5 text-[15px] leading-8 text-[#5f4949]">
                {quickSigns.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#9f102d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2.25rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] p-8 text-[#f8eee7] shadow-[0_20px_55px_rgba(64,34,34,0.14)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b67f]">
                Final thought
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                The best brightening red usually leans cool, not orange.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ead6d0] md:text-[15px]">
                If your goal is a smile that looks cleaner, brighter, and more
                polished, begin with blue-based reds, cherry reds, berry reds,
                and cool deep reds before reaching for orange-reds.
              </p>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Quick takeaway
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The red lipsticks that most often make teeth look whiter are
                blue-based reds, cherry reds, berry reds, and cooler deep reds.
              </p>
            </div>

            <section className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Editor&apos;s Picks
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#2d1e1e]">
                Real products to explore
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                These are strong starting points if you want reds that lean
                cooler, brighter, and more smile-enhancing.
              </p>

              <div className="mt-6 space-y-5">
                {productPicks.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1.5rem] border border-[#eee0da] bg-[#fffaf6] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(64,34,34,0.05)]"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#9f102d]/10 px-3 py-1 text-xs font-medium text-[#9f102d]">
                          {item.tier}
                        </span>
                        <span className="rounded-full bg-[#efe4dc] px-3 py-1 text-xs font-medium text-[#6a5050]">
                          {item.retailer}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-[#2d1e1e]">
                        {item.name}
                      </h4>

                      <p className="text-sm leading-7 text-[#5f4949]">
                        {item.note}
                      </p>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="mt-1 inline-flex w-fit rounded-full bg-[#9f102d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#890d26]"
                        onClick={() => {
                          if (window.gtag) {
                            window.gtag("event", "product_click", {
                              product_name: item.name,
                              retailer: item.retailer,
                              page_context: "teeth_whiter_reds",
                            });
                          }
                        }}
                      >
                        View Pick
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_16px_40px_rgba(64,34,34,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                Related reading
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  to="/blue-red-vs-orange-red"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Blue-Red vs Orange-Red →
                </Link>
                <Link
                  to="/cool-skin-tone-colors"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Cool Skin Tone Guide →
                </Link>
                <Link
                  to="/best-red-lipsticks-over-40"
                  className="block text-[#9f102d] transition hover:opacity-70"
                >
                  Best Red Lipsticks Over 40 →
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-br from-[#fffdf9] to-[#f7efe9] p-7 shadow-[0_16px_40px_rgba(64,34,34,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Signature note
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5f4949]">
                The most flattering brightening red is not necessarily the
                brightest red. It is the one whose undertone makes the entire
                smile look cleaner and more luminous.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}