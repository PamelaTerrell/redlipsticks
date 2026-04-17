export default function App() {
  const featuredGuides = [
    {
      title: "Best Red Lipsticks for Women Over 40",
      description:
        "Elegant, flattering reds that brighten the face without feeling harsh.",
    },
    {
      title: "Blue-Red vs Orange-Red",
      description:
        "A simple guide to undertones so you can find the red that loves you back.",
    },
    {
      title: "Long-Wearing Reds That Stay Beautiful",
      description:
        "Comfortable formulas and polished finishes that last through real life.",
    },
  ];

  const shopPicks = [
    "Classic blue-red for bright smiles",
    "Soft deep red for everyday elegance",
    "Budget-friendly statement red",
    "Creamy satin red for mature lips",
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d1e1e]">
      <section className="relative overflow-hidden border-b border-[#ead9d2] bg-gradient-to-b from-[#fffdf9] via-[#faf7f2] to-[#f8f0eb]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-[#d8b3b3]/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-16 h-72 w-72 rounded-full bg-[#c7a76c]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#9f102d]">
              RedLipsticks.com
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#2d1e1e] md:text-6xl lg:text-7xl">
              Find the red that changes everything.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b4343] md:text-xl">
              Confidence, glamour, and flattering lipstick guidance for women who
              want elegance that feels modern, wearable, and unforgettable.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#7b6060]">
              Red Lipsticks blends beauty, undertone guidance, age-aware product
              picks, and polished style inspiration so finding your signature red
              feels exciting instead of overwhelming.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#guides"
                className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
              >
                Explore Guides
              </a>
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full border border-[#d9c2b7] bg-white/75 px-7 py-3.5 text-sm font-medium text-[#2d1e1e] transition hover:-translate-y-0.5 hover:border-[#c7a76c] hover:bg-white"
              >
                Shop the Look
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6f5555]">
              <span className="rounded-full border border-[#ead9d2] bg-white/70 px-4 py-2">
                Beauty guides
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-white/70 px-4 py-2">
                Shade education
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-white/70 px-4 py-2">
                Product picks
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-white/70 px-4 py-2">
                Confidence & style
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#ead9d2] bg-white/80 p-5 shadow-[0_24px_70px_rgba(64,34,34,0.08)] backdrop-blur">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-6 md:p-7">
                <div className="rounded-[1.5rem] border border-white/60 bg-white/65 p-6 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f102d]">
                    Featured theme
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2d1e1e]">
                    The signature red edit
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[#6a5050]">
                    Curated lipstick recommendations, flattering undertone notes,
                    and styling ideas designed to help you choose a red that feels
                    elevated, not intimidating.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {shopPicks.map((pick) => (
                      <div
                        key={pick}
                        className="flex items-center gap-3 rounded-2xl border border-[#eedfda] bg-white/75 px-4 py-3"
                      >
                        <span className="h-3 w-3 rounded-full bg-[#9f102d] shadow-[0_0_0_6px_rgba(159,16,45,0.08)]" />
                        <span className="text-sm text-[#4f3a3a]">{pick}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#2d1e1e] px-5 py-4 text-[#f8eee7]">
                    <p className="text-sm font-medium">Coming soon</p>
                    <p className="mt-1 text-sm leading-6 text-[#ead6d0]">
                      Personality quiz: Which red lipstick was made for you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16"
        id="guides"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9f102d]">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Beauty guidance with an editorial feel
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#6f5555]">
            Build the site around searchable guides, flattering recommendations,
            and confidence-driven content that can later support affiliate links,
            email signups, and curated product edits.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-[1.75rem] border border-[#ead9d2] bg-white p-7 shadow-[0_14px_40px_rgba(64,34,34,0.05)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Guide
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2d1e1e]">
                {guide.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6f5555]">
                {guide.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex text-sm font-medium text-[#9f102d] hover:text-[#7f0c21]"
              >
                Read guide →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#ead9d2] bg-[#fffaf6]" id="shop">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9f102d]">
              Monetization path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Ready for affiliate links, product edits, and quizzes
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5555]">
              This first version positions the brand as elegant and useful.
              That gives you room to publish lipstick guides, comparison pages,
              and curated recommendations without the site feeling cluttered or
              overly salesy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Best reds under $15",
              "Luxury reds worth the splurge",
              "Lip liners that elevate every red",
              "The most flattering reds for warm undertones",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#ead9d2] bg-white px-5 py-5 text-sm text-[#4f3a3a] shadow-[0_12px_30px_rgba(64,34,34,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] px-8 py-10 text-[#f7ece6] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b67f]">
            Email list idea
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Get the guide: 7 red lipsticks that make you look instantly more polished.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#ead6d0]">
                A future freebie that can help you start building an audience while
                keeping the brand useful, elegant, and easy to monetize.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-[240px] rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-[#d7c4bf] focus:outline-none"
              />
              <button className="rounded-full bg-[#d9b67f] px-6 py-3.5 text-sm font-medium text-[#2d1e1e] transition hover:brightness-105">
                Join the List
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}