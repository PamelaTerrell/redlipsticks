import { Link } from "react-router";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9d2] bg-[#fffaf6]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/kiss.png"
            alt="Red Lipsticks logo"
            className="h-auto w-12 opacity-95 md:w-14"
          />

          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9f102d]">
              RedLipsticks.com
            </p>
            <p className="text-sm text-[#6f5555]">
              Signature Reds & Color Confidence
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#6f5555] md:flex">
          <Link to="/" className="transition hover:text-[#9f102d]">
            Home
          </Link>
          <Link
            to="/warm-skin-tone-colors"
            className="transition hover:text-[#9f102d]"
          >
            Warm
          </Link>
          <Link
            to="/cool-skin-tone-colors"
            className="transition hover:text-[#9f102d]"
          >
            Cool
          </Link>
          <Link
            to="/neutral-skin-tone-colors"
            className="transition hover:text-[#9f102d]"
          >
            Neutral
          </Link>
          <Link
            to="/best-red-lipsticks-over-40"
            className="transition hover:text-[#9f102d]"
          >
            Over 40
          </Link>
        </nav>
      </div>
    </header>
  );
}