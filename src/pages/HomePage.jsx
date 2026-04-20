import { Link } from "react-router";

export default function HomePage() {
  const year = new Date().getFullYear();

  const featuredGuides = [
    {
      title: "Best Red Lipsticks for Women Over 40",
      description:
        "Elegant, flattering reds that brighten the face without feeling harsh.",
      to: "/best-red-lipsticks-over-40",
      live: true,
    },
    {
      title: "Blue-Red vs Orange-Red",
      description:
        "A simple guide to undertones so you can find the red that loves you back.",
      to: "/blue-red-vs-orange-red",
      live: true,
    },
    {
      title: "Long-Wearing Reds That Stay Beautiful",
      description:
        "Comfortable formulas and polished finishes that last through real life.",
      live: false,
    },
  ];

  const undertoneGuides = [
    {
      title: "Warm Skin Tone Guide",
      description:
        "Golden, peachy, and sunlit undertones often shine in earthy clothing palettes, gold jewelry, and orange-red lip colors.",
      to: "/warm-skin-tone-colors",
      palette: ["Camel", "Ivory", "Olive", "Terracotta", "Gold"],
    },
    {
      title: "Cool Skin Tone Guide",
      description:
        "Pink, rosy, and blue-based undertones are often flattered by jewel tones, silver jewelry, and blue-red lip colors.",
      to: "/cool-skin-tone-colors",
      palette: ["Berry", "Emerald", "Navy", "Icy Pink", "Silver"],
    },
    {
      title: "Neutral Skin Tone Guide",
      description:
        "Balanced undertones can often wear both warm and cool shades beautifully, with flexibility across reds, clothing, and metals.",
      to: "/neutral-skin-tone-colors",
      palette: ["Rose", "Soft White", "Taupe", "Teal", "Mixed Metals"],
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#ead9d2] bg-gradient-to-b from-[#fffdf9] via-[#faf7f2] to-[#f8f0eb]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-[#d8b3b3]/30 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-72 w-72 rounded-full bg-[#c7a76c]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-6 md:px-10 lg:px-16">
          <header className="flex items-center justify-between border-b border-[#ead9d2]/80 pb-4">
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-[0.22em] text-[#9f102d] transition hover:opacity-70"
            >
              RedLipsticks.com
            </Link>

            <nav className="hidden gap-8 text-sm text-[#6b5252] md:flex">
              <a href="#guides" className="transition hover:text-[#9f102d]">
                Guides
              </a>
              <a href="#undertones" className="transition hover:text-[#9f102d]">
                Undertones
              </a>
              <a href="#shop" className="transition hover:text-[#9f102d]">
                Shop
              </a>
              <a href="#email" className="transition hover:text-[#9f102d]">
                Join
              </a>
            </nav>
          </header>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          {/* LEFT */}
          <div>
            <img
              src="/kiss.png"
              alt="Red Lipsticks logo"
              className="mb-8 h-auto w-40 drop-shadow-[0_18px_40px_rgba(159,16,45,0.15)] md:w-52"
            />

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#9f102d]">
              Beauty · Color · Confidence
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-[#2d1e1e] md:text-6xl lg:text-7xl">
              Find the red that changes everything.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b4343] md:text-2xl md:leading-9">
              Elegant beauty and color guidance for women who want glamour that
              feels polished, flattering, and beautifully grown.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#7b6060] md:text-lg">
              Discover refined red lipstick edits, undertone guidance,
              flattering color palettes, jewelry suggestions, and
              confidence-driven beauty inspiration designed to make personal
              style feel luxurious instead of overwhelming.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#guides"
                className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.22)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
              >
                Explore the Edit
              </a>

              <a
                href="#undertones"
                className="inline-flex items-center justify-center rounded-full border border-[#d9c2b7] bg-white/80 px-7 py-3.5 text-sm font-medium text-[#2d1e1e] shadow-[0_10px_28px_rgba(64,34,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#c7a76c] hover:bg-white"
              >
                Find Your Undertone
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-[#6f5555]">
              <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                Flattering shade guides
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                Clothing color palettes
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-white/75 px-4 py-2">
                Jewelry & undertone guidance
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="rounded-[2.25rem] border border-[#ead9d2] bg-white/85 p-5 shadow-[0_26px_72px_rgba(64,34,34,0.08)] backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#f9e3e3] via-[#fff7f6] to-[#f4e7da] p-6 md:p-8">
                <div className="rounded-[1.75rem] border border-white/60 bg-white/70 p-6 shadow-inner md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9f102d]">
                    The editorial edit
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2d1e1e] md:text-4xl">
                    A more polished kind of red.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-[#6a5050]">
                    Curated lipstick recommendations, undertone guidance,
                    flattering wardrobe colors, and jewelry suggestions designed
                    to help you build a more elevated signature style.
                  </p>

                  <div className="mt-7 grid gap-3">
                    {shopPicks.map((pick) => (
                      <div
                        key={pick}
                        className="flex items-center gap-3 rounded-[1.25rem] border border-[#eedfda] bg-white/80 px-4 py-3.5"
                      >
                        <span className="h-3 w-3 rounded-full bg-[#9f102d] shadow-[0_0_0_6px_rgba(159,16,45,0.08)]" />
                        <span className="text-sm text-[#4f3a3a]">{pick}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[1.5rem] bg-[#2d1e1e] px-5 py-5 text-[#f8eee7] shadow-[0_16px_34px_rgba(64,34,34,0.16)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d9b67f]">
                      Coming soon
                    </p>
                    <p className="mt-3 text-base font-medium leading-7">
                      Personality quiz: Which red lipstick and color palette were
                      made for you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20"
        id="guides"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
              Start Here
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Beauty guidance with an editorial feel
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#6f5555]">
            Build the brand around searchable guides, flattering
            recommendations, and confidence-driven content that can later
            support affiliate links, email signups, and curated product edits.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_18px_46px_rgba(64,34,34,0.05)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                Guide
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#2d1e1e]">
                {guide.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6f5555]">
                {guide.description}
              </p>

              {guide.live ? (
                <Link
                  to={guide.to}
                  className="mt-7 inline-flex text-sm font-medium text-[#9f102d] hover:text-[#7f0c21]"
                >
                  Read guide →
                </Link>
              ) : (
                <span className="mt-7 inline-flex text-sm font-medium text-[#b38b8b]">
                  Coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* UNDERTONES */}
      <section
        className="border-y border-[#ead9d2] bg-[#fffaf6]"
        id="undertones"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
                Find Your Undertone
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Warm, cool, or neutral — discover the colors that flatter you
                most
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#6f5555]">
              These guides go beyond lipstick alone. Explore the clothing
              colors, jewelry metals, and red lipstick tones that work
              beautifully with your natural undertone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {undertoneGuides.map((guide) => (
              <article
                key={guide.title}
                className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_18px_46px_rgba(64,34,34,0.05)] transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
                  Undertone Guide
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#2d1e1e]">
                  {guide.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6f5555]">
                  {guide.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.palette.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-3 py-1.5 text-xs text-[#6f5555]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  to={guide.to}
                  className="mt-7 inline-flex text-sm font-medium text-[#9f102d] hover:text-[#7f0c21]"
                >
                  Explore guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-16 lg:py-18">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
              Monetization Path
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ready for affiliate links, product edits, and quizzes
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#6f5555]">
              This version positions the brand as elegant and useful. It gives
              you room to publish lipstick guides, undertone articles,
              comparison pages, jewelry pairings, and curated recommendations
              without the site feeling cluttered or overly salesy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Best reds under $15",
              "Luxury reds worth the splurge",
              "Lip liners that elevate every red",
              "Most flattering reds for warm undertones",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-[#ead9d2] bg-white px-5 py-5 text-sm text-[#4f3a3a] shadow-[0_12px_30px_rgba(64,34,34,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20"
        id="email"
      >
        <div className="rounded-[2.25rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] px-8 py-10 text-[#f7ece6] shadow-[0_22px_55px_rgba(64,34,34,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d9b67f]">
            Join the List
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Get the guide: 7 red lipsticks that instantly make you look more
                polished.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#ead6d0]">
                A future freebie that can help you grow an audience while
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

      {/* FOOTER */}
      <footer className="border-t border-[#ead9d2] bg-[#fffaf6]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center md:px-10 lg:px-16">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/kiss.png"
              alt="Red Lipsticks logo"
              className="h-auto w-14 opacity-95"
            />

            <p className="text-sm tracking-[0.06em] text-[#6f5555]">
              © {year} RedLipsticks.com. All rights reserved.
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-[#9f102d]">
              Created by{" "}
              <a
                href="https://pamelajterrell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-70"
              >
                PamelaJTerrell.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}