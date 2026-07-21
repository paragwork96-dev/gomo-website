import HeroBanner from "./components/layout/HeroBanner";
import StartWithUs from "./components/layout/StartWithUs";
import { fetchAPI } from "@/lib/fetchApi";
import StatsRow from "./components/layout/StatsRow";
import BrandLogoGrid from "./components/layout/BrandLogoGrid";
import EnableBusiness from "./components/layout/EnableBusiness";
import WhyChooseUs from "./components/layout/WhyChooseUs";
import ContentCarousel from "./components/layout/CarouselContent";
import ImageCardGrid from "./components/layout/ImageCardGrid";
import HeroCtaBanner from "./components/layout/HeroCtaBanner";

async function getHomepage() {
  const response = await fetchAPI("/api/homepage");

  return response?.data ?? { pageBuilder: [] };
}

export default async function Home() {
  const homepage = await getHomepage();

  return (
    <main>
      {homepage.pageBuilder.map((block: any, index: any) => {
        switch (block.__component) {
          case "blocks.hero-banner":
            return (
              <HeroBanner
                key={`${block.__component}-${block.id}-${index}`}
                data={block}
              />
            );

          case "blocks.start-with-us":
            return (
              <StartWithUs
                key={`${block.__component}-${block.id}-${index}`}
                data={block}
              />
            );

          case "blocks.stats-row":
            return (
              <StatsRow
                key={`${block.__component}-${block.id}-${index}`}
                data={block}
              />
            );

          case "blocks.brand-logo-grid":
            return (
              <BrandLogoGrid
                key={`${block.__component}-${block.id}-${index}`}
                data={block}
              />
            );

          case "blocks.enable-business":
            return (
              <EnableBusiness
                key={`${block.__component}-${block.id}-${index}`}
                data={block}
              />
            );

          case "blocks.why-choose-us":
            return (
              <WhyChooseUs key={`${block.__component}-${index}`} data={block} />
            );

          case "blocks.content-carousel":
            return (
              <ContentCarousel
                key={`${block.__component}-${index}`}
                data={block}
              />
            );

          case "blocks.image-card-grid":
            return (
              <ImageCardGrid
                key={`${block.__component}-${index}`}
                data={block}
              />
            );

          case "blocks.hero-cta-banner":
            return (
              <HeroCtaBanner
                key={`${block.__component}-${index}`}
                data={block}
              />
            );

          default:
            return null;
        }
      })}
    </main>
  );
}
