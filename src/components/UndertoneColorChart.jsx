export default function UndertoneColorChart({
  eyebrow = "Color Chart",
  title,
  description,
  accent = "#9f102d",
  groups,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
      <div className="max-w-3xl">
        <p
          className="text-xs font-semibold uppercase tracking-[0.34em]"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
          {title}
        </h2>

        <p className="mt-5 text-base leading-8 text-[#6f5555]">
          {description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.category}
            className="rounded-[2rem] border border-[#ead9d2] bg-white/95 p-7 shadow-[0_18px_46px_rgba(64,34,34,0.05)]"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: accent }}
            >
              {group.category}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {group.colors.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className="mx-auto h-16 w-16 rounded-full border border-black/5 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="mt-3 text-sm font-medium text-[#2d1e1e]">
                    {color.name}
                  </p>
                  <p className="text-xs text-[#8b7474]">{color.hex}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}