import { Link } from "react-router";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9d2] bg-[#fffaf6]/92 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
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

        {/* DESKTOP NAV */}
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

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full border border-[#ead9d2] bg-white/90 p-3 text-[#9f102d] shadow-[0_8px_24px_rgba(64,34,34,0.06)] transition hover:bg-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1">
            <span
              className={`block h-[2px] w-5 rounded bg-current transition ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded bg-current transition ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#ead9d2] bg-[#fffaf6]/98 px-6 py-5 shadow-[0_18px_40px_rgba(64,34,34,0.08)] backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Home
            </Link>

            <Link
              to="/warm-skin-tone-colors"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Warm Skin Tones
            </Link>

            <Link
              to="/cool-skin-tone-colors"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Cool Skin Tones
            </Link>

            <Link
              to="/neutral-skin-tone-colors"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Neutral Skin Tones
            </Link>

            <Link
              to="/best-red-lipsticks-over-40"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Best Reds Over 40
            </Link>

            <Link
              to="/blue-red-vs-orange-red"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Blue-Red vs Orange-Red
            </Link>

            <Link
              to="/red-lipsticks-that-make-teeth-look-whiter"
              onClick={closeMenu}
              className="rounded-[1.25rem] border border-[#f0e2db] bg-white px-4 py-3 text-sm font-medium text-[#2d1e1e] transition hover:border-[#d9c2b7] hover:text-[#9f102d]"
            >
              Teeth-Whitening Reds
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}