import ProductBanner from "../components/products/ProductHero";
import ProductCategories from "../components/products/ProductCategories";
import ProductGrid from "../components/products/ProductGrid";
import ContactExpert from "../components/products/ContactExpert";
import HeroCtaBanner from "../components/layout/HeroCtaBanner";

import { fetchProductsPage } from "@/lib/fetchProductsPage";
import { fetchProducts } from "@/lib/fetchProducts";
import ProductHero from "../components/products/ProductHero";

async function getProductsPage() {
  const response = await fetchProductsPage();
  console.log("products page-->", response);
  return response?.data ?? { pageBuilder: [] };
}

async function getProducts() {
  const response = await fetchProducts();
  return response?.data ?? [];
}

export default async function ProductsPage() {
  const page = await getProductsPage();
  const products = await getProducts();

  return (
    <main>
      {page.pageBuilder.map((block: any) => {
        switch (block.__component) {
          case "blocks.product-hero":
            return <ProductHero key={block.id} data={block} />;

          case "blocks.product-categories":
            return (
              <ProductCategories
                key={`product-category-${block.id}`}
                data={block}
              />
            );

          case "blocks.products-grid":
            return (
              <ProductGrid
                key={`${block.__component}-${block.id}`}
                data={block}
              />
            );

          case "blocks.contact-expert":
            return <ContactExpert key={block.id} data={block} />;

          case "blocks.hero-cta-banner":
            return <HeroCtaBanner key={block.id} data={block} />;

          default:
            return null;
        }
      })}
    </main>
  );
}
