import { Link } from "react-router";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function HomePage() {
  const featuredGuide = {
    title: "Red Lipsticks That Make Teeth Look Whiter",
    description:
      "The cool-toned reds, cherry shades, and berry reds that make the smile look brighter.",
    to: "/red-lipsticks-that-make-teeth-look-whiter",
    image: "/a_clean_glossy_beauty_infographic_promotional_g.png",
  };

  const secondaryGuides = [
    {
      title: "Best Red Lipsticks for Women Over 40",
      description:
        "Elegant, flattering reds that brighten the face without feeling harsh.",
      to: "/best-red-lipsticks-over-40",
    },
    {
      title: "Best Red Lipsticks for Mature Lips",
      description:
        "Creamy, satin, and refined red directions that flatter mature lips beautifully.",
      to: "/best-red-lipsticks-for-mature-lips",
    },
    {
      title: "Blue-Red vs Orange-Red",
      description:
        "A simple guide to undertones so you can find the red that loves you back.",
      to: "/blue-red-vs-orange-red",
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

  const editorialNotes = [
    "Undertone guidance that makes beauty choices easier",
    "Interactive quiz experience for personalized lipstick direction",
    "Elegant visual branding that feels polished and memorable",
  ];

  const exploreMore = [
    {
      title: "Best Reds Under $15",
      text: "Affordable red lipsticks that still look polished, flattering, and more expensive than their price tag.",
      to: "/best-red-lipsticks-under-15",
      badge: "Budget Favorite",
    },
    {
      title: "Luxury Reds Worth the Splurge",
      text: "Iconic red lipsticks with elevated formulas, richer finishes, and true statement glamour.",
      to: "/luxury-red-lipsticks-worth-the-splurge",
      badge: "Luxury Edit",
    },
    {
      title: "Best Reds for Mature Lips",
      text: "Creamy, satin, and softer red directions that feel smoother, richer, and more elegant on mature lips.",
      to: "/best-red-lipsticks-for-mature-lips",
      badge: "Most Popular",
    },
    {
      title: "The Best Reds by Undertone",
      text: "Find the red lipstick direction that works beautifully with warm, cool, or neutral coloring.",
      to: "/best-red-lipsticks-by-undertone",
      badge: "Must Read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d1e1e]">
      <SiteHeader />

      {/* HERO */}
      <section className="border-b border-[#ead9d2] bg-[#16080b]">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-10 lg:px-16 lg:py-14">
          <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#130507] shadow-[0_32px_90px_rgba(45,30,30,0.28)] md:relative md:rounded-[2.6rem]">
            <img
              src="/home-page-hero.png"
              alt="Elegant red lipstick beauty portrait"
              className="mx-auto h-auto w-full object-contain md:max-h-[760px]"
            />

            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#130507]/100 via-[#130507]/90 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-[#130507]/60 via-transparent to-transparent md:block" />

            <div className="relative bg-[#130507] px-6 py-8 md:absolute md:inset-0 md:flex md:items-center md:bg-transparent md:px-0 md:py-0">
              <div className="max-w-xl md:px-12 lg:px-16">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d9b67f] md:text-xs md:tracking-[0.36em]">
                  Beauty · Color · Confidence
                </p>

                <h1 className="text-4xl font-semibold leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.65)] sm:text-5xl md:text-7xl">
                  Find the red that changes everything.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#f7e7e1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-lg md:text-2xl md:leading-9">
                  Elegant beauty and color guidance for women who want glamour
                  that feels polished and refined.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
                  <Link
                    to="/lipstick-match-quiz"
                    className="inline-flex items-center justify-center rounded-full bg-[#9f102d] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_42px_rgba(159,16,45,0.38)] transition hover:bg-[#b71538]"
                  >
                    Find Your Perfect Red →
                  </Link>

                  <a
                    href="#undertones"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Find Your Undertone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL STRIP */}
      <section className="border-b border-[#ead9d2] bg-[#fffaf6]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:px-10 lg:grid-cols-3 lg:px-16">
          {editorialNotes.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#ead9d2] bg-white/90 px-5 py-5 text-sm leading-7 text-[#5f4949] shadow-[0_12px_28px_rgba(64,34,34,0.04)]"
            >
              {item}
            </div>
          ))}
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
            Build your signature look with searchable guides, flattering
            recommendations, undertone direction, and confidence-driven beauty
            content.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[2.2rem] border border-[#ead9d2] bg-white/95 p-6 shadow-[0_20px_55px_rgba(64,34,34,0.06)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a76c]">
              Featured Guide
            </p>

            <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2d1e1e] md:text-4xl">
              {featuredGuide.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f5555]">
              {featuredGuide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-4 py-2 text-sm text-[#6f5555]">
                Blue-based reds
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-4 py-2 text-sm text-[#6f5555]">
                Cherry & berry tones
              </span>
              <span className="rounded-full border border-[#ead9d2] bg-[#faf7f2] px-4 py-2 text-sm text-[#6f5555]">
                Smile-brightening picks
              </span>
            </div>

            <Link
              to={featuredGuide.to}
              className="mt-8 block overflow-hidden rounded-[1.8rem] border border-[#ead9d2] bg-[#faf7f2] transition hover:-translate-y-0.5"
            >
              <img
                src={featuredGuide.image}
                alt="Red lipsticks that make teeth look whiter"
                className="w-full object-contain"
              />
            </Link>

            <Link
              to={featuredGuide.to}
              className="mt-8 inline-flex rounded-full bg-[#9f102d] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_34px_rgba(159,16,45,0.18)] transition hover:-translate-y-0.5 hover:bg-[#890d26]"
            >
              Read featured guide
            </Link>
          </article>

          <div className="grid gap-6">
            {secondaryGuides.map((guide) => (
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

                <Link
                  to={guide.to}
                  className="mt-7 inline-flex text-sm font-medium text-[#9f102d] hover:text-[#7f0c21]"
                >
                  Read guide →
                </Link>
              </article>
            ))}
          </div>
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

      {/* EXPLORE MORE */}
      <section id="shop" className="border-y border-[#ead9d2] bg-[#fffaf6]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#9f102d]">
                Explore More
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                More polished red lipstick guidance is on the way
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6f5555]">
                RedLipsticks.com is designed to help you discover the shades,
                finishes, and color directions that feel most flattering on you.
                As the site grows, you’ll be able to explore curated lipstick
                edits, undertone-focused recommendations, and polished product
                roundups that make shopping smarter and easier.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5555]">
                Think of it as your elegant guide to finding the reds that feel
                more refined, more wearable, and more beautifully in harmony
                with your features.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {exploreMore.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group block rounded-[1.6rem] border border-[#ead9d2] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(64,34,34,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#d9c2b7] hover:shadow-[0_18px_40px_rgba(64,34,34,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold tracking-[-0.01em] text-[#2d1e1e]">
                      {item.title}
                    </p>

                    {item.badge ? (
                      <span className="shrink-0 rounded-full bg-[#9f102d]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9f102d]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#6f5555]">
                    {item.text}
                  </p>

                  <p className="mt-5 inline-flex items-center text-sm font-medium text-[#9f102d] transition group-hover:translate-x-0.5">
                    Explore guide →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ CTA */}
      <section
        className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20"
        id="quiz"
      >
        <div className="rounded-[2.25rem] border border-[#ead9d2] bg-gradient-to-r from-[#2d1e1e] to-[#4a2c30] px-8 py-10 text-[#f7ece6] shadow-[0_22px_55px_rgba(64,34,34,0.14)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d9b67f]">
            Lipstick Match Quiz
          </p>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Take the quiz and discover which red lipstick was made for you.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#ead6d0]">
                Explore the interactive quiz designed to help you find your
                undertone, your most flattering color palette, and the red
                lipstick direction that feels most beautifully aligned with your
                coloring and style.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/lipstick-match-quiz"
                className="inline-flex items-center justify-center rounded-full bg-[#d9b67f] px-6 py-3.5 text-sm font-medium text-[#2d1e1e] transition hover:brightness-105"
              >
                Take the Quiz
              </Link>

              <Link
                to="/blue-red-vs-orange-red"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Learn About Undertones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}