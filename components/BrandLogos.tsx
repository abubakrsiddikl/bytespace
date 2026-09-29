const brands = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export function BrandLogos() {
  return (
    <section className="border-t border-gray-100 bg-white py-7">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 sm:gap-x-16">
        {brands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex items-center gap-2 text-xs font-medium text-gray-400"
          >
            <span className="h-3 w-3 rounded-full bg-gray-400/70" />
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}