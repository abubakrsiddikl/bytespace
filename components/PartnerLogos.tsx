import Image from "next/image";
import { PARTNER_LOGOS } from "./partners";

// Light strip with partner brand names below the hero
export function PartnerLogos() {
  return (
    <section className="bg-slate-100 py-8">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
        {PARTNER_LOGOS.map((brand, index) => (
          <li
            key={`${brand}-${index}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-400"
          >
            {/* <span className="h-4 w-4 rounded-full bg-slate-300" /> */}

            <Image src={brand.src} alt={brand.name} width={16} height={16} />
            {brand.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
