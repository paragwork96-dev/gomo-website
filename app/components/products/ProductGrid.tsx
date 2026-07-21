import ProductCard from "./ProductCard";

type Props = {
  data: {
    productCard: any[];
  };
};

export default function ProductGrid({ data }: Props) {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.productCard?.map((card, index) => (
            <ProductCard key={`${card.title}-${index}`} product={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
