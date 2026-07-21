import Image from "next/image";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type Props = {
  product: {
    title: string;
    subTitle: string;

    productImage: {
      url: string;
      alternativeText?: string;
    };

    requestQouteCta?: {
      label: string;
      url: string;
    };

    readMoreCta?: {
      label: string;
      url: string;
    };
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        {product.productImage?.url && (
          <img
            src={`${STRAPI_URL}${product.productImage.url}`}
            alt={product.productImage.alternativeText || product.title}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}

      <div className="space-y-5 p-8">
        <h3 className="font-display text-3xl font-semibold text-[#1E2E31]">
          {product.title}
        </h3>

        <p className="leading-7 text-stone-600">{product.subTitle}</p>

        <div className="flex flex-col text-center gap-4 pt-2">
          {product.requestQouteCta && (
            <Link
              href={product.requestQouteCta.url}
              className="rounded-full bg-[#1E2E31] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {product.requestQouteCta.label}
            </Link>
          )}

          {product.readMoreCta && (
            <Link
              href={product.readMoreCta.url}
              className="rounded-full border border-[#1E2E31] px-6 py-3 text-sm font-medium text-[#1E2E31] transition hover:bg-[#1E2E31] hover:text-white"
            >
              {product.readMoreCta.label}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
