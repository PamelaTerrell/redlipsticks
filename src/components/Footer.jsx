export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
  );
}