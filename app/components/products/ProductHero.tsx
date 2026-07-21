import Link from "next/link";
import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type ProductHeroProps = {
  data: {
    id: number;
    heading: string;
    description: string;

    cta?: {
      label: string;
      url: string;
      variant: "primary" | "secondary" | "outline" | "icon";
    };

    brandLogos?: {
      id: number;
      logo: {
        url: string;
        alternativeText?: string;
      };
      altText: string;
    }[];
  };
};

export default function ProductHero({ data }: ProductHeroProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 rounded-3xl  p-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 font-display text-5xl text-stone-900">
              {data.heading}
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-stone-700">
              {data.description}
            </p>

            {data.cta && (
              <Link
                href={data.cta.url}
                className="inline-flex w-fit rounded-full bg-[#18332f] px-7 py-3 text-white"
              >
                {data.cta.label}
              </Link>
            )}
          </div>

          {/* Right Logos */}
          {data.brandLogos && data.brandLogos.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {data.brandLogos.map((item) => (
                <div
                  key={item.id}
                  className="flex h-20 items-center justify-center rounded border border-stone-300"
                >
                  <img
                    src={`${STRAPI_URL}${item.logo.url}`}
                    alt={item.altText}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
