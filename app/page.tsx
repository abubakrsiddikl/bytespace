// import { BrandLogos } from "@/components/BrandLogos";
// import { HeroSection } from "@/components/HeroSection";
// import { Navbar } from "@/components/Navbar";

import { HeroSection } from "@/components/HeroSection";
import { PartnerLogos } from "@/components/PartnerLogos";


// export default function HomePage() {
//   return (
//     <main>
//       <div className="relative">
//         <Navbar />
//         <HeroSection />
//       </div>

//       <BrandLogos />
//     </main>
//   );
// }



// Home page: hero + partner logos strip
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
    </main>
  );
}
